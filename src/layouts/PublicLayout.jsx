import { Outlet } from "react-router";

const PublicLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <nav className="sticky top-0 z-50 w-full px-6 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <span className="font-mono font-bold text-xl tracking-tighter">Z_Kanban App</span>
                    <div className="flex justify-center items-center gap-5">
                        <p className="font-semibold hover:cursor-pointer hover:text-slate-500 transition-colors duration-300 text-sm text-slate-400">Features</p>
                        <p className="font-semibold hover:cursor-pointer hover:text-slate-500 transition-colors duration-300 text-sm text-slate-400">Methodology</p>
                        <p className="font-semibold hover:cursor-pointer hover:text-slate-500 transition-colors duration-300 text-sm text-slate-400">Pricing</p>
                    </div>
                    <button className="bg-[#ffffff4d] text-black px-4 py-2 rounded-md text-sm font-bold hover:bg-stone-100 hover:cursor-pointer transition-colors">
                        Login
                    </button>
                </div>
            </nav>

            <main className="grow">
                <Outlet />
            </main>

            <footer className="p-8 text-center text-stone-400 text-sm font-mono">
                &copy; Zolender oo
            </footer>
        </div>
);
}

export default PublicLayout;