import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

type ContactForm = { email: string; vraag: string };

const ContactSection = () => {
  const { toast } = useToast();
  const { t, lang } = useLanguage();
  const c = translations.contact;

  const contactSchema = z.object({
    email: z
      .string()
      .trim()
      .email(t(c.emailError))
      .max(255, t(c.maxError)),
    vraag: z
      .string()
      .trim()
      .max(1000, t(c.maxQuestionError))
      .optional()
      .default(""),
  });

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { email: "", vraag: "" },
  });

  const onSubmit = async (data: ContactForm) => {
    console.log("Contact form submitted:", data);
    toast({
      title: t(c.successTitle),
      description: t(c.successDescription),
    });
    form.reset();
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28"
      style={{
        background:
          "linear-gradient(180deg, hsl(0 0% 12.5%) 0%, hsl(0 0% 8%) 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              {t(c.label)}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-3 text-white">
              {t(c.heading)}
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed text-lg">
              {t(c.description)}
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">{t(c.emailLabel)}</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={t(c.emailPlaceholder)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="vraag"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">{t(c.questionLabel)}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t(c.questionPlaceholder)}
                          rows={4}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/40 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full font-semibold">
                  {t(c.submit)}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
