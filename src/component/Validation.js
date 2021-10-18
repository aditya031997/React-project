function Validation(values) {
  let errors = {};
  if (!values.name) {
    errors.name = "name is require";
  }
  if (!values.email) {
    errors.email = "email is require";
  }
  if (!values.password) {
    errors.password = "password is require";
  }
  if (!values.contact) {
    errors.contact = "cotact is require";
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
