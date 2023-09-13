"use strict";
/**
 * VARIAVEIS
 */
//tipos primitivos: boolean, number, string
let ligado = false;
// let ligado = false;
let nome = "Ceccatto";
let idade = 30;
let altura = 1.83;
//tipos especiais: null, undefined
let nulo = null;
let indefinido = undefined;
//tipos abrangentes: any, void
let retornoView = 1; //any aceita qualquer tipo. utilizavel quando voce tem uma funçao nao tem um tipo previsivel de retorno.
let retorno; //void aceita apenas vazio, nao tendo pq adicionar qualquer valor
//objeto - sem previsibilidade
let produto = {
    name: "Ceccatto",
    cidade: "Curitiba",
    idade: 30,
};
let meuProduto = {
    nome: " Tenis",
    preco: 89.99,
    unidades: 9,
};
//Arrays
let dados = ["ceccatto", "ana", "bruna"];
let dados2 = ["ceccatto", "ana", "bruna"];
// Array Multi tipos, no exemplo ele aceita string ou numero(2 valores independente do tipo), nao aceitaria boolean por exemplo
let infos = ["ceccatto", 30, "ana"];
//Tuplas. Ela é mais inteligente pois voce PRECISA respeitar a ordem das informações, diferente de um array multitype
let boleto = ["agua conta", 199.90, 32342342];
//Arrays Métodos
// dados.map();
// dados.pop();
// dados.filter();
//varios outros metodos, os mesmos do javascript
// Datas
let aniversario = new Date("2022-12-01 5:00");
console.log(aniversario.toString());
