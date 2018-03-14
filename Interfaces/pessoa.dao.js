"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./../Classes/person");
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
    }
    PessoaDao.prototype.insert = function (person) {
        console.log('Inserindo...', person.toString());
        return true;
    };
    PessoaDao.prototype.update = function (person) {
        return true;
    };
    PessoaDao.prototype.delete = function (id) {
        return true;
    };
    PessoaDao.prototype.find = function (id) {
        return null;
    };
    PessoaDao.prototype.findAll = function () {
        return [new person_1.Person('Tiago Araujo de Gouvêa')];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
//# sourceMappingURL=pessoa.dao.js.map