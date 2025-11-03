function hasInvalidInput(inputList) {
  return Array.from(inputList).some(function(input) {
    return !input.validity.valid;
  });
};