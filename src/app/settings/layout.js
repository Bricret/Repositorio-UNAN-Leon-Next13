import { Footer2 } from "../components/Footers/Footer2";
import { Header } from "../components/headers/Header";
import { OptionOfTesis } from "../components/options/OptionOfTesis";

export const metadata = {
    title: 'Ajustes | Repositorio',
    description: 'Paginal de ajustes del repositorio',
  }

export default function Layout({ children }) {

    return (
        <div className="flex flex-col h-screen w-screen bg-zinc-100">
            <Header />
            <div className="flex flex-1 overflow-hidden">
                <OptionOfTesis />
                {children}
            </div>
            <Footer2 />
        </div>
    );
}