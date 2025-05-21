
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-purple-100 to-blue-accent mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me using the form below
            or through any of my social profiles.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2 space-y-8">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-purple-100/10 p-3">
                <Mail className="text-purple-100" size={20} />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:john.smith@example.com" className="text-gray-300 hover:text-purple-100">
                  john.smith@example.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-purple-100/10 p-3">
                <Phone className="text-purple-100" size={20} />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <a href="tel:+12345678901" className="text-gray-300 hover:text-purple-100">
                  +1 (234) 567-8901
                </a>
              </div>
            </div>
            
            <div className="pt-8">
              <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-dark-200 flex items-center justify-center border border-white/5 hover:bg-purple-100/10 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-dark-200 flex items-center justify-center border border-white/5 hover:bg-purple-100/10 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-dark-200 border-white/10 focus:border-purple-100"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-dark-200 border-white/10 focus:border-purple-100"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="bg-dark-200 border-white/10 focus:border-purple-100"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  rows={6}
                  className="bg-dark-200 border-white/10 focus:border-purple-100"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full md:w-auto px-8 py-6 bg-gradient-to-r from-purple-100 to-blue-accent hover:opacity-90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
