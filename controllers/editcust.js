const handleEditCust = (req, res, db) => {
  const { id, name, phone, dogname, dogbreed, dogsize, dogage, specialneeds, groomedbefore, nextappt } = req.body;
  if (!id) {
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
    groomedbefore: groomedbefore,
    nextappt: nextappt
  }).then(res.status(200).json('Customer Changed'))
  .catch(err => res.status(400).json('unable to enter customer'))
}

module.exports = {
  handleEditCust
};
