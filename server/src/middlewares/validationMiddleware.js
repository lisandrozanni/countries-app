function validateQueryLength(req, res, next) {
  const query = req.query.q;

  if (typeof query !== 'string') {
    return res.status(400).json({ message: 'Invalid query type. Expected a string.' });
  }
  
  if (query.length < 3) {
    return res.status(204).json({ message: 'Must be 3 or more characters.' });
  }

  const regex = /^[a-zA-Z\s\-]*$/;
  if (!regex.test(query)) {
    return res.status(400).json({ message: 'Invalid characters in query.' });
  }

  next();
};

module.exports = {
  validateQueryLength
};
