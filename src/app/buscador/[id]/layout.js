import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/Navbar/NavBar";

export default function Layout({ children }) {

    return (
        <main className="flex flex-col h-screen w-screen bg-zinc-900">
            <NavBar />

            {children}

            <Footer />
        </main>

    );
}