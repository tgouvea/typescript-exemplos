"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./../Classes/person");
var pessoa_dao_1 = require("./pessoa.dao");
var pessoaDao = new pessoa_dao_1.PessoaDao();
var person = new person_1.Person('Tiago');
pessoaDao.insert(person);
//# sourceMappingURL=main.js.map