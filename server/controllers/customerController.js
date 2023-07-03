

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

    const locals = {
        title: 'New Customer Added',
        description: 'Gate Pass Management System',
    }

    res.render('customer/add', locals);

}