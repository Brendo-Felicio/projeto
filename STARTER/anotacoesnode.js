/* const questions = [
    "Oque eu aprendi hoje?",
    "Oque me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "Oque me deixou Feliz hoje?",
    "Qauntas pessoas ajudei hoje?",
]


const ask = (index = 0) => {
    process.stdout.write(questions[index] + "\n\n\n")
}

ask()*/


//ESTUDAR STDIN E STDOUT LINK BASICO :
// https://blog.logrocket.com/using-stdout-stdin-stderr-node-js/



//BEST ME APP (app feito com node para reflexoes)

/*const questions = [ 
    "Oque eu aprendi hoje?",
     "Oque me deixou aborrecido? E o que eu poderia fazer para melhorar?",
     "Oque me deixou Feliz hoje?",
     "Quantas pessoas ajudei hoje?",
 ]
 
 
 const ask = (index = 0) => {
     process.stdout.write("\n\n" + questions[index] + ">")
 }
 
 ask()    
 
 const answers = []
 
 process.stdin.on("data", data => {
     answers.push(data.toString().trim())
     if(answers.length < questions.length) {
         ask(answers.length)
     }else{
         console.log(answers)
         process.exit()
     }
 
 })
  process.on('exit',()=>{
     console.log(`
     Bacana Brendo!
 
     Oque voce aprendeu hoje foi:
     ${answers[0]}
 
     Oque te aborreceu e você poderia melhorar foi:
     ${answers[1]}
 
     Oque te deixou feliz hoje foi:
     ${answers[2]}
 
     Você ajudou ${answers[3]} pessoas hoje!!
 
     Volte amanhã para mais reflexões
     `)
  })*/
 

  //TIMERS

  /*
    //SETTIMEOUT

    const timeout = 3000;

    const finished = () => console.log('done!');

    setTimeout(finished,timeout)

    //CLEARTIMEOUT
z
    const timeout = 3000;

    const finished = () => console.losg('done!');

    let timer = setTimeout(finished,timeout)

    clearTimeout(timer)









    //SETINTERVAL

    const timeout  = 1000;

    const checking = () => console.log('checking!')

    setInterval(checking,timeout)



    //CLEARINTERVAL + logica de fazer um intervalo ser limpo atraves de um timeout
    
    timeout = 1000;
    const checking = () => console.log('checkig!');

    let interval = setInterval(checking,timeout);

    setTimeout(() => clearInterval(interval),4000)

  */

    /*
    //BASE PARA UTILIZAR EVENTOS SEMPRE:
const {EventEmitter} = require('events')
const ev = new EventEmitter()

//ESCUTANDO E EXECUTANDO EVENTOS VARIAS VEZES,PARA OUVIR SO UMA VEZ(o primeiro disparado)SE DEVE TROCAR O ON POR ONCE
ev.on("saySomething",(message) => {
    console.log('Eu ouvi você' , message)
})

ev.emit('saySomething',"Brendo")
ev.emit('saySomething',"joao")
ev.emit('saySomething',"Camila")
    
    
    */


/*
//COMO USAR FOR :


for (let i = 1; i <= 100; i++) {
    console.log(i);
}





















ESTRUTURA HTML DE FORMULARIO PARA TREINAR FLEX-BOX E JS



     <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./index.css">
</head>

<body>

    <header>
   
            <div class="menu-button">
    
            <button type="menu" id="menu">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                    <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
                 </svg>
            </button>

            </div>
 
             <div class="title">

        <strong> Marine Life </strong>
            
            </div>
    </header>
  
    
    <main> 

      <div class="title-subscribe"><h4>Faça seu cadastro já</h4></div>

        <div class="form">

            <form action="submit" class="user">

                <fieldset class="fieldset">
    
                    <label for="name">
                        Nome:
                        <br>
                        <input type="text" name="input-name" id="submit" placeholder="Digite seu nome">
                     </label>
                     <br>
                     <br>
                     <label for="contato">
                        Contato:
                        <br>
                        <input type="text" name="input-contact" id="submit" placeholder="Celular/Telefone">
                     </label>
                    <br>
                    <br>
                    <label for="email">
                        Email:
                        <br>
                        <input type ="email" name="email" id="email" placeholder="ex:usuario.sobrenome@gmail.com">
                    </label>
                    <br>
                    <br>
                    <label for="adress">
                        Endereço:
                        <br>
                        <input type="text" name="adress" id="adress" placeholder="insira se endereço aqui">
                    </label>
                    <br>
                    <br>
                    
                    <div class="box-button">
                        <button type="submit" id="form" form="form" name="form" class="submit-button">Enviar
                        </button>
                        <button type="reset" class="reset-button" id="form">Apagar</button>
                    </div>
                   
                 </fieldset>
    
            </form>
        </div>
      
    </main>

   
</body>
    <script src="./index.js"></script>
</html>


*/