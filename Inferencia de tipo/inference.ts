function showlog(message: string){
    console.log(message)
}

/*Exemplo com String */
showlog('Texto Exemplo');
/*Recusa outros tipos se for definido string */
//showlog(40);

/* Tipos possiveis:
string
number
boolean
arrays
classe
any (qualquer tipo)
*/

let test: Array<string> = ['olá','teste'];
let isEnable: boolean = true;
let testString: [string] = ['olá'];