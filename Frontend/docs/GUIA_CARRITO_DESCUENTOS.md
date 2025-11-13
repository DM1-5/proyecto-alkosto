# 🛒 GUÍA DEL SISTEMA DE CARRITO CON DESCUENTOS

## 📋 Descripción General

Sistema completo de carrito de compras que calcula y muestra detalladamente:
- ✅ Precios originales (sin descuento)
- ✅ Descuentos aplicados por producto
- ✅ Descuentos totales
- ✅ Porcentaje de ahorro
- ✅ Subtotales y totales
- ✅ Cálculo de envío

---

## 🔧 Archivos Modificados

### 1. **js/services/cart-service.js**
**Mejoras implementadas:**

#### Nuevo método: `calcularTotalesCarrito(cart)`
Calcula 4 totales automáticamente:

```javascript
{
  subtotal_sin_descuento: 0,  // Suma de precios originales × cantidad
  total_descuentos: 0,         // Suma de (precio_original - precio_final) × cantidad
  subtotal: 0,                 // Suma de precios finales × cantidad
  porcentaje_ahorro: 0         // (total_descuentos / subtotal_sin_descuento) × 100
}
```

#### Métodos actualizados:
- ✅ `getCart()` - Retorna carrito con totales calculados
- ✅ `getLocalCart()` - Aplica cálculos a carritos locales (usuarios no autenticados)
- ✅ `obtenerCarrito()` - Wrapper compatible con código existente

---

### 2. **js/loaders/cart-page-loader.js**
**Mejoras implementadas:**

#### Constructor actualizado:
```javascript
constructor() {
  this.items = [];
  this.subtotal_sin_descuento = 0;  // NUEVO
  this.total_descuentos = 0;        // NUEVO
  this.subtotal = 0;
  this.porcentaje_ahorro = 0;       // NUEVO
  this.envio = 0;
  this.total = 0;
  this.isLoading = false;
}
```

#### Método `cargarCarrito()`:
- Detecta formato antiguo (array) vs nuevo (objeto con totales)
- Extrae totales calculados del servicio
- Calcula envío: GRATIS si subtotal > $200,000

#### Interfaz del resumen mejorada:
```
┌─────────────────────────────────────┐
│  Resumen del pedido                 │
├─────────────────────────────────────┤
│  Subtotal sin descuento  $150,000   │  (tachado)
│  🏷️ Descuentos aplicados  -$30,000 │  (verde, destacado)
│  😊 ¡Estás ahorrando 20%!           │  (badge verde)
│  Subtotal                $120,000   │  (negrita)
│  Envío                   GRATIS     │  (verde si gratis)
├─────────────────────────────────────┤
│  Total a pagar           $120,000   │  (grande, rojo)
│  🐷 ¡Ahorras $30,000!               │  (badge animado)
└─────────────────────────────────────┘
```

---

### 3. **style.css**
**Nuevos estilos agregados:**

#### Componentes visuales:
- ✅ `.savings-badge` - Badge de ahorros con gradiente verde y animación pulse
- ✅ `.summary-item.text-success` - Fondo verde claro para descuentos
- ✅ `.alert-success` - Alertas con borde verde y degradado
- ✅ `.total-amount` - Total destacado en rojo, grande y negrita
- ✅ `.order-summary` - Mejorado con sticky position

#### Animaciones:
- ✅ `pulse` - Badge de ahorros con efecto pulsante
- ✅ `bounce` - Íconos con rebote suave

---

## 🎯 Flujo de Cálculo

### Ejemplo Práctico:

**Producto 1:**
- Precio Original: $100,000
- Precio Final: $80,000 (20% desc)
- Cantidad: 2

**Producto 2:**
- Precio Original: $50,000
- Precio Final: $50,000 (sin desc)
- Cantidad: 1

**Cálculos:**
```javascript
subtotal_sin_descuento = (100000 × 2) + (50000 × 1) = $250,000
total_descuentos       = ((100000 - 80000) × 2) + 0 = $40,000
subtotal               = (80000 × 2) + (50000 × 1) = $210,000
porcentaje_ahorro      = (40000 / 250000) × 100 = 16%

envio = 210000 > 200000 ? 0 : 15000 = $0 (GRATIS)
total = 210000 + 0 = $210,000
```

---

## 📊 Estructura de Datos

### Objeto Cart Completo:
```javascript
{
  items: [
    {
      id: 1,
      name: "Samsung Galaxy S24",
      price: 3499900,
      original_price: 3999900,
      quantity: 1,
      image: "samsung-s24.jpg",
      // ... otros campos
    }
  ],
  total_items: 1,
  total_price: 3499900,
  subtotal_sin_descuento: 3999900,
  total_descuentos: 500000,
  subtotal: 3499900,
  porcentaje_ahorro: 12.5
}
```

---

## 🎨 Elementos Visuales

### 1. Subtotal sin descuento
- **Color:** Gris claro
- **Estilo:** Texto tachado
- **Propósito:** Mostrar precio antes de descuentos

### 2. Descuentos aplicados
- **Color:** Verde (#28a745)
- **Estilo:** Negrita con fondo verde claro
- **Ícono:** 🏷️ (tag-fill)
- **Formato:** `-$XX,XXX`

### 3. Badge de porcentaje
- **Tipo:** Alert success
- **Ícono:** 😊 (emoji-smile-fill)
- **Texto:** "¡Estás ahorrando XX%!"
- **Animación:** Bounce en ícono

### 4. Subtotal final
- **Color:** Negro
- **Estilo:** Negrita
- **Sin fondo especial**

### 5. Envío
- **Gratis:** Verde (#28a745)
- **Con costo:** Negro
- **Texto:** "GRATIS" o "$15,000"

### 6. Total a pagar
- **Color:** Rojo (#dc3545)
- **Tamaño:** 1.5rem
- **Peso:** 700 (extra bold)

### 7. Badge de ahorros total
- **Fondo:** Gradiente verde (135deg)
- **Ícono:** 🐷 (piggy-bank-fill)
- **Animación:** Pulse 2s infinite
- **Sombra:** Verde con opacidad

---

## 🚀 Compatibilidad

### Usuarios Autenticados:
- ✅ Datos desde API Django
- ✅ Sincronización automática
- ✅ Persistencia en base de datos

### Usuarios No Autenticados:
- ✅ Datos en localStorage
- ✅ Cálculos locales
- ✅ Misma experiencia visual

---

## 🔄 Integración Universal

El sistema funciona automáticamente en:
- ✅ **index.html** - Página principal
- ✅ **index-celulares.html** - Categoría Celulares
- ✅ **index-gaming.html** - Categoría Gaming
- ✅ **index-televisores.html** - Categoría Televisores
- ✅ **index-computadores.html** - Categoría Computadores
- ✅ **index-audio.html** - Categoría Audio
- ✅ **index-electrohogar.html** - Categoría Electrohogar
- ✅ **index-smartwatch.html** - Categoría Smartwatch
- ✅ **index-audifonos.html** - Categoría Audífonos
- ✅ **index-deportes.html** - Categoría Deportes
- ✅ **carrito.html** - Página del carrito (con detalles completos)

---

## 📱 Responsive

Los estilos están optimizados para:
- ✅ Desktop (>1200px)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (<768px)

---

## 🧪 Testing

### Para probar el sistema:

1. **Agregar productos con descuento:**
```javascript
// Desde cualquier categoría, hacer clic en "Agregar al carrito"
// El botón global-cart mostrará el badge actualizado
```

2. **Abrir carrito:**
```javascript
// Clic en ícono del carrito en header
// O navegar a /carrito.html
```

3. **Verificar cálculos:**
- ✅ Subtotal sin descuento aparece tachado
- ✅ Descuentos en verde con signo negativo
- ✅ Badge de porcentaje visible
- ✅ Total a pagar destacado en rojo
- ✅ Badge animado de ahorros totales

4. **Probar envío gratis:**
- Subtotal < $200,000: Envío $15,000
- Subtotal ≥ $200,000: Envío GRATIS
- Alert mostrando cuánto falta para envío gratis

---

## 💡 Notas Técnicas

### Formato de Precios:
```javascript
// Siempre usar toLocaleString('es-CO')
$3499900 → "$3.499.900"
```

### Redondeo:
```javascript
// Porcentajes redondeados a 0 decimales
12.5678% → "13%"
```

### Validaciones:
- ✅ Precios nunca negativos
- ✅ Descuentos solo si original_price > price
- ✅ Cantidades mínimas de 1
- ✅ Manejo de productos sin descuento

---

## 🐛 Troubleshooting

### Si no aparecen los descuentos:

1. **Verificar que el producto tenga original_price:**
```javascript
// En la base de datos debe existir:
original_price > price
```

2. **Verificar cart-service.js:**
```javascript
// El método calcularTotalesCarrito debe estar ejecutándose
console.log(carrito); // Debe incluir total_descuentos
```

3. **Verificar cart-page-loader.js:**
```javascript
// Las variables deben estar inicializadas:
this.total_descuentos > 0 // Para mostrar sección de descuentos
```

4. **Verificar style.css:**
```css
/* Los estilos deben estar cargados */
.savings-badge { /* ... */ }
```

---

## 📈 Métricas de Ahorro

El sistema permite al usuario ver:
- 💰 Dinero ahorrado en pesos
- 📊 Porcentaje de descuento global
- 🎯 Objetivo para envío gratis
- ✅ Confirmación visual de ahorros

---

## 🎯 Mejoras Futuras (Opcional)

- [ ] Agregar gráfica de ahorros
- [ ] Comparador de precios históricos
- [ ] Cupones de descuento adicionales
- [ ] Sistema de puntos de fidelidad
- [ ] Notificaciones de descuentos especiales

---

## ✅ Checklist de Implementación

- [x] cart-service.js actualizado con cálculos
- [x] cart-page-loader.js con nuevas variables
- [x] Interfaz del resumen mejorada
- [x] Estilos CSS agregados
- [x] Animaciones implementadas
- [x] Compatible con usuarios autenticados
- [x] Compatible con usuarios no autenticados
- [x] Integrado en todas las categorías
- [x] Responsive para móviles
- [x] Documentación completa

---

## 📞 Soporte

Si necesitas ayuda:
1. Verifica la consola del navegador (F12)
2. Revisa los logs de `cart-service.js`
3. Confirma que Django está corriendo en puerto 8000
4. Confirma que frontend está en puerto 5500

---

**Última actualización:** 17/Oct/2025 00:08 AM
**Versión:** 1.0.0
**Estado:** ✅ Implementación Completa
