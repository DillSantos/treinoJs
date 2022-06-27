const input = require("fs").readFileSync("stdin.txt", "utf8");

const entrada = input.split('\n');

// var glicoseInfo = parseInt(entrada);
// if (glicoseInfo <= 100) {
//     console.log("Clasificação: normal");
// } else if (glicoseInfo <= 140) {
//     console.log("Classificação: elevado");
// } else {
//     console.log("Classificação: diabetes");
// }

// if (glicoseInfo <= 100) {
//     console.log("Clasificação: normal");
// } else if (glicoseInfo > 101) {
//     console.log("Classificação: elevado");
// } else if (glicoseInfo <= 140) {
//     console.log("Classificação: elevado");
// }
// if (glicoseInfo > 140) {
//     console.log("Classificação: diabetes");
// }



// // caixa registradora VALIDANDO TROCO
// var valorProduto = parseFloat(entrada.shift());
// var quantidadeItens = entrada.shift();
// var valorREcebido = parseFloat(entrada.shift());

// var valorTotal = parseFloat(valorProduto * quantidadeItens);
// console.log(`QUANTIDADE DE iNTENS: ${quantidadeItens}`)
// console.log(`VALOR UNIDADE: ${valorProduto.toFixed(2)}`)
// console.log(`TOTAL A PAGAR = ${valorTotal.toFixed(2)} REAIS`);
// console.log(`VALOR RECEBIDO = ${valorREcebido.toFixed(2)} REAIS`);

// if (valorREcebido < valorTotal) {
//     diferença = parseFloat(valorTotal - valorREcebido).toFixed(2);
//     console.log(`DINHEIRO INSUFICIENTE. FALTAM ${diferença} REAIS`);
// } else {
//     troco = valorREcebido - valorTotal;
//     console.log(`TROCO = ${troco.toFixed(2)} REAIS`)
// }






//CUSTO DE ME=INUTOS DE UMA OPERADORA
// var custoMinutosOp = 50.00;
// if (entrada > 100) {
//     minutosUsados = (entrada - 100) * 2.00 + custoMinutosOp;
//     console.log(`Valor a pagar: $${minutosUsados.toFixed(2)}`)
// } else {
//     console.log("Valor a pagar: $", custoMinutosOp.toFixed(2));
// }





// // //USANDO O SWITCH PARA RESOLVER O MESMO PROBLEMA

// const dias = ["Domingo", "Segunda",
//     "terça", "Quarta", "Quinta", "Sexta", "Sabado"];
// var dia = 0;
// switch (entrada) {
//     case 1:
//         dia = dias[0];
//         break;
//     case 2:
//         dia = dias[1];
//         break;
//     case 3:
//         dia = dias[2];
//         break;
//     case 4:
//         dia = dias[3];
//         break;
//     case 5:
//         dia = dias[4];
//         break;
//     case 6:
//         dia = dias[5];
//         break;
//     case 7:
//         dia = dias[6];
//         break;
//     default:
//         console.log(`Dia da semana Invalido!`)
//         break;
// }
// if (entrada <= 7) {
//     console.log(`Dia da semana é ${dia}`);
// }


// switch (entrada) {
//     case 1:
//         console.log(`Dia da semana é ${dias[0]}`);
//         break;
//     case 2:
//         console.log(`Dia da semana é ${dias[1]}`);
//         break;
//     case 3:
//         console.log(`Dia da semana é ${dias[2]}`);
//         break;
//     case 4:
//         console.log(`Dia da semana é ${dias[3]}`);
//         break;
//     case 5:
//         console.log(`Dia da semana é ${dias[4]}`);
//         break;
//     case 6:
//         console.log(`Dia da semana é ${dias[5]}`);
//         break;
//     case 7:
//         console.log(`Dia da semana é ${dias[6]}`);
//         break;

//     default:
//         console.log(`Dia da semana Invalido!`)
//         break;
// }
// SOLUÇÃO USANDO IF E ELSE IF
// if (entrada == 1) {
//     console.log(`Dia da semana é ${dias[0]}`);
// } else if (entrada == 2) {
//     console.log(`Dia da semana é ${dias[1]}`);
// } else if (entrada == 3) {
//     console.log(`Dia da semana é ${dias[2]}`);
// } else if (entrada == 4) {
//     console.log(`Dia da semana é ${dias[3]}`);
// } else if (entrada == 5) {
//     console.log(`Dia da semana é ${dias[4]}`)
// } else if (entrada == 6) {
//     console.log(`Dia da semana é ${dias[5]}`)
// } else if (entrada == 7) {
//     console.log(`Dia da semana é ${dias[6]}`)
// } else {
//     console.log(`Dia da semana Invalido!`)
// }


// //COMPARANDO OS MENORES
// var A = parseInt(entrada.shift());
// var B = parseInt(entrada.shift());
// var C = parseInt(entrada.shift());

// if (A < B && A < C) {
//     var menor = A;
// } else if (B < C) {
//     var menor = B;
// } else {
//     var menor = C;
// }
// console.log(`MENOR = ${menor}`);










// // //BASKARA
// const coef = input.split('\n');

// var A = parseFloat(coef.shift());
// var B = parseFloat(coef.shift());
// var C = parseFloat(coef.shift());



// var delta = B * B - 4 * A * C;
// if (A <= 0) {
//     console.log("MINHA EQUAÇÃO NÃO POSSUI RAIZES, O COEFICIENTE 'A' É ZERO!");
// } else if (delta <= 0) {
//     console.log("MINHA EQUAÇÃO NÃO POSSUI RAIZES");
// } else {
//     var x1 = (-B + Math.sqrt(delta)) / (2 * A);
//     var x2 = (-B - Math.sqrt(delta)) / (2 * A);
//     console.log(x1.toFixed(4));
//     console.log(x2.toFixed(4));
// }





// const notas = input.split('\n');

// var nota1 = parseFloat(notas.shift());
// var nota2 = parseFloat(notas.shift());
// var media = parseFloat(nota1 + nota2).toFixed(1);
// console.log(`NOTA FINAL = ${media}`)
// if (media < 60) {
//     console.log("REPROVADO!")
// }










// const [A, B, C] = input.split(" ").map(item => parseInt(item));


// const maiorAB = (A + B + Math.abs(A - B)) / 2;
// const maiorXC = (C + maiorAB + Math.abs(C - maiorAB)) / 2;
// console.log(`${maiorXC} eh o maior`)







// //transformando um valor inteiro em horas minutos e segundos
// let segundos = parseInt(input);//transformando o input em um numero inteiro

// const horas = parseInt(segundos / 3600);// tranformando o resultado da divisão em um numero inteiro
// segundos = segundos % 3600;//trocando o valor da variavel segundos pelo resto da operação de numeros inteiros

// const minutos = parseInt(segundos / 60);//minutos inteiros
// segundos = segundos % 60; //segundos restantes ao final de todas as operações

// console.log(`${horas}:${minutos}:${segundos}`);//imprimindo



// //calculando consumo
// var distancia = entrada.shift();
// var combustivel = entrada.shift();

// var media = parseFloat(distancia / combustivel).toFixed(3);

// console.log(`Consumo médio = ${media}`)



// //caculando salario
// var nome = entrada.shift();
// var valorHora = entrada.shift();
// var horasTrabalhadas = entrada.shift();

// var pagamento = valorHora * horasTrabalhadas;
// console.log("O pagamento para ", nome, ", deve ser ", pagamento.toFixed(2))




// //problema circulo
// var r = entrada;
// var py = 3.14159;
// var area = py * (r ** 2);
// console.log(area.toFixed(3))






//caixa registradora
// var valorProduto = parseFloat(entrada.shift()).toFixed(2);
// var quantidadeItens = entrada.shift();
// var valorREcebido = parseFloat(entrada.shift()).toFixed(2);

// var valorTotal = parseFloat(valorProduto * quantidadeItens).toFixed(2);
// var troco = parseFloat(valorREcebido - valorTotal).toFixed(2);


// console.log(`TOTAL A PAGAR = ${valorTotal}`);
// console.log(`VALOR RECEBIDO = ${valorREcebido}`);
// console.log(`TROCO = ${troco}`)


// var numero1 = parseInt(entrada.shift());
// var numero2 = parseInt(entrada.shift());

// var soma = numero1 + numero2;
// console.log(`SOMA = ${soma}`);

// //calculando a media de idades elendo dois nomes
// var nome1 = entrada.shift();
// var idade1 = parseInt(entrada.shift().split(Number));
// var nome2 = entrada.shift();
// var idade2 = parseInt(entrada.shift().split(Number));
// var mediaIdade = parseFloat((idade1 + idade2) / 2).toFixed(1);
// console.log(`Nome: ${nome1}`);
// console.log(`Idade: ${idade1}`);
// console.log(`Nome: ${nome2}`);
// console.log(`idade: ${idade2}`)
// console.log(`Media de idade é ${mediaIdade} anos.`)




//CALCULANDO RETANGULO E TRIANGULO
// var base = parseFloat(entrada.shift()).toFixed(1);
// var altura = parseFloat(entrada.shift()).toFixed(1);
// var area = parseFloat(base * altura).toFixed(4);
// var perimetro = parseFloat((base * 2) + (altura * 2)).toFixed(4);
// var diagonal = Math.sqrt((base ** 2) + (altura ** 2)).toFixed(4);

// console.log((`BASE DO RETANGULAO = $8{base}`))
// console.log(`ALTURA DO RETANGULO = ${altura}`)
// console.log(`PERIMETRO = ${perimetro}`);
// console.log(`AREA = ${area}`);
// console.log(`DIAGONAL = ${diagonal}`);







// let dados = entrada.shift().split(" ");

// let A = parseFloat(dados.shift());
// let B = parseFloat(dados.shift());
// let C = parseFloat(dados.shift());
// let py = 3.14159;



// let areaTriangulo = parseFloat((A * C) / 2).toFixed(3);
// let raioArea = parseFloat(py * (C * C)).toFixed(3);
// let trapezioArea = parseFloat((A + B) * C / 2).toFixed(3);
// let areQuadrado = Math.pow(B, 2).toFixed(3);
// let areaRetangulo = parseFloat(A * B).toFixed(3);


// console.log(`TRIANGULO: ${areaTriangulo}`);
// console.log(`CIRCULO: ${raioArea}`)
// console.log(`TRAPEZIO: ${trapezioArea}`)
// console.log(`QUADRADO: ${areQuadrado}`)
// console.log(`RETANGULO: ${areaRetangulo}`)


//calculando o volume de um circulo
// let raio = parseFloat(input.split('\n'));


// let py = 3.14159;
// let volume = parseFloat((4 / 3.0) * py * (raio * raio * raio)).toFixed(3);
// console.log(`VOLUME = ${volume}`);
//(4/3) * pi * R3



// //itens em duas listas somando os valores
// let iten1 = linhas.shift().split(" ");
// let iten2 = linhas.shift().split(" ");

// var codIten1 = iten1.shift();
// var codIten2 = iten2.shift();

// var totalItens1 = iten1.shift();
// var valorItens1 = iten1.shift();
// let valorTotal1 = totalItens1 * valorItens1;

// var totalItens2 = iten2.shift();
// var valorItens2 = iten2.shift();
// let valorTotal2 = totalItens2 * valorItens2;

// let valorTotal = valorTotal1 + valorTotal2;
// console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`)

// // SALARIO BONUS
// let dados = input.split('\n')

// var vendedor = dados.shift();
// let fixo = parseFloat(dados.shift());
// let vendas = parseFloat(dados.shift());

// let totalVendas = vendas * 0.15;
// let salarioFinal = totalVendas + fixo;

// console.log("TOTAL = R$ " + salarioFinal.toFixed(2));



// //SALARIO
// let dados = input.split('\n')

// let numeroFunci = parseInt(dados.shift());
// let salarioFunci = parseInt(dados.shift());
// let horasTrabalhadas = parseFloat(dados.shift());

// let salarioMedia = salarioFunci * horasTrabalhadas
// console.log(`NUMBER = ${numeroFunci}`)
// console.log(`SALARY = U$ ${salarioMedia.toFixed(2)}`)


// //DIFERNCA
// let valores = input.split('\n')

// let A = parseInt(valores.shift());
// let B = parseInt(valores.shift());
// let C = parseInt(valores.shift());
// let D = parseInt(valores.shift());

// let diferenca = (A * B - C * D);
// console.log(`DIFERENCA = ${diferenca}`);



// //MEDIA 2
// let nuns1 = (input.split("\n"));


// let A = parseFloat(nuns1.shift());
// let B = parseFloat(nuns1.shift());
// let C = parseFloat(nuns1.shift());

// let MEDIA = parseFloat((A * 2 + B * 3 + C * 5) / 10.0).toFixed(1);
// console.log(`MEDIA = ${MEDIA}`)


// //media 1
// let nuns1 = (input.split('\n'));


// let A = parseFloat(nuns1.shift());
// let B = parseFloat(nuns1.shift());

// let media = (A * 3.5 + B * 7.5) / 11.0;


// console.log(`MEDIA = ${media.toFixed(5)}`);



// //multiplicação resultado produtos
// let nums = input.split(" ");

// let a = parseInt(nums.shift());
// let b = parseInt(nums.shift());

// let produto = a * b;
// console.log(`PROD = ${produto}`);


// //soma
// let nums = input.split(" ");

// let a = parseInt(nums.shift());
// let b = parseInt(nums.shift());

// let soma = a * b;
// console.log(`PROD = ${soma}`);


// // //Raio
// let raio = parseFloat(input.split('\n'));
// let n = parseFloat(3.14159)
// let area = parseFloat(n * raio * raio).toFixed(4)
// console.log(`A=${area}`)



// //1001
// var valores = input.split(" ");

// let A = parseInt(valores.shift());
// let B = parseInt(valores.shift());
// let x = A + B
// console.log("X = " + x);