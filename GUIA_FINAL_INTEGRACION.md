# GUIA FINAL DE INTEGRACION BACKEND-FRONTEND

## ESTADO ACTUAL

### BACKEND (Django REST API)
- Servidor corriendo en: http://127.0.0.1:8000
- Base de datos PostgreSQL con 15 productos
- 7 categorias creadas
- 8 marcas creadas
- API REST completa funcionando
- Autenticacion JWT implementada

### FRONTEND
- **INTEGRADO**: Pagina de Celulares (index-celulares.html)
- **PENDIENTE**: Resto de categorias

## COMO FUNCIONA LA INTEGRACION

### 1. ARQUITECTURA

```
Frontend (HTML + JS)
     |
     v
universal-category-loader.js  (Detecta categoria y carga productos)
     |
     v
product-service.js  (Servicios de productos)
     |
     v
http-service.js  (Peticiones HTTP)
     |
     v
Backend Django API  (http://127.0.0.1:8000/api)
```

### 2. FLUJO DE CARGA

1. Usuario abre index-celulares.html
2. Se ejecuta universal-category-loader.js
3. Detecta que es la categoria "celular"
4. Hace peticion GET /api/categories/ para obtener categorias
5. Busca la categoria que coincida con "celular"
6. Hace peticion GET /api/categories/{id}/products/
7. Transforma los productos al formato del frontend
8. Inyecta productos en window.celularesProductos
9. Llama a renderizarProductos() del codigo original
10. Productos se muestran en la pagina

### 3. INTEGRACION DE CARRITO

Cuando usuario hace click en "Agregar al carrito":
1. Se llama agregarAlCarritoAPI(productoId)
2. Se hace peticion POST /api/cart/add_item/
3. Backend agrega producto al carrito
4. Se muestra notificacion de exito

## COMO INTEGRAR MAS CATEGORIAS

### OPCION 1: Automatica (Recomendada)

Ejecuta el script PowerShell:

```powershell
cd proyecto_alkosto
.\integrar-categorias.ps1
```

Esto integrara automaticamente todas las categorias.

### OPCION 2: Manual

Para cada categoria (ej: gaming):

#### Paso 1: Editar HTML

Abre `index-gaming.html` y reemplaza la seccion de scripts antes de `</body>`:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="js/data/products-database.js"></script>
<script src="js/components/global-search.js"></script>
<script src="js/components/global-cart.js"></script>

<script type="module">
  import universalLoader from './js/universal-category-loader.js';
  
  window.addEventListener('DOMContentLoaded', async () => {
    await universalLoader.inicializar();
  });
</script>

<script src="gaming.js"></script>
</body>
```

#### Paso 2: Editar JS

Abre `gaming.js` y busca donde se crea el boton "Agregar al carrito":

```javascript
// BUSCAR:
<button class="add-to-cart-btn">Agregar al carrito</button>

// REEMPLAZAR CON:
<button class="add-to-cart-btn" onclick="agregarAlCarritoAPI(${producto.id})">Agregar al carrito</button>
```

#### Paso 3: Actualizar Mapeo (si es necesario)

Si la categoria no carga productos, edita `js/config/category-mapping.js`:

```javascript
'gaming': {
  slug: 'gaming',  // Este debe coincidir con el slug en la base de datos
  arrayName: 'gamingProductos',  // Nombre del array global
  searchTerms: ['gaming', 'consola', 'videojuego']
}
```

## AGREGAR PRODUCTOS EN EL BACKEND

### Opcion 1: Admin de Django

1. Abre http://127.0.0.1:8000/admin/
2. Inicia sesion con superusuario
3. Ve a "Products" > "Add Product"
4. Llena el formulario
5. Guarda

### Opcion 2: Script Python

Edita `backend_alkosto/api/management/commands/populate_db.py` y agrega mas productos.

Luego ejecuta:
```powershell
cd backend_alkosto
.\venv\Scripts\python.exe manage.py populate_db
```

## PROBLEMAS COMUNES

### 1. No cargan productos

**Sintoma**: La pagina muestra "Cargando..." indefinidamente

**Solucion**:
- Verificar que el servidor Django este corriendo
- Abrir Consola del navegador (F12) y ver errores
- Verificar que la categoria exista en la base de datos

**Verificar categorias**:
```powershell
curl http://127.0.0.1:8000/api/categories/
```

### 2. Error de CORS

**Sintoma**: Error "CORS policy" en consola

**Solucion**:
- Abrir `backend_alkosto/alkosto_api/settings.py`
- Agregar tu origen en CORS_ALLOWED_ORIGINS:
```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://localhost:5500",
    "http://127.0.0.1:5500",
    "http://tu-puerto-aqui",
]
```

### 3. Productos no coinciden

**Sintoma**: Se cargan productos pero de otra categoria

**Solucion**:
- Verificar el slug en `category-mapping.js`
- Verificar los slugs en la base de datos:
```powershell
curl http://127.0.0.1:8000/api/categories/
```
- Actualizar el mapping si es necesario

### 4. Botones no funcionan

**Sintoma**: Click en "Agregar al carrito" no hace nada

**Solucion**:
- Verificar que el boton tenga `onclick="agregarAlCarritoAPI(${producto.id})"`
- Abrir consola y verificar errores
- Verificar que el servidor este corriendo

## TESTING

### Test Manual

1. **Iniciar Backend**:
```powershell
cd backend_alkosto
.\venv\Scripts\Activate.ps1
python manage.py runserver
```

2. **Abrir Frontend**:
- Usa Live Server en VS Code
- O abre directamente el HTML en el navegador

3. **Verificar en Consola**:
```javascript
// Ver productos cargados
console.log(window.celularesProductos);

// Ver si el loader funciona
console.log(window.universalLoader);

// Probar agregar al carrito
agregarAlCarritoAPI(1);
```

### Test con Postman

1. Importa `Alkosto_API_Collection.postman_collection.json`
2. Importa `Alkosto_API_Environment.postman_environment.json`
3. Prueba los endpoints

## PROXIMOS PASOS

### Corto Plazo
1. Integrar todas las categorias
2. Crear pagina de login/registro
3. Integrar carrito completo

### Mediano Plazo
1. Implementar checkout
2. Crear perfil de usuario
3. Historial de ordenes

### Largo Plazo
1. Dashboard de admin personalizado
2. Sistema de wishlist
3. Sistema de reviews

## RECURSOS

### Documentacion
- Django REST Framework: https://www.django-rest-framework.org/
- JWT: https://jwt.io/

### Archivos Importantes
- `INTEGRACION.md`: Documentacion tecnica detallada
- `backend_alkosto/README.md`: Documentacion del backend
- `backend_alkosto/GUIA_RAPIDA.md`: Guia rapida del backend

### Endpoints Principales
- Productos: GET /api/products/
- Categorias: GET /api/categories/
- Marcas: GET /api/brands/
- Carrito: POST /api/cart/add_item/
- Login: POST /api/auth/login/

## CONTACTO Y SOPORTE

Si tienes problemas:
1. Revisa la consola del navegador (F12)
2. Revisa los logs del servidor Django
3. Verifica que todos los servicios esten corriendo
4. Consulta INTEGRACION.md para detalles tecnicos

---

INTEGRACION BACKEND-FRONTEND COMPLETADA
CELULARES: FUNCIONANDO
RESTO: LISTO PARA INTEGRAR CON SCRIPT AUTOMATICO

Fecha: 16 de Octubre, 2025
Proyecto: Alkosto E-commerce Full Stack
