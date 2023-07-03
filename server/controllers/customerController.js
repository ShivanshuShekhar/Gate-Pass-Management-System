const Customer = require('../models/Customer');
const mongoose = require('mongoose');

/**
 * GET /
 * Homepage
*/

exports.homepage = async (req, res) => {

    const locals = {
        title: 'GPMS-BHEL',
        description: 'Gate Pass Management System',
    }

    res.render('index', locals);

}


/**
 * GET /
 * New Customer Form
*/

exports.addCustomer = async (req, res) => {

    const locals = {
        title: 'Add New Customer',
        description: 'Gate Pass Management System',
    }

    res.render('customer/add', locals);

}

/**
 * POST /
 * Create New Customer Form
*/

exports.postCustomer = async (req, res) => {

    console.log(req.body);

    const newCustomer = new Customer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        tel: req.body.tel,
        email: req.body.email,
        details: req.body.details
    })

    try {
        await Customer.create(newCustomer);
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }

}