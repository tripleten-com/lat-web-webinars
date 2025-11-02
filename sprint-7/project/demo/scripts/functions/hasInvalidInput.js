export function hasInvalidInput(inputList) {
  return Array.from(inputList).some(function(input) {
    !input.validity.valid
  });
};