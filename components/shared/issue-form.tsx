"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { createIssue } from "@/action/action";
import { useState } from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 3 characters.",
  }),
  description: z.string().min(10, {
    message: "Title must be at least 10 characters.",
  }),
});

const IssueForm = () => {
  const router = useRouter();
  const [IsPending, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsPending(true);
      await createIssue({
        title: values.title,
        description: values.description,
      });
      // console.log(values);

      form.reset();
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full max-w-md flex flex-col items-start"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="max-w-md w-full">
              <FormLabel className="text-black font-medium">Title</FormLabel>
              <FormControl className="w-full">
                <Input
                  disabled={IsPending}
                  required
                  className=""
                  placeholder="Title..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="max-w-md w-full">
              <FormLabel className="text-black font-medium">
                Desciption
              </FormLabel>
              <FormControl className="w-full">
                <SimpleMDE
                  disabled={IsPending}
                  className="w-full"
                  placeholder="Desciption..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="" size="sm" disabled={IsPending} type="submit">
          {IsPending ? "Creating..." : "Create"}
        </Button>
      </form>
    </Form>
  );
};

export default IssueForm;
