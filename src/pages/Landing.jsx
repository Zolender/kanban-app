import { EyeOff, MousePointerClick, MoveDown, MoveRight, Sprout, Zap, Layout } from "lucide-react";
import { Link } from "react-router";

const Landing = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 pb-20">
            <div className="flex flex-col gap-24">
                <div className="flex flex-col lg:flex-row justify-between items-center min-h-[80vh] gap-12">
                    <div className="flex flex-col gap-6 w-full lg:w-1/2">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-stone-900">
                            Z_Kanban: <br />
                            <span className="text-stone-400">Focus in Flow</span>
                        </h1>
                        
                        <p className="font-medium text-lg md:text-xl text-stone-500 leading-relaxed max-w-md">
                            A minimalist workspace designed to reduce cognitive load and block out the noise. Stay in the zone, always.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                            <Link 
                                to="/boards"
                                className="group bg-stone-900 text-stone-50 flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-auto rounded-xl font-semibold hover:bg-stone-800 transition-all active:scale-95"
                            >
                                Create Your First Board 
                                <MoveRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            
                            <button className="flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-xl border border-stone-200 font-semibold hover:bg-stone-100 transition-all text-stone-600">
                                Explore <MoveDown size={16} />
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 aspect-video bg-stone-200 rounded-2xl overflow-hidden border-8 border-stone-100 shadow-2xl shadow-stone-200">
                        <img 
                            src="/569.jpg" 
                            alt="Z_Kanban interface preview" 
                            className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-12">
                    <div className="space-y-2">
                        <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-stone-400 flex items-center gap-2">
                            <Layout size={16} /> Engineering Clarity
                        </h2>
                        <p className="text-3xl font-bold text-stone-900">Built for deep work.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="group bg-stone-100 p-8 rounded-3xl flex flex-col justify-end gap-4 md:col-span-2 min-h-75 hover:bg-stone-200/50 transition-colors border border-transparent hover:border-stone-200">
                            <div className="w-fit p-4 bg-white rounded-2xl shadow-sm group-hover:rotate-6 transition-transform">
                                <MousePointerClick size={28} className="text-stone-900" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-stone-900">Fluid Architecture</h3>
                                <p className="text-stone-500 leading-relaxed">
                                    Move tasks seamlessly across your workflow with zero latency. Our highly optimized interface feels like physical cards sliding on a pristine desk.
                                </p>
                            </div>
                        </div>

                        <div className="group bg-stone-600 p-8 rounded-3xl flex flex-col justify-end gap-4 text-stone-50 hover:bg-stone-800 transition-colors">
                            <div className="w-fit p-4 bg-stone-800 rounded-2xl group-hover:-rotate-6 transition-transform">
                                <EyeOff size={28} className="text-stone-100" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Focus Mode</h3>
                                <p className="text-stone-400 text-sm leading-relaxed">
                                    Minimize noise instantly. Hide columns and tags you don't need right now to enter true flow state.
                                </p>
                            </div>
                        </div>

                        <div className="group bg-white p-8 rounded-3xl flex flex-col gap-4 border border-stone-200 hover:shadow-xl hover:shadow-stone-100 transition-all">
                            <div className="w-fit p-3 bg-stone-100 rounded-xl group-hover:scale-110 transition-transform">
                                <Sprout size={24} className="text-stone-900" />
                            </div>
                            <h3 className="font-bold text-stone-900">Zen Aesthetics</h3>
                            <p className="text-stone-500 text-sm">
                                Lofi interfaces with soft colors and subtle grain design to keep stress low and creativity high.
                            </p>
                        </div>

                        <div className="group bg-white p-8 rounded-3xl flex flex-col gap-4 border border-stone-200 hover:shadow-xl hover:shadow-stone-100 transition-all md:col-span-2">
                            <div className="flex items-start justify-between">
                                <div className="w-fit p-3 bg-stone-100 rounded-xl group-hover:animate-pulse">
                                    <Zap size={24} className="text-stone-900" />
                                </div>
                            </div>
                            <h3 className="font-bold text-stone-900">Instant Persistence</h3>
                            <p className="text-stone-500 text-sm">
                                No more "Save" buttons. Every change is tracked locally in real-time, ensuring your data is ready whenever you return.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Landing;