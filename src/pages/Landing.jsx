import { EyeOff, MousePointerClick, MoveDown, MoveRight, Sprout, Zap } from "lucide-react";

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
                            <div className="flex text-sm justify-between items-center  px-5 rounded-md border hover:bg-blue-400 hover:cursor-pointer active:bg-blue-500 hover:text-slate-200 transition-all duration-200 ">Explore<MoveDown size={12}/></div>
                        </div>
                    </div>
                    <div className="w-120 h-70 ">
                        <img src="/569.jpg" aria-label="A physical kanban board image" className="w-full h-full  rounded-md "/>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <div>
                        <p className=" font-semibold text-lg ">Build for Clarity</p>
                        <p className="text-slate-400 font-normal text-sm">Everything you need to plan better, work with efficiency.</p>
                    </div>

                    <div className="grid grid-cols-3 grid-rows-2 gap-5">
                        <div className="bg-slate-50 flex justify-center gap-5 p-5 flex-col text-slate-900 rounded-md col-span-2">
                            <div className="w-fit p-3 bg-slate-300 rounded-md">
                                <MousePointerClick size={22}/>
                            </div>
                            <p className="font-semibold text-lg">Fluid Drag and Drop</p>
                            <p className="text-slate-400 font-normal text-sm">Move tasks seamlessly accross your workflow with zero latency. Our higly optimized interface feels like physical cards sliding on a pristine desk</p>
                        </div>
                        <div className="bg-slate-50 flex   p-5 gap-5 flex-col text-slate-900 rounded-md row-span-2">
                            <div className="w-fit p-3 bg-slate-200 rounded-md">
                                <EyeOff size={22}/>
                            </div>
                            <p className="font-semibold text-lg">Focus Mode</p>
                            <p className="text-slate-400 font-normal text-sm">Minimize the noise instantly. Hide columns, tags and assignees that you don't need right now. Focus only on the task right in front of you and enter true flow state.</p>
                        </div>
                        <div className="bg-slate-50 flex   p-5 gap-5 flex-col text-slate-900 rounded-md ">
                            <div className="w-fit p-3 bg-slate-200 rounded-md">
                                <Sprout size={22}/>
                            </div>
                            <p className="font-semibold text-lg">Zen Aesthetics</p>
                            <p className="text-slate-400 font-normal text-sm">Lofi interfaces with soft colors and subtle grain design to keep your stress low and creativity high.</p>
                        </div>
                        <div className="bg-slate-50 flex   p-5 gap-5 flex-col text-slate-900 rounded-md">
                            <div className="w-fit p-3 bg-slate-200 rounded-md">
                                <Zap size={22}/>
                            </div>
                            <p className="font-semibold text-lg">Instant Sync</p>
                            <p className="text-slate-400 font-normal text-sm">Collaborate in real-time. Changes instantly ripple accross all devices without reloading</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 
export default Landing;