import { Person } from './../Classes/person';
import { DaoInterface } from './dao.interface';
import { Dao } from './dao';


let dao: DaoInterface<Person> = new Dao<Person>();

let person: Person = new Person('Tiago A. Gouvêa');

dao.insert(person);

