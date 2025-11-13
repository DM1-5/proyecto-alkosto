# 🚀 INICIO RÁPIDO - Alkosto Full Stack

## PARA EMPEZAR AHORA MISMO

### 1️⃣ Iniciar Backend (Django)

```powershell
# Terminal 1
cd backend_alkosto
.\venv\Scripts\Activate.ps1
python manage.py runserver
```

✅ Backend corriendo en: **http://127.0.0.1:8000**

---

### 2️⃣ Abrir Frontend

**Opción A: Live Server (Recomendado)**
1. Abrir VS Code
2. Clic derecho en `index.html`
3. "Open with Live Server"

**Opción B: Directamente**
- Doble clic en `index.html` o cualquier archivo HTML

---

### 3️⃣ Probar el Sistema

#### ✅ Página Principal
- Abre: `index.html`
- Verás productos destacados cargándose automáticamente
- Presiona F12 para ver logs en consola

#### ✅ Login/Registro
1. Clic en "Mi cuenta" (arriba derecha)
2. Crear cuenta nueva:
   - Nombre: Tu nombre
   - Apellido: Tu apellido
   - Email: tu@email.com
   - Contraseña: mínimo 8 caracteres
3. Automáticamente quedarás logueado

#### ✅ Agregar al Carrito
1. Clic en "Agregar al carrito" en cualquier producto
2. Verás notificación verde
3. El contador en header se actualiza

#### ✅ Ver Carrito
1. Clic en "Mi carrito" (arriba derecha)
2. Verás tus productos
3. Puedes cambiar cantidades o eliminar

#### ✅ Explorar Categorías
Abre cualquiera de estas páginas:
- `index-celulares.html` 📱
- `index-gaming.html` 🎮
- `index-televisores.html` 📺
- `index-computadores.html` 💻
- `index-audio.html` 🔊
- `index-electrohogar.html` 🏠
- `index-smartwatch.html` ⌚
- `index-audifonos.html` 🎧
- `index-deportes.html` ⚽

---

## 🎯 LO QUE FUNCIONA

✅ Sistema completo de autenticación  
✅ Productos cargando desde API  
✅ Carrito funcional (local y servidor)  
✅ 9 categorías integradas  
✅ Búsqueda global  
✅ Contador de carrito en tiempo real  
✅ Notificaciones de acciones  

---

## 🔑 CREDENCIALES

### No hay usuarios por defecto - crea tu cuenta:
1. Clic en "Mi cuenta"
2. "Crear cuenta"
3. Llenar formulario
4. ¡Listo!

### Admin Django (para gestionar productos):
```bash
# Crear superuser (solo primera vez)
cd backend_alkosto
python manage.py createsuperuser

# Luego acceder a:
http://127.0.0.1:8000/admin/
```

---

## 📦 PRODUCTOS DISPONIBLES

El backend tiene **15 productos** en **7 categorías**:

- 📱 Celulares (iPhone 15, Samsung S24, etc.)
- 🎮 Gaming (PS5, Xbox, Nintendo Switch)
- 📺 Televisores (Samsung, LG Smart TV)
- 💻 Computadores (MacBook, Asus ROG)
- 🏠 Electrohogar (Nevera, Lavadora)
- ⌚ Smartwatch (Apple Watch, Galaxy Watch)
- 🔊 Audio (AirPods, Sony, JBL)

---

## 🐛 SOLUCIÓN RÁPIDA DE PROBLEMAS

### ❌ No cargan productos
✅ Verifica que Django esté corriendo  
✅ Revisa consola del navegador (F12)

### ❌ Error CORS
✅ Agrega tu puerto en `backend_alkosto/alkosto_api/settings.py`:
```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5500",  # Tu puerto aquí
]
```

### ❌ Login no funciona
✅ Asegúrate de crear una cuenta primero  
✅ Verifica que Django esté corriendo

---

## 📚 DOCUMENTACIÓN COMPLETA

- `INTEGRACION_COMPLETA.md` - **LEE ESTO** para detalles completos
- `CATEGORIAS_INTEGRADAS.md` - Estado de categorías
- `RESUMEN_EJECUTIVO.md` - Resumen del proyecto
- `backend_alkosto/README.md` - Documentación del API

---

## 🎉 ¡ESO ES TODO!

El sistema está **100% funcional** y listo para usar.

Cualquier duda, revisa la documentación completa en:
📖 `INTEGRACION_COMPLETA.md`

---

**Desarrollado:** 16 de Octubre, 2025  
**Estado:** ✅ PRODUCCIÓN  
**Stack:** Django 5.2.7 + PostgreSQL + HTML5 + JavaScript ES6
