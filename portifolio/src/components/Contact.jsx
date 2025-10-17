import { useState, useRef } from "react"
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { slideIn } from "../utils/motion"

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_rdbjywc',
      'template_pqom65i',
      {
        from_name: form.name,
        to_name: 'Kenenisa',
        from_email: form.email,
        to_email: 'KenenisaMiesob@gmail.com',
        message: form.message
      },
      'UYohsMPYBtH3-HyQI'
    )
    .then(() => {
      setLoading(false);
      alert("Thank you. I will get back to you insha Allah");
      setForm({
        name: '',
        email: '',
        message: ''
      });
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert("Something went wrong, please try again.");
    });
  }

  return (
    <div className="xl:mt-12 flex flex-col w-full">
      {/* Header Section - Top */}
      <motion.div 
        variants={slideIn('up', "tween", 0.2, 1)} 
        className="text-center mb-16"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact Me</h2>
        <p className="mt-6 text-secondary text-[18px] max-w-2xl mx-auto leading-[30px]">
          I'm always open to discussing new opportunities and creative projects. 
          Feel free to reach out and I'll get back to you as soon as possible!
        </p>
      </motion.div>

      {/* Form and Earth Side by Side */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 w-full">
        {/* Form Section - Left */}
        <motion.div
          variants={slideIn('left', "tween", 0.3, 1)}
          className="flex-1 bg-black-100 p-10 rounded-3xl shadow-2xl border border-[#1d1836] w-full max-w-2xl"
        >
          <form 
            ref={formRef} 
            onSubmit={handleSubmit} 
            className="flex flex-col gap-8 w-full"
          >
            {/* Name Input */}
            <div className="flex flex-col">
              <label className="text-white font-semibold mb-4 text-xl">
                Your Name
              </label>
              <input  
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-5 px-7 placeholder:text-secondary text-white rounded-2xl outline-none border-2 border-transparent focus:border-amber-500 transition-all duration-300 font-medium text-lg hover:bg-[#2a2252]"
                required
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col">
              <label className="text-white font-semibold mb-4 text-xl">
                Your Email
              </label>
              <input  
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="bg-tertiary py-5 px-7 placeholder:text-secondary text-white rounded-2xl outline-none border-2 border-transparent focus:border-amber-500 transition-all duration-300 font-medium text-lg hover:bg-[#2a2252]"
                required
              />
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col">
              <label className="text-white font-semibold mb-4 text-xl">
                Your Message
              </label>
              <textarea  
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                className="bg-tertiary py-5 px-7 placeholder:text-secondary text-white rounded-2xl outline-none border-2 border-transparent focus:border-amber-500 transition-all duration-300 font-medium text-lg resize-none hover:bg-[#2a2252]"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-amber-500 to-amber-600 py-5 px-10 outline-none w-full text-white font-bold text-xl shadow-2xl shadow-amber-500/30 rounded-2xl hover:from-amber-600 hover:to-amber-700 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none mt-4"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </motion.div>

        {/* Earth Canvas Section - Right with large gap */}
        <motion.div 
          variants={slideIn('right', "tween", 0.3, 1)}
          className="flex-1 xl:h-auto md:h-[600px] h-[400px] w-full max-w-2xl"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;