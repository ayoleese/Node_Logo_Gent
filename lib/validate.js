class Validate {}

Validate.prototype.character = (input) => {
  return input.length <= 3;
}

module.exports = Validate;
