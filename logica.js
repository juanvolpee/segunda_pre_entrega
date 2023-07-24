console.table(productos); 
let contenedorProds = document.getElementById('misprods')

function filtrarPorPrecio(precioMax){
    const filtrados = productos.filter((producto) => producto.precio <= precioMax);
    return filtrados;
}



//ver todos los productos
let opcion=parseInt(prompt("Ingrese opcion: \n1-VER PRODUCTOS\n2-FILTRAR PRODUCTOS\n0-SALIR"))
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


