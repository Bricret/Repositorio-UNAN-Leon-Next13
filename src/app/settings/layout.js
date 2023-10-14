import { Footer2 } from "../components/Footers/Footer2";
import { Header } from "../components/headers/Header";

export const metadata = {
    title: 'Ajustes | Repositorio',
    description: 'Paginal de ajustes del repositorio',
  }

export default function Layout({ children }) {

    return (
        <>
            <Header />
        <div className="flex flex-col min-h-screen justify-between">
            {children}
            <Footer2 />
        </div>
        </>

    );
}