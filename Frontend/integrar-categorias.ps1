# Script para integrar automaticamente categorias con la API

param(
    [Parameter(Mandatory=$false)]
    [string]$categoria
)

$categorias = @(
    "gaming",
    "televisores",
    "computadores",
    "audio",
    "audifonos",
    "baterias",
    "camaras",
    "colchones",
    "deportes",
    "domotica",
    "electro",
    "electrohogar"
)

function Integrar-Categoria {
    param([string]$cat)
    
    $htmlFile = "index-$cat.html"
    $jsFile = "$cat.js"
    
    if (-not (Test-Path $htmlFile)) {
        Write-Host "No se encontro $htmlFile" -ForegroundColor Yellow
        return
    }
    
    Write-Host "Integrando $cat..." -ForegroundColor Cyan
    
    # Leer contenido HTML
    $htmlContent = Get-Content $htmlFile -Raw
    
    # Verificar si ya esta integrado
    if ($htmlContent -match "universal-category-loader") {
        Write-Host "  - $cat ya esta integrado" -ForegroundColor Green
        return
    }
    
    # Buscar el tag de cierre antes de </body>
    $scriptPattern = '(<script src="https://cdn\.jsdelivr\.net/npm/bootstrap.*?</body>)'
    
    if ($htmlContent -match $scriptPattern) {
        $nuevoScript = @"
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
  
  <script src="$jsFile"></script>
</body>
"@
        
        $htmlContent = $htmlContent -replace $scriptPattern, $nuevoScript
        Set-Content -Path $htmlFile -Value $htmlContent -Encoding UTF8
        Write-Host "  - HTML actualizado" -ForegroundColor Green
    }
    
    # Actualizar JS si existe
    if (Test-Path $jsFile) {
        $jsContent = Get-Content $jsFile -Raw
        
        # Buscar y reemplazar botones de agregar al carrito
        if ($jsContent -match 'add-to-cart-btn[^>]*>') {
            $jsContent = $jsContent -replace '(<button class="add-to-cart-btn"[^>]*)>', '$1 onclick="agregarAlCarritoAPI(${producto.id})">'
            Set-Content -Path $jsFile -Value $jsContent -Encoding UTF8
            Write-Host "  - JS actualizado" -ForegroundColor Green
        }
    }
    
    Write-Host "  Completado: $cat" -ForegroundColor Green
    Write-Host ""
}

if ($categoria) {
    # Integrar categoria especifica
    Integrar-Categoria -cat $categoria
} else {
    # Integrar todas las categorias
    Write-Host "============================================" -ForegroundColor Magenta
    Write-Host "  INTEGRANDO TODAS LAS CATEGORIAS" -ForegroundColor Magenta
    Write-Host "============================================" -ForegroundColor Magenta
    Write-Host ""
    
    foreach ($cat in $categorias) {
        Integrar-Categoria -cat $cat
    }
    
    Write-Host "============================================" -ForegroundColor Magenta
    Write-Host "  INTEGRACION COMPLETADA" -ForegroundColor Magenta
    Write-Host "============================================" -ForegroundColor Magenta
}
