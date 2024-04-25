
function maiorNumero() {
    
    var numero1 = parseFloat(prompt("Digite o primeiro número: "));
    var numero2 = parseFloat(prompt("Digite o segundo número: "));
    var numero3 = parseFloat(prompt("Digite o terceiro número: "));

    
    var maior = numero1;
    if (numero2 > maior) {
        maior = numero2;
    }
    if (numero3 > maior) {
        maior = numero3;
    }

    
    alert("O maior número é: " + maior);
}


function verificarTriangulo() {
    
    var lado1 = parseFloat(prompt("Digite o comprimento do primeiro lado do triângulo: "));
    var lado2 = parseFloat(prompt("Digite o comprimento do segundo lado do triângulo: "));
    var lado3 = parseFloat(prompt("Digite o comprimento do terceiro lado do triângulo: "));

    
    if (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado1 + lado3 > lado2) {
        
        if (lado1 === lado2 && lado2 === lado3) {
            alert("É um triângulo equilátero.");
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            alert("É um triângulo isósceles.");
        } else {
            alert("É um triângulo escaleno.");
        }
    } else {
        alert("Os valores fornecidos não formam um triângulo válido.");
    }
}


maiorNumero();
verificarTriangulo();