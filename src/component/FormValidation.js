import { emailRegex, strongRegex, phoneRegex } from "./Regex";
const Formvalidation = {
  validateForm: (form, formErrors, validateFunc) => {
    const errorObj = {};
    Object.keys(formErrors).map((x) => {
      let refValue = null;
      const msg = validateFunc(x, form[x], refValue);
      if (msg) errorObj[x] = msg;
    });
    return errorObj;
  },
  Registration: (name, value) => {
    switch (name) {
      case "name":
        if (!value) return "name is required";
        else return "";
      case "email":
        if (!value) return "email is required";
        else if (!emailRegex.test(value)) return "Enter a valid email address";
        else return "";
      case "password":
        if (!value) return "password is required";
        else if (!strongRegex.test(value)) return "Enter a valid password";
        else return "";
      case "contact":
        if (!value) return " contact is required";
        else if (!phoneRegex.test(value)) return "enter valid phone no";
        else return "";
      case "city":
        if (!value) return "city is required";
        else return "";
      case "state":
        if (!value) return "state is required";
        else return "";
      default:
        return "";
    }
  },

  Login: (name, value) => {
    switch (name) {
      case "email":
        if (!value) return "email is missing";
        else if (!emailRegex.test(value)) return "enter valid email";
        else return "";
      case "password":
        if (!value) return "password is missing";
        else return "";
      default:
        return "";
    }
  },
};

export default Formvalidation;
