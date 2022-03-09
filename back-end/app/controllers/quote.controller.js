const db            = require("../models");
const Quote          = db.quotes;

const sequelize     = db.sequelize;
exports.quotes = (req, res) => {
    let userId = req.user.id;

    Quote.findAll({
        attributes: [
            'id', "rate", "gallons", "delivery_address",
            [sequelize.fn("DATE_FORMAT", sequelize.col("delivery_date"), "%d-%m-%Y %H:%i:%s" ), "delivery_date",],
            [sequelize.fn('DATE_FORMAT', sequelize.col('quote_date'), '%Y-%m-%d'), 'quote_date'],
        ],
        where:{
            request_by:userId
        }
    }).then(async (data) => {
        return res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({message: "Some error occurred while getting user information."+err.message})
    });
}

exports.quote = (req, res) => {
    let userId      = req.user.id;

    if(userId){
        const gallons = req.body.gallons;
        const delivery_date = req.body.delivery_date;

        if(gallons === ''){
            return res.status(400).send({
                message:"Gallons can not be blank"
            });
        }else if(delivery_date === ''){
            return res.status(400).send({
                message:"Delivery date can not be blank"
            });
        }else{
            // Create a record
            const _quote = {
                gallons: gallons,
                delivery_date: delivery_date,
                delivery_address: req.body.delivery_address,
                rate: req.body.rate,
                total: req.body.total,
                quote_date: req.body.quote_date,
                request_by: userId
            };
            // Save user in the database
            Quote.create(_quote)
                .then(_data => {
                    return res.status(200).send(_data);
                })
                .catch(err => {
                    res.status(500).send({message: "Some error occurred while creating new record."+err.message})
                });
        }
    }else{
        return res.status(400).send({
            message:"Invalid request submitted"
        });
    }
}
