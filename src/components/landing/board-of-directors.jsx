import Section from "@/components/section";
import Container from "@/components/container";

const BoardOfDirectors = () => {
  return (
    <div className="bg-[url('/images/shapes.png')] bg-cover bg-no-repeat">
      <Container>
        <Section>
          <div className="mb-[64px]">
            <h3 className="text-center text-primary">Board Of Directors</h3>
            <h2 className="text-primary font-medium text-center text-black">
              Meet Our Esteemed Board of Directors
            </h2>
          </div>
        </Section>
      </Container>
    </div>
  );
};

export default BoardOfDirectors;
