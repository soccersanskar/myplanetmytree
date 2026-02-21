import { useState } from "react";
import { TreePine, Mail, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSent(true);
    toast({ title: "Message sent! 💌", description: "The Pandey family will get back to you soon." });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Have questions, ideas, or just want to say hello? The Pandey family and our support team would love to hear from you. Every message matters to us. 🌿
          </p>

          {!sent ? (
            <form onSubmit={handleSend} className="space-y-4">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-xl border border-input bg-card px-6 py-4 text-foreground focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                rows={5}
                placeholder="Write your message to the Pandey family or our support team..."
                maxLength={1000}
              />
              <button
                type="submit"
                className="bg-gradient-forest text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message 💌
              </button>
            </form>
          ) : (
            <div className="bg-card rounded-xl p-8 border border-border animate-fade-in-up">
              <Heart className="h-10 w-10 text-primary mx-auto mb-4" />
              <p className="text-foreground font-serif text-xl">
                Thank you for reaching out! We'll get back to you soon. 🌱
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
