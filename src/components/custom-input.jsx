import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  // FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const CustomInput = ({ control, name, label, placeholder, type }) => {
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
            <Input placeholder={placeholder} type={type} {...field} />
          </FormControl>
          {/* <FormMessage /> */}
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
