import { Footer2 } from "../components/Footers/Footer2";
import { Header } from "../components/headers/Header";

export const metadata = {
    title: 'Ajustes | Repositorio',
    description: 'Paginal de ajustes del repositorio',
  }

export default function Layout({ children }) {

    return (
        <div className="flex flex-col h-screen w-screen bg-zinc-100">
            <Header />
            {children}
            <Footer2 />
        </div>
    );
}