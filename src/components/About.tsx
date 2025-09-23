
interface skillsDataType {
    id:number; name:string;
}

const skillsData: skillsDataType[] = [
    {id:1, name:"Html"}, {id:2, name:"CSS"}, {id:3, name:"JavaScript" },
    {id:4, name:"React JS"}, {id:2, name:"TypeScript"}, {id:3, name:"Next JS" }
]

export default function About(){
    return(
        <div className="w-full h-full flex items-center justify-center ">
            
            <div className="w-full p-5 flex flex-col items-center gap-6 ">
                {/* about text */}
                <div className="flex flex-col items-center justify-center gap-3">
                    <p className="text-[12px] sm:text-[14px] ">About me</p>
                    <p className="text-[14px] sm:text-[20px] font-semibold text-center ">I'm a self-taught frontend developer with a passion for solving real-world problems through code. From frontend interfaces to backend systems, I create smooth, responsive & high performing digital products.</p>
                </div>
                {/* about skills */}
                <div className="w-full flex flex-wrap items-center justify-center gap-3">
                    {skillsData.map(item => {
                        return(
                            <div key={item.id} className="flex items-center border-2 border-[#49450d] rounded-[5px] gap-2 p-2 ">
                                <p>{item.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}
