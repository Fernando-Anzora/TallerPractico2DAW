const agregarcanastaboton = document.querySelectorAll(".BotonCombo");
agregarcanastaboton.forEach(agregarcarta =>{
    agregarcarta.addEventListener("click",agregarcartaclick);  
});

const Cartashtml = document.querySelector(".encabezado");

var monto = 0;
var Mm = 0;
var i = 0;
var productoscartas = [];

function agregarcartaclick(Event){
    const boton = Event.target;
    const Bcarta = boton.closest(".Sl");
    const Titulocarta = Bcarta.querySelector(".Combotitulo").textContent;
    const Preciocarta = Bcarta.querySelector(".precio").textContent;
    
    agregarcartas(Titulocarta,Preciocarta);
    
}


function agregarcartas(Titulocarta,Preciocarta){
    var Tc = Titulocarta;
    
    
    productoscartas[i] = Titulocarta;
    
    var w = 0;
    var c = 0;
    while(w <= i){
        if (productoscartas[w] == Titulocarta){
            c = c+1;
            if (c == 2){
                productoscartas.splice(w , 1);
                console.log(productoscartas);
                
                }
        }
        
       w++;
    }
    w = 0;
    const CartasCanasta = document.createElement("table");
    const ContenidoCartas = `
             <tr class="tabb">
            <td class="T2">
                <center>
                <p class="T">${Titulocarta}</p>
                </center>
            </td>
            <td class="p"><center>${Preciocarta}</center>
            </td>
            <td><div class="Agregado"><center>
            <input class="Nums" type="number" value="1"><br>
            <button class="Beliminar" type="button">X</button></center>
                        </div>
            </td>

            </tr>

`;
    CartasCanasta.innerHTML = ContenidoCartas;
    
    if(c == 1){
          console.log(productoscartas);
          i = i+1;
        
    Cartashtml.append(CartasCanasta);
    CartasCanasta.querySelector(".Beliminar")
                 .addEventListener("click", quitar);
    
   CartasCanasta.querySelector(".Nums").addEventListener("change",Cambio);
    
    Ddcartas(); 
        
    }else{

    }
     
}

function quitar(Event){
    w = 0;
    const btm = Event.target;
    var Td = btm.closest(".tabb");
    var Tc = Td.querySelector(".T").textContent;
    while(w <= i){
        if (productoscartas[w] == Tc){
            productoscartas.splice(w , 1);
            console.log(productoscartas);
        }
        w++;
    }
          w = 0;
        
    
    btm.closest(".tabb").remove();
    
    Ddcartas();
    
}

function Cambio(Event){
    const cmb = Event.target;
    if (cmb.value <= 0){
        cmb.value = 1;
    }
    if (cmb.value > 10){
        cmb.value = 10;
    }
    Ddcartas();
}

function Ddcartas(){
    let total = 0;
    const totalcompra = document.querySelector(".Pago");
    const campracartas = document.querySelectorAll(".tabb");
    campracartas.forEach(cartascompradas =>{
        const preciocarta = cartascompradas.querySelector(".p");
        const preciotexto = Number(preciocarta.textContent.replace("$" , ""));
        const CantidadCartas = cartascompradas.querySelector(".Nums");
        const valorcartas = Number(CantidadCartas.value);
        total = total + (preciotexto * valorcartas);
    })
    totalcompra.innerHTML = `<h3>EL Total mas iva(+13%):</h3><br>
$ ${(total*1.13).toFixed(2)}
`;
}

const form = document.getElementById('botonB');
form.addEventListener("click",e => {
    
    alert("¡Gracias por su compra!");
    alert("Pronto recibirá su recibo en su Gmail");
});
