import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/Navbar/NavBar";

export default function Layout({ children, params }) {

    const { id } = params;
    const decodedId = decodeURIComponent(id);
    const searchWord = decodedId.replace(/-/g, ' ');

    return (
        <main className="flex flex-col h-screen w-screen bg-gray-900">
            <NavBar />

            {children}

            <Footer />
        </main>

    );
}