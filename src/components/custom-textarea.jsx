import { Textarea } from "@/components/ui/textarea";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  // FormMessage,
} from "@/components/ui/form";
import { cn } from "@/utilities/utlis";

const CustomTextarea = ({
  name,
  label,
  placeholder,
  control,
  className,
  hasError,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("flex gap-2 mb-3", className)}>
          <FormLabel className="shrink-0 w-[60px] font-normal text-right mt-6">
            {label}
          </FormLabel>
          <FormControl>
            <Textarea
              name={name}
              placeholder={placeholder}
              className={cn(
                "!h-[232px] resize-none",
                hasError ? "border border-destructive " : ""
              )}
              {...field}
            />
          </FormControl>
          {/* <FormMessage /> */}
        </FormItem>
      )}
    />
  );
};

export default CustomTextarea;
