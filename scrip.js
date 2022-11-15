let productos = [
    { id: 0, nombre: "placa de video rx 6700xt", precio: 4000, stock: 30, imgUrl: "./imagenes/rx6700xt.png" },
    { id: 1, nombre: "placa de video gtx1660 super", precio: 3000, stock: 20, imgUrl: "./imagenes/gtx1660super.png" },
    { id: 2, nombre: "monitor ASUS", precio: 2000, stock: 10, imgUrl: "./imagenes/monitorasus.jpg" },
    { id: 3, nombre: "intel Core i3", precio: 2600, stock: 50, imgUrl: "./imagenes/corei3.jpg" },
    { id: 4, nombre: "intel Core i5", precio: 5300, stock: 80, imgUrl: "./imagenes/corei5.jpg" },
    { id: 5, nombre: "intel Core i7", precio: 6700, stock: 20, imgUrl: "./imagenes/corei7.png" },
    { id: 6, nombre: "monitor Gygabyte", precio: 8000, stock: 80, imgUrl: "./imagenes/monitorgigabyte.png" },
    { id: 7, nombre: "msi gtx 1660 super", precio: 9000, stock: 90, imgUrl: "./imagenes/msigtx1660super.jpg" },
    { id: 8, nombre: "msi rtx 3060ti", precio: 4600, stock: 30, imgUrl: "./imagenes/msirtx3060ti.jpg" },
    { id: 9, nombre: "notebook rog", precio: 8700, stock: 20, imgUrl: "./imagenes/notebookrog.jpg" },
    { id: 10, nombre: "notebook tuf gaming", precio: 4200, stock: 80, imgUrl: "./imagenes/notebooktufgaming.jpg" },
    { id: 11, nombre: "rx 6800 xt", precio: 5400, stock: 20, imgUrl: "./imagenes/rx6800xt.png" },
]

let contenedorProductos = document.getElementById('contenedorProductos')

for (const producto of productos) {
    let tarjetaProducto = document.createElement('div')
    tarjetaProducto.className = 'productoStyle'
    tarjetaProducto.innerHTML = `
    <h3>${producto.nombre}</h3>
    <h4>$${producto.precio}</h4>
    <p>quedan ${producto.stock} u.</p>
    <img src=${producto.imgUrl}>
    <button class="boton" id=${producto.id}>Agregar Al Carrito</button>
    `
    contenedorProductos.append(tarjetaProducto)
}

let botones = document.getElementsByClassName('boton')

let carrito = document.getElementById('carrito')

let carritosStorage = []

let carritoTotal = []

if (localStorage.getItem('carrito')) {
    carritosStorage = JSON.parse(localStorage.getItem('carrito'))
}

for (const item of carritosStorage) {
    let productoBuscado = productos.find(producto => producto.id == item.id)
    carrito.innerHTML += `
    <p>${productoBuscado.nombre} </p>
    <p>$${productoBuscado.precio}</p>
    <img class ="carritoimg" src=${productoBuscado.imgUrl}>            
`
}



for (const boton of botones) {
    boton.onclick = (e) => {
        let productoBuscado = productos.find(producto => producto.id == e.target.id)

        carrito.innerHTML += `
            <p>${productoBuscado.nombre}</p>
            <p>$${productoBuscado.precio}</p>
            <img class ="carritoimg" src=${productoBuscado.imgUrl}>         
        `
        carritosStorage.push({ id: productoBuscado.id, nombre: productoBuscado.nombre, precio: productoBuscado.precio })
        localStorage.setItem('carrito', JSON.stringify(carritosStorage))
    }
    
    
}
let inputBusqueda = document.getElementById("busqueda")
let botonBuscar = document.getElementById("buscar")

botonBuscar.onclick = () => {
    let productosFiltrados = productos.filter(producto => producto.nombre.includes(inputBusqueda.value))
    filtrarProductos(productosFiltrados)
}
function filtrarProductos(productosFiltrados) {
    let productosABuscar = []
    if (productosFiltrados) {
        productosABuscar = productosFiltrados
    }
    contenedorProductos.innerHTML = ''
    for (const producto of productosABuscar) {
        let tarjetaProducto = document.createElement('div')
        tarjetaProducto.className = 'productoStyle'
        tarjetaProducto.innerHTML = `
        <h3>${producto.nombre}</h3>
        <h4>$${producto.precio}</h4>
        <p>quedan ${producto.stock} u.</p>
        <img src=${producto.imgUrl}>
        <button class="boton" id=${producto.id}>Agregar Al Carrito</button>
        `
        contenedorProductos.append(tarjetaProducto)
    }
}

