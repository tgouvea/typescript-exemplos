import { Person } from './../Classes/person';
import { PessoaDao } from './pessoa.dao';
import { DaoInterface } from './dao.interface';

let pessoaDao : DaoInterface = new PessoaDao();

let person: Person = new Person('Tiago');

pessoaDao.insert(person);

