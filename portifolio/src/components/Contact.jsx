import { useState , useRef } from "react"
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
 
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion" 

const Contact = () => {
const formRef =useRef();
const [form, setForm] = useState({
  name: '',
  email: '',
  message: ''
})
  const [loading, setLoading] = useState(false)
;
const handleChange =( e) => {}
const handleSubmit = (e) => {}
   return (
     <div className="xl:mt-12 xl:flex-row flex-col-reverse flex overflow-hidden">
        <motion.div variants={slideIn('left', "tween" , 0.2 , 1)} className=" flex-[0.75] bg-black-100 p-8 rounded-2xl">
            <p className={`${styles.heroSubText}`}>GET IN TOUCH</p>
            <h2 className={`${styles.heroHeadText}`}>Contact</h2>
        </motion.div>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-12 gap-8">
          <label 
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          >

          </label>
        </form>
     </div>
   )
 }
 
 export default Contact