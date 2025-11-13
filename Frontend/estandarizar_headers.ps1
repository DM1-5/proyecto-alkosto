# PowerShell script para estandarizar headers en páginas de Alkosto
# Define las páginas que necesitan actualización

$paginas = @(
    "index-televisores.html",
    "index-videojuegos.html", 
    "index-gaming.html",
    "index-domotica.html",
    "index-pines.html",
    "index-audio.html",
    "index-electrohogar.html",
    "index-smartwatch.html",
    "index-audifonos.html",
    "index-accesorios.html",
    "index-camaras.html",
    "index-juguetes.html",
    "index-deportes.html",
    "index-muebles.html",
    "index-colchones.html",
    "index-llantas.html",
    "index-ropa-hogar.html",
    "index-proyectores.html",
    "index-ofertas-bancos.html",
    "index-hiperofertas.html"
)

# Header estándar que debe reemplazar al existente
$headerEstandar = @'
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <a class="navbar-brand" href="index.html">
                <img src="templates/alkosto-logo-header.svg" alt="Alkosto" height="40">
            </a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            <i class="bi bi-grid-3x3-gap me-1"></i> Categorías
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="index-televisores.html"><i class="bi bi-tv me-2"></i>Televisores</a></li>
                            <li><a class="dropdown-item" href="index-celulares.html"><i class="bi bi-phone me-2"></i>Celulares</a></li>
                            <li><a class="dropdown-item" href="index-computadores.html"><i class="bi bi-laptop me-2"></i>Computadores</a></li>
                            <li><a class="dropdown-item" href="index-electrohogar.html"><i class="bi bi-house me-2"></i>Electrohogar</a></li>
                            <li><a class="dropdown-item" href="index-gaming.html"><i class="bi bi-controller me-2"></i>Gaming</a></li>
                            <li><a class="dropdown-item" href="index-audio.html"><i class="bi bi-speaker me-2"></i>Audio</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="index-videojuegos.html"><i class="bi bi-joystick me-2"></i>Videojuegos</a></li>
                            <li><a class="dropdown-item" href="index-smartwatch.html"><i class="bi bi-smartwatch me-2"></i>Smartwatch</a></li>
                            <li><a class="dropdown-item" href="index-audifonos.html"><i class="bi bi-headphones me-2"></i>Audífonos</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index-ofertas-bancos.html">
                            <i class="bi bi-credit-card me-1"></i> Ofertas Bancos
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index-hiperofertas.html">
                            <i class="bi bi-lightning me-1"></i> Hiperofertas
                        </a>
                    </li>
                </ul>
                
                <div class="d-flex align-items-center">
                    <form class="search-form me-3">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Buscar productos...">
                            <button class="btn btn-outline-secondary" type="submit">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </form>
                    
                    <a href="#" class="nav-link me-3">
                        <i class="bi bi-person"></i> Mi cuenta
                    </a>
                    
                    <a href="#" class="nav-link position-relative">
                        <i class="bi bi-cart"></i>
                        <span class="cart-count">0</span>
                    </a>
                </div>
            </div>
        </div>
    </nav>
'@

# Popup de cuenta estándar
$popupCuenta = @'
    <!-- Account Popup -->
    <div id="account-popup" class="account-popup" style="display: none;">
        <div class="popup-content">
            <h4><i class="bi bi-person-circle me-2"></i>Mi Cuenta</h4>
            <div class="account-options">
                <a href="#" class="account-option">
                    <i class="bi bi-box-arrow-in-right me-2"></i>Iniciar Sesión
                </a>
                <a href="#" class="account-option">
                    <i class="bi bi-person-plus me-2"></i>Crear Cuenta
                </a>
                <a href="#" class="account-option">
                    <i class="bi bi-bag me-2"></i>Mis Pedidos
                </a>
                <a href="#" class="account-option">
                    <i class="bi bi-heart me-2"></i>Lista de Deseos
                </a>
                <a href="#" class="account-option">
                    <i class="bi bi-gear me-2"></i>Configuración
                </a>
            </div>
        </div>
    </div>
'@

Write-Host "Iniciando estandarización de headers en páginas de Alkosto..." -ForegroundColor Green

foreach ($pagina in $paginas) {
    $rutaArchivo = $pagina
    
    if (Test-Path $rutaArchivo) {
        Write-Host "Procesando: $pagina" -ForegroundColor Yellow
        
        try {
            $contenido = Get-Content $rutaArchivo -Raw -Encoding UTF8
            
            # Buscar y reemplazar el header antiguo con patrones regex
            $patronHeaderAntiguo = '(?s)  <!-- 🔹 Barra superior -->.*?  </div>'
            $contenido = $contenido -replace $patronHeaderAntiguo, $headerEstandar
            
            # Buscar el cierre del body para agregar popup si no existe
            if ($contenido -notmatch 'account-popup') {
                $patronCierreBody = '  <!-- Bootstrap JS -->'
                $contenido = $contenido -replace $patronCierreBody, "$popupCuenta`n`n  <!-- Bootstrap JS -->"
            }
            
            # Guardar el archivo
            Set-Content $rutaArchivo $contenido -Encoding UTF8
            Write-Host "✓ Completado: $pagina" -ForegroundColor Green
            
        } catch {
            Write-Host "✗ Error procesando $pagina`: $($_.Exception.Message)" -ForegroundColor Red
        }
    } else {
        Write-Host "✗ Archivo no encontrado: $pagina" -ForegroundColor Red
    }
}

Write-Host "`nEstandarización completada!" -ForegroundColor Green