const input = document.querySelector(".input");

function agregar(i){
    input.value += i;
}

function borrar(){
    input.value = ""
}

function calcular(){
    const resultado = eval(input.value);
    input.value = resultado;
}