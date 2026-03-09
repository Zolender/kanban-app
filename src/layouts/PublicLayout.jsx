import { Outlet } from "react-router";

const PublicLayout = () => {
    return (
    <div className="">
        <header className="">

        </header>

        
        <Outlet/>


        <footer className="">

        </footer>
    </div>
);
}

export default PublicLayout;