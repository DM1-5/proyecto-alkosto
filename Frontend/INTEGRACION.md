# INTEGRACION BACKEND-FRONTEND ALKOSTO

## RESUMEN DE INTEGRACION

Se ha integrado exitosamente el backend Django REST API con el frontend del e-commerce Alkosto.

### ARCHIVOS CREADOS

1. **js/config/api-config.js**
   - Configuracion de endpoints y URLs base de la API
   - Base URL: http://127.0.0.1:8000/api

2. **js/services/http-service.js**
   - Servicio HTTP para realizar peticiones (GET, POST, PUT, DELETE)
   - Manejo de autenticacion JWT
   - Manejo de errores y respuestas

3. **js/services/auth-service.js**
   - Servicio de autenticacion de usuarios
   - Login, registro, logout
   - Manejo de tokens JWT

4. **js/services/product-service.js**
   - Servicio para productos
   - Obtener productos por categoria, marca, busqueda
   - Transformacion de datos del API al formato del frontend

5. **js/services/cart-service.js**
   - Servicio del carrito de compras
   - Agregar, actualizar, eliminar productos
   - Soporte para carrito local (sin login) y carrito del servidor

6. **js/services/api-adapter.js**
   - Adaptador que transforma productos del API al formato del frontend
   - Manejo de notificaciones

7. **js/config/category-mapping.js**
   - Mapeo de categorias del frontend a slugs de la API

8. **js/universal-category-loader.js**
   - Cargador universal que detecta automaticamente la categoria
   - Carga productos desde la API
   - Inyecta productos en los arrays globales existentes

### CATEGORIAS INTEGRADAS

Actualmente integrada:
- **Celulares** (index-celulares.html)

Listas para integrar con el mismo patron:
- Gaming
- Televisores
- Computadores
- Audio
- Electrohogar
- Smartwatch

### COMO FUNCIONA LA INTEGRACION

1. **Deteccion Automatica**
   - El script universal detecta la categoria basandose en el nombre del archivo HTML
   - Ejemplo: index-celulares.html  => busca categoria "celular"

2. **Carga de Productos**
   - Se obtienen las categorias del API
   - Se filtran productos de la categoria correspondiente
   - Se transforman al formato esperado por el frontend

3. **Inyeccion de Datos**
   - Los productos se inyectan en el array global (ej: window.celularesProductos)
   - Se actualizan los productos filtrados
   - Se llaman las funciones de renderizado existentes

4. **Integracion de Carrito**
   - Botones "Agregar al carrito" llaman a agregarAlCarritoAPI()
   - Se envia la peticion al backend
   - Se muestra notificacion de exito/error

### FORMATO DE RESPUESTA DEL API

#### Productos (GET /api/products/)
```json
{
  "count": 15,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 1,
      "name": "iPhone 15 Pro Max",
      "slug": "iphone-15-pro-max",
      "sku": "ALK-IPHONE-15-PRO-MAX-CEL",
      "category_name": "Celulares",
      "brand_name": "Apple",
      "price": "5499000",
      "original_price": "6199000",
      "discount_percentage": 11,
      "rating": "4.8",
      "reviews_count": 1247,
      "image": "https://images.unsplash.com/...",
      "stock": 45,
      "is_featured": true,
      "tags": ["5g", "ios", "premium", "camara-pro", "titanio"]
    }
  ]
}
```

#### Categorias (GET /api/categories/)
```json
{
  "count": 7,
  "results": [
    {
      "id": 1,
      "name": "Celulares y Smartphones",
      "slug": "celulares-smartphones",
      "description": "...",
      "image": "..."
    }
  ]
}
```

#### Marcas (GET /api/brands/)
```json
{
  "count": 8,
  "results": [
    {
      "id": 1,
      "name": "Apple",
      "slug": "apple",
      "logo": "..."
    }
  ]
}
```

### COMO INTEGRAR OTRAS CATEGORIAS

Para integrar otra categoria (ej: Gaming):

#### Paso 1: Actualizar el HTML
En `index-gaming.html`, antes del cierre de </body>:

```html
<script type="module">
  import universalLoader from './js/universal-category-loader.js';
  
  window.addEventListener('DOMContentLoaded', async () => {
    await universalLoader.inicializar();
  });
</script>

<script src="gaming.js"></script>
```

#### Paso 2: Actualizar el JS
En `gaming.js`, buscar la funcion `crearCardProducto` y cambiar el boton:

```javascript
// ANTES:
<button class="add-to-cart-btn">Agregar al carrito</button>

// DESPUES:
<button class="add-to-cart-btn" onclick="agregarAlCarritoAPI(${producto.id})">Agregar al carrito</button>
```

#### Paso 3: Actualizar category-mapping.js (si es necesario)
Si el slug de la categoria no coincide, agregarlo en `js/config/category-mapping.js`:

```javascript
'gaming': {
  slug: 'gaming',
  arrayName: 'gamingProductos',
  searchTerms: ['gaming', 'consola', 'videojuego']
}
```

### FUNCIONES DISPONIBLES GLOBALMENTE

```javascript
// Agregar producto al carrito
agregarAlCarritoAPI(productoId)

// Cargar productos de una categoria
universalLoader.inicializar()

// Detectar categoria actual
universalLoader.detectCategory()
```

### ESTADO DE INTEGRACION

COMPLETO:
- Sistema de servicios HTTP
- Autenticacion JWT
- Servicio de productos
- Servicio de carrito
- Adaptador de API
- Cargador universal
- Integracion en Celulares

PENDIENTE:
- Integrar categorias restantes (Gaming, Televisores, etc.)
- Pagina de login/registro
- Pagina del carrito
- Proceso de checkout
- Pagina de ordenes
- Busqueda global integrada

### PRUEBAS

#### Verificar servidor Django:
```powershell
cd backend_alkosto
.\venv\Scripts\python.exe manage.py runserver
```

#### Abrir pagina de celulares:
```
http://localhost:5500/index-celulares.html
```
o directamente abriendo el archivo en el navegador

#### Verificar en Consola del Navegador:
```javascript
// Ver productos cargados
console.log(window.celularesProductos);

// Ver configuracion
console.log(window.universalLoader);

// Probar agregar al carrito
agregarAlCarritoAPI(1);
```

### NOTAS IMPORTANTES

1. **CORS**: El backend ya esta configurado para aceptar peticiones desde:
   - http://localhost:3000
   - http://localhost:5500
   - http://localhost:8080
   - http://127.0.0.1:5500

2. **Tokens JWT**: 
   - Access token: valido por 5 horas
   - Refresh token: valido por 7 dias
   - Se guardan en localStorage

3. **Carrito sin Login**:
   - Si no hay sesion, el carrito se guarda en localStorage
   - Al hacer login, se sincroniza con el servidor

4. **Imagenes**:
   - Las imagenes vienen de URLs de Unsplash
   - En produccion, se deberian subir a un CDN

### PROXIMOS PASOS

1. Integrar el resto de categorias usando el mismo patron
2. Crear paginas de autenticacion (login/registro)
3. Integrar la pagina del carrito con el API
4. Implementar el proceso de checkout
5. Crear pagina de perfil de usuario
6. Integrar busqueda global con el API

### SOPORTE

Si hay problemas:
1. Verificar que el servidor Django este corriendo
2. Verificar en Consola del navegador si hay errores
3. Verificar en Terminal de Django si llegan las peticiones
4. Verificar que los puertos coincidan (8000 para Django, 5500 para frontend)

---

INTEGRACION LISTA PARA USAR EN CELULARES
PATRON REPLICABLE PARA OTRAS CATEGORIAS
