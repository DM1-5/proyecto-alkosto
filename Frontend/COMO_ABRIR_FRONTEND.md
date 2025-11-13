# 🌐 CÓMO ABRIR EL FRONTEND CORRECTAMENTE

## ⚠️ IMPORTANTE

El error 404 en `http://127.0.0.1:8000/` es **NORMAL** porque:
- Django backend (puerto 8000) = **SOLO API REST**
- No sirve archivos HTML, solo responde JSON

---

## ✅ SOLUCIÓN: 3 FORMAS DE ABRIR EL FRONTEND

### **OPCIÓN 1: Live Server (RECOMENDADA)** 🌟

1. Abre VS Code
2. Clic derecho en `index.html`
3. Selecciona **"Open with Live Server"**
4. Se abrirá en: `http://localhost:5500/index.html` o similar

**Ventajas:**
- ✅ Auto-refresh cuando editas código
- ✅ CORS configurado correctamente
- ✅ Simula servidor web real

---

### **OPCIÓN 2: Abrir archivo directamente** 📁

1. Ve a la carpeta: `proyecto_alkosto`
2. Doble clic en `index.html`
3. Se abrirá en: `file:///C:/Users/santi/.../index.html`

**Nota:** Algunos navegadores tienen restricciones CORS con `file://`

---

### **OPCIÓN 3: Usar Python HTTP Server** 🐍

Abre una **NUEVA terminal** (no la del backend):

```powershell
# Navegar a la carpeta del frontend
cd "c:\Users\santi\OneDrive\Documentos\UTP\13. SEMESTRE\INGENIERIA DE  SOFTWARE\proyecto_alkosto_full\proyecto_alkosto"

# Iniciar servidor HTTP simple
python -m http.server 5500
```

Luego abre: `http://localhost:5500/index.html`

---

## 🔍 VERIFICAR QUE TODO FUNCIONA

### 1. Backend (Django) debe estar corriendo:
```
Terminal 1:
http://127.0.0.1:8000  ← API REST (verás error 404 en raíz, pero /api/ funciona)
```

### 2. Frontend debe estar en otro puerto:
```
Terminal 2 (o Live Server):
http://localhost:5500/index.html  ← Tu tienda Alkosto
```

### 3. Probar endpoints de API:
- ✅ http://127.0.0.1:8000/api/products/
- ✅ http://127.0.0.1:8000/api/categories/
- ✅ http://127.0.0.1:8000/admin/

---

## 🎯 FLUJO CORRECTO

```
┌─────────────────────────────────────────────┐
│  Frontend (Puerto 5500 o archivo local)    │
│  http://localhost:5500/index.html          │
│                                             │
│  - index.html                               │
│  - carrito.html                             │
│  - index-celulares.html, etc.               │
└──────────────────┬──────────────────────────┘
                   │
                   │ Hace peticiones AJAX
                   ▼
┌─────────────────────────────────────────────┐
│  Backend Django (Puerto 8000)               │
│  http://127.0.0.1:8000                      │
│                                             │
│  /api/products/     ← JSON                  │
│  /api/auth/login/   ← JSON                  │
│  /api/cart/         ← JSON                  │
│  /admin/            ← Panel Django          │
└─────────────────────────────────────────────┘
```

---

## 🚀 PASO A PASO RÁPIDO

### Terminal 1 - Backend:
```powershell
cd "c:\Users\santi\OneDrive\Documentos\UTP\13. SEMESTRE\INGENIERIA DE  SOFTWARE\proyecto_alkosto_full\backend_alkosto"
.\venv\Scripts\Activate.ps1
python manage.py runserver
```
✅ Backend corriendo en http://127.0.0.1:8000

### Terminal 2 - Frontend (Opción Python):
```powershell
cd "c:\Users\santi\OneDrive\Documentos\UTP\13. SEMESTRE\INGENIERIA DE  SOFTWARE\proyecto_alkosto_full\proyecto_alkosto"
python -m http.server 5500
```
✅ Frontend corriendo en http://localhost:5500

### O simplemente:
**VS Code → Clic derecho en index.html → "Open with Live Server"**

---

## ✅ VERIFICACIÓN

Una vez que abras el frontend correctamente:

1. **Presiona F12** (Consola del navegador)
2. Deberías ver:
```
🚀 Iniciando Alkosto...
🔐 Inicializando GlobalHeader...
✅ GlobalHeader inicializado
🏠 Inicializando página principal...
⭐ Cargando productos destacados...
✅ 15 productos destacados cargados
✅ Alkosto listo
```

3. En la pestaña **Network** (F12 → Network):
```
GET http://127.0.0.1:8000/api/products/featured/  200 OK
```

---

## 🐛 ERRORES COMUNES

### ❌ Error: "No se pudieron cargar productos"
**Solución:** El backend Django no está corriendo
```powershell
cd backend_alkosto
.\venv\Scripts\Activate.ps1
python manage.py runserver
```

### ❌ Error: CORS policy
**Solución:** Abriste el HTML con `file://`. Usa Live Server o Python HTTP Server

### ❌ Error 404 en http://127.0.0.1:8000/
**Solución:** Esto es NORMAL. No abras el backend en el navegador. Abre el FRONTEND.

---

## 📝 RESUMEN

| Lo que NO debes hacer | Lo que SÍ debes hacer |
|-----------------------|------------------------|
| ❌ Abrir http://127.0.0.1:8000/ | ✅ Abrir index.html con Live Server |
| ❌ Esperar ver HTML en Django | ✅ Django solo devuelve JSON (API) |
| ❌ Usar solo un puerto | ✅ Frontend en un puerto, Backend en otro |

---

## 🎉 LISTO

Ahora abre el frontend correctamente y todo funcionará! 🚀
