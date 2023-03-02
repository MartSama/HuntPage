
export default function validateCreateAccount(values) {
    let errors = {}

    if (!values.name) {
        errors.name = "Name is necessary";
    }
    if (!values.email) {
        errors.email = "Email is necessary";
    } else if (values.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        errors.email = "Enter a valid email"
    }

    if (!values.password) {
        errors.password = "Password is necessary";
    } else if (values.password.length < 6) {
        errors.password = "Password needs at least 6 chars";
    }
    return errors
}