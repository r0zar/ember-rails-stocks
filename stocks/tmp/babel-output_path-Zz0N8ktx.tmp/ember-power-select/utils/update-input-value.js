define("ember-power-select/utils/update-input-value", ["exports"], function (exports) {
  "use strict";

  exports["default"] = updateInputValue;

  function updateInputValue(input, value) {
    if (!input || input.value === value) {
      return;
    }
    input.value = value;
  }
});