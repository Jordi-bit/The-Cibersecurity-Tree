# Documentación del Proyecto: Árbol de la Ciberseguridad 🌳🛡️

Esta documentación ha sido diseñada para proporcionar una visión clara y profunda del proyecto, orientada tanto a desarrolladores que ven el código por primera vez como a usuarios interesados en la arquitectura del sistema.

---

## 1. Introducción y Propósito
El **Árbol de la Ciberseguridad** es una plataforma educativa e interactiva que utiliza tecnologías modernas de visualización para estructurar el vasto campo de la seguridad informática. Organiza el conocimiento en una jerarquía lógica de ramas, sub-dominios y herramientas específicas, permitiendo al usuario navegar desde conceptos generales hasta recursos técnicos detallados.

---

## 2. Estructura de Directorios y Archivos

A continuación se detalla la función de cada carpeta y archivo principal en la raíz del proyecto:

### 📂 `/config`
Contiene la configuración global del proyecto Django.
- `settings.py`: El archivo de configuración principal (Base de datos, APPs instaladas, Middleware, seguridad, etc.).
- `urls.py`: El enrutador principal que define las rutas hacia las diferentes aplicaciones del proyecto.
- `wsgi.py` / `asgi.py`: Interfaces para el despliegue del servidor en producción.

### 📂 `/web`
Es la aplicación principal de Django donde reside la lógica de negocio.
- `views.py`: Contiene las funciones que procesan las peticiones de los usuarios (login, registro, visualización del árbol).
- `urls.py`: Define las rutas internas de la aplicación (ej: `/api/login`, `/register`).
- `models.py`: (Si se usa) Define la estructura de las tablas en la base de datos.

### 📂 `/templates`
Almacena los archivos HTML que Django renderiza para el usuario.
- **`/web`**:
    - `index.html`: Página principal donde se renderiza el Árbol interactivo.
    - `landing.html`: Página de bienvenida para usuarios no autenticados.
- **`/registration`**: Contiene los formularios para el flujo de gestión de usuarios (Recuperación de contraseña, avisos de bloqueo).
- **`/errors`**: Plantillas personalizadas para errores HTTP (403, 404, 500).

### 📂 `/static`
Contiene los archivos públicos (no dinámicos) necesarios para el frontend.
- **`/css`**: Estilos visuales del sitio.
- **`/js`**:
    - `script.js`: Lógica principal del Árbol (D3.js).
    - `chatbot.js`: Cerebro del asistente virtual.
    - `data_v3.js`: La base de datos de conocimiento del árbol en formato JSON.
    - `knowledge_base.js`: Datos específicos de preguntas y respuestas para el bot.
- **`/assets/images`**: Almacena las imágenes de las ramas y herramientas.

### 📄 Archivos en la Raíz
- `manage.py`: Herramienta de línea de comandos de Django para realizar tareas administrativas (migrar BD, crear superusuario, ejecutar servidor).
- `requirements.txt`: Lista de todas las librerías de Python necesarias para que el proyecto funcione.
- `.gitignore`: Indica a Git qué archivos **no** deben subirse al repositorio (ej: la base de datos local `db.sqlite3`, claves secretas en `.env`, o carpetas temporales).
- `build.sh`: Script automatizado para el despliegue (instala dependencias, aplica migraciones y recolecta archivos estáticos).
- `db.sqlite3`: Base de datos local ligera (por defecto).

---

## 3. Arquitectura del Árbol de Conocimiento
El sistema utiliza una estructura de **tres niveles**:
1. **Nivel 1 (Ramas)**: Áreas fundamentales (Ofensiva, Defensiva, Forense, CTI, Cloud, AppSec, GRC, IAM).
2. **Nivel 2 (Sub-ramas)**: Dominios específicos dentro de cada área (ej: Pentesting Web, Análisis de Malware).
3. **Nivel 3 (Herramientas/Activos)**: Software o técnicas finales (ej: Burp Suite, Nmap, Autopsy).

---

## 4. Conceptos Clave Transmitidos
### ⚔️ Seguridad Ofensiva (Red Team)
Simulación de ataques para encontrar brechas antes que los criminales.
- **Pentesting**: Pruebas de penetración.
- **Explotación**: Uso de debilidades para ganar acceso.

### 🛡️ Seguridad Defensiva (Blue Team)
Protección, detección y respuesta ante incidentes.
- **SOC**: Monitoreo de seguridad.
- **SIEM**: Gestión de eventos e información de seguridad.

### 🔍 Forense Digital
Recolección y análisis de evidencia digital para investigaciones.

### 🧠 Ciberinteligencia
Análisis de amenazas externas para anticiparse a futuros ataques.

---

## 5. Explicación Detallada del Código (Lógica)

### 📂 `config/settings.py` (Resumen)
Se encarga de la seguridad del servidor.
- **Línea 31-34**: Gestiona claves secretas y el modo `DEBUG`.
- **Línea 84-88**: Configura **Axes**, que protege el servidor contra ataques de "Fuerza Bruta" bloqueando IPs tras 5 intentos fallidos.
- **Líneas 91-95**: Implementa **CSP (Content Security Policy)** para evitar que se ejecuten scripts maliciosos de terceros.

### 📂 `web/views.py` (Resumen)
Gestiona la interacción del usuario con el servidor.
- `api_register` / `api_login`: Procesan las credenciales, validan la complejidad de la contraseña y gestionan las sesiones.
- `tree_view`: Determina el nivel de acceso del usuario (`user_level`). Los usuarios logueados ven el nivel 2 (Pro/Completo) y los visitantes el nivel 0 o 1.

### 📂 `static/js/script.js` (Resumen)
Usa la librería **D3.js** para dibujar el árbol.
- `update(source)`: Calcula la posición de cada nodo y dibuja los enlaces.
- `showPopup(d)`: Al hacer clic en una herramienta, busca su información en `data_v3.js` y abre la ventana lateral con detalles, imágenes y enlaces.

---

## 6. Guía de Despliegue y Conversión a PDF

### Despliegue con `build.sh`
Este script realiza 3 pasos críticos:
1. `pip install -r requirements.txt`: Descarga las herramientas de Python.
2. `python manage.py collectstatic`: Prepara los archivos CSS/JS para que el servidor los sirva rápido.
3. `python manage.py migrate`: Crea las tablas necesarias para los usuarios en la base de datos.

### Conversión a PDF
Para obtener esta documentación en PDF con un acabado profesional:
1. Abrir en **VS Code**.
2. Instalar la extensión **"Markdown PDF"**.
3. Clic derecho en cualquier parte del documento y seleccionar `Markdown PDF: Export (pdf)`.
