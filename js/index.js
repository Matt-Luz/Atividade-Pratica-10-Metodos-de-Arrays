// Atividade 10 - 01

/* 

    Considere o seguinte array:

    const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00];

*/

const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00];

// Item A - Atividade 10 - 01

/* 

    Imprima no console o índice do primeiro salário maior que
    7.500 utilizando o findIndex

*/

let salarioMaior = salarios.findIndex((maiorSalario) => maiorSalario > 7500);
console.log(salarioMaior);


// Item B - Atividade 10 - 01

/* 

    Imprima no console a lista de salários em ordem crescente
    utilizando o sort

*/

salarios.sort((a, b) => a - b);
console.log(salarios);


// Item C - Atividade 10 - 01

/* 

    Imprima no console a lista de salários em ordem decrescente
    utilizando o sort

*/

salarios.sort((a, b) => b - a);
console.log(salarios);


// Item D - Atividade 10 - 01

/* 

    Utilize a função Some, para descobrir se existe algum salário
    superior a 10.000, imprima verdadeiro no console caso exista,
    caso contrário falso.

*/

/*

salarioSuperior = false;

for (let i = 0; i < salarios.length; i++) {
    if (salarios[i] > 10000) {
        salarioSuperior = true;
        break;
    }
}

console.log(salarioSuperior);

*/

salarioSuperior = salarios.some(function(s) {
    return s > 10000;
});

console.log(salarioSuperior);


// Item E - Atividade 10 - 01

/* 

    Crie uma nova lista filtrada com os salários que são maior que
    8.000 utilizando o filter

*/

let novaListaSalarios = [];

for (let i = 0; i < salarios.length; i++) {
    if (salarios[i] > 8000) {
        novaListaSalarios.push(salarios[i]);
    }
}

console.log(`Nova lista: ${novaListaSalarios}`);


// Atividade 10 - 02

/* 

    James estava criando uma array com as cores do arco-íris, e ele
    esqueceu algumas cores. As cores padrão de um arco-íris são
    normalmente listadas nesta ordem:

    const rainbow = ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul",
    "Roxo"];

    Mas James tinha isto:

    const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

    Usando somente o método splice insira as cores que faltam na array e
    remova a cor "Preto", seguindo estes passos:

    a. Remova "Preto"
    b. Adicione "Amarelo" e "Verde"
    c. Adicione "Roxo"

*/

const rainbow = ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul", "Roxo"];

const rainbowJames = ["Vermelho", "Laranja", "Preto", "Azul"];

rainbowJames.splice(2, 1);

rainbowJames.splice(2, 0, "Amarelo", "Verde");

rainbowJames.splice(5, 0, "Roxo");

console.log(rainbowJames);