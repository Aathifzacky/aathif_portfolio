
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Send, CheckCircle, XCircle, MapPin, Mail, Phone } from "lucide-react";
import SocialIcons from "./SocialIcons";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    status: "idle" | "submitting" | "success" | "error";
    message: string;
  }>({
    status: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ status: "submitting", message: "" });

    // Simulate form submission
    setTimeout(() => {
      if (Math.random() > 0.1) {
        // 90% success rate for demo
        setFormStatus({
          status: "success",
          message: "Your message has been sent successfully!",
        });
        setFormState({ name: "", email: "", message: "" });
      } else {
        setFormStatus({
          status: "error",
          message: "There was an error sending your message. Please try again.",
        });
      }
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "Colombo, Sri Lanka",
    },
    {
      icon: Mail,
      title: "Email",
      content: "zacky.aathif@gmail.com",
      href: "mailto:zacky.aathif@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+94 77 123 4567",
      href: "tel:+94771234567",
    },
  ];

  return (
    <section id="contact" className="section-container">
      <div
        ref={ref}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 
            className={`section-title inline-block transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Get In Touch
          </h2>
          <p 
            className={`section-subtitle mx-auto transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div 
            className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-theme-accent-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-theme-accent-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">{item.title}</h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-theme-text-secondary hover:text-theme-accent-primary transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-theme-text-secondary">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Let's Connect</h4>
              <SocialIcons iconSize={24} />
            </div>
          </div>

          <div 
            className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <h3 className="text-2xl font-bold mb-8">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-theme-dark-surface border border-white/10 focus:border-theme-accent-primary focus:outline-none focus:ring-1 focus:ring-theme-accent-primary transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-theme-dark-surface border border-white/10 focus:border-theme-accent-primary focus:outline-none focus:ring-1 focus:ring-theme-accent-primary transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-theme-dark-surface border border-white/10 focus:border-theme-accent-primary focus:outline-none focus:ring-1 focus:ring-theme-accent-primary transition-colors resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={formStatus.status === "submitting"}
                className="btn-primary w-full group"
              >
                {formStatus.status === "submitting" ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Send Message
                    <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </button>
              
              {formStatus.status === "success" && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-500" />
                  <p>{formStatus.message}</p>
                </div>
              )}
              
              {formStatus.status === "error" && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-2">
                  <XCircle size={20} className="text-red-500" />
                  <p>{formStatus.message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
