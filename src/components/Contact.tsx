import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import { textVariant } from "../utils/motion";
import useMediaQuery from "./Screensize";
import { contactlist } from "../data";
import { mail } from "../assets";

const Contact = () => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;

    const [loading, setLoading] = useState(false);
    const [formData, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .send(
                serviceId,
                templateId,
                formData,
                userId,
            )
            .then(
                (response) => {
                    console.log("Email sent successfully", response);
                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    })
                    setLoading(false)

                },
                (error) => {
                    console.error("Error sending email", error);
                    setLoading(false)
                }

            );
    };
    const controls = useAnimation();
    const isMobile = useMediaQuery('(max-width: 760px)');

    useEffect(() => {
        controls.start("show");
    }, [controls]);


    const openprofle = (url: string) => {
        window.open(url, "_blank");
    };
    const sendEmail = () => {
        const email = "zawnayla.znl@gmail.com";
        const subject = "Hello!";
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
        window.open(mailtoLink, "_blank");
    };

    return (
        <div
            className=" px-5 md:pl-16 md:pr-28 lg:px-28">
            <motion.div
                variants={textVariant(0)}
                className='flex items-center pb-8' >
                <h2 className={`${styles.sectionText} `}><span className='text-slate-500'>04. </span>What's Next?</h2> <div className="w-[25%] h-[1px] bg-gray-500"></div>
            </motion.div>

            <div className="md:w-[70vw] lg:w-[50vw] md:mr-20">
                <div className={`${styles.titleText}`}>
                    For any new opportunities, my inbox is always open. <br /> Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </div>
                <form onSubmit={handleSubmit}
                    className="mt-12 gap-4 flex flex-col" >
                    <span className={`${styles.titleText}`}>Full Name</span>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className={` ${styles.titleText} bg-primary rounded-lg p-4 border `} />
                    <span className={`${styles.titleText} mt-3`}>Email Address</span>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className={` ${styles.titleText} bg-primary rounded-lg p-4 border `} />
                    <span className={`${styles.titleText} mt-3`}>Message</span>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Enter your message"
                        rows={3}
                        className={` ${styles.titleText} bg-primary rounded-lg p-4 border `} />
                    <button
                        type='submit'
                        className={`${styles.titleText} bg-quaternary rounded-lg py-3 mt-5 shadow-md shadow-primary `} >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>

            {isMobile && <div className="mb-16 mt-6 ">
                <div className="flex items-center justify-center gap-3">
                    <div className="w-[45%] h-[1px] bg-gray-500"></div><p>OR</p><div className="w-[45%] h-[1px] bg-gray-500"></div>
                </div>

                 <div className="flex items-center justify-evenly">
                 <img className="object-contain  w-6 pt-4"
                        key="email"
                        src={mail}
                        onClick={sendEmail} />
                {contactlist.map((contact) =>
                    <img className="object-contain  w-6 pt-4"
                        key={contact.listid}
                        src={contact.icon}
                        onClick={() => openprofle(contact.url)} />)}
            </div> 

            </div>}

           


        </div>
    );
};

export default SectionWrapper(Contact, "contact");

