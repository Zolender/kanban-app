import { MoveDown, MoveRight } from "lucide-react";

const Landing = () => {
    return (
        <section className="mx-10">
            <div className="flex flex-col gap-5 md:gap-20">
                <div className="flex flex-col sm:flex-row  justify-between items-center min-h-screen">
                    <div className="flex flex-col justify-between  min-h-60 w-[40%]">
                        <p className="text-3xl font-bold">Z_Kanban:</p>
                        <p className="text-3xl font-bold">Focus in Flow</p>
                        <p className="font-semibold text-lg text-slate-400">A minimalist Kanban experience designed to reduce congnitive load, block out the noise and keep you and or your team fully in the zone.</p>
                        <div className="flex justify-between gap-5">
                            <div className="bg-green-700 text-slate-200 flex justify-around items-center  px-5 py-2 w-[70%] rounded-md">Create Your First Board <MoveRight size={22}/></div>
                            <div className="flex text-sm justify-between items-center  px-5 rounded-md border">Explore a bit <MoveDown size={22}/></div>
                        </div>
                    </div>
                    <div className="w-120 h-70 ">
                        <img src="/569.jpg" aria-label="A physical kanban board image" className="w-full h-full  rounded-md "/>
                    </div>
                </div>
            </div>
        </section>
    );
} 
export default Landing;