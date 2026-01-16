import json
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from django.middleware.csrf import get_token
from django_ratelimit.decorators import ratelimit

@ensure_csrf_cookie
def landing_page(request):
    if request.user.is_authenticated:
        return redirect('tree')
    return render(request, 'web/landing.html')

@ensure_csrf_cookie
def tree_view(request):
    # Context variable to pass to template/JS
    user_level = 2 if request.user.is_authenticated else 0
    return render(request, 'web/index.html', {'user_level': user_level, 'is_tree': True})

from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError

@ratelimit(key='ip', rate='5/m', method='POST', block=False)
def api_register(request):
    if getattr(request, 'limited', False):
        return JsonResponse({'success': False, 'message': 'Demasiados intentos de registro. Inténtalo de nuevo más tarde.'}, status=429)
    
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        email = data.get('email')
        
        if not email:
            return JsonResponse({'success': False, 'message': 'El correo electrónico es obligatorio.'})
        
        if User.objects.filter(username=username).exists():
            return JsonResponse({'success': False, 'message': 'El usuario ya existe.'})
        
        if email and User.objects.filter(email=email).exists():
            return JsonResponse({'success': False, 'message': 'Este correo ya está en uso.'})
        
        # Validate password complexity
        try:
            validate_password(password)
        except ValidationError as e:
            return JsonResponse({'success': False, 'message': 'Contraseña no segura: ' + ' '.join(e.messages)})
        
        try:
            user = User.objects.create_user(username=username, password=password, email=email)
            login(request, user) # Auto login
            return JsonResponse({'success': True, 'message': 'Registro exitoso.'})
        except Exception as e:
            return JsonResponse({'success': False, 'message': str(e)})
            
    return JsonResponse({'success': False, 'message': 'Método no permitido.'}, status=405)

@ratelimit(key='ip', rate='10/m', method='POST', block=False)
def api_login(request):
    if getattr(request, 'limited', False):
        return JsonResponse({'success': False, 'message': 'Demasiados intentos de acceso. Por favor, espera unos minutos.'}, status=429)

    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'success': True, 'message': 'Bienvenido.'})
        else:
            return JsonResponse({'success': False, 'message': 'Usuario o contraseña incorrectos.'})
            
    return JsonResponse({'success': False, 'message': 'Método no permitido.'}, status=405)

def api_logout(request):
    logout(request)
    return redirect('tree')

def get_csrf_token(request):
    return JsonResponse({'csrfToken': get_token(request)})
def error_403(request, exception=None):
    return render(request, 'errors/403.html', status=403)

def error_404(request, exception=None):
    return render(request, 'errors/404.html', status=404)

def error_500(request):
    return render(request, 'errors/500.html', status=500)
