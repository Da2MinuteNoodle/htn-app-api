const handleEnterCust = (req, res, db) => {
  const { name, phone, dogname, dogbreed, dogsize, dogage, specialneeds, groomedbefore } = req.body;
  if (!name || !phone) {
    return res.status(400).json('Incorrect form submission');
  }
  db('customers').insert({
    name: name,
    phone: phone,
    dogname: dogname,
    dogbreed: dogbreed,
    dogsize: dogsize,
    dogage: dogage,
    specialneeds: specialneeds,
    groomedbefore: groomedbefore
  })
  .then(response => {
    res.status(200).json('Customer Entered'))
  })
  .catch(err => res.status(400).json('unable to enter customer'))
}

module.exports = {
  handleEnterCust
};
