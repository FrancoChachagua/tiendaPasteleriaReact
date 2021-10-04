const productos = [
        {
            nombreProducto: "Rolls",
            imagenProducto:"https://i.ibb.co/x8LqVj8/receta-Rolls.jpg",
            esProductolight:false,
            esProductoVegano:false, 
            sinTACC:true,
            precioProducto:900,
            cantidadQueSeCompra: "1 unidad",
            idProducto: '100',
            category:'Panes'
        },
        {
    
            nombreProducto: "Chochotorta",
            imagenProducto:"https://i.ibb.co/2j8w8vn/producto-Chocotorta.jpg",
            esProductolight:false,
            esProductoVegano:true, 
            sinTACC:true,
            precioProducto:1500,
            cantidadQueSeCompra: "1 unidad",
            idProducto: '101',
            category:'TartasyTortas'
        },
        {
            nombreProducto: "Daquoise",
            imagenProducto:"https://i.ibb.co/MnKcZV1/receta-Dacquoise.jpg",
            esProductolight:true,
            esProductoVegano: true, 
            sinTACC:false,
            precioProducto:1500,
            cantidadQueSeCompra: "1 unidad",
            idProducto: '102',
            category:'TartasyTortas'
        },
        {
            nombreProducto: "Pastel Fram",
            imagenProducto:"https://i.ibb.co/w7q19Jc/receta-Pastel-Frambuesas.jpg",
            esProductolight:true,
            esProductoVegano:true, 
            sinTACC:false,
            precioProducto:1500,
            idProducto: '103',
            category:'TartasyTortas'
        },
        {
            nombreProducto: " Torta FrRojos",
            imagenProducto:"https://i.ibb.co/xLJ55qC/recetas-pastel-frutos-rojos.jpg",
            esProductolight:"No es un producto light",
            esProductoVegano: "No es un producto vegano", 
            sinTACC:false,
            precioProducto:1280,
            cantidadQueSeCompra: "1 unidades",
            idProducto: '104',
            category:'TartasyTortas'
        },
        {
            nombreProducto: "Medialunas",
            imagenProducto:"https://i.ibb.co/j89z69V/Croissants-with-coffee.jpg",
            esProductolight:"No es un producto light",
            esProductoVegano: "No es un producto vegano", 
            sinTACC:false,
            precioProducto:350,
            cantidadQueSeCompra: "12 unidades",
            idProducto: '105',
            category:'Panes'
        },
        {
            nombreProducto: "Tarta de Z.",
            imagenProducto:"https://i.ibb.co/PZmd875/recetas-Pastel.jpg",
            esProductolight:"Es un producto light",
            esProductoVegano: "Es un producto vegano", 
            sinTACC:false,
            precioProducto:2500,
            cantidadQueSeCompra: "1 unidad",
            idProducto: '106',
            category:'PostresSaludables'
        },
        {
            nombreProducto: "Brownie",
            imagenProducto:"https://i.ibb.co/qDbX3HC/mini-brownies.jpg",
            esProductolight:"No es un producto light",
            esProductoVegano: "No es un producto vegano", 
            sinTACC:false,
            precioProducto:2350,
            cantidadQueSeCompra: "1 unidad",
            idProducto: '107',
            category:'TartasyTortas'
        },
        {
            nombreProducto: "Donas",
            imagenProducto:"https://i.ibb.co/ZJnPSPr/recetas-donutssalados.jpg",
            esProductolight:"No es un producto light",
            esProductoVegano: "No es un producto vegano", 
            sinTACC:false,
            precioProducto:800,
            cantidadQueSeCompra: "6 unidades",
            idProducto: '108',
            category:'Panes'
        },
        {
            nombreProducto: "Galletas",
            imagenProducto:"https://i.ibb.co/qN3K1J9/galletas-YBizcochos-cookie.jpg",
            esProductolight:"No es un producto light",
            esProductoVegano: "No es un producto vegano", 
            sinTACC:false,
            precioProducto:300,
            cantidadQueSeCompra: "12 unidades",
            idProducto: '109',
            category:'galletasYBizcochos'
        },
        {
            nombreProducto: "Bizcocho Genoves",
            imagenProducto:"https://i.ibb.co/6NvTRQx/galletas-YBizcochos-bizcocho-Genoves.jpg",
            esProductolight:"No es un producto light",
            esProductoVegano: "No es un producto vegano", 
            sinTACC:false,
            precioProducto:900,
            cantidadQueSeCompra: "1 unidad",
            idProducto: '110',
            category:'galletasYBizcochos'
        },
        {
            nombreProducto: "Budin Navideño",
            imagenProducto:"https://i.ibb.co/RhzX6Pp/Homemade-christmas-cake-with-wild-berries-on-woonen-background.jpg",
            esProductolight:"No es un producto light",
            esProductoVegano: "No es un producto vegano", 
            sinTACC:false,
            precioProducto:1200,
            cantidadQueSeCompra: "1 unidad",
            idProducto: '111',
            category:'postresPorOcasion'
        },
        {
            nombreProducto: "Torta Navideña",
            imagenProducto:"https://i.ibb.co/99ZGQ4d/postres-Por-Ocasion-torta-Navide-a-Simple.jpg",
            esProductolight:"Es un producto light",
            esProductoVegano: "Es un producto vegano", 
            sinTACC:false,
            precioProducto:2200,
            cantidadQueSeCompra: "1 unidad",
            idProducto: '112',
            category:'postresPorOcasion'
        },
        {
            nombreProducto: "Rosca de Pascua",
            imagenProducto:"https://i.ibb.co/rvDsQBM/postres-Por-Ocasion-rosca-De-Pascua.jpg",
            esProductolight:"Es un producto light",
            esProductoVegano: "Es un producto vegano", 
            sinTACC:false,
            precioProducto:700,
            cantidadQueSeCompra: "1 unidad",
            idProducto: '113',
            category:'postresPorOcasion'
        },
        {
            nombreProducto: "Torta de Cumpleaños",
            imagenProducto:"https://i.ibb.co/VWV2cfY/postres-Por-Ocasion-Torta-De-Cumplea-os.jpg",
            esProductolight:"No es un producto light",
            esProductoVegano: "No es un producto vegano", 
            sinTACC:false,
            precioProducto:2500,
            cantidadQueSeCompra: "1 unidad",
            idProducto: '114',
            category:'postresPorOcasion'
        }
];
const productwo = productos.find(( p => p.idProducto === '100'));

console.log(productwo);

export const callApi = new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(productos)
        }, 2000);
})

export const callApiTwo = new Promise ((resolve) =>{
    setTimeout(() => {
        resolve(productwo)
    }, 3500);
})