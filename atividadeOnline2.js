let dataHoje = new Date(2021, 08, 26);
var idadeCadastrada;
var nome;
let listaDeParticipantes = ["Maria", "Pedro", "Ciaran", "Joelma", "Karla", "Rafael", "Bruno", "Priscila", "Juliana", "Felipe"];

console.log("Bem vindo ao site de cadastramento de eventos!");
console.log ("Adicione o seu nome:")
//Simulando a entrada do nome do participante:
nome = "Patrícia"
console.log(nome  + " adicione a data do seu evento:");

//Simulando a entrada de data do evento do participante através da let dataDoEvento e conferindo se a data é anterior ou não á data de hoje:
//Se a data do evento é posterior à data atual, o evento é permitido; Senão, alertar que o cadastro não será permitido por data inválida.
let dataDoEvento = new Date(2021, 09, 16)
if (dataDoEvento.getTime() <= dataHoje.getTime())  {
    console.log("Cadastro não permitido. Data cadastrada é invalida! " + nome + ", por favor escolha uma data anterior ao dia de hoje.")
    } else {
        console.log("Certo! A data cadastrada é válida, continue seu cadastro:")
        console.log(nome + " informe sua data de nascimento:")

        // Simulando a entrada de idade do participante na var idadeCadastrada e conferindo se a idade é permitida ou não:
        //Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
        idadeCadastrada = 18;
        if (idadeCadastrada < 18){
            console.log("Cadastro não permitido! " + nome + ", você não tem idade permitida pelo evento.")
        } else {
                console.log("Parabéns " + nome + " ! " + "Você tem idade permitida para o evento!")

                //Listando os nomes dos participantes do evento:
                console.log ("A lista de participantes atuais é: " + listaDeParticipantes);

                //Conferindo se no número de participantes da listaDeParticipantes atingiu o limite:
                //Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.
                if (listaDeParticipantes.length >= 100) {                
                    console.log("Mas infelizmente não foi possível te cadastrar " + nome  + "! " + " O número de participante para esse evento atingiu o seu limite!")
                } else {
                    console.log( nome + " seu cadastro foi concluído com sucesso!")

                    //Adicionando a nova participante no array de participantes do evento, e posteriormente mostrando a adição:
                    listaDeParticipantes.push(nome)
                    console.log ("A nova lista de participantes é: " + listaDeParticipantes)
                }
        }        
    }
