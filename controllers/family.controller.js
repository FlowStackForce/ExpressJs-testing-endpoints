const model = require ('../models/family.model');

function getFamily (req, res) {
    res.json(model);
}


function getFam (req, res) {
    const familyid = Number(req.params.familyid);
    const fam = model[familyid];
    if (fam) {
        res.status(200).json(fam);
    } else {
        res.status(400).json({
        error: 'Fam does not exist'});
    }
}

function postFamily (req, res) {
    if (!req.body.name) {
        return res.status(400).json({
        error: 'Missing family name'
});
}

const newFamily = {
    name: req.body.name,
    id: model.length
};
model.push(newFamily);
res.json(newFamily);
}

module.exports = {
    getFamily,
    getFam,
    postFamily,
}
