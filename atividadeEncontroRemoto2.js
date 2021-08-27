//ATIVIDADE DE LÓGICA DE PROGRAMAÇÃO COM LACOS DE REPETIÇÃO

// Resolvendo com laço FOR:
let numeroDeAlunos = 10;

for (let contador = 0; contador <= numeroDeAlunos; contador++){
   if(contador === 0){
        console.log ("O número atual é ZERO (Com laço FOR)")
   } else if (contador % 2 == 0 ) {
        console.log ("O número " + contador + " é PAR (Com laço FOR)" )
   } else {
       console.log ("O número " + contador +  " é IMPAR (Com laço FOR)")
   }
}

// //Resolvendo com laco WHILE:
// let numeroDeAlunos = 10;

let contador = 0;

while (contador <= numeroDeAlunos){
    if(contador === 0){
        console.log ("O número atual é ZERO (Com laço WHILE)")
   } else if (contador % 2 != 0 ) {
        console.log ("O número " + contador + " é IMPAR (Com laço WHILE)" )
   } else {
       console.log ("O número " + contador +  " é PAR (Com laço WHILE)")
   }
    contador++;
}


let listaDeAlunos = ["Marcelo", "Juh", "Cleber", "Wesley", "Adriano"];
for (const aluno of listaDeAlunos){
    console.log(aluno + " com For OF")
}
listaDeAlunos.forEach(aluno => {
    console.log(aluno + " com For Each")
});