"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
var service_1 = require("../../server/module/user/service");
var model = require('../../server/models');
describe('Testes Unitarios do Controller', function () {
    var email;
    var _id;
    var defaultUser = {
        id: 1,
        name: 'Default User',
        email: 'defaultUser@email.com',
        password: '1234'
    };
    beforeEach(function (done) {
        model.User.destroy({
            where: {}
        })
            .then(function () {
            model.User.create(defaultUser).then(function () {
                console.log("Default User created");
                done();
            });
        });
    });
    describe('Metodo Create', function () {
        it('Deve criar um Usuario', function () {
            var novoUsuario = {
                id: 2,
                name: 'Novo Usuario',
                email: 'novousuario@email.com',
                password: '1234'
            };
            return service_1.default.create(novoUsuario)
                .then(function (data) {
                helpers_1.expect(data.dataValues).to.have.all.keys(['createdAt', 'email', 'id', 'name', 'password', 'updatedAt']);
            });
        });
    });
    describe('Metodo Update', function () {
        it('Deve atualizar um Usuario', function () {
            var usuarioAtualizado = {
                name: 'Nome Atualizado',
                email: 'atualizado@email.com'
            };
            return service_1.default.update(defaultUser.id, usuarioAtualizado).then(function (data) {
                helpers_1.expect(data[0]).to.be.equal(1);
            });
        });
    });
    describe('Metodo GET Users', function () {
        it('Deve retornar uma lista com todos os Usuarios', function () {
            return service_1.default.getAll().then(function (data) {
                helpers_1.expect(data).to.be.an('array');
            });
        });
    });
    describe('Metodo Delete', function () {
        it('Deve deletar um Usuario', function () {
            return service_1.default.delete(1).then(function (data) {
                helpers_1.expect(data).to.be.equal(1);
            });
        });
    });
    describe('Método getById', function () {
        it('Retornar um usuário de acordo com o ID passado', function () {
            //Deve implementar a lógica do teste.
            return service_1.default.getById(defaultUser.id).then(function (data) {
                helpers_1.expect(data).to.have.all.keys(['email', 'id', 'name', 'password']);
            });
        });
    });
    describe('Método getByEmail', function () {
        it('Retornar um usuário de acordo com o EMAIL passado', function () {
            //Deve implementar a lógica do teste.
            return service_1.default.getByEmail(defaultUser.email).then(function (data) {
                helpers_1.expect(data).to.have.all.keys(['email', 'id', 'name', 'password']);
            });
        });
    });
});
