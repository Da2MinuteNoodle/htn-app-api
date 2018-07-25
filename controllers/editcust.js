const handleEditCust = (req, res, db) => {
  const { name, phone, dogname, dogbreed, dogsize, dogage, specialneeds, groomedbefore } = req.body;
  if (!name || !phone || !dogname || !dogbreed || !dogsize || !dogage) {
    return res.status(400).json('Incorrect form submission');
  }
  db('customers').where({ id: id }).update({
    name: name,
    phone: phone,
    dogname: dogname,
    dogbreed: dogbreed,
    dogsize: dogsize,
    dogage: dogage,
    specialneeds: specialneeds,
    groomedbefore: groomedbefore
  })
  .catch(err => res.status(400).json('unable to enter customer'))
}

module.exports = {
  handleEditCust
};
