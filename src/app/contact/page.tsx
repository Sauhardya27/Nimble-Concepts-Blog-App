import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'Contact Description',
};

const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12.5 mb-20">
      
      <div className="flex-1 h-150 relative w-full">
        <Image 
          src="/contact.png" 
          alt="Contact Img" 
          fill 
          className="object-contain" 
        />
      </div>

      <div className="flex-1 w-full">
        <form action="" className="flex flex-col gap-5">
          <input 
            type="text" 
            placeholder="Name and Surname" 
            className="p-5 rounded-[15px] border-none outline-none bg-(--bgSoft) text-(--text)"
          />
          <input 
            type="text" 
            placeholder="Email Address" 
            className="p-5 rounded-[15px] border-none outline-none bg-(--bgSoft) text-(--text)"
          />
          <input 
            type="text" 
            placeholder="Phone Number (Optional)" 
            className="p-5 rounded-[15px] border-none outline-none bg-(--bgSoft) text-(--text)"
          />
          <textarea 
            name="" 
            id="" 
            cols={30} 
            rows={10} 
            placeholder="Message"
            className="p-5 rounded-[15px] border-none outline-none bg-(--bgSoft) text-(--text) resize-none"
          ></textarea>
          <button className="p-5 bg-(--btn) text-(--text) font-bold border-none rounded-[15px] cursor-pointer hover:opacity-90 transition-opacity">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;