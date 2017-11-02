import { testDouble, expect } from './config/helpers';
import User from '../../server/module/user/service';

const model = require('../../server/models');

describe('Testes Unitarios do Controller', () => {

    let email;
    let _id;

    const defaultUser = {
        id: 1,
        name: 'Default User',
        email: 'defaultUser@email.com',
        password: '1234'
    }

    beforeEach((done) => {
        model.User.destroy({
            where: {}
        })
            .then(() => {
                model.User.create(defaultUser).then(() => {
                    console.log(`Default User created`)
                    done();
                });
            })
    });

    describe('Metodo Create', () => {
        it('Deve criar um Usuario', () => {
            const novoUsuario = {
                id: 2,
                name: 'Novo Usuario',
                email: 'novousuario@email.com',
                password: '1234'
            };
            return User.create(novoUsuario)
                .then(data => {
                    expect(data.dataValues).to.have.all.keys(
                        ['createdAt', 'email', 'id', 'name', 'password', 'updatedAt']
                    )
                });
        });
    });

    describe('Metodo Update', () => {
        it('Deve atualizar um Usuario', () => {
            const usuarioAtualizado = {
                name: 'Nome Atualizado',
                email: 'atualizado@email.com'
            };
            return User.update(defaultUser.id, usuarioAtualizado).then(data => {
                expect(data[0]).to.be.equal(1);
            });
        });
    });

    describe('Metodo GET Users', () => {
        it('Deve retornar uma lista com todos os Usuarios', () => {
            return User.getAll().then(data => {
                expect(data).to.be.an('array');
            });
        });
    });

    describe('Metodo Delete', () => {
        it('Deve deletar um Usuario', () => {
            return User.delete(1).then(data => {
                expect(data).to.be.equal(1);
            });
        });
    });

    describe('Método getById', () => {
        it('Retornar um usuário de acordo com o ID passado', () => {
            //Deve implementar a lógica do teste.
            return User.getById(defaultUser.id).then(data => {
                expect(data).to.have.all.keys(
                    ['email', 'id', 'name', 'password']
                )
            })
        })
    })

    describe('Método getByEmail', () => {
        it('Retornar um usuário de acordo com o EMAIL passado', () => {
            //Deve implementar a lógica do teste.
            return User.getByEmail(defaultUser.email).then(data => {
                expect(data).to.have.all.keys(
                    ['email', 'id', 'name', 'password']
                )
            })
        })
    })
});