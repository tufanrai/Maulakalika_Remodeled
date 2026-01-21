import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import mailSchema from "@/components/schema/Mail.schema";
import { useMutation } from "@tanstack/react-query";
import mailAdmin from "@/api/mail.api";

interface IMail {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  // Mutate mail contents
  const { mutate, isPending } = useMutation({
    mutationFn: mailAdmin,
    mutationKey: ["New mail"],
    onSuccess: (data) => {
      toast.success(data?.message);
      reset();
    },
    onError: (e) => {
      toast.error(e.name);
      reset();
    },
  });

  // Form validation
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(mailSchema),
  });

  const sendMail = (data: IMail) => {
    mutate(data);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
              <hr className="max-w-50 w-full h-1 rounded-full border-accent" />
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about our projects or interested in partnership
              opportunities? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Head Office</h3>
                    <a
                      href="https://maps.app.goo.gl/34bk2BR9oLRxccyP9"
                      target="_blank"
                      className="text-muted-foreground text-sm ease duration-200 hover:text-accent"
                    >
                      Kamaladi, Hama Tower
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <a
                      href="mailto:info@maulakalika.com"
                      className="text-muted-foreground hover:text-accent ease duration-200 text-sm"
                    >
                      info@maulakalika.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Phone</h3>
                    <a
                      href="tel:01-5913897"
                      className="text-muted-foreground text-sm ease duration-200 hover:text-accent"
                    >
                      01-5913897
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">
                      Office Hours
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Sun - Fri: 10:00 AM - 5:00 PM (NPT)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit(sendMail)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        {...register("name")}
                      />
                      {errors && errors.name ? (
                        <p className="font-regural text-sm text-red-500 w-full text-end px-3 py-2">
                          {errors.name.message}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        {...register("email")}
                      />
                      {errors && errors.email ? (
                        <p className="font-regural text-sm text-red-500 w-full text-end px-3 py-2">
                          {errors.email.message}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="How can we help?"
                      {...register("subject")}
                    />
                    {errors && errors.subject ? (
                      <p className="font-regural text-sm text-red-500 w-full text-end px-3 py-2">
                        {errors.subject.message}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your inquiry..."
                      rows={6}
                      {...register("message")}
                    />
                    {errors && errors.message ? (
                      <p className="font-regural text-sm text-red-500 w-full text-end px-3 py-2">
                        {errors.message.message}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>

                  <Button
                    type="submit"
                    className={`${
                      isPending ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                    variant="accent"
                    size="lg"
                    disabled={isPending}
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
