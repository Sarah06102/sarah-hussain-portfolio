import React, { useState } from 'react';
import useLocalStorage from 'use-local-storage';
import { Phone, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [isDarkTheme] = useLocalStorage("isDarkTheme", false);
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
      
        emailjs.send(
          'service_1ckudor',
          'template_hoy46p9',
            {
                name: form.name,
                email: form.email,
                subject: form.subject || 'New Contact',
                message: form.message
            },
          'bX7gsmZR0VtRQVL0z'
        ).then(() => {
            setForm({ name: '', email: '', subject: '', message: '' });
            setStatus("success");
            setTimeout(() => setStatus(null), 5000);
        }).catch((err) => {
            console.error("Message failed to send:", err);
            setStatus("error");
        });
    };
    
    return (
        <section id="Contact" className="min-h-screen px-6 py-40">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
                {/* Left side - Contact Info */}
                <div className="flex-1">
                    <h2 className="text-3xl font-bold text-indigo-400 mb-4">Let's Connect</h2>
                    <p className="mb-6">
                        I’m currently exploring internships in software development, product, or data. 
                        Feel free to connect if you’re building something impactful or looking for a thoughtful contributor. I'm always happy to chat!
                    </p>
                    <div className="space-y-4 ml-2">
                        
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-purple-400">
                                <Phone className="w-6 h-6" />
                            </div>
                            <p><span className="font-bold">Phone:</span> (778) 228-4350</p>
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-green-400">
                                <Mail className="w-6 h-6" />
                            </div>
                            <p><span className="font-bold">Email:</span> sarah.hra06@gmail.com</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-red-400">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <p><span className="font-bold">Location:</span> Waterloo, Ontario, Canada</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-white-400">
                                <Github className="w-6 h-6" />
                            </div>
                            <p><span className="font-bold">GitHub:</span><a href="https://github.com/Sarah06102" className="text-blue-400"> Sarah06102</a></p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-blue-400">
                                <Linkedin className="w-6 h-6" />
                            </div>
                            <p><span className="font-bold">Linkedin:</span><a href="https://www.linkedin.com/in/sarah-hussain01/" className="text-blue-400"> sarah-hussain01</a></p>
                        </div>
                    </div>
                </div>

                {/* Right side - Contact Form */}
                <form onSubmit={handleSubmit} className={`flex-1 p-6 rounded-lg shadow-lg ${isDarkTheme === true ? "dark-card-contact" : "light-card-contact" }`}>
                    <h3 className={`text-xl font-semibold mb-4 ${isDarkTheme === true ? "text-white" : "text-black" }`}>Send Me a Message</h3>
                    <input type="text" name="name" placeholder="Your name" className={`w-full p-3 mb-4 rounded ${isDarkTheme === true ? "dark-contact-input" : "light-contact-input" }`} value={form.name} onChange={handleChange} required/>
                    <input type="email" name="email" placeholder="Your email" className={`w-full p-3 mb-4 rounded bg-gray-700 ${isDarkTheme === true ? "dark-contact-input" : "light-contact-input" }`} value={form.email} onChange={handleChange} required/>
                    <input type="text" name="subject" placeholder="Subject" className={`w-full p-3 mb-4 rounded bg-gray-700 ${isDarkTheme === true ? "dark-contact-input" : "light-contact-input" }`} value={form.subject} onChange={handleChange}/>
                    <textarea name="message" placeholder="Your message" className={`w-full p-3 mb-6 rounded bg-gray-700 ${isDarkTheme === true ? "dark-contact-input" : "light-contact-input" }`} rows="5" value={form.message} onChange={handleChange} required/>
                    <button type="submit" className="w-full py-3 bg-indigo-400 hover:bg-indigo-600 rounded font-semibold cursor-pointer text-white">
                        Send Message
                    </button>
                    {status === "success" && (
                        <p className="text-green-400 mt-4">Message sent successfully!</p>
                    )}

                    {status === "error" && (
                        <p className="text-red-400 mt-4">Failed to send message. Please try again.</p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;