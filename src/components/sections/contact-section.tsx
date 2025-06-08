"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { socialLinks } from '@/lib/data';
import { Send } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message must not exceed 500 characters."
  }),
})

export function ContactSection() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  // Placeholder onSubmit function
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values) // In a real app, you'd send this data to a backend
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset(); // Reset form after submission
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-12 text-primary">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="font-body text-lg text-foreground/90 leading-relaxed">
              I&apos;m always excited to discuss new projects, creative ideas, or opportunities to collaborate. Feel free to reach out using the form or connect with me on social media.
            </p>
            <div className="space-y-4">
              {socialLinks.map(link => (
                <Button key={link.label} variant="ghost" asChild className="w-full justify-start text-lg p-0 h-auto hover:bg-accent/10">
                  <Link href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground hover:text-accent p-2 rounded-md">
                    <link.Icon className="h-6 w-6 mr-3 text-accent" />
                    {link.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 sm:p-8 bg-muted/30 rounded-lg shadow-lg">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-body text-foreground">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} className="font-body bg-background"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-body text-foreground">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} className="font-body bg-background"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-body text-foreground">Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message..." {...field} rows={5} className="font-body bg-background"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Send className="mr-2 h-5 w-5" /> Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
