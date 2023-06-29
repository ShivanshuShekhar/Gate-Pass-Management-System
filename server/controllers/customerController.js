

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