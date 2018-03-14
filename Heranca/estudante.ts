import { Person } from './../Classes/person';

export class Estudante extends Person{

    constructor(name: string){
        super(name);
    }

    public showAge(age: number): void{
        console.log(`Estudando...`)
        super.showAge(age);
    }

}