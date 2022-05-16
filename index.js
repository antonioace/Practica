document.addEventListener("DOMContentLoaded", e => {
    mostrarDatos()
})

const contenido=document.getElementById("contenido")
var valorInicial=0
var valorFinal=3
async function mostrarDatos(){

    try{
const res=await fetch("https://restcountries.com/v3.1/all")
const data=await res.json()
mostrarInformacion(data)


    }
    catch(e){
        console.log(e)
    }

}

function mostrarInformacion(data){

    for(let i=valorInicial;i<valorFinal;i++){
let contenedor=document.createElement("div")
contenedor.setAttribute("id",i)
contenedor.classList.add("col-md-4")
contenedor.classList.add("p-5")


        const bandera=`
        
        <div class="card" style="width: 18rem;">
  <img src="${data[i].flags.png}" class="card-img-top img-responsive img-cover" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ventanaMostrar">Detalles</button>
    <button class="btn btn-danger" onClick="eliminarNode(${i})">Eliminar</button>
  </div>
</div>
        
       



        
        `

       contenedor.innerHTML=bandera

       contenido.appendChild(contenedor)

    }




}


function verMas(){
valorInicial+=3
valorFinal+=3

mostrarDatos()

}

function eliminarNode(dato){
   const elementoAeliminar=document.getElementById(dato)

   contenido.removeChild(elementoAeliminar)
}