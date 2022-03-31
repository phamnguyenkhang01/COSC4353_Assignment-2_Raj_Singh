// use 
// npm i -D sequelize-test-helpers
// to install test dependencies

const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists,
    //checkUniqueIndex
  } = require('sequelize-test-helpers')


const UserModel = require('../models/user.model')

describe('../models/user.model', () => {
    const User = UserModel(sequelize, dataTypes)
    const user = new User()

    checkModelName(User)('users'); // check new user instance is created

    // check user model's properties
    ['id', 'email', 'password', 'full_name', 'address_line_1', 'address_line_2', 'city', 'state', 'state', 'zip_code', 'status']
        .forEach(checkPropertyExists(user));


})

const QuoteModel = require('../models/quote.model')

describe('../models/quote.model', () => {
    const Quote = QuoteModel(sequelize, dataTypes)
    const quote = new Quote()

    checkModelName(Quote)('quotes');

    // check quote model's properties
    ['id', 'gallons', 'rate', 'delivery_address', 'delivery_date', 'quote_date', 'request_by']
        .forEach(checkPropertyExists(quote));

    
})