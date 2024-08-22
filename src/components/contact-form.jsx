"use client";
import { useState } from "react";

import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import CustomInput from "@/components/custom-input";
import CustomTextarea from "@/components/custom-textarea";

import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormValidations } from "@/validation/contact";

const ContactForm = () => {
  const [formData, setFormData] = useState();
  const { control, formState, ...form } = useForm({
    resolver: yupResolver(contactFormValidations),
    defaultValues: {
      fullname: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    setFormData(data);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CustomInput
            control={control}
            name="fullname"
            label="Full name"
            placeholder="Enter your full name"
            hasError={formState.errors.fullname}
          />

          <CustomInput
            control={control}
            name="email"
            label="Email"
            type="email"
            placeholder="Enter email address"
            hasError={formState.errors.email}
          />

          <CustomInput
            control={control}
            name="subject"
            label="Subject"
            placeholder="Enter subject"
            hasError={formState.errors.subject}
          />

          <CustomTextarea
            control={control}
            name="message"
            label="Message"
            placeholder="Type your message here"
            className="mb-[50px]"
            hasError={formState.errors.message}
          />

          <Button type="submit" className="w-[177px]">
            Submit
          </Button>
        </form>
      </Form>

      {formData && (
        <div className="p-6 rounded-lg mt-6 bg-white">
          <h3 className="mb-6">Form data</h3>
          <p className="mb-2  ">Full name: {formData.fullname}</p>
          <p className="mb-2">Email: {formData.email}</p>
          <p className="mb-2">Subject: {formData.subject}</p>
          <p className="mb-2">
            Message: <br />
            {formData.message}
          </p>
        </div>
      )}
    </>
  );
};

export default ContactForm;
