# 🚀 Guía Rápida - Backend Alkosto API

## ✅ Estado Actual del Proyecto

- ✅ Django 5.2.7 instalado y configurado
- ✅ PostgreSQL configurado con base de datos `alkosto`
- ✅ 15 productos poblados en la base de datos
- ✅ 7 categorías y 8 marcas creadas
- ✅ API REST completa funcionando
- ✅ Autenticación JWT implementada
- ✅ Colección de Postman lista para usar

## 🎯 Pasos para Iniciar el Proyecto

### 1️⃣ Verificar PostgreSQL

```powershell
# Verificar que PostgreSQL esté corriendo
psql -U postgres -d alkosto -c "SELECT COUNT(*) FROM api_product;"
```

**Resultado esperado:** Debe mostrar `15` productos

### 2️⃣ Activar el Entorno Virtual

```powershell
cd c:\Users\santi\OneDrive\Documentos\UTP\13. SEMESTRE\INGENIERIA DE  SOFTWARE\proyecto_alkosto_full\backend_alkosto
.\venv\Scripts\Activate.ps1
```

### 3️⃣ Iniciar el Servidor

```powershell
python manage.py runserver
```

**URL del servidor:** http://127.0.0.1:8000/

### 4️⃣ Crear Superusuario (Primera vez)

```powershell
python manage.py createsuperuser
```

Ingresa:
- Username: admin (o el que prefieras)
- Email: admin@alkosto.com
- Password: (tu contraseña)

### 5️⃣ Acceder al Panel de Administración

**URL:** http://127.0.0.1:8000/admin/

Desde aquí puedes:
- Ver y editar productos
- Gestionar categorías y marcas
- Ver órdenes de compra
- Administrar usuarios

## 📮 Usar la Colección de Postman

### Importar en Postman

1. **Abrir Postman**

2. **Importar colección:**
   - Click en "Import"
   - Arrastrar el archivo: `Alkosto_API_Collection.postman_collection.json`

3. **Importar entorno:**
   - Click en "Import"
   - Arrastrar el archivo: `Alkosto_API_Environment.postman_environment.json`

4. **Activar entorno:**
   - Selector en esquina superior derecha
   - Elegir "Alkosto API"

### Probar la API

#### 1. Registrar un Usuario
- Carpeta: **Authentication**
- Request: **Register User**
- Click en "Send"

#### 2. Hacer Login
- Carpeta: **Authentication**
- Request: **Login**
- El token se guarda automáticamente ✅

#### 3. Ver Productos
- Carpeta: **Productos**
- Request: **List All Products**
- Click en "Send"

#### 4. Agregar al Carrito
- Carpeta: **Carrito**
- Request: **Add Item to Cart**
- Modificar `product_id` y `quantity`
- Click en "Send"

#### 5. Crear Orden
- Carpeta: **Órdenes**
- Request: **Create Order from Cart**
- Click en "Send"

## 🗄️ Información de la Base de Datos

### Credenciales PostgreSQL

```
Database: alkosto
Usuario: postgres
Contraseña: 0
Host: localhost
Puerto: 5432
```

### Datos Poblados

**Categorías (7):**
- Celulares y Smartphones
- Gaming
- Televisores y Video
- Computadores
- Audio
- Electrohogar
- Deportes

**Marcas (8):**
- Apple
- Samsung
- Google
- Xiaomi
- Sony
- LG
- Lenovo
- Logitech

**Productos (15):**
- iPhone 15 Pro Max
- Samsung Galaxy S24 Ultra
- Google Pixel 8 Pro
- Xiaomi 14
- PlayStation 5
- Nintendo Switch OLED
- Xbox Series X
- TV Samsung QLED 65"
- Y más...

## 🔧 Comandos Útiles

### Ver todos los productos
```powershell
python manage.py shell
>>> from api.models import Product
>>> Product.objects.all().count()
15
```

### Eliminar todos los datos
```powershell
python manage.py flush
```

### Re-poblar la base de datos
```powershell
python manage.py populate_db
```

### Ver logs del servidor
```powershell
python manage.py runserver --verbosity 2
```

### Crear nuevas migraciones (si modificas modelos)
```powershell
python manage.py makemigrations
python manage.py migrate
```

## 📡 Endpoints Principales

### Base URL
```
http://127.0.0.1:8000/api/
```

### Autenticación
- `POST /auth/register/` - Registro
- `POST /auth/login/` - Login
- `POST /auth/refresh/` - Renovar token
- `GET /auth/me/` - Mi perfil

### Productos
- `GET /products/` - Listar productos (paginado)
- `GET /products/{id}/` - Detalle de producto
- `GET /products/search/?q=samsung` - Buscar
- `GET /products/featured/` - Productos destacados
- `GET /products/?category=1` - Filtrar por categoría
- `GET /products/?brand=1` - Filtrar por marca
- `GET /products/?min_price=100&max_price=1000` - Filtrar por precio

### Categorías
- `GET /categories/` - Listar categorías
- `GET /categories/{id}/` - Detalle de categoría
- `GET /categories/{id}/products/` - Productos de una categoría

### Marcas
- `GET /brands/` - Listar marcas
- `GET /brands/{id}/products/` - Productos de una marca

### Carrito (requiere autenticación)
- `GET /cart/` - Ver mi carrito
- `POST /cart/add_item/` - Agregar producto
- `PUT /cart/update_item/` - Actualizar cantidad
- `DELETE /cart/remove_item/` - Eliminar producto
- `DELETE /cart/clear/` - Vaciar carrito

### Órdenes (requiere autenticación)
- `POST /orders/` - Crear orden desde carrito
- `GET /orders/` - Mis órdenes
- `GET /orders/{id}/` - Detalle de orden

## 🔐 Autenticación JWT

### Headers requeridos para endpoints protegidos:

```http
Authorization: Bearer {access_token}
```

### Tokens:
- **Access Token**: Válido por 5 horas
- **Refresh Token**: Válido por 7 días

### Renovar token:
```http
POST /api/auth/refresh/
Content-Type: application/json

{
  "refresh": "{refresh_token}"
}
```

## 🌐 Integrar con Frontend

### Actualizar URLs en el frontend

En `proyecto_alkosto/js/data/products-database.js` o archivos similares, cambiar las URLs de:

```javascript
// Antes (datos estáticos)
const products = [...];

// Después (API real)
const API_BASE_URL = 'http://127.0.0.1:8000/api';

async function fetchProducts() {
  const response = await fetch(`${API_BASE_URL}/products/`);
  const data = await response.json();
  return data.results;
}
```

### Configurar CORS

Ya está configurado en `settings.py` para:
- http://localhost:3000
- http://localhost:5500
- http://localhost:8080
- http://127.0.0.1:5500

Si necesitas otro origen:
```python
# alkosto_api/settings.py
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://tu-nuevo-origen:puerto",
]
```

## 📊 Monitoreo

### Ver actividad en PostgreSQL
```sql
psql -U postgres -d alkosto

-- Ver tablas
\dt

-- Ver productos
SELECT id, name, price, stock FROM api_product;

-- Ver órdenes
SELECT id, user_id, total_price, status, created_at FROM api_order;

-- Ver carritos activos
SELECT c.id, u.username, COUNT(ci.id) as items 
FROM api_cart c 
JOIN api_customuser u ON c.user_id = u.id 
LEFT JOIN api_cartitem ci ON ci.cart_id = c.id 
GROUP BY c.id, u.username;
```

## 🐛 Solución de Problemas

### Error: "Port already in use"
```powershell
# Encontrar proceso usando el puerto 8000
netstat -ano | findstr :8000

# Matar el proceso (reemplazar PID)
taskkill /PID <PID> /F
```

### Error: "Database connection failed"
```powershell
# Verificar que PostgreSQL esté corriendo
pg_isready -U postgres

# Reiniciar PostgreSQL si es necesario
# Buscar "PostgreSQL" en Servicios de Windows y reiniciar
```

### Error: "No module named..."
```powershell
# Reinstalar dependencias
pip install -r requirements.txt
```

### Resetear base de datos
```powershell
# Opción 1: Flush (mantiene estructura)
python manage.py flush

# Opción 2: Recrear desde cero
psql -U postgres
DROP DATABASE alkosto;
CREATE DATABASE alkosto;
\q

python manage.py migrate
python manage.py populate_db
```

## 📈 Próximos Pasos

1. ✅ **Crear superusuario** para acceder al admin
2. ✅ **Importar colección de Postman** para testing
3. ✅ **Probar todos los endpoints** con Postman
4. 🔄 **Integrar frontend** con la API
5. 🔄 **Implementar payments** (próxima feature)
6. 🔄 **Deploy en producción** (Heroku, AWS, Railway, etc.)

## 📞 Contacto y Soporte

- Universidad: UTP
- Semestre: 13
- Materia: Ingeniería de Software
- Proyecto: Alkosto Full Stack

---

**¡El backend está listo para usar!** 🎉

Puedes empezar a hacer requests desde Postman o integrar el frontend ahora mismo.
