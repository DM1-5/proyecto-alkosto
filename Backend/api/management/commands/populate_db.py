"""
Comando para poblar la base de datos con datos iniciales de productos
"""
from django.core.management.base import BaseCommand
from django.utils.text import slugify
from api.models import Category, Brand, Product
from decimal import Decimal


class Command(BaseCommand):
    help = 'Pobla la base de datos con productos de prueba'

    def handle(self, *args, **kwargs):
        self.stdout.write(self.style.SUCCESS('Iniciando población de la base de datos...'))
        
        # Crear categorías
        self.stdout.write('Creando categorías...')
        categories_data = [
            {'name': 'Celulares', 'slug': 'celulares', 'description': 'Teléfonos móviles y smartphones'},
            {'name': 'Gaming', 'slug': 'gaming', 'description': 'Consolas y accesorios gaming'},
            {'name': 'Televisores', 'slug': 'televisores', 'description': 'Smart TV y pantallas'},
            {'name': 'Computadores', 'slug': 'computadores', 'description': 'Portátiles y computadores de escritorio'},
            {'name': 'Audio', 'slug': 'audio', 'description': 'Audífonos y equipos de sonido'},
            {'name': 'Electrohogar', 'slug': 'electrohogar', 'description': 'Electrodomésticos para el hogar'},
            {'name': 'Smartwatch', 'slug': 'smartwatch', 'description': 'Relojes inteligentes y wearables'},
        ]
        
        categories = {}
        for cat_data in categories_data:
            cat, created = Category.objects.get_or_create(
                slug=cat_data['slug'],
                defaults={
                    'name': cat_data['name'],
                    'description': cat_data['description']
                }
            )
            categories[cat_data['slug']] = cat
            if created:
                self.stdout.write(self.style.SUCCESS(f'  ✓ Categoría creada: {cat.name}'))
            else:
                self.stdout.write(f'  - Categoría ya existe: {cat.name}')
        
        # Crear marcas
        self.stdout.write('\nCreando marcas...')
        brands_data = [
            {'name': 'Apple', 'slug': 'apple'},
            {'name': 'Samsung', 'slug': 'samsung'},
            {'name': 'Google', 'slug': 'google'},
            {'name': 'Sony', 'slug': 'sony'},
            {'name': 'Microsoft', 'slug': 'microsoft'},
            {'name': 'Nintendo', 'slug': 'nintendo'},
            {'name': 'LG', 'slug': 'lg'},
            {'name': 'Dell', 'slug': 'dell'},
        ]
        
        brands = {}
        for brand_data in brands_data:
            brand, created = Brand.objects.get_or_create(
                slug=brand_data['slug'],
                defaults={'name': brand_data['name']}
            )
            brands[brand_data['slug']] = brand
            if created:
                self.stdout.write(self.style.SUCCESS(f'  ✓ Marca creada: {brand.name}'))
            else:
                self.stdout.write(f'  - Marca ya existe: {brand.name}')
        
        # Crear productos
        self.stdout.write('\nCreando productos...')
        products_data = [
            # CELULARES
            {
                'name': 'iPhone 15 Pro Max',
                'category': 'celulares',
                'brand': 'apple',
                'price': 5499000,
                'original_price': 6199000,
                'rating': 4.8,
                'reviews_count': 1247,
                'stock': 45,
                'description': 'El iPhone más avanzado con chip A17 Pro, cámara de 48MP y pantalla Super Retina XDR de 6.7"',
                'image': 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300',
                'specs': {
                    'storage': '256GB',
                    'ram': '8GB',
                    'screen': '6.7" Super Retina XDR',
                    'camera': '48MP + 12MP + 12MP',
                    'battery': 'Hasta 29 horas de video'
                },
                'tags': ['5g', 'ios', 'premium', 'camara-pro', 'titanio'],
                'is_featured': True
            },
            {
                'name': 'Samsung Galaxy S24 Ultra',
                'category': 'celulares',
                'brand': 'samsung',
                'price': 4899000,
                'original_price': 5299000,
                'rating': 4.7,
                'reviews_count': 892,
                'stock': 67,
                'description': 'Galaxy S24 Ultra con S Pen, cámara de 200MP y pantalla Dynamic AMOLED 2X',
                'image': 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300',
                'specs': {
                    'storage': '512GB',
                    'ram': '12GB',
                    'screen': '6.8" Dynamic AMOLED 2X',
                    'camera': '200MP + 50MP + 12MP + 10MP',
                    'battery': '5000mAh'
                },
                'tags': ['5g', 'android', 's-pen', 'camara-zoom', 'ai'],
                'is_featured': True
            },
            {
                'name': 'Google Pixel 8 Pro',
                'category': 'celulares',
                'brand': 'google',
                'price': 3899000,
                'original_price': 4199000,
                'rating': 4.6,
                'reviews_count': 534,
                'stock': 23,
                'description': 'Pixel 8 Pro con inteligencia artificial Tensor G3 y cámara computacional avanzada',
                'image': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300',
                'specs': {
                    'storage': '256GB',
                    'ram': '12GB',
                    'screen': '6.7" LTPO OLED',
                    'camera': '50MP + 48MP + 48MP',
                    'battery': '5050mAh'
                },
                'tags': ['5g', 'android', 'ai-photography', 'google', 'pure-android'],
                'is_featured': False
            },
            
            # GAMING
            {
                'name': 'PlayStation 5 Pro',
                'category': 'gaming',
                'brand': 'sony',
                'price': 3499000,
                'original_price': 3799000,
                'rating': 4.9,
                'reviews_count': 2341,
                'stock': 12,
                'description': 'PlayStation 5 Pro con GPU mejorada para gaming en 8K y ray tracing avanzado',
                'image': 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300',
                'specs': {
                    'storage': '2TB SSD',
                    'gpu': 'RDNA 3 Custom',
                    'cpu': 'AMD Zen 4',
                    'resolution': '8K ready',
                    'features': 'Ray Tracing, 3D Audio'
                },
                'tags': ['8k', 'ray-tracing', 'ssd', 'exclusivos', 'vr-ready'],
                'is_featured': True
            },
            {
                'name': 'Xbox Series X',
                'category': 'gaming',
                'brand': 'microsoft',
                'price': 2899000,
                'original_price': 3199000,
                'rating': 4.7,
                'reviews_count': 1876,
                'stock': 34,
                'description': 'Xbox Series X con 12 teraflops de potencia y compatibilidad con 4 generaciones de juegos',
                'image': 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=300',
                'specs': {
                    'storage': '1TB SSD',
                    'gpu': '12 Teraflops RDNA 2',
                    'cpu': 'AMD Zen 2',
                    'resolution': '4K a 120fps',
                    'features': 'Game Pass, Smart Delivery'
                },
                'tags': ['4k', '120fps', 'gamepass', 'retrocompatible', 'quick-resume'],
                'is_featured': True
            },
            {
                'name': 'Nintendo Switch OLED',
                'category': 'gaming',
                'brand': 'nintendo',
                'price': 1699000,
                'original_price': 1899000,
                'rating': 4.8,
                'reviews_count': 3421,
                'stock': 89,
                'description': 'Nintendo Switch OLED con pantalla vibrante de 7" y audio mejorado',
                'image': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300',
                'specs': {
                    'storage': '64GB + microSD',
                    'screen': '7" OLED',
                    'battery': 'Hasta 9 horas',
                    'modes': 'TV, Sobremesa, Portátil',
                    'features': 'Joy-Con HD Rumble'
                },
                'tags': ['portatil', 'oled', 'exclusivos', 'familia', 'hibrida'],
                'is_featured': False
            },
            
            # TELEVISORES
            {
                'name': 'Samsung Neo QLED 75" QN95C',
                'category': 'televisores',
                'brand': 'samsung',
                'price': 8999000,
                'original_price': 9999000,
                'rating': 4.9,
                'reviews_count': 456,
                'stock': 15,
                'description': 'Samsung Neo QLED 75" con Quantum Matrix Technology y Object Tracking Sound+',
                'image': 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300',
                'specs': {
                    'size': '75 pulgadas',
                    'resolution': '4K Ultra HD',
                    'technology': 'Neo QLED',
                    'hdr': 'HDR10+ / Dolby Vision',
                    'refresh': '120Hz VRR'
                },
                'tags': ['4k', 'qled', 'gaming', 'smart-tv', 'hdr'],
                'is_featured': True
            },
            {
                'name': 'LG OLED C3 65"',
                'category': 'televisores',
                'brand': 'lg',
                'price': 6499000,
                'original_price': 7299000,
                'rating': 4.8,
                'reviews_count': 623,
                'stock': 28,
                'description': 'LG OLED C3 65" con tecnología α9 Gen6 AI Processor y Dolby Vision IQ',
                'image': 'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=300',
                'specs': {
                    'size': '65 pulgadas',
                    'resolution': '4K Ultra HD',
                    'technology': 'OLED',
                    'hdr': 'Dolby Vision IQ',
                    'refresh': '120Hz G-SYNC'
                },
                'tags': ['4k', 'oled', 'dolby-vision', 'gaming', 'webos'],
                'is_featured': True
            },
            
            # COMPUTADORES
            {
                'name': 'MacBook Pro 16" M3 Max',
                'category': 'computadores',
                'brand': 'apple',
                'price': 12999000,
                'original_price': 14299000,
                'rating': 4.9,
                'reviews_count': 234,
                'stock': 8,
                'description': 'MacBook Pro 16" con chip M3 Max, pantalla Liquid Retina XDR y batería de hasta 22 horas',
                'image': 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300',
                'specs': {
                    'processor': 'Apple M3 Max',
                    'ram': '36GB',
                    'storage': '1TB SSD',
                    'screen': '16.2" Liquid Retina XDR',
                    'graphics': '40-core GPU'
                },
                'tags': ['m3-max', 'pro', 'video-editing', 'retina', 'macos'],
                'is_featured': True
            },
            {
                'name': 'Dell XPS 15 9530',
                'category': 'computadores',
                'brand': 'dell',
                'price': 7899000,
                'original_price': 8599000,
                'rating': 4.7,
                'reviews_count': 412,
                'stock': 23,
                'description': 'Dell XPS 15 con Intel Core i7-13700H y NVIDIA RTX 4070 para trabajo profesional',
                'image': 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300',
                'specs': {
                    'processor': 'Intel Core i7-13700H',
                    'ram': '32GB DDR5',
                    'storage': '1TB SSD',
                    'screen': '15.6" 4K OLED',
                    'graphics': 'NVIDIA RTX 4070'
                },
                'tags': ['intel', 'rtx', '4k-oled', 'creative', 'windows'],
                'is_featured': False
            },
            
            # AUDIO
            {
                'name': 'Sony WH-1000XM5',
                'category': 'audio',
                'brand': 'sony',
                'price': 1299000,
                'original_price': 1499000,
                'rating': 4.8,
                'reviews_count': 2341,
                'stock': 67,
                'description': 'Audífonos inalámbricos con cancelación de ruido líder en la industria',
                'image': 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300',
                'specs': {
                    'type': 'Over-ear',
                    'connectivity': 'Bluetooth 5.2',
                    'battery': '30 horas',
                    'features': 'ANC, LDAC, Multipoint',
                    'microphones': '8 micrófonos'
                },
                'tags': ['noise-cancelling', 'bluetooth', 'premium', 'travel', 'ldac'],
                'is_featured': True
            },
            {
                'name': 'Apple AirPods Pro 2',
                'category': 'audio',
                'brand': 'apple',
                'price': 899000,
                'original_price': 999000,
                'rating': 4.7,
                'reviews_count': 1876,
                'stock': 145,
                'description': 'AirPods Pro de segunda generación con chip H2 y cancelación adaptativa',
                'image': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300',
                'specs': {
                    'type': 'In-ear',
                    'connectivity': 'Bluetooth 5.3',
                    'battery': '6h + 30h estuche',
                    'features': 'ANC Adaptativo, Audio Espacial',
                    'compatibility': 'iOS, macOS'
                },
                'tags': ['true-wireless', 'anc', 'spatial-audio', 'ios', 'h2-chip'],
                'is_featured': True
            },
            
            # ELECTROHOGAR
            {
                'name': 'Nevera Samsung RF28T5001SR',
                'category': 'electrohogar',
                'brand': 'samsung',
                'price': 4299000,
                'original_price': 4799000,
                'rating': 4.6,
                'reviews_count': 234,
                'stock': 12,
                'description': 'Nevera French Door 28 pies con tecnología Twin Cooling Plus y dispensador',
                'image': 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300',
                'specs': {
                    'capacity': '28 pies cúbicos',
                    'type': 'French Door',
                    'features': 'Twin Cooling Plus, Dispensador',
                    'energy': 'Eficiencia A+',
                    'warranty': '10 años compresor'
                },
                'tags': ['french-door', 'dispensador', 'eficiente', 'familia', 'twin-cooling'],
                'is_featured': False
            },
            
            # SMARTWATCH
            {
                'name': 'Apple Watch Ultra 2',
                'category': 'smartwatch',
                'brand': 'apple',
                'price': 3499000,
                'original_price': 3799000,
                'rating': 4.9,
                'reviews_count': 567,
                'stock': 23,
                'description': 'Apple Watch Ultra 2 con caja de titanio y resistencia extrema para aventuras',
                'image': 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300',
                'specs': {
                    'display': '49mm Always-On Retina',
                    'battery': 'Hasta 72 horas',
                    'water': 'Resistente 100m',
                    'features': 'GPS Dual, Celular, Sirena',
                    'materials': 'Titanio grado aeroespacial'
                },
                'tags': ['titanio', 'ultra', 'gps-dual', 'extremo', 'celular'],
                'is_featured': True
            },
            {
                'name': 'Samsung Galaxy Watch 6 Classic',
                'category': 'smartwatch',
                'brand': 'samsung',
                'price': 1299000,
                'original_price': 1499000,
                'rating': 4.7,
                'reviews_count': 834,
                'stock': 45,
                'description': 'Galaxy Watch 6 Classic con bisel giratorio y monitoreo avanzado de salud',
                'image': 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300',
                'specs': {
                    'display': '47mm Super AMOLED',
                    'battery': 'Hasta 40 horas',
                    'water': 'IP68 + 5ATM',
                    'features': 'Bisel giratorio, Samsung Health',
                    'os': 'Wear OS powered by Samsung'
                },
                'tags': ['bisel-giratorio', 'wear-os', 'samsung-health', 'clasico', '5atm'],
                'is_featured': False
            },
        ]
        
        created_count = 0
        for prod_data in products_data:
            category = categories.get(prod_data['category'])
            brand = brands.get(prod_data['brand'])
            
            if not category or not brand:
                continue
            
            slug = slugify(prod_data['name'])
            sku = f"ALK-{slug[:20].upper()}-{prod_data['category'][:3].upper()}"
            
            product, created = Product.objects.get_or_create(
                slug=slug,
                defaults={
                    'name': prod_data['name'],
                    'sku': sku,
                    'category': category,
                    'brand': brand,
                    'price': Decimal(str(prod_data['price'])),
                    'original_price': Decimal(str(prod_data.get('original_price', prod_data['price']))),
                    'rating': Decimal(str(prod_data['rating'])),
                    'reviews_count': prod_data['reviews_count'],
                    'stock': prod_data['stock'],
                    'description': prod_data['description'],
                    'image': prod_data['image'],
                    'specs': prod_data.get('specs', {}),
                    'tags': prod_data.get('tags', []),
                    'is_featured': prod_data.get('is_featured', False)
                }
            )
            
            if created:
                created_count += 1
                self.stdout.write(self.style.SUCCESS(f'  ✓ Producto creado: {product.name}'))
            else:
                self.stdout.write(f'  - Producto ya existe: {product.name}')
        
        self.stdout.write(self.style.SUCCESS(f'\n✅ Población completada!'))
        self.stdout.write(self.style.SUCCESS(f'   - Categorías: {len(categories_data)}'))
        self.stdout.write(self.style.SUCCESS(f'   - Marcas: {len(brands_data)}'))
        self.stdout.write(self.style.SUCCESS(f'   - Productos nuevos: {created_count}'))
        self.stdout.write(self.style.SUCCESS(f'   - Total productos: {Product.objects.count()}'))
