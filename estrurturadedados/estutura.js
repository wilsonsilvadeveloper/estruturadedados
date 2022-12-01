var p = document.getElementById("valorArray")
var tamAraay = document.getElementById("tamanhodoArray")
var pNome = document.getElementById("valorArrayNome");
var pNomeTam = document.getElementById("tamnhoArrayNome");

var input = document.getElementById("pesquisaArray");
var inputNome = document.getElementById("pesquisaNome");
var adicionarNome = document.getElementById("adiconaNome");
var arrays = [];
var arrayNome = []
var maxArray = 200;
var i = 0;
var etapas = 0;

function inciarArray() {
    while(i <= maxArray) {
        arrays.push(i);
        i++;
    }
    p.innerHTML ="arrays de numeros " + arrays;
    tamAraay.innerHTML = "o tamanho do array é " + (arrays.length -1);

}
function PesquisaArray() {

    if (input.value == '') {
        alert('input vazio');
    } else if(arrays.length == 0) {
        alert("array vazio");
    }else {
        for(var ii = 0; ii < arrays.length; ii++) {
        
            if(arrays[ii] == input.value) {
                alert("Numero encontrado " + arrays[ii])
                alert("a procura demorou " + etapas + " etapas");
                break;
            }
    
            etapas++;
        }
    }
    

    tamAraay.innerHTML = "o tamanho do array é " + (arrays.length -1);
    etapas = 0;
}

function buscaBinaria() {
    var firtsIndex = 0;
    var lastIndex = arrays.length -1;
    var midIndex = 0;

    while (lastIndex >= firtsIndex) {
        midIndex = Math.floor((firtsIndex + lastIndex) / 2);
        
        if (input.value > arrays[midIndex]) {
            firtsIndex = midIndex + 1;
        } else if(input.value < arrays[midIndex]) {
            lastIndex = midIndex -1;
        } else if (input.value == arrays[midIndex]) {
            alert("numero encontrado " + arrays[midIndex])
            alert("a procura levou " + etapas + " etapas")
            break;
        }
        etapas++;
    }
    tamAraay.innerHTML = "o tamanho do array é " + (arrays.length -1);
    
    
    etapas = 0;
}

function adicionar() {
    maxArray+= 200;
    inciarArray();
}



