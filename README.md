# Backend API - Alkosto E-commerce

Backend desarrollado con Django 5.2.7 y Django REST Framework 3.16.1 para el proyecto de e-commerce Alkosto.

## 🚀 Características

- ✅ API RESTful completa
- ✅ Autenticación JWT (JSON Web Tokens)
- ✅ CRUD de productos, categorías y marcas
- ✅ Sistema de carrito de compras
- ✅ Gestión de órdenes
- ✅ Búsqueda y filtrado de productos
- ✅ Panel de administración de Django
- ✅ CORS configurado para frontend
- ✅ Base de datos PostgreSQL
- ✅ Colección de Postman incluida

## 📋 Requisitos

- Python 3.13.2
- pip 25.2

## 🛠️ Instalación

### Prerrequisitos
- Python 3.13.2+
- PostgreSQL 12+ instalado y corriendo
- pip 25.2+

### 1. Configurar PostgreSQL

```powershell
# Conectar a PostgreSQL
psql -U postgres

# Crear base de datos (si aún no existe)
CREATE DATABASE alkosto;

# Salir
\q
```

**Credenciales configuradas:**
- **Database**: alkosto
- **Usuario**: postgres
- **Contraseña**: 0
- **Host**: localhost
- **Puerto**: 5432

### 2. Activar entorno virtual

```powershell
cd backend_alkosto
.\venv\Scripts\Activate.ps1
```

### 3. Instalar dependencias

```powershell
pip install -r requirements.txt
```

### 4. Realizar migraciones a PostgreSQL

```powershell
python manage.py migrate
```

### 5. Poblar base de datos con datos de prueba

```powershell
python manage.py populate_db
```

Esto creará:
- ✅ 7 categorías (Celulares, Gaming, Televisores, etc.)
- ✅ 8 marcas (Apple, Samsung, Google, Sony, etc.)
- ✅ 15 productos con especificaciones completas

### 6. Crear superusuario (admin)

```powershell
python manage.py createsuperuser
```

### 7. Iniciar servidor de desarrollo

```powershell
python manage.py runserver
```

El servidor estará disponible en: `http://127.0.0.1:8000/`
Panel de administración: `http://127.0.0.1:8000/admin/`

## � Colección de Postman

### Importar colección

1. **Abrir Postman**

2. **Importar la colección**
   - Click en "Import" (esquina superior izquierda)
   - Seleccionar el archivo: `Alkosto_API_Collection.postman_collection.json`
   - Click en "Import"

3. **Importar el entorno**
   - Click en "Import"
   - Seleccionar el archivo: `Alkosto_API_Environment.postman_environment.json`
   - Click en "Import"
   - Activar el entorno "Alkosto API" desde el selector de entornos (esquina superior derecha)

### Uso de la colección

La colección incluye **35+ endpoints** organizados en 6 carpetas:

1. **🔐 Authentication** (5 endpoints)
   - Registro de usuarios
   - Login
   - Refresh token
   - Obtener perfil
   - Actualizar perfil

2. **📂 Categorías** (4 endpoints)
   - Listar categorías
   - Crear categoría
   - Ver detalle de categoría
   - Productos por categoría

3. **🏷️ Marcas** (2 endpoints)
   - Listar marcas
   - Productos por marca

4. **📦 Productos** (14 endpoints)
   - Listar todos los productos (con paginación)
   - Buscar productos
   - Filtrar por categoría
   - Filtrar por marca
   - Filtrar por rango de precio
   - Productos destacados
   - Productos en oferta
   - Y más...

5. **🛒 Carrito** (5 endpoints)
   - Ver carrito
   - Agregar producto
   - Actualizar cantidad
   - Eliminar producto
   - Vaciar carrito

6. **📋 Órdenes** (3 endpoints)
   - Crear orden desde carrito
   - Listar mis órdenes
   - Ver detalle de orden

### Autenticación automática

La colección está configurada para:
- ✅ Guardar automáticamente el token JWT al hacer login
- ✅ Usar el token en todos los endpoints protegidos
- ✅ Renovar el token automáticamente cuando expire

### Variables de entorno

- `base_url`: http://127.0.0.1:8000/api
- `access_token`: Se actualiza automáticamente al hacer login
- `refresh_token`: Se actualiza automáticamente al hacer login

## �📚 Documentación de Endpoints

### Base URL
```
http://127.0.0.1:8000/api/
```

### 🔐 Autenticación

#### Registro de usuario
```http
POST /api/auth/register/
Content-Type: application/json

{
  "username": "usuario123",
  "email": "usuario@ejemplo.com",
  "password": "contraseña123",
  "password2": "contraseña123",
  "first_name": "Juan",
  "last_name": "Pérez"
}
```

#### Login (Obtener tokens)
```http
POST /api/auth/login/
Content-Type: application/json

{
  "username": "usuario123",
  "password": "contraseña123"
}

Respuesta:
{
  "access": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "refresh": "eyJ0eXAiOiJKV1QiLCJhbGc..."
}
```

#### Refrescar token
```http
POST /api/auth/refresh/
Content-Type: application/json

{
  "refresh": "eyJ0eXAiOiJKV1QiLCJhbGc..."
}
```

#### Obtener usuario actual
```http
GET /api/user/me/
Authorization: Bearer {access_token}
```

### 📦 Categorías

#### Listar todas las categorías
```http
GET /api/categories/
```

#### Obtener una categoría específica
```http
GET /api/categories/{slug}/
```

#### Obtener productos de una categoría
```http
GET /api/categories/{slug}/products/
GET /api/categories/{slug}/products/?min_price=1000000&max_price=5000000
GET /api/categories/{slug}/products/?brand=apple&ordering=-price
```

### 🏷️ Marcas

#### Listar todas las marcas
```http
GET /api/brands/
```

#### Obtener una marca específica
```http
GET /api/brands/{slug}/
```

### 🛍️ Productos

#### Listar productos
```http
GET /api/products/
GET /api/products/?page=1
GET /api/products/?category=celulares
GET /api/products/?brand=apple
GET /api/products/?min_price=1000000&max_price=5000000
GET /api/products/?min_rating=4.5
GET /api/products/?featured=true
GET /api/products/?ordering=-price
```

Parámetros de ordenamiento:
- `price`: Precio ascendente
- `-price`: Precio descendente
- `rating`: Calificación ascendente
- `-rating`: Calificación descendente
- `name`: Nombre alfabético
- `-created_at`: Más recientes primero

#### Obtener un producto específico
```http
GET /api/products/{slug}/
```

#### Buscar productos
```http
GET /api/products/search/?q=iphone
GET /api/products/search/?q=samsung&category=celulares
```

#### Productos destacados
```http
GET /api/products/featured/
```

### 🛒 Carrito de Compras

**Nota:** Todos los endpoints de carrito requieren autenticación.

#### Obtener carrito actual
```http
GET /api/cart/current/
Authorization: Bearer {access_token}
```

#### Agregar producto al carrito
```http
POST /api/cart/add_item/
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "product_id": 1,
  "quantity": 2
}
```

#### Actualizar cantidad de un item
```http
POST /api/cart/update_item/
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "item_id": 1,
  "quantity": 5
}
```

#### Eliminar item del carrito
```http
POST /api/cart/remove_item/
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "item_id": 1
}
```

#### Vaciar carrito
```http
POST /api/cart/clear/
Authorization: Bearer {access_token}
```

### 📋 Órdenes

#### Listar órdenes del usuario
```http
GET /api/orders/
Authorization: Bearer {access_token}
```

#### Crear orden desde el carrito
```http
POST /api/orders/
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "shipping_address": "Calle 123 #45-67 Apto 801",
  "shipping_city": "Bogotá",
  "shipping_department": "Cundinamarca",
  "shipping_postal_code": "110111",
  "notes": "Favor llamar antes de entregar"
}
```

#### Obtener detalle de una orden
```http
GET /api/orders/{id}/
Authorization: Bearer {access_token}
```

## 🔧 Panel de Administración

Accede al panel de administración de Django en:
```
http://127.0.0.1:8000/admin/
```

Desde aquí puedes:
- Gestionar usuarios
- Crear/editar/eliminar productos
- Gestionar categorías y marcas
- Ver órdenes
- Administrar carritos

## 📊 Estructura de la Base de Datos

### Modelos principales

- **CustomUser**: Usuario personalizado con campos adicionales
- **Category**: Categorías de productos
- **Brand**: Marcas de productos
- **Product**: Productos con precios, stock, calificaciones
- **ProductImage**: Imágenes adicionales de productos
- **Cart**: Carritos de compra
- **CartItem**: Items dentro del carrito
- **Order**: Órdenes de compra
- **OrderItem**: Items de cada orden

## 🌐 CORS

El backend está configurado para aceptar peticiones desde:
- `http://localhost:3000`
- `http://localhost:5500`
- `http://127.0.0.1:5500`
- `http://localhost:8080`

Para agregar más orígenes, edita `CORS_ALLOWED_ORIGINS` en `settings.py`.

## 🧪 Pruebas con cURL

### Obtener productos
```bash
curl http://127.0.0.1:8000/api/products/
```

### Login
```bash
curl -X POST http://127.0.0.1:8000/api/auth/login/ \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'
```

### Obtener carrito (con autenticación)
```bash
curl http://127.0.0.1:8000/api/cart/current/ \
  -H "Authorization: Bearer TU_TOKEN_AQUI"
```

## 📝 Variables de Entorno

Para producción, se recomienda usar variables de entorno para:
- `SECRET_KEY`
- `DEBUG`
- `ALLOWED_HOSTS`
- Configuración de base de datos
- CORS origins

## 🔄 Comandos Útiles

### Crear migraciones
```powershell
python manage.py makemigrations
```

### Aplicar migraciones
```powershell
python manage.py migrate
```

### Crear superusuario
```powershell
python manage.py createsuperuser
```

### Poblar base de datos
```powershell
python manage.py populate_db
```

### Shell interactivo
```powershell
python manage.py shell
```

## 📦 Dependencias Principales

- Django 5.2.7
- djangorestframework 3.16.1
- djangorestframework-simplejwt 5.5.1
- django-cors-headers 4.9.0
- Pillow 12.0.0

## 🚀 Próximas Mejoras

- [ ] Paginación personalizada
- [ ] Filtros avanzados
- [ ] Sistema de reseñas de productos
- [ ] Wishlist (lista de deseos)
- [ ] Sistema de cupones de descuento
- [ ] Integración con pasarelas de pago
- [ ] Notificaciones por email
- [ ] PostgreSQL para producción
- [ ] Docker configuration
- [ ] Tests unitarios y de integración

## 🤝 Contribución

Este es un proyecto académico para la materia de Ingeniería de Software.

## 📄 Licencia

Proyecto académico - UTP 2025
