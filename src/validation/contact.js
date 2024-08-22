import * as yup from "yup";

export const contactFormValidations = yup.object({
  fullname: yup
    .string()
    .required({
      message: "Please enter your full name",
    })
    .max(50, "Maximum 50 characters are allowed for full name field"),
  email: yup
    .string()
    .email({
      message: "Please enter a valid email address",
    })
    .required({
      message: "Please enter your email",
    }),
  subject: yup
    .string()
    .max(150, "Maximum 150 characters are allowed for full name field")
    .required({
      message: "Please enter a subject for your message",
    }),
  message: yup
    .string()
    .required({
      message: "Please enter a valid email address",
    })
    .max(
      250,
      "Please summarize your message. Maximum of 250 characters are allowed"
    ),
});
