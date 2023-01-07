const TYPE_REQUIRED = "REQUIRED";
const TYPE_MIN_LENGTH = "REQUIRE_MIN_LENGTH";
const TYPE_MAX_LENGTH = "REQUIRE_MAX_LENGTH";

export const VALIDATOR_REQUIRED = () => ({ type: TYPE_REQUIRED });
export const VALIDATOR_MIN_LENGTH = (val) => ({
  type: TYPE_MIN_LENGTH,
  value: val,
});
export const VALIDATOR_MAX_LENGTH = (val) => ({
  type: TYPE_MAX_LENGTH,
  value: val,
});

export const validate = (value, validators) => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === TYPE_REQUIRED) {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator.type === TYPE_MIN_LENGTH) {
      isValid = isValid && value.trim().length >= validator.value;
    }
    if (validator.type === TYPE_MAX_LENGTH) {
      isValid = isValid && value.trim().length <= validator.value;
    }
  }
  return isValid;
};
