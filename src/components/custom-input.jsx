import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { cn } from "@/utilities/utlis";

const CustomInput = ({ control, name, label, placeholder, type, hasError }) => {
  return (
    <FormField
      control={control}
      name={name}
      className="mb-3"
      render={({ field }) => (
        <FormItem className="flex items-center gap-x-2 mb-3">
          <FormLabel className="shrink-0 w-[60px] font-normal text-right">
            {label}
          </FormLabel>
          <FormControl>
            <div className="w-full">
              <Input
                placeholder={placeholder}
                type={type}
                className={cn(hasError ? "border border-destructive " : "")}
                {...field}
              />
              <FormMessage className="font-normal text-sm mt-1" />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
