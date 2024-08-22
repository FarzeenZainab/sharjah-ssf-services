import { Textarea } from "@/components/ui/textarea";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  // FormMessage,
} from "@/components/ui/form";

const CustomTextarea = ({ name, label, placeholder, control }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea name={name} placeholder={placeholder} {...field} />
          </FormControl>
          {/* <FormMessage /> */}
        </FormItem>
      )}
    />
  );
};

export default CustomTextarea;
