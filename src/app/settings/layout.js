import { Footer2 } from "../components/Footers/Footer2";
import { Header } from "../components/headers/Header";
import { OptionOfTesis } from "../components/options/OptionOfTesis";

export const metadata = {
    title: 'Ajustes | Repositorio',
    description: 'Paginal de ajustes del repositorio',
  }

export default function Layout({ children }) {

    return (
        <main className="flex flex-col h-screen w-screen bg-zinc-100">
            <Header />
            <main className="flex flex-1 overflow-hidden">
                <OptionOfTesis />
                {children}
            </main>
            <Footer2 />
        </main>
    );
}