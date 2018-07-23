const handleViewCust = (req, res, db) => {
  db.select().from('customers').then(function(data) {
    res.send(data)
  })
  .catch(err => res.status(400).json('unable to fetch data customer'))
}

module.exports = {
  handleViewCust
};
