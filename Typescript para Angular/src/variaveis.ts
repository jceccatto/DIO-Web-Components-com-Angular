/** 
 * VARIAVEIS 
 */

//tipos primitivos: boolean, number, string
let ligado: boolean = false;
// let ligado = false;
let nome: string = "Ceccatto";
let idade: number = 30;
let altura: number = 1.83;

//tipos especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes: any, void
let retornoView: any = 1; //any aceita qualquer tipo. utilizavel quando voce tem uma funçao nao tem um tipo previsivel de retorno.
let retorno: void //void aceita apenas vazio, nao tendo pq adicionar qualquer valor

//objeto - sem previsibilidade
let produto:object = {
    name: "Ceccatto",
    cidade: "Curitiba",
    idade: 30,
}

//objeto tipado - com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto: ProdutoLoja ={
    nome:" Tenis",
    preco: 89.99,
    unidades: 9,
}


//Arrays


let dados:string[] = ["ceccatto", "ana", "bruna"];
let dados2: Array<string> = ["ceccatto", "ana", "bruna"];
// Array Multi tipos, no exemplo ele aceita string ou numero(2 valores independente do tipo), nao aceitaria boolean por exemplo
let infos: (String | number)[] = ["ceccatto", 30, "ana"]; 

//Tuplas. Ela é mais inteligente pois voce PRECISA respeitar a ordem das informações, diferente de um array multitype
let boleto:[string, number, number] = ["agua conta", 199.90, 32342342]

//Arrays Métodos
// dados.map();
// dados.pop();
// dados.filter();
//varios outros metodos, os mesmos do javascript

// Datas
let aniversario: Date = new Date("2022-12-01 5:00");
console.log(aniversario.toString());
