//const { sequelize } = require('.')
//const usermodel = require('./user.model')
//const { DESCRIBE } = require('sequelize/types/query-types')
const { expect } = require('chai')

const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists
  } = require('sequelize-test-helpers')

const UserModel = require('../models/user.model')

describe('../models/user.model', () => {
    const User = UserModel(sequelize, dataTypes)
    const user = new User()

    checkModelName(User)('users') // check new user instance is created

    // context('properties', () => {
    //     ;['id', 'email', 'password', 'full_name', 'address_line_1', 'address_line_2', 'city', 'state', 'state', 'zip_code', 'status']
    //     .forEach(checkPropertyExists(user))
    // })

    
})