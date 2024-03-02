"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import Employee from "./Employee";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

type Props = {};

const FormSection = (props: Props) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="my-4">
      <div className="flex justify-between gap-4 flex-wrap max-nav:flex-col-reverse ">
        <div className="flex items-start  gap-4 ">
          <Avatar>
            <AvatarImage src="./fan.svg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 ">
              <Button variant="secondary">Click me</Button>
              <Button>Change Photo</Button>
            </div>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              or drag and drop (SVG, PNG, JPG)
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 ">
          <Button>Cancel </Button>
          <Button>Save changes </Button>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="my-4 space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-start justify-between gap-6 w-full max-sm:flex-wrap">
                  <div className="w-full">
                    <FormLabel>Company&lsquo;s name</FormLabel>
                    <FormControl>
                      <Input placeholder="Sixteen Inc." {...field} />
                    </FormControl>
                  </div>
                  <div className="w-full">
                    <FormLabel>Company&lsquo;s website</FormLabel>
                    <FormControl>
                      <Input placeholder="https://sixteen.life/" {...field} />
                    </FormControl>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-6 w-full  max-sm:flex-wrap">
                  <div className="w-full">
                    <FormLabel>Company&lsquo;s LinkedIn</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="http://www.linkedIn.com/company/sixteenlife"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <div className="w-full">
                    <FormLabel>Company&lsquo;s Industry</FormLabel>
                    <FormControl>
                      <Input placeholder="Digital Wellbeing" {...field} />
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
      <Employee />
    </section>
  );
};

export default FormSection;
