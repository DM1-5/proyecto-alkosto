// Ofertas Bancos Page JavaScript

// Offers Data
const bancosOffers = [
    {
        id: 'bancolombia-platinum',
        title: 'Tarjeta Platinum Alkosto',
        bank: 'Bancolombia',
        category: 'tarjetas-credito',
        type: 'Tarjeta de Crédito',
        interestRate: 0,
        term: 12,
        minAmount: 300000,
        maxAmount: 5000000,
        features: [
            'Sin cuota de manejo primer año',
            'Cashback 2% en Alkosto',
            'Puntos Colombia acumulables',
            'Seguros incluidos'
        ],
        benefits: ['cashback', 'points', 'discounts'],
        highlight: '0% Interés 12 Cuotas',
        terms: {
            cuotas: '3, 6, 12 meses',
            interes: '0% EA',
            aprobacion: 'Inmediata',
            requisitos: 'Ingresos desde $2,000,000'
        },
        rating: 4.8,
        applications: 2341
    },
    {
        id: 'banco-bogota-preferencial',
        title: 'Crédito Preferencial Electrodomésticos',
        bank: 'Banco de Bogotá',
        category: 'financiacion',
        type: 'Financiación',
        interestRate: 1.5,
        term: 24,
        minAmount: 500000,
        maxAmount: 8000000,
        features: [
            'Tasa preferencial 1.5% EA',
            'Hasta 24 cuotas',
            'Sin codeudor hasta $3M',
            'Aprobación en 24 horas'
        ],
        benefits: ['low-interest', 'flexible-terms'],
        highlight: 'Tasa desde 1.5% EA',
        terms: {
            cuotas: '6, 12, 18, 24 meses',
            interes: '1.5% EA',
            aprobacion: '24 horas',
            requisitos: 'Score crediticio 650+'
        },
        rating: 4.6,
        applications: 1876
    },
    {
        id: 'davivienda-zero',
        title: 'Compra Ahora Paga Después',
        bank: 'Davivienda',
        category: 'financiacion',
        type: 'Financiación 0%',
        interestRate: 0,
        term: 6,
        minAmount: 200000,
        maxAmount: 3000000,
        features: [
            '0% interés 6 cuotas',
            'Aprobación online',
            'Sin papeleos',
            'Desembolso inmediato'
        ],
        benefits: ['zero-interest', 'instant-approval'],
        highlight: '6 Cuotas Sin Interés',
        terms: {
            cuotas: '3, 6 meses',
            interes: '0% EA',
            aprobacion: 'Inmediata',
            requisitos: 'Celular y cédula'
        },
        rating: 4.7,
        applications: 3254
    },
    {
        id: 'bbva-gold',
        title: 'Tarjeta Gold Rewards',
        bank: 'BBVA',
        category: 'tarjetas-credito',
        type: 'Tarjeta Premium',
        interestRate: 2.1,
        term: 36,
        minAmount: 1000000,
        maxAmount: 15000000,
        features: [
            'Millas LATAM acumulables',
            'Acceso a salas VIP',
            'Seguro de viaje incluido',
            'Concierge 24/7'
        ],
        benefits: ['miles', 'premium-services', 'travel-insurance'],
        highlight: 'Millas LATAM x2',
        terms: {
            cuotas: '12, 24, 36 meses',
            interes: '2.1% MV',
            aprobacion: '48 horas',
            requisitos: 'Ingresos desde $5,000,000'
        },
        rating: 4.9,
        applications: 892
    },
    {
        id: 'colpatria-hogar',
        title: 'Crédito Hogar Inteligente',
        bank: 'Scotiabank Colpatria',
        category: 'prestamos',
        type: 'Préstamo Personal',
        interestRate: 1.8,
        term: 18,
        minAmount: 2000000,
        maxAmount: 20000000,
        features: [
            'Tasa fija 1.8% EA',
            'Hasta 18 cuotas',
            'Para electrodomésticos',
            'Garantía extendida gratis'
        ],
        benefits: ['fixed-rate', 'extended-warranty'],
        highlight: 'Garantía Extendida Gratis',
        terms: {
            cuotas: '6, 12, 18 meses',
            interes: '1.8% EA',
            aprobacion: '72 horas',
            requisitos: 'Vinculación bancaria'
        },
        rating: 4.5,
        applications: 1432
    },
    {
        id: 'bancolombia-empresarial',
        title: 'Crédito Empresarial Tech',
        bank: 'Bancolombia',
        category: 'prestamos',
        type: 'Crédito Empresarial',
        interestRate: 1.2,
        term: 36,
        minAmount: 5000000,
        maxAmount: 50000000,
        features: [
            'Tasa empresarial 1.2% EA',
            'Hasta 36 cuotas',
            'Para equipos tecnológicos',
            'Asesoría especializada'
        ],
        benefits: ['business-rate', 'tech-focus', 'advisory'],
        highlight: 'Tasa Empresarial 1.2%',
        terms: {
            cuotas: '12, 24, 36 meses',
            interes: '1.2% EA',
            aprobacion: '5 días',
            requisitos: 'RUT empresarial'
        },
        rating: 4.7,
        applications: 567
    },
    {
        id: 'banco-bogota-joven',
        title: 'Tarjeta Joven Estudiante',
        bank: 'Banco de Bogotá',
        category: 'tarjetas-credito',
        type: 'Tarjeta Estudiante',
        interestRate: 0,
        term: 3,
        minAmount: 100000,
        maxAmount: 1000000,
        features: [
            'Sin cuota de manejo',
            'Cupo desde $500,000',
            '0% interés 3 cuotas',
            'Descuentos estudiantes'
        ],
        benefits: ['student-discounts', 'no-fees', 'zero-interest'],
        highlight: 'Especial Estudiantes',
        terms: {
            cuotas: '3 meses',
            interes: '0% EA',
            aprobacion: 'Inmediata',
            requisitos: 'Carné estudiantil'
        },
        rating: 4.4,
        applications: 4521
    },
    {
        id: 'davivienda-premium',
        title: 'Cuenta Premium Alkosto',
        bank: 'Davivienda',
        category: 'cuentas',
        type: 'Cuenta Corriente',
        interestRate: 0,
        term: 0,
        minAmount: 1000000,
        maxAmount: 0,
        features: [
            'Sin cuota de manejo',
            'Tarjeta débito gratis',
            'Transferencias ilimitadas',
            'Banca en línea premium'
        ],
        benefits: ['no-fees', 'unlimited-transfers', 'premium-banking'],
        highlight: 'Sin Cuota de Manejo',
        terms: {
            cuotas: 'N/A',
            interes: 'N/A',
            aprobacion: 'Inmediata',
            requisitos: 'Depósito inicial $1M'
        },
        rating: 4.6,
        applications: 2109
    },
    {
        id: 'bbva-inversion',
        title: 'Fondo de Inversión Inteligente',
        bank: 'BBVA',
        category: 'inversiones',
        type: 'Fondo de Inversión',
        interestRate: 8.5,
        term: 12,
        minAmount: 500000,
        maxAmount: 0,
        features: [
            'Rentabilidad hasta 8.5% EA',
            'Diversificación automática',
            'Liquidez diaria',
            'Asesoría gratuita'
        ],
        benefits: ['high-returns', 'daily-liquidity', 'advisory'],
        highlight: 'Hasta 8.5% EA',
        terms: {
            cuotas: 'N/A',
            interes: '8.5% EA',
            aprobacion: '24 horas',
            requisitos: 'Perfil de riesgo'
        },
        rating: 4.8,
        applications: 987
    },
    {
        id: 'colpatria-seguro',
        title: 'Seguro Hogar Completo',
        bank: 'Scotiabank Colpatria',
        category: 'seguros',
        type: 'Seguro Hogar',
        interestRate: 0,
        term: 12,
        minAmount: 50000,
        maxAmount: 500000,
        features: [
            'Cobertura total hogar',
            'Electrodomésticos protegidos',
            'Asistencia 24/7',
            'Sin deducible'
        ],
        benefits: ['total-coverage', '24-7-assistance', 'no-deductible'],
        highlight: 'Sin Deducible',
        terms: {
            cuotas: '12 meses',
            interes: 'N/A',
            aprobacion: 'Inmediata',
            requisitos: 'Avalúo del hogar'
        },
        rating: 4.5,
        applications: 1654
    },
    {
        id: 'bancolombia-digital',
        title: 'Crédito Digital Express',
        bank: 'Bancolombia',
        category: 'financiacion',
        type: 'Crédito Digital',
        interestRate: 1.9,
        term: 12,
        minAmount: 300000,
        maxAmount: 4000000,
        features: [
            'Aprobación en 5 minutos',
            'Desembolso inmediato',
            'Todo desde la app',
            'Sin papeleos'
        ],
        benefits: ['instant-approval', 'paperless', 'mobile-app'],
        highlight: 'Aprobación 5 Min',
        terms: {
            cuotas: '6, 12 meses',
            interes: '1.9% EA',
            aprobacion: '5 minutos',
            requisitos: 'App Bancolombia'
        },
        rating: 4.9,
        applications: 5432
    },
    {
        id: 'banco-bogota-auto',
        title: 'Crédito de Vehículo',
        bank: 'Banco de Bogotá',
        category: 'prestamos',
        type: 'Crédito Vehicular',
        interestRate: 1.4,
        term: 60,
        minAmount: 10000000,
        maxAmount: 100000000,
        features: [
            'Tasa desde 1.4% EA',
            'Hasta 60 cuotas',
            'Financiación 90%',
            'Seguro incluido'
        ],
        benefits: ['vehicle-financing', 'insurance-included', 'long-term'],
        highlight: 'Hasta 60 Cuotas',
        terms: {
            cuotas: '12, 24, 36, 48, 60 meses',
            interes: '1.4% EA',
            aprobacion: '7 días',
            requisitos: 'Capacidad de pago'
        },
        rating: 4.7,
        applications: 743
    },
    {
        id: 'davivienda-beneficios',
        title: 'Programa Beneficios Plus',
        bank: 'Davivienda',
        category: 'beneficios',
        type: 'Programa de Beneficios',
        interestRate: 0,
        term: 0,
        minAmount: 0,
        maxAmount: 0,
        features: [
            'Descuentos hasta 50%',
            'Cashback 5% en compras',
            'Puntos canjeables',
            '2x1 en entretenimiento'
        ],
        benefits: ['mega-discounts', 'high-cashback', 'entertainment'],
        highlight: 'Descuentos hasta 50%',
        terms: {
            cuotas: 'N/A',
            interes: 'N/A',
            aprobacion: 'Inmediata',
            requisitos: 'Cliente Davivienda'
        },
        rating: 4.8,
        applications: 6789
    },
    {
        id: 'bbva-pyme',
        title: 'Crédito PYME Crecimiento',
        bank: 'BBVA',
        category: 'prestamos',
        type: 'Crédito PYME',
        interestRate: 1.6,
        term: 48,
        minAmount: 3000000,
        maxAmount: 30000000,
        features: [
            'Tasa PYME 1.6% EA',
            'Capital de trabajo',
            'Hasta 48 cuotas',
            'Acompañamiento empresarial'
        ],
        benefits: ['pyme-rate', 'business-support', 'working-capital'],
        highlight: 'Acompañamiento PYME',
        terms: {
            cuotas: '12, 24, 36, 48 meses',
            interes: '1.6% EA',
            aprobacion: '10 días',
            requisitos: 'Estados financieros'
        },
        rating: 4.6,
        applications: 432
    },
    {
        id: 'colpatria-vivienda',
        title: 'Crédito Vivienda Joven',
        bank: 'Scotiabank Colpatria',
        category: 'prestamos',
        type: 'Crédito Hipotecario',
        interestRate: 0.9,
        term: 240,
        minAmount: 20000000,
        maxAmount: 500000000,
        features: [
            'Tasa desde 0.9% EA',
            'Hasta 20 años',
            'Subsidio gobierno',
            'Gastos mínimos'
        ],
        benefits: ['home-financing', 'government-subsidy', 'minimal-costs'],
        highlight: 'Subsidio Gobierno',
        terms: {
            cuotas: '120, 180, 240 meses',
            interes: '0.9% EA',
            aprobacion: '15 días',
            requisitos: 'Primera vivienda'
        },
        rating: 4.9,
        applications: 234
    },
    {
        id: 'bancolombia-nomina',
        title: 'Crédito Nómina Empleados',
        bank: 'Bancolombia',
        category: 'prestamos',
        type: 'Crédito Nómina',
        interestRate: 1.3,
        term: 24,
        minAmount: 1000000,
        maxAmount: 12000000,
        features: [
            'Tasa nómina 1.3% EA',
            'Descuento por nómina',
            'Hasta 5x el salario',
            'Aprobación preferencial'
        ],
        benefits: ['payroll-rate', 'salary-multiple', 'preferential-approval'],
        highlight: 'Hasta 5x Salario',
        terms: {
            cuotas: '12, 18, 24 meses',
            interes: '1.3% EA',
            aprobacion: '48 horas',
            requisitos: 'Nómina en Bancolombia'
        },
        rating: 4.7,
        applications: 2876
    },
    {
        id: 'banco-bogota-pensionado',
        title: 'Crédito Pensionados',
        bank: 'Banco de Bogotá',
        category: 'prestamos',
        type: 'Crédito Pensionados',
        interestRate: 1.1,
        term: 18,
        minAmount: 500000,
        maxAmount: 8000000,
        features: [
            'Tasa pensionados 1.1% EA',
            'Hasta 4x la pensión',
            'Sin codeudor',
            'Trámite simplificado'
        ],
        benefits: ['pension-rate', 'simplified-process', 'no-cosigner'],
        highlight: 'Tasa Pensionados',
        terms: {
            cuotas: '6, 12, 18 meses',
            interes: '1.1% EA',
            aprobacion: '72 horas',
            requisitos: 'Pensión vigente'
        },
        rating: 4.8,
        applications: 1987
    },
    {
        id: 'davivienda-libre',
        title: 'Libre Inversión Flexible',
        bank: 'Davivienda',
        category: 'prestamos',
        type: 'Libre Inversión',
        interestRate: 2.2,
        term: 36,
        minAmount: 2000000,
        maxAmount: 25000000,
        features: [
            'Uso libre del dinero',
            'Cuotas flexibles',
            'Hasta 36 meses',
            'Sin garantías'
        ],
        benefits: ['flexible-use', 'flexible-payments', 'no-collateral'],
        highlight: 'Uso Libre',
        terms: {
            cuotas: '12, 24, 36 meses',
            interes: '2.2% EA',
            aprobacion: '5 días',
            requisitos: 'Ingresos demostrables'
        },
        rating: 4.5,
        applications: 3456
    },
    {
        id: 'bbva-corporativo',
        title: 'Crédito Corporativo',
        bank: 'BBVA',
        category: 'prestamos',
        type: 'Crédito Corporativo',
        interestRate: 0.8,
        term: 60,
        minAmount: 50000000,
        maxAmount: 1000000000,
        features: [
            'Tasa corporativa 0.8% EA',
            'Montos altos',
            'Estructuración a medida',
            'Banca corporativa'
        ],
        benefits: ['corporate-rate', 'high-amounts', 'custom-structure'],
        highlight: 'Tasa Corporativa',
        terms: {
            cuotas: '24, 36, 48, 60 meses',
            interes: '0.8% EA',
            aprobacion: '20 días',
            requisitos: 'Estados financieros auditados'
        },
        rating: 4.9,
        applications: 89
    },
    {
        id: 'colpatria-educacion',
        title: 'Crédito Educativo ICETEX',
        bank: 'Scotiabank Colpatria',
        category: 'prestamos',
        type: 'Crédito Educativo',
        interestRate: 0.5,
        term: 120,
        minAmount: 3000000,
        maxAmount: 50000000,
        features: [
            'Tasa subsidiada 0.5% EA',
            'Hasta 10 años para pagar',
            'Períodos de gracia',
            'Apoyo ICETEX'
        ],
        benefits: ['subsidized-rate', 'grace-period', 'icetex-support'],
        highlight: 'Tasa Subsidiada',
        terms: {
            cuotas: '60, 96, 120 meses',
            interes: '0.5% EA',
            aprobacion: '30 días',
            requisitos: 'Admisión universitaria'
        },
        rating: 4.7,
        applications: 876
    },
    {
        id: 'bancolombia-construccion',
        title: 'Crédito Constructor',
        bank: 'Bancolombia',
        category: 'prestamos',
        type: 'Crédito Constructor',
        interestRate: 1.5,
        term: 36,
        minAmount: 50000000,
        maxAmount: 2000000000,
        features: [
            'Financiación proyectos',
            'Desembolsos por etapas',
            'Tasa constructor',
            'Acompañamiento técnico'
        ],
        benefits: ['project-financing', 'stage-disbursement', 'technical-support'],
        highlight: 'Desembolsos por Etapas',
        terms: {
            cuotas: '12, 24, 36 meses',
            interes: '1.5% EA',
            aprobacion: '30 días',
            requisitos: 'Licencia construcción'
        },
        rating: 4.6,
        applications: 123
    },
    {
        id: 'banco-bogota-agro',
        title: 'Crédito Agropecuario',
        bank: 'Banco de Bogotá',
        category: 'prestamos',
        type: 'Crédito Agropecuario',
        interestRate: 1.0,
        term: 48,
        minAmount: 5000000,
        maxAmount: 100000000,
        features: [
            'Tasa agropecuaria 1.0% EA',
            'Períodos de gracia',
            'Financiación integral',
            'Asesoría técnica'
        ],
        benefits: ['agricultural-rate', 'grace-period', 'technical-advisory'],
        highlight: 'Asesoría Técnica',
        terms: {
            cuotas: '24, 36, 48 meses',
            interes: '1.0% EA',
            aprobacion: '15 días',
            requisitos: 'Actividad agropecuaria'
        },
        rating: 4.5,
        applications: 456
    },
    {
        id: 'davivienda-turismo',
        title: 'Crédito Vacaciones',
        bank: 'Davivienda',
        category: 'prestamos',
        type: 'Crédito Turismo',
        interestRate: 1.7,
        term: 12,
        minAmount: 1000000,
        maxAmount: 10000000,
        features: [
            'Para viajes y turismo',
            'Tasa preferencial turismo',
            'Hasta 12 cuotas',
            'Seguros de viaje incluidos'
        ],
        benefits: ['travel-financing', 'travel-insurance', 'tourism-rate'],
        highlight: 'Seguros Incluidos',
        terms: {
            cuotas: '6, 9, 12 meses',
            interes: '1.7% EA',
            aprobacion: '24 horas',
            requisitos: 'Plan de viaje'
        },
        rating: 4.6,
        applications: 2134
    },
    {
        id: 'bbva-verde',
        title: 'Crédito Verde Sostenible',
        bank: 'BBVA',
        category: 'prestamos',
        type: 'Crédito Verde',
        interestRate: 1.2,
        term: 60,
        minAmount: 5000000,
        maxAmount: 200000000,
        features: [
            'Financiación sostenible',
            'Paneles solares y eólicos',
            'Tasa verde preferencial',
            'Certificación ambiental'
        ],
        benefits: ['green-financing', 'environmental-certification', 'sustainable'],
        highlight: 'Certificación Ambiental',
        terms: {
            cuotas: '24, 36, 48, 60 meses',
            interes: '1.2% EA',
            aprobacion: '10 días',
            requisitos: 'Proyecto sostenible'
        },
        rating: 4.8,
        applications: 321
    },
    {
        id: 'colpatria-mujer',
        title: 'Crédito Mujer Emprendedora',
        bank: 'Scotiabank Colpatria',
        category: 'prestamos',
        type: 'Crédito Mujer',
        interestRate: 1.4,
        term: 24,
        minAmount: 2000000,
        maxAmount: 15000000,
        features: [
            'Tasa preferencial mujeres',
            'Apoyo emprendimiento',
            'Capacitaciones gratuitas',
            'Red de contactos'
        ],
        benefits: ['women-rate', 'entrepreneurship-support', 'free-training'],
        highlight: 'Apoyo Emprendimiento',
        terms: {
            cuotas: '12, 18, 24 meses',
            interes: '1.4% EA',
            aprobacion: '5 días',
            requisitos: 'Proyecto de negocio'
        },
        rating: 4.9,
        applications: 1567
    },
    {
        id: 'bancolombia-tecnologia',
        title: 'Crédito Tecnología 4.0',
        bank: 'Bancolombia',
        category: 'prestamos',
        type: 'Crédito Tecnológico',
        interestRate: 1.1,
        term: 36,
        minAmount: 10000000,
        maxAmount: 500000000,
        features: [
            'Financiación tecnológica',
            'IA, IoT, Blockchain',
            'Tasa innovación',
            'Mentoring técnico'
        ],
        benefits: ['tech-financing', 'innovation-rate', 'technical-mentoring'],
        highlight: 'Mentoring Técnico',
        terms: {
            cuotas: '12, 24, 36 meses',
            interes: '1.1% EA',
            aprobacion: '7 días',
            requisitos: 'Proyecto tecnológico'
        },
        rating: 4.8,
        applications: 789
    }
];

// State management
let filteredOffers = [...bancosOffers];
let currentPage = 1;
const offersPerPage = 9;

// DOM elements
const offersGrid = document.getElementById('offersGrid');
const categoryButtons = document.querySelectorAll('.bancos-cat-btn');
const sortSelect = document.getElementById('sortSelect');
const resultsCount = document.getElementById('resultsCount');
const amountRange = document.getElementById('amountRange');
const amountDisplay = document.getElementById('amountDisplay');
const searchInput = document.getElementById('searchInput');

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    renderOffers();
    setupEventListeners();
    updateAmountDisplay();
    
    // Activate first category
    if (categoryButtons.length > 0) {
        categoryButtons[0].classList.add('active');
        filterByCategory(categoryButtons[0].dataset.category);
    }
});

// Event listeners
function setupEventListeners() {
    // Category filters
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Update active state
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter offers
            filterByCategory(btn.dataset.category);
        });
    });

    // Sorting
    if (sortSelect) {
        sortSelect.addEventListener('change', sortOffers);
    }

    // Amount filter
    if (amountRange) {
        amountRange.addEventListener('input', () => {
            updateAmountDisplay();
            applyFilters();
        });
    }

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchOffers(e.target.value);
        });
    }

    // Checkbox filters
    document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
}

// Filter functions
function filterByCategory(category) {
    if (category === 'todos') {
        filteredOffers = [...bancosOffers];
    } else {
        filteredOffers = bancosOffers.filter(offer => 
            offer.category === category
        );
    }
    
    applyFilters();
}

function applyFilters() {
    let filtered = [...filteredOffers];

    // Apply amount filter
    if (amountRange) {
        const maxAmount = parseInt(amountRange.value);
        filtered = filtered.filter(offer => offer.minAmount <= maxAmount);
    }

    // Apply bank filters
    const selectedBanks = getSelectedFilters('bank');
    if (selectedBanks.length > 0) {
        filtered = filtered.filter(offer => 
            selectedBanks.includes(offer.bank.toLowerCase().replace(/\s+/g, '-'))
        );
    }

    // Apply interest filters
    const selectedInterest = getSelectedFilters('interest');
    if (selectedInterest.length > 0) {
        filtered = filtered.filter(offer => {
            if (selectedInterest.includes('0') && offer.interestRate === 0) return true;
            if (selectedInterest.includes('low') && offer.interestRate > 0 && offer.interestRate <= 5) return true;
            if (selectedInterest.includes('preferential') && offer.benefits.some(b => b.includes('rate'))) return true;
            return false;
        });
    }

    // Apply term filters
    const selectedTerms = getSelectedFilters('term');
    if (selectedTerms.length > 0) {
        filtered = filtered.filter(offer =>
            selectedTerms.some(term => 
                offer.term <= parseInt(term) || 
                offer.terms.cuotas.includes(term)
            )
        );
    }

    // Apply benefits filters
    const selectedBenefits = getSelectedFilters('benefits');
    if (selectedBenefits.length > 0) {
        filtered = filtered.filter(offer =>
            selectedBenefits.some(benefit =>
                offer.benefits.some(b => 
                    b.toLowerCase().includes(benefit) ||
                    benefit === 'cashback' && b.includes('cashback') ||
                    benefit === 'points' && b.includes('points') ||
                    benefit === 'miles' && b.includes('miles') ||
                    benefit === 'discounts' && b.includes('discounts')
                )
            )
        );
    }

    filteredOffers = filtered;
    currentPage = 1;
    sortOffers();
}

function getSelectedFilters(filterName) {
    const checkboxes = document.querySelectorAll(`input[name="${filterName}"]:checked`);
    return Array.from(checkboxes).map(cb => cb.value.toLowerCase());
}

// Search functionality
function searchOffers(query) {
    if (!query) {
        filteredOffers = [...bancosOffers];
    } else {
        const searchTerm = query.toLowerCase();
        filteredOffers = bancosOffers.filter(offer => 
            offer.title.toLowerCase().includes(searchTerm) ||
            offer.bank.toLowerCase().includes(searchTerm) ||
            offer.type.toLowerCase().includes(searchTerm) ||
            offer.features.some(feature => feature.toLowerCase().includes(searchTerm)) ||
            offer.benefits.some(benefit => benefit.toLowerCase().includes(searchTerm))
        );
    }
    
    currentPage = 1;
    renderOffers();
}

// Sorting
function sortOffers() {
    const sortValue = sortSelect ? sortSelect.value : 'featured';
    
    switch (sortValue) {
        case 'interest-low':
            filteredOffers.sort((a, b) => a.interestRate - b.interestRate);
            break;
        case 'interest-high':
            filteredOffers.sort((a, b) => b.interestRate - a.interestRate);
            break;
        case 'amount-low':
            filteredOffers.sort((a, b) => a.minAmount - b.minAmount);
            break;
        case 'amount-high':
            filteredOffers.sort((a, b) => b.maxAmount - a.maxAmount);
            break;
        case 'term-short':
            filteredOffers.sort((a, b) => a.term - b.term);
            break;
        case 'term-long':
            filteredOffers.sort((a, b) => b.term - a.term);
            break;
        case 'bank':
            filteredOffers.sort((a, b) => a.bank.localeCompare(b.bank));
            break;
        default: // featured
            filteredOffers.sort((a, b) => (b.rating * b.applications) - (a.rating * a.applications));
    }
    
    renderOffers();
}

// Rendering functions
function renderOffers() {
    if (!offersGrid) return;

    const startIndex = (currentPage - 1) * offersPerPage;
    const endIndex = startIndex + offersPerPage;
    const offersToShow = filteredOffers.slice(startIndex, endIndex);

    if (offersToShow.length === 0) {
        offersGrid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-search display-1 text-muted"></i>
                <h3 class="mt-3 text-muted">No se encontraron ofertas</h3>
                <p class="text-muted">Intenta ajustar los filtros para encontrar lo que buscas.</p>
            </div>
        `;
        updateResultsCount(0);
        return;
    }

    offersGrid.innerHTML = offersToShow.map(offer => createOfferCard(offer)).join('');
    updateResultsCount(filteredOffers.length);
    renderPagination();
    
    // Add event listeners to new cards
    setupOfferCardListeners();
}

function createOfferCard(offer) {
    return `
        <div class="col-md-6 col-lg-4">
            <div class="offer-card" data-offer-id="${offer.id}">
                <div class="offer-header">
                    <div class="bank-logo">${offer.bank.substring(0, 4).toUpperCase()}</div>
                    <div class="offer-type">${offer.type}</div>
                    <h5 class="offer-title">${offer.title}</h5>
                    <div class="offer-highlight">${offer.highlight}</div>
                </div>
                <div class="offer-content">
                    <ul class="offer-features">
                        ${offer.features.map(feature => `
                            <li><i class="bi bi-check-circle"></i> ${feature}</li>
                        `).join('')}
                    </ul>
                    <div class="offer-terms">
                        <h6>Condiciones</h6>
                        <div class="terms-grid">
                            ${createTermsGrid(offer.terms)}
                        </div>
                    </div>
                    <button class="btn btn-apply" onclick="applyToOffer('${offer.id}')">
                        <i class="bi bi-check-circle me-2"></i>Aplicar Ahora
                    </button>
                </div>
            </div>
        </div>
    `;
}

function createTermsGrid(terms) {
    return Object.entries(terms).map(([key, value]) => `
        <div class="term-item">
            <span class="term-label">${formatTermLabel(key)}:</span>
            <span class="term-value">${value}</span>
        </div>
    `).join('');
}

function formatTermLabel(key) {
    const labels = {
        'cuotas': 'Cuotas',
        'interes': 'Interés',
        'aprobacion': 'Aprobación',
        'requisitos': 'Requisitos'
    };
    return labels[key] || key;
}

// Utility functions
function updateResultsCount(count) {
    if (resultsCount) {
        resultsCount.textContent = `${count} ofertas encontradas`;
    }
}

function updateAmountDisplay() {
    if (amountRange && amountDisplay) {
        const value = parseInt(amountRange.value);
        amountDisplay.innerHTML = `
            <span>Monto mínimo:</span>
            <span class="price-current">$${value.toLocaleString()}</span>
        `;
    }
}

function initializeFilters() {
    // Set amount range max value
    if (amountRange) {
        const maxAmount = Math.max(...bancosOffers.map(o => o.maxAmount || o.minAmount));
        amountRange.max = maxAmount;
        amountRange.value = maxAmount;
    }
}

// Pagination
function renderPagination() {
    const totalPages = Math.ceil(filteredOffers.length / offersPerPage);
    const paginationContainer = document.getElementById('pagination');
    
    if (!paginationContainer || totalPages <= 1) {
        if (paginationContainer) paginationContainer.innerHTML = '';
        return;
    }
    
    let paginationHTML = '<nav aria-label="Navegación de ofertas"><ul class="pagination justify-content-center">';
    
    // Previous button
    paginationHTML += `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage - 1})" tabindex="-1">
                <i class="bi bi-chevron-left"></i>
            </a>
        </li>
    `;
    
    // Page numbers
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    
    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
            <li class="page-item ${i === currentPage ? 'active' : ''}">
                <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
            </li>
        `;
    }
    
    // Next button
    paginationHTML += `
        <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage + 1})">
                <i class="bi bi-chevron-right"></i>
            </a>
        </li>
    `;
    
    paginationHTML += '</ul></nav>';
    paginationContainer.innerHTML = paginationHTML;
}

function changePage(page) {
    const totalPages = Math.ceil(filteredOffers.length / offersPerPage);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderOffers();
        // Scroll to top of offers
        document.getElementById('offersGrid').scrollIntoView({ behavior: 'smooth' });
    }
}

// Offer interaction
function setupOfferCardListeners() {
    // Add hover effects and click handlers
    document.querySelectorAll('.offer-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

function applyToOffer(offerId) {
    const offer = bancosOffers.find(o => o.id === offerId);
    if (!offer) return;
    
    // Show application modal or redirect
    showApplicationModal(offer);
}

function showApplicationModal(offer) {
    // Create and show modal for offer application
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'applicationModal';
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header" style="background: var(--bancos-gradient); color: white;">
                    <h5 class="modal-title">Aplicar a: ${offer.title}</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <h6>Detalles de la Oferta</h6>
                            <ul class="list-unstyled">
                                <li><strong>Banco:</strong> ${offer.bank}</li>
                                <li><strong>Tipo:</strong> ${offer.type}</li>
                                <li><strong>Tasa:</strong> ${offer.interestRate}% EA</li>
                                <li><strong>Plazo:</strong> ${offer.term} meses</li>
                                <li><strong>Monto:</strong> $${offer.minAmount.toLocaleString()} - $${(offer.maxAmount || 0).toLocaleString()}</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h6>Información de Contacto</h6>
                            <form id="applicationForm">
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder="Nombre completo" required>
                                </div>
                                <div class="mb-3">
                                    <input type="email" class="form-control" placeholder="Correo electrónico" required>
                                </div>
                                <div class="mb-3">
                                    <input type="tel" class="form-control" placeholder="Teléfono" required>
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder="Cédula" required>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-apply" onclick="submitApplication('${offer.id}')">
                        Enviar Solicitud
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
    
    // Remove modal after hiding
    modal.addEventListener('hidden.bs.modal', () => {
        modal.remove();
    });
}

function submitApplication(offerId) {
    const offer = bancosOffers.find(o => o.id === offerId);
    
    // Show success feedback
    showApplicationFeedback(offer.title);
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('applicationModal'));
    modal.hide();
}

function showApplicationFeedback(offerTitle) {
    // Create and show toast notification
    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-white border-0 position-fixed';
    toast.style.cssText = `
        top: 20px; right: 20px; z-index: 9999;
        background: var(--bancos-gradient);
    `;
    
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                <i class="bi bi-check-circle me-2"></i>
                Solicitud enviada para: ${offerTitle}. Te contactaremos pronto.
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    const bsToast = new bootstrap.Toast(toast, { delay: 5000 });
    bsToast.show();
    
    // Remove element after hiding
    toast.addEventListener('hidden.bs.toast', () => {
        toast.remove();
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});

function updateCartCount() {
    // This would typically get cart count from localStorage or API
    const cartBadge = document.querySelector('.cart-count');
    if (cartBadge) {
        const cart = JSON.parse(localStorage.getItem('alkosto-cart') || '[]');
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartBadge.textContent = totalItems;
        cartBadge.style.display = totalItems > 0 ? 'block' : 'none';
    }
}