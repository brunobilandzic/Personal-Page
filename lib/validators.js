const TYPE_REQUIRED = "REQUIRED";
const TYPE_MIN_LENGTH = "REQUIRE_MIN_LENGTH";
const TYPE_MAX_LENGTH = "REQUIRE_MAX_LENGTH";

export const VALIDATOR_REQUIRED = (id ) => ({ type: TYPE_REQUIRED, message: `${id} is required` });
export const VALIDATOR_MIN_LENGTH = (id, val) => ({
  type: TYPE_MIN_LENGTH,
  value: val,
  message: `${id} must be at least ${val} characters long`,
});
export const VALIDATOR_MAX_LENGTH = (id, val) => ({
  type: TYPE_MAX_LENGTH,
  value: val,
  message: `${id} must be at most ${val} characters long`,
});

export const validate = (value, validators) => {
  let isValid = true;
  let message = "";
  for (const validator of validators) {
    if (validator.type === TYPE_REQUIRED && isValid) {
      isValid = value.trim().length > 0;
      message = validator.message;
    }
    if (validator.type === TYPE_MIN_LENGTH && isValid) {
      isValid = value.trim().length >= validator.value;
      message = validator.message;
    }
    if (validator.type === TYPE_MAX_LENGTH && isValid) {
      isValid = value.trim().length <= validator.value;
      message = validator.message;
    }
  }
  return (isValid ? null : message);
};
