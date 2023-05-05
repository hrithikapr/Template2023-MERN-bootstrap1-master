import * as Yup from "yup";

export const signupschema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name."),
    email: Yup.string().email().required("Please enter your email."),
    password: Yup.string().min(6).required("Please enter your password."),
    c_password: Yup.string().required().oneOf([Yup.ref('password'), null], "Password did not matched.")
});

export const signinschema = Yup.object({
    email: Yup.string().email().required("Please enter your email."),
    password: Yup.string().min(6).required("Please enter your password.")
});

export const contactUSschema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name."),
    email: Yup.string().email().required("Please enter your email."),
    msg: Yup.string().min(2).max(100).required("Please enter your message.")
});

export const artSchema = Yup.object({
    title: Yup.string().min(2).max(25).required('Please enter your name'),
    description: Yup.string().min(5).max(50).required('Please enter exhibition description'),
    artist: Yup.string().min(2).max(25).required('Please enter artist name'),
    price: Yup.number().required('Please enter price'),
})