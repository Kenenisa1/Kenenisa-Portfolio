import { useState , useRef } from "react"
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
 
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { fadeIn, slideIn } from "../utils/motion" 

// template_pqom65i
// service_rdbjywc
// UYohsMPYBtH3-HyQI

const Contact = () => {
const formRef =useRef();
const [form, setForm] = useState({
  name: '',
  email: '',
  message: ''
})
  const [loading, setLoading] = useState(false)
;
const handleChange =( e) => {
  const [name, value] = e.target;
  setForm({...form, [name]: value})
}

const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  emailjs.send(
    ' service_rdbjywc',
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
    },
    (error) => {
      setLoading(false);
      console.log(error);
      alert("Something went wrong, calm and try again.")

    }
  )
  })

}
   return (
     <div className="xl:mt-12 overflow-hidden justify-center">
        <motion.div variants={slideIn('left', "tween" , 0.2 , 1)} className=" flex-[0.75] bg-black-100 p-8 rounded-2xl">
            <p className={`${styles.heroSubText}`}>GET IN TOUCH</p>
            <h2 className={`${styles.heroHeadText}`}>Contact</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row items-center">

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex gap-8 flex-col md:items-start md:flex-col lg:flex-col">
          <label className="flex flex-col"
          >
            <span className="text-white font-medium mb-4">Your Name</span>
            <input  
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col"
          >
            <span className="text-white font-medium mb-4">Your Email</span>
            <input  
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Type your email here"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col"
          >
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea  
              rows={7}
              type="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How do you feel?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'sending ...' : 'send'}
          </button>
        </form>
         <motion.div 
            variants={slideIn('left', "tween" , 0.2 , 1)}
            className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
          >
            <EarthCanvas/>
          </motion.div>
      </div>
     </div>
   )
 }
 
 const CR= SectionWrapper(Contact, "Contact")
 export default Contact;