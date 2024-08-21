import Container from "@/components/container";

const HeroSection = () => {
  return (
    <div className="h-screen bg-[url('/images/banner-1.jpg')] bg-cover bg-no-repeat relative">
      {/* banner title & description */}
      {/* TODO: change to a carousel */}
      <Container className="h-full relative z-[3] flex items-end w-full">
        <section className="w-full">
          {/* title */}
          <h1 className="font-medium text-white mb-[28px]">
            Protect your presence secure your future
          </h1>

          {/* separator */}
          <div className="w-full border border-gray-50/40 mb-[28px]"></div>

          {/* description */}
          <div className="text-white flex items-start gap-x-[221px] mb-10">
            <div className="w-[229px] flex items-center gap-x-2">
              <div className="size-[10px] bg-white rounded-full"></div>
              <p className="text-small">Sharjah Social Security Fund</p>
            </div>
            <div>
              <p className="max-w-[605px]">
                Security in the Emirate of Sharjah plays an important role in
                achieving job stability and strengthening the employee&apos;s
                relationship...
              </p>
            </div>
          </div>
        </section>
      </Container>

      {/* background image overlays */}
      <div className="overlay overlay-top"></div>
      <div className="overlay overlay-bottom"></div>
    </div>
  );
};

export default HeroSection;
