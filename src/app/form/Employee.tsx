import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  description: z.string().min(2, {
    message: "Details must be at least 2 characters.",
  }),
  goals: z.string().url({
    message: "company website must be a valid url.",
  }),
  headquarters: z.string().url({
    message: "company's LinkedIn must be a valid url.",
  }),
  funding: z.string().min(2, {
    message: "company's LinkedIn must be a valid url.",
  }),
  faqs: z.string().min(2, {
    message: "company's LinkedIn must be a valid url.",
  }),
});

type Props = {};

const Employee = (props: Props) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      goals: "",
      headquarters: "",
      funding: "",
      faqs: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Employee Count
      </h4>
      <ul className="my-2 flex items-center gap-4">
        <Badge>1-10 </Badge>
        <Badge variant="secondary">10 -100 </Badge>
        <Badge variant="secondary">100 - 500 </Badge>
        <Badge variant="secondary">1000+ </Badge>
      </ul>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="my-4 space-y-8">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <div className="w-full">
                  <div className="w-full">
                    <FormLabel>Company&lsquo;s Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Sixteen Inc." {...field} />
                    </FormControl>
                    <FormDescription>
                      Your Detailed company description
                    </FormDescription>
                  </div>
                  <div className="my-4 w-full">
                    <FormLabel> What are your Company&lsquo;s goals</FormLabel>
                    <FormControl>
                      <Input placeholder="https://sixteen.life/" {...field} />
                    </FormControl>
                  </div>
                </div>
                <div className="my-4 w-full">
                  <FormLabel>Headquarters</FormLabel>
                  <FormControl>
                    <Input placeholder="Delhi, India" {...field} />
                  </FormControl>
                </div>
                <div className="flex items-center justify-between mt-2 gap-6 w-full  max-sm:flex-wrap">
                  <div className="w-full">
                    <FormItem>
                      <FormLabel>Funding Round</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seed" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="I am something">
                            I am Something
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  </div>
                  <div className="w-full">
                    <FormLabel>FAQs</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://sixteen.life/faq"
                        {...field}
                      />
                    </FormControl>
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </section>
  );
};

export default Employee;
