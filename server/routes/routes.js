const routes = require('express').Router();
const controller = require('../controller/controller')
routes.route('/api/categories').get((controller.Get_categories));

// transaction endpoint
routes.route('/api/transaction').post((controller.add_transaction)).get((controller.get_transactions)).delete((controller.delete_transaction));

// delete transact
routes.route('/api/labels').get((controller.get_labels));

module.exports = routes;