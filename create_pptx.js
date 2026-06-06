const pptxgen = require('pptxgenjs');

const pres = new pptxgen();

// Theme Colors
const COLORS = {
    primary: '0071E3', // Apple Blue
    secondary: 'F5F5F7', // Light Gray
    text: '1D1D1F', // Dark Gray/Black
    accent: '00C2FF' // Bright Blue
};

// Slide 1: Title
const slide1 = pres.addSlide();
slide1.background = { fill: COLORS.text };
slide1.addText("CORFAMEP S.A.", { 
    x: 0, y: '40%', w: '100%', 
    align: 'center', 
    fontSize: 44, 
    bold: true, 
    color: 'FFFFFF' 
});
slide1.addText("Pureza, Higiene e Innovación", { 
    x: 0, y: '55%', w: '100%', 
    align: 'center', 
    fontSize: 24, 
    color: COLORS.accent 
});

// Slide 2: Who we are
const slide2 = pres.addSlide();
slide2.background = { fill: COLORS.secondary };
slide2.addText("Somos Fabricantes", { 
    x: 0.5, y: 0.5, w: '90%', 
    fontSize: 32, 
    bold: true, 
    color: COLORS.text 
});
slide2.addText("Especialistas en productos de limpieza e higiene personal. Ofrecemos calidad garantizada y precios directos de fábrica.", { 
    x: 0.5, y: 1.2, w: '90%', 
    fontSize: 18, 
    color: COLORS.text 
});

// Slide 3: Product List (Grid)
const slide3 = pres.addSlide();
slide3.addText("Catálogo de Productos", { 
    x: 0.5, y: 0.5, w: '90%', 
    fontSize: 32, 
    bold: true, 
    color: COLORS.text 
});

const products = [
    "Cloro", "Desinfectante multisuperficies", "Alcohol", "Jabón líquido", 
    "Jabón de lavar (barra)", "Jabón antibacterial", "Detergente en polvo", 
    "Detergente líquido", "Suavizante", "Servilletas", "Toallas de mano"
];

products.forEach((prod, i) => {
    const col = i < 6 ? 0.5 : 5.5;
    const row = (i % 6) * 0.6 + 1.2;
    slide3.addText(`• ${prod}`, { 
        x: col, y: row, w: 4, 
        fontSize: 16, 
        color: COLORS.text 
    });
});

// Slide 4: Commercial Info
const slide4 = pres.addSlide();
slide4.background = { fill: COLORS.primary };
slide4.addText("Contacto y Ventas", { 
    x: 0, y: '30%', w: '100%', 
    align: 'center', 
    fontSize: 36, 
    bold: true, 
    color: 'FFFFFF' 
});
slide4.addText("Venta al por mayor y menor", { 
    x: 0, y: '45%', w: '100%', 
    align: 'center', 
    fontSize: 20, 
    color: 'FFFFFF' 
});
slide4.addText("Teléfonos:\n0993 831 717 / 0987 875 698", { 
    x: 0, y: '60%', w: '100%', 
    align: 'center', 
    fontSize: 24, 
    bold: true, 
    color: 'FFFFFF' 
});

pres.writeFile({ fileName: 'Presentacion_Corfamep.pptx' }).then(fileName => {
    console.log(`File created: ${fileName}`);
    process.exit();
}).catch(err => {
    console.error(err);
    process.exit(1);
});
