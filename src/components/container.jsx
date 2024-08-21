import { cn } from "@/utilities/utlis";

const Container = ({ children, className }) => {
  return (
    <div className={cn("max-w-[1700px] w-full px-[75px] mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
