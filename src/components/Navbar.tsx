
// imported from react-icons
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

export default function Navbar(){

    const [openBtn, setOpenBtn] = useState(false);

    return(
        <div className="fixed w-full z-10 bg-[#202020] h-[70px] flex items-center p-3 cursor-pointer ">
            <div className="w-full flex items-center justify-between gap-5 p-2 ">
                <p className="cursor-pointer  text-[16px] sm:text-[20px] font-bold md:text-[35px] md:ml-10 ">Enedi Godswill</p>
                <ul className={`${openBtn ? "absolute flex flex-col top-16 right-0 bg-[#202020] " : "hidden " } gap-2 p-2 md:static md:bg-transparent md:flex md:flex-row md:items-center `}>
                    <li className="text-[16px] font-semibold ">About</li>
                    <li className="text-[16px] font-semibold ">Services</li>
                    <li className="text-[16px] font-semibold ">Contact</li>
                </ul>
                <div className="cursor-pointer flex items-center gap-2 md:hidden  "
                onClick={() => setOpenBtn(!openBtn)}>
                    <button className={openBtn ? "hidden " : "flex cursor-pointer " }>
                        <MdMenu className="w-[24px] h-[24px] " />
                    </button>
                    <button className={openBtn ? "flex cursor-pointer " : "hidden" }>
                        <MdClose className="w-[24px] h-[24px] " />
                    </button>
                </div>
            </div>
        </div>
    )
}
