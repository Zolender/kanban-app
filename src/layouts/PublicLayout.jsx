import { Outlet } from "react-router";

const PublicLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Sticky Navbar */}
            <nav className="sticky top-0 z-50 w-full bg-stone-50/80 backdrop-blur-md border-b border-stone-200 px-6 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                <span className="font-mono font-bold text-xl tracking-tighter">Z_Kanban App</span>
                <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-stone-800 transition-colors">
                    Launch App
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