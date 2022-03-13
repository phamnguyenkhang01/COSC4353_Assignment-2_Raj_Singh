const { sequelize } = require('.')
const usermodel = require('./user.model')

test('test user model', () =>{
    expect(usermodel(sequelize.define(usermodel))).toBe(sequelize.define(usermodel))
})

//('name@email.com', '', 'name@email', '10 street')