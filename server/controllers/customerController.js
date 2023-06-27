

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