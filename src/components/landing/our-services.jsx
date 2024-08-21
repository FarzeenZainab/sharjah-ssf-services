import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Section from "@/components/section";
import Container from "@/components/container";

const OurServices = () => {
  return (
    <div className="bg-gray-50">
      <Container>
        <Section>
          <h2 className="text-primary font-pf-din font-medium text-center mb-[64px]">
            Discover Our Services
          </h2>

          <Tabs defaultValue="individual">
            <div className="w-full flex justify-center">
              <TabsList>
                <TabsTrigger value="all">All Services</TabsTrigger>
                <TabsTrigger value="business">Business Services</TabsTrigger>
                <TabsTrigger value="individual">
                  Individual Services
                </TabsTrigger>
              </TabsList>
            </div>

            {/* we can make it reusable */}
            <TabsContent value="all">All Services</TabsContent>
            <TabsContent value="business">Business Services</TabsContent>
            <TabsContent value="individual">Individual Services</TabsContent>
          </Tabs>
        </Section>
      </Container>
    </div>
  );
};

export default OurServices;
