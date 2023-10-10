"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { notebookSchema } from "@/validators/notebook";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

type NoteBookInputProps = {};

export const NoteBookInput = ({}: NoteBookInputProps) => {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof notebookSchema>>({
    resolver: zodResolver(notebookSchema),
    defaultValues: {
      name: "",
      color: "",
    },
  });
  const { mutate: createNotebook } = useMutation({
    mutationFn: async (data: z.infer<typeof notebookSchema>) => {
      const response = await axios.post("/api/create/notebook", data);
      return response.data;
    },
  });
  async function onSubmit(values: z.infer<typeof notebookSchema>) {
    createNotebook(values, {
      onSuccess: (data) => {
        const notebookId = data.notebook_id;
        toast({
          title: "Success",
          description: "notebook created successfully",
        });
        console.log(notebookId);
        router.push(`/create/${notebookId}`);
      },
      onError: () => {
        toast({
          title: "Erro",
          description: "Internal Server Error",
          variant: "destructive",
        });
      },
    });
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name of notebook</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Color</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[100%]">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="w-[100%]">
                    <SelectItem
                      value="bg-gradient-to-tr to-blue-300 from-blue-400"
                      className="w-[100%]"
                    >
                      <span className="w-[100%] gap-4 h-[100%] flex items-center">
                        <p>Blue </p>
                        <span className="h-[20px] w-[20px] rounded-lg bg-blue-500"></span>
                      </span>
                    </SelectItem>
                    <SelectItem
                      value="bg-gradient-to-tr to-green-300 from-green-400"
                      className="w-[100%]"
                    >
                      <span className="w-[100%] gap-4 h-[100%] flex items-center">
                        <p>Green </p>
                        <span className="h-[20px] w-[20px] rounded-lg bg-green-500"></span>
                      </span>
                    </SelectItem>
                    <SelectItem
                      value="bg-gradient-to-tr to-orange-300 from-orange-400"
                      className="w-[100%]"
                    >
                      <span className="w-[100%] gap-4 h-[100%] flex items-center">
                        <p>Orange </p>
                        <span className="h-[20px] w-[20px] rounded-lg bg-orange-500"></span>
                      </span>
                    </SelectItem>
                    <SelectItem
                      value="bg-gradient-to-tr to-pink-300 from-pink-400"
                      className="w-[100%]"
                    >
                      <span className="w-[100%] gap-4 h-[100%] flex items-center">
                        <p>Pink </p>
                        <span className="h-[20px] w-[20px] rounded-lg bg-pink-500"></span>
                      </span>
                    </SelectItem>
                    <SelectItem
                      value="bg-gradient-to-tr to-red-300 from-red-400"
                      className="w-[100%]"
                    >
                      <span className="w-[100%] relative gap-4 h-[100%] flex items-center">
                        <p>Red </p>
                        <span className="h-[20px] w-[20px] rounded-lg bg-red-500"></span>
                      </span>
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
};
