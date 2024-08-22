import Section from "@/components/section";
import Container from "@/components/container";
import ContactForm from "@/components/contact-form";

const Contact = () => {
  return (
    <div className="bg-gray-50">
      <Container>
        <Section>
          <div className="grid grid-cols-2 items-start gap-x-12">
            <div>
              <h2 className="text-primary mb-[60px]">
                Have Questions? Contact Us Using the Inquiry Form
              </h2>
              <ContactForm />
            </div>
            <div className="size-[751px] max-[1600px]:size-[650px] rounded-full bg-[url('/images/contact-bg.jpg')] bg-cover bg-no-repeat"></div>
          </div>
        </Section>
      </Container>
    </div>
  );
};

export default Contact;
