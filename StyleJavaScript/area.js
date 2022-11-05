//triangulo

let boton = document.getElementById("sumar")
let respuesta = document.getElementById("respuesta")
let perimetro = document.getElementById("perimetro")

boton.addEventListener("click", hacerSuma)

function hacerSuma(){
    let n1 = parseFloat(document.getElementById("n1"). value);
    let n2 = parseFloat(document.getElementById("n2"). value);
    let s = n1*n2/2
    respuesta.innerHTML=`El área del triangulo es: ${s}cm²`;

    // let p = n1+n2+5
    // perimetro.innerHTML=`El perimetro del triangulos es. ${p}cm`
}

//rectangulo


let boton2 = document.getElementById("sumars")
let respuesta2 = document.getElementById("respuestas")
let perimetro2 = document.getElementById("perimetro2")

boton2.addEventListener("click", hacerO)

function hacerO(){
    let n3 = parseFloat(document.getElementById("n3"). value);
    let n4 = parseFloat(document.getElementById("n4"). value);
    let so = n3*n4
    respuesta2.innerHTML=`El área del rectángulo es: ${so}cm²`;
    let r2 = n3*2+n4*2
    perimetro2.innerHTML=`El perimetro del rectángulo es: ${r2}cm`
}

//cuadrado

let boton3 = document.getElementById("cuadro")
let respuesta3 = document.getElementById("respues")
let perimetro3 = document.getElementById("perimetro3")


boton3.addEventListener("click", hacerOP)

function hacerOP(){
    let n5 = parseFloat(document.getElementById("n5"). value);
    let sol = n5*n5
    respuesta3.innerHTML=`El area del cuadrado es: ${sol}cm²`;
    let p1 = n5*4
    perimetro3.innerHTML=`El perimetro del cuandrado es: ${p1}cm`
}


//circulo

let boton4 = document.getElementById("circulo")
let respuesta4 = document.getElementById("radio")

boton4.addEventListener("click", hacerOPE)

function hacerOPE(){
    let n6 = parseFloat(document.getElementById("n6").value)
    const PI = 3.1416
    let solu = PI*n6*n6
    respuesta4.innerHTML=`El área del circulo es: ${solu}cm²`
}

//rombo

let boton5 = document.getElementById("rombo")
let respuesta5 = document.getElementById("diagonal")

boton5.addEventListener("click", hacerOPER)

function hacerOPER(){
    let n7 = parseFloat(document.getElementById("n7").value)
    let n8 = parseFloat(document.getElementById("n8").value)
    let soluc = n7*n8/2
    respuesta5.innerHTML=`El área del rombo es: ${soluc}cm²`
}

//Pentágono

let boton6 = document.getElementById("pentagono")
let respuesta6 = document.getElementById("apotema")

boton6.addEventListener("click", hacerOPERA)

function hacerOPERA(){
    let n9 = parseFloat(document.getElementById("n9").value)
    p = n9*5
    let n10 = parseFloat(document.getElementById("n10").value)
    let soluci = p*n10/2
    respuesta6.innerHTML=`El área del pentágono es: ${soluci}cm²`
}

//paralelogramo

let boton8 = document.getElementById("paralelogramo")
let respuesta8 = document.getElementById("paralelo")

boton8.addEventListener("click", hacerOPERACI)

function hacerOPERACI(){
    let n11 = parseFloat(document.getElementById("n11").value)
    let n12 = parseFloat(document.getElementById("n12").value)
    let s11 = n11*n12
    respuesta8.innerHTML=`El área del paralelogramo es: ${s11}cm²`
}

//cometa

let boton9 = document.getElementById("cometa")
let respuesta9 = document.getElementById("come")

boton9.addEventListener("click", hacer9)

function hacer9(){
    let n13 = parseFloat(document.getElementById("n13").value)
    let n14 = parseFloat(document.getElementById("n14").value)
    let s13 = n13*n14/2
    respuesta9.innerHTML=`El área del cometa es: ${s13}cm²`
}


//trapecio

let boton7 = document.getElementById("trapecio")
let respuesta7 = document.getElementById("trape")

boton7.addEventListener("click", hacerOPERAC)
function hacerOPERAC(){
    let n15 = parseFloat(document.getElementById("n15").value)
    let n16 = parseFloat(document.getElementById("n16").value)
    t = n15+n16
    let n17 = parseFloat(document.getElementById("n17").value)
    let solucio = t*n17/2
    respuesta7.innerHTML = `El área del trapecio es: ${solucio}cm²`
}





