
import hero from "../icon/main.png"

export default function Hero(){
    return(
        <div className="w-full h-screen flex items-center justify-center gap-3 p-3 ">
            <div className="w-full h-full flex flex-col sm:flex-row items-center justify-center gap-3 ">
                {/* hero text */}
                <div className="w-full sm:w-[50%] flex items-center justify-center sm:justify-end ">
                    <div className="w-full sm:w-[90%] md:w-[70%] flex flex-col gap-0 sm:gap-4 p-5 items-center sm:items-start ">
                        <div className="w-full flex flex-col items-center sm:items-start ">
                            <p className="text-[20px] md:text-[30px] ">Hello, I'm</p>
                            <p className="text-[35px] font-bold text-[#8AFC7B] md:text-[45px] ">Enedi Godswill</p>
                        </div>
                        <div className="w-full flex flex-col gap-2 items-center sm:items-start ">
                            <p className="text-[18px] w-full text-center sm:text-start font-semibold text-[#B18FFF] ">Frontend web developer</p>
                            <p className="text-[14px] text-center sm:text-start ">Self-taught frontend developer crafting smooth, responsive and scalable web solutions from intuitive UI to Amazing designs</p>
                            <button className="w-[100px] h-[40px] bg-[#8AFC7B] flex items-center justify-center cursor-pointer rounded-[5px] ">
                                <p className="text-[16px] text-black font-semibold ">Lets Talk</p>
                            </button>
                        </div>
                    </div>
                </div>
                {/* hero image */}
                <div className="w-full sm:w-[50%] flex items-center justify-center sm:justify-start ">
                    <img src={hero} className="w-[40%] sm:w-[80%] md:w-[50%] rounded-[10px] " alt="" />
                </div>
            </div>
        </div>
    )
}
