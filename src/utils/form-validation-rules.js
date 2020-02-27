// validate function
// pass in the values object
const create_record = (values) => {
    // initialize errors object
    let errors = {};
  
    // if errors exist for each field then add them to the errors object
  
    if (!values.first_name) {
      errors.first_name = "Firstname is required";
    }
    
    if (!values.last_name) {
      errors.last_name = "Lastname is required";
    }
    if (!values.gender) {
      errors.gender = "Gender is required";
    }

    if (!values.diabetes) {
      errors.diabetes = "Living with diabetes? is required";
    }

    if (!values.age) {
      errors.age = "Age is required";
    }


    
    return errors;
  }

  const FORM_VALIDATION_RULES = {
    create_record,
  }

  export default FORM_VALIDATION_RULES