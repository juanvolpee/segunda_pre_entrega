console.table(productos); 
let contenedorProds = document.getElementById('misprods')

function filtrarPorPrecio(precioMax){
    const filtrados = productos.filter((producto) => producto.precio <= precioMax);
    return filtrados;
}

class producto{
    constructor(id,nombre,precio){
        this.id=id
        this.nombre=nombre
        this.precio=precio
    }
    mostrarProducto(){
        alert(this.id+" - "+this.nombre+" - Precio: "+this.precio)
    }
}

function crearProducto(){
    let id=productos.length + 1;
    let nombre=prompt("Ingrese nombre de producto")
    let precio=parseInt(prompt("Ingrese precio de producto"))

    const nuevoProducto = new producto(id,nombre,precio)
    productos.push(nuevoProducto)
}




//ver todos los productos
let opcion=parseInt(prompt("Ingrese opcion: \n1-VER PRODUCTOS\n2-FILTRAR PRODUCTOS\n3-CREAR PRODUCTO\n0-SALIR"))
let precioUsuario //= parseFloat(prompt('Ingresa el precio maximo que puedes abonar (0-salir)'));//renderizarProductos(productos)
    switch(opcion){
        case 1:
            renderizarProductos(productos);
            break;
        case 2:
            precioUsuario = parseFloat(prompt('Ingresa el precio maximo que puedes abonar'));
                if(isNaN(precioUsuario) || precioUsuario < 0){
                    alert('Por favor, ingrese un numero valido 😲');
                }else{
                    const prodsFiltrados = filtrarPorPrecio(precioUsuario);
                    console.table(prodsFiltrados);
                    renderizarProductos(prodsFiltrados);
                }
                break;
        case 3:
            crearProducto()
            console.table(productos)
            alert("Ingrese a consola para ver el producto agregado😁")
            break;
        default:
            alert("Ingreso una opcion incorrecta👀")
            alert("ACTULICE LA PAGINA🌌")
            
        }

//DOM
function renderizarProductos(listaProds){
    for(const producto of listaProds){
        contenedorProds.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src=${producto.foto} alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.precio}</p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>
        `;
    }
}


