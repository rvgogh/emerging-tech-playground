import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageSquare } from "lucide-react";
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
import rolandImg from "@/assets/roland-van-gogh.jpg";

type ContactForm = { email: string; vraag: string };

const getTeamsLink = () => {
  const parts = ["https://teams.microsoft.com/l/chat/0/0?users=", "rwa.van", "gogh@", "avans.nl"];
  return parts.join("");
};

const ContactSection = () => {
  const { toast } = useToast();
  const { t, lang } = useLanguage();
  const c = translations.contact;
  const cp = translations.contactPerson;

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

            {/* Contact person */}
            <div className="mt-8 flex items-center justify-between gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-center gap-4">
                <img
                  src={rolandImg}
                  alt={cp.name}
                  className="w-16 h-16 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="text-white font-bold">{cp.name}</p>
                  <p className="text-white/60 text-sm">{t(cp.role)}</p>
                </div>
              </div>
              <Button asChild size="sm" className="shrink-0">
                <a
                  href={getTeamsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare size={14} className="mr-1.5" />
                  {t(cp.cta)}
                </a>
              </Button>
            </div>
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

                <Button type="submit" variant="secondary" size="lg" className="w-full font-semibold">
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
