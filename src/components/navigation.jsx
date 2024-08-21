import { navigation } from "@/data/navigation";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex items-center gap-x-[65px]">
        {navigation.map((item, index) => {
          return (
            <li key={index} className="nav-item">
              <Link href={item.href}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
