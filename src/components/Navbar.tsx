
export default function Navbar(){
    return(
        <div className="fixed w-full z-10 bg-[#202020] h-[70px] flex items-center p-3 cursor-pointer ">
            <div className="w-full flex items-center justify-between gap-5 p-2 ">
                <p className="cursor-pointer text-[16px] sm:text-[20px] font-bold md:text-[35px] md:ml-10 ">Enedi Godswill</p>
                <ul className="flex items-center gap-3 md:mr-10 ">
                    <li className="text-[16px] font-semibold ">About</li>
                    <li className="text-[16px] font-semibold ">Services</li>
                    <li className="text-[16px] font-semibold ">Contact</li>
                </ul>
            </div>
        </div>
    )
}
