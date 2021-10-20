import { emailRegex, strongRegex, phoneRegex } from "./Regex";
function Validation(values) {
  let errors = {};
  if (!values.name) {
    errors.name = "name is require";
  }
  if (!values.email) {
    errors.email = "email is require";
  } else if (emailRegex.test(values.email)) {
    errors.email = "invalid email";
  }
  if (!values.password) {
    errors.password = "password is require";
  } else if (strongRegex.test(values.password)) {
    errors.password = "invalid password";
  }
  if (!values.contact) {
    errors.contact = "contact is require";
  } else if (phoneRegex.test(values.contact)) {
    errors.contact = "only numeric value";
  }
  if (!values.city) {
    errors.city = "city is require";
  }
  if (!values.state) {
    errors.state = "state is require";
  }
  return errors;
}

export default Validation;
