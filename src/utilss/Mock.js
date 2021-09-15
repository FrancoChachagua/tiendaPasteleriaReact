const productos = [
        {
            nombreProducto: "Rolls",
            imagenProducto:"https://i.ibb.co/x8LqVj8/receta-Rolls.jpg",
            esProductolight:"No es un producto light",
            esProductoVegano: "No es un producto vegano", 
            sinTACC:false,
            precioProducto:"$900",
            cantidadQueSeCompra: "1 unidad",
            idProducto: 100
        },
        {
    
            nombreProducto: "Chochotorta",
            imagenProducto:"https://i.ibb.co/2j8w8vn/producto-Chocotorta.jpg",
            esProductolight:"No es un producto light",
            esProductoVegano: "No es un producto vegano", 
            sinTACC:false,
            precioProducto:"$1500",
            cantidadQueSeCompra: "1 unidad",
            idProducto: 101
        },
        {
            nombreProducto: "Daquoise",
            imagenProducto:"https://i.ibb.co/MnKcZV1/receta-Dacquoise.jpg",
            esProductolight:"No es un producto light",
            esProductoVegano: "No es un producto vegano", 
            sinTACC:false,
            precioProducto:"$1500",
            cantidadQueSeCompra: "1 unidad",
            idProducto: 102
        },
        {
            nombreProducto: "Pastel Fram",
            imagenProducto:"https://i.ibb.co/w7q19Jc/receta-Pastel-Frambuesas.jpg",
            esProductolight:"No es un producto light",
            esProductoVegano: "No es un producto vegano", 
            sinTACC:false,
            precioProducto:"$1500",
            idProducto: 103
        },
        {
            nombreProducto: " Pastel FrRojos",
            imagenProducto:"https://i.ibb.co/xLJ55qC/recetas-pastel-frutos-rojos.jpg",
            esProductolight:"No es un producto light",
            esProductoVegano: "No es un producto vegano", 
            sinTACC:false,
            precioProducto:"$1280",
            cantidadQueSeCompra: "1 unidades",
            idProducto: 104
        },
        {
            nombreProducto: "Medialunas",
            imagenProducto:"https://i.ibb.co/j89z69V/Croissants-with-coffee.jpg",
            esProductolight:"No es un producto light",
            esProductoVegano: "No es un producto vegano", 
            sinTACC:false,
            precioProducto:"$350",
            cantidadQueSeCompra: "12 unidades",
            idProducto: 105
        },
        {
            nombreProducto: "Tarta de Z.",
            imagenProducto:"https://i.ibb.co/PZmd875/recetas-Pastel.jpg",
            esProductolight:"Es un producto light",
            esProductoVegano: "Es un producto vegano", 
            sinTACC:false,
            precioProducto:"$2500",
            cantidadQueSeCompra: "1 unidad",
            idProducto: 106
        },
        {
            nombreProducto: "Brownie",
            imagenProducto:"https://i.ibb.co/qDbX3HC/mini-brownies.jpg",
            esProductolight:"No es un producto light",
            esProductoVegano: "No es un producto vegano", 
            sinTACC:false,
            precioProducto:"$2350",
            cantidadQueSeCompra: "1 unidad",
            idProducto: 107
        },
        {
            nombreProducto: "Donas",
            imagenProducto:"https://i.ibb.co/ZJnPSPr/recetas-donutssalados.jpg",
            esProductolight:"No es un producto light",
            esProductoVegano: "No es un producto vegano", 
            sinTACC:false,
            precioProduct:"$800",
            cantidadQueSeCompra: "6 unidades",
            idProducto: 108
        }
];

export const callApi = new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(productos)
        }, 5000);
})

