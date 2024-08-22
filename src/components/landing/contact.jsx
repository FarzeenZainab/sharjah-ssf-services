import Section from "@/components/section";
import Container from "@/components/container";
import ContactForm from "@/components/contact-form";

const Contact = () => {
  return (
    <Container>
      <Section>
        <div className="grid grid-cols-2">
          <div>
            <h2 className="text-primary">
              Have Questions? Contact Us Using the Inquiry Form
            </h2>
            <ContactForm />
          </div>
          <div></div>
        </div>
      </Section>
    </Container>
  );
};

export default Contact;
