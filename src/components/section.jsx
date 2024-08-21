import { cn } from "@/utilities/utlis";
import React from "react";

const Section = ({ children, className }) => {
  return <section className={cn("py-[104px]", className)}>{children}</section>;
};

export default Section;
