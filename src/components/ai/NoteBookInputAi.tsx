"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { useToast } from "@/components/ui/use-toast";
import { aiCardSchema } from "@/validators/aiCard";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  notebook: z.string(),
  color: z.string(),
  title: z.string(),
  description: z.string(),
});

export const NoteBookInputAi = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      notebook: "",
      color: "",
      title: "",
      description: "",
    },
  });
  const { mutate: createFlashCard } = useMutation({
    mutationFn: async (data: z.infer<typeof aiCardSchema>) => {
      const response = await axios.post("/api/ai/create", data);
      return response.data;
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    createFlashCard(values, {
      onSuccess: (data) => {
        const { notebook_id } = data;
        setLoading(false);
        toast({
          title: "Success",
          description: "flashcard created successfully",
        });
        router.push(`/create/${notebook_id}`);
      },
      onError: (error) => {
        setLoading(false);
        console.log(error);
        toast({
          title: "Error",
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
            name="notebook"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name of Notebook</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
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

          <Button disabled={loading} type="submit">
            Submit
            {loading && <Loader2 className="animate-spin ml-2" />}
          </Button>
        </form>
      </Form>
    </>
  );
};
