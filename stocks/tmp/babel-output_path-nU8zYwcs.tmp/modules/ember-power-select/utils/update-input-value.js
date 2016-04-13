export default updateInputValue;

function updateInputValue(input, value) {
  if (!input || input.value === value) {
    return;
  }
  input.value = value;
}