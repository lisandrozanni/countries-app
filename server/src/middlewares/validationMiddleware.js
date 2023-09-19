function validateQuery(req, res, next) {
  const query = req.query.q;
  
  if (!query || query.length < 3) {
    return res.status(204).json({ message: 'Must be 3 or more characters.' });
  }

  const regex = /^[a-zA-ZÁÉÍÓÚáéíóúÑñüÜ]*$/;
  if (!regex.test(query)) {
    return res.status(400).json({ message: 'Invalid characters in query.' });
  }

  next();
}

module.exports = {
  validateQuery
};
