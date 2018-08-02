const handleDeleteCust = (req, res, db) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json('Incorrect form submission');
  }
  db('customers').where({ id: id }).del().then(res.status(200).json('Customer Deleted'))
  .catch(err => res.status(400).json('unable to delete customer'))
}

module.exports = {
  handleDeleteCust
};
