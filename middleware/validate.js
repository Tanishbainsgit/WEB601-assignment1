const Ajv = require("ajv");
const ajv = new Ajv();
const schema = require("../schemas/bookschema.json");

const validateBook = (req, res, next) => {
  const validate = ajv.compile(schema);
  const valid = validate(req.body);
  if (!valid) {
    return res.status(400).json({ errors: validate.errors });
  }
  next();
};

module.exports = validateBook;
