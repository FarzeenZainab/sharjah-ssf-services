import * as yup from "yup";

export const contactFormValidations = yup.object({
  fullname: yup
    .string()
    .required("Please enter your full name")
    .max(50, "Maximum 50 characters are allowed for the full name field"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Please enter your email"),
  subject: yup
    .string()
    .required("Please enter a subject for your message")
    .max(150, "Maximum 150 characters are allowed for full name field"),
  message: yup
    .string()
    .required("Please write your message in the above field")
    .max(
      250,
      "Please summarize your message. Maximum of 250 characters are allowed"
    ),
});
