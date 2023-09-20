function validateQuery(req, res, next) {
  const query = req.query.q;
  
  if (!query || query.length < 3) {
    return res.status(400).json({ message: 'Must be 3 or more characters.' });
  }

  next();
}

module.exports = {
  validateQuery
};
