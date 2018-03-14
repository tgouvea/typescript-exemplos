import { Person } from './../Classes/person';
import { DaoInterface } from './dao.interface';

export class Dao<T> implements DaoInterface<T> {

    tableName: string;

    insert(object: T):boolean{
        console.log('Inserindo...', object.toString());
        return true;
    }
    update(object: T):boolean{
        return true;
    }
    delete(id: number):boolean{
        return true;
    }
    find(id: number):T{
        return null;
    }
    findAll():[T]{
        return [null];
    }   
}