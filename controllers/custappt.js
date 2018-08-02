const handleCustAppt = (req, res, db) => {
  db('customer')
    .orderBy('next_appt', 'desc')
    .then(res.status(200).json('Sorted'))
}

module.exports = {
  handleCustAppt
};
