import * as yup from "yup";

// Mail form data
const mailSchema = yup.object({
  full_name: yup.string().required("please enter you full name"),
  email: yup
    .string()
    .required("please enter your mail.")
    .email("please enter a valid mail"),
  subject: yup
    .string()
    .required("please describe the title you are trying to talk about"),
  message: yup.string().required("please describe your queries"),
});

export default mailSchema;
