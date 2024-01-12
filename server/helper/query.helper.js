function isValid(id) {
  return (
    id.trim().length > 0 && /^[a-zA-Z]+$/.test(id)
  );
}

module.exports = isValid;
