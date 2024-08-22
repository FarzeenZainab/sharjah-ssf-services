"use client";

import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import CustomInput from "@/components/custom-input";

const ContactForm = () => {
  const { control, ...form } = useForm({
    // resolver: zodResolver(FormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CustomInput
          control={control}
          name="fullname"
          label="Full name"
          placeholder="Enter your full name"
        />

        <CustomInput
          control={control}
          name="email"
          label="Email"
          type="email"
          placeholder="Enter email address"
        />

        <CustomInput
          control={control}
          name="subject"
          label="Subject"
          placeholder="Enter subject"
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default ContactForm;
