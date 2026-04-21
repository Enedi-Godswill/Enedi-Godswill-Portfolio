import { CircleProgress } from "./Circle";

interface skillsDataType {
    id:number; name:string; percent:string; moreInfo:string;
}

const skillsData: skillsDataType[] = [
  {
    id: 1,
    name: "HTML",
    percent: "100%",
    moreInfo: "Semantic markup, accessibility (WCAG), and SEO-friendly structure."
  },
  {
    id: 2,
    name: "CSS",
    percent: "100%",
    moreInfo: "Responsive design, Flexbox, Grid, animations, and modern layouts."
  },
  {
    id: 3,
    name: "JavaScript",
    percent: "100%",
    moreInfo: "ES6+, DOM manipulation, async programming, and performance optimization."
  },
  {
    id: 4,
    name: "React JS",
    percent: "100%",
    moreInfo: "Component-driven architecture, hooks, state management, and reusable UI."
  },
  {
    id: 5,
    name: "TypeScript",
    percent: "80%",
    moreInfo: "Type safety, interfaces, and scalable application development."
  },
  {
    id: 6,
    name: "Next JS",
    percent: "80%",
    moreInfo: "SSR, routing, API integration, and performance-focused React apps."
  }
];

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
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {skillsData.map(item => {
                      const percentNumber = parseInt(item.percent);
                      return (
                          <div key={item.id}
                            className="flex flex-col items-center justify-center border h-[160px] rounded-[10px] gap-2 p-3 bg-[#1e1e2f]" >
                            <CircleProgress percent={percentNumber} />
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-[12px] text-center text-gray-400">
                            {item.moreInfo}
                          </p>
                        </div>
                      );
                    })}
                </div>
            </div>

        </div>
    )
}
