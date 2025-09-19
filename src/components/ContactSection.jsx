import { FaTelegramPlane } from "react-icons/fa";
import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
  Twitch,
  Twitter,
  Youtube,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
export const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent! Thank you for Your message🫂");
    setTimeout(() => {
      e.target.reset();
    }, 1500);
    // Handle form submission logic here
  };
  return (
    <section id="Contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
          Get In Touch<span className="text-primary"></span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Let’s connect! Reach out anytime for collaborations, projects, or
          opportunities. I’d love to hear from you and create together.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gab-12 ">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium flex">Email</h4>
                  <a href="mailto:hello@gmail.com">thokpanhaa@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <FaTelegramPlane className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium flex">Telegram</h4>
                  <a href="tel:+123456789">+855 715 688 769</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium flex">Location</h4>
                  <a className="flex ">Cvv, Phnom Penh, Cambodia.</a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/thok-panha-491625357/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://x.com/messages" target="_blank">
                  <Twitter />
                </a>
                <a href="https://www.twitch.tv/" target="_blank">
                  <Twitch />
                </a>
                <a href="https://www.facebook.com/callmekellar" target="_blank">
                  <Facebook />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3
              className="
          text-2xl font-semibold mb-6"
            >
              Send a Message
            </h3>
            <form className="space-y-6" action="" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your cute name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I want to talk with you about..."
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
