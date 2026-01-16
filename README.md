# Árbol de la Ciberseguridad 🌳🛡️

Una visualización interactiva en 3D de las ramas, dominios y herramientas del mundo de la ciberseguridad.

## 🚀 Características

- **Visualización 3D Interactiva**: Explora las diferentes ramas de la ciberseguridad en un entorno tridimensional dinámico.
- **Jerarquía de 3 Niveles**: Categorías Principales > Sub-ramas/Dominios > Herramientas/Activos.
- **Sistema de Autenticación**: Registro de usuarios con validación de seguridad y soporte para email.
- **Recuperación de Contraseña**: Flujo completo de recuperación mediante correo electrónico (SMTP).
- **Niveles de Información**: Filtra el contenido según tu nivel de experiencia (Básico, Normal, Pro).
- **Búsqueda Avanzada**: Localiza herramientas específicas y navega directamente hacia ellas.
- **Chatbot Integrado**: Consulta dudas sobre herramientas y conceptos directamente a la IA del sistema.

## 🛠️ Tecnologías

- **Frontend**: HTML5, Vanilla CSS, JavaScript (D3.js para la visualización).
- **Backend**: Django (Python).
- **Base de Datos**: SQLite3 (desarrollo).
- **Seguridad**: Validación de complejidad de contraseñas y unicidad de email.

## 📦 Instalación y Configuración

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repo.git
   cd arbol_de_ciberseguridad
   ```

2. **Crear un entorno virtual**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # En Windows: venv\Scripts\activate
   ```

3. **Instalar dependencias**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Configurar variables de entorno**:
   - Crea una carpeta llamada `env/` en la raíz.
   - Copia el contenido de `env/.env.example` a un nuevo archivo `env/.env`.
   - Edita `env/.env` con tus credenciales reales (SECRET_KEY, Email SMTP, etc.).

5. **Realizar migraciones**:
   ```bash
   python manage.py migrate
   ```

6. **Iniciar el servidor**:
   ```bash
   python manage.py runserver
   ```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
