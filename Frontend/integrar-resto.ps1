$categorias = @('computadores', 'audio', 'electrohogar', 'smartwatch', 'audifonos', 'deportes')

foreach ($cat in $categorias) {
    Write-Host "Procesando $cat..." -ForegroundColor Cyan
    
    $htmlFile = "index-$cat.html"
    $jsFile = "$cat.js"
    
    if (Test-Path $htmlFile) {
        Write-Host "  Integrando HTML..." -ForegroundColor Yellow
        $htmlContent = Get-Content $htmlFile -Raw
        
        if ($htmlContent -notmatch 'universal-category-loader') {
            $pattern = "(<script src=`"$jsFile`"></script>\s*</body>)"
            $replacement = @"
<script type="module">
    import universalLoader from './js/universal-category-loader.js';
    window.addEventListener('DOMContentLoaded', async () => { await universalLoader.inicializar(); });
  </script>
  
  <script src="$jsFile"></script>
</body>
"@
            
            $htmlContent = $htmlContent -replace $pattern, $replacement
            Set-Content -Path $htmlFile -Value $htmlContent -Encoding UTF8
            Write-Host "    HTML actualizado" -ForegroundColor Green
        } else {
            Write-Host "    Ya integrado" -ForegroundColor Gray
        }
    } else {
        Write-Host "    No existe $htmlFile" -ForegroundColor Red
    }
    
    if (Test-Path $jsFile) {
        Write-Host "  Actualizando JS..." -ForegroundColor Yellow
        $jsContent = Get-Content $jsFile -Raw
        
        $jsContent = $jsContent -replace '<button class="add-to-cart-btn">Agregar al carrito</button>', '<button class="add-to-cart-btn" onclick="agregarAlCarritoAPI($${producto.id})">Agregar al carrito</button>'
        
        Set-Content -Path $jsFile -Value $jsContent -Encoding UTF8
        Write-Host "    JS actualizado" -ForegroundColor Green
    } else {
        Write-Host "    No existe $jsFile" -ForegroundColor Red
    }
    
    Write-Host ""
}

Write-Host "========================================" -ForegroundColor Magenta
Write-Host "INTEGRACION COMPLETADA" -ForegroundColor Magenta
Write-Host "========================================" -ForegroundColor Magenta
