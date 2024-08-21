import Link from "next/link";
import Image from "next/image";

import Container from "@/components/container";
import Navigation from "@/components/navigation";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full py-[18px]">
      <Container className="flex items-end justify-between">
        <Link href="/">
          {/* logo */}
          <Image
            src="logo.svg"
            alt="logo"
            width={420}
            height={64}
            priority={true}
          />
        </Link>

        <div className="text-white">
          {/* email and phone */}
          <div className="flex items-center justify-end gap-x-[28px] mb-9">
            <Link href="tel:065122000" className="flex items-center">
              <Image
                src="/icons/phone.svg"
                alt="phone icon"
                width={14}
                height={11}
                className="mr-2"
              />
              <span>065122000</span>
            </Link>
            <Link href="mailto:info@sssf.shj.ae" className="flex items-center">
              <Image
                src="/icons/mail.svg"
                alt="mail icon"
                width={14}
                height={11}
                className="mr-2"
              />
              info@sssf.shj.ae
            </Link>
          </div>

          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
