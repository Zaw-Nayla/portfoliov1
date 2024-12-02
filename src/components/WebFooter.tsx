import { contactlist } from "../data";
import useMediaQuery from "./Screensize";

const WebFooter = () => {
    const openprofle = (url: string) => {
        window.open(url, "_blank");
    };
    const sendEmail = () => {
        const email = "zawnayla.znl@gmail.com";
        const subject = "Hello!";
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
        window.open(mailtoLink, "_blank");
    };
    const isMobile = useMediaQuery('(max-width: 760px)'); 
    return (
       <>
       {!isMobile && <>
            <footer className="cursor-pointer fixed flex flex-col items-center justify-center bottom-0 left-0  w-fit pl-6 ">
                {contactlist.map((contact) =>
                    <img className="object-contain  w-6 pt-4"
                        key={contact.listid}
                        src={contact.icon}
                        onClick={() => openprofle(contact.url)} />)}
                <div className="w-px h-12 bg-transparent mt-2"></div>
            </footer>
            <footer className=" cursor-pointer fixed flex flex-col items-center justify-center   bottom-0 right-0 w-fit  pr-10">
                <p onClick={sendEmail} className=' [writing-mode:vertical-rl] text-tertiary text-center'> zawnayla.znl@gmail.com </p>
                <div className="w-px h-12 bg-transparent mt-2"></div>
            </footer>
        </>}
       </>
       
    )
}

export default WebFooter;