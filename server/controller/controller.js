
const model = require('../model/model');


// get request for fetching categories
async function Get_categories(req, res){
    let data = await model.Categories.find({});
    let filter = data.map(val => Object.assign({}, {type: val.type, color: val.color}));
    return res.json(filter);
}

//  post request to add transaction

async function add_transaction(req, res){
    if(!req.body) 
        return res.status(400).json({message: `Req does not contain any data`});
    let {name, type, amount} = req.body;
    const transaction = await new model.Transactions({
        name,
        type,
        amount,
        date: new Date()
    })
    transaction.save(err => {
        if(!err)
            return res.json(transaction);
        else
            return res.status(400).json({message: `Something went wrong ${err}`});
    })
}

// get transactions
async function get_transactions(req, res){
    let data = await model.Transactions.find({});
    let filter = data.map(val => Object.assign({}, {name: val.name, type: val.type, amount: val.amount, date: val.date}));
    return res.json(filter);
}

// delete Transaction
async function delete_transaction(req, res){
    if(!req.body)
        return res.status(400).json({message: "Nothing to remove"})
    await model.Transactions.deleteOne(req.body, function(err){
        if(!err)
            return res.json("Record Deleted");
    }).clone().catch((err) => res.json("Someting went wrong in deleting"))
}

// combining collection
function get_labels(req, res){
model.Transactions.aggregate([
    {
    $lookup:{
        from: "categories",
        localField: "type",
        foreignField: "type",
        as: "categories_info"
    }
    },
    {
        $unwind:"$categories_info"
    }
]).then(result =>{
    let data = result.map(val => Object.assign({}, {_id: val._id, name: val.name, type: val.type, amount: val.amount, color: val.categories_info['color']}))
    return res.json(data); 
}).catch(err => res.status(400).json("Error occurred in aggregation"));
}


module.exports = {
    Get_categories,
    add_transaction,
    get_transactions,
    delete_transaction,
    get_labels
}