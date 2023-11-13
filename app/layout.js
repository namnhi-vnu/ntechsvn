import Header from "./components/Header";
import Footer from "./components/pages/Footer";
import ModalProvider from "./store/contexts/Provider";
import "./globals.css";

export const metadata = {
    title: "NTechs - Thiết kế và phát triển Web App, Mobile App Đa nền tảng",
    description: "Công Ty Cổ Phần Công Nghệ NTechs Việt Nam",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/aos@next/dist/aos.css"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Agbalumo&family=Alumni+Sans+Collegiate+One:ital@0;1&family=Black+Ops+One&family=Chivo+Mono:wght@100;200;300;400;500;600;700;800;900&family=Codystar:wght@300;400&family=Fira+Sans:wght@100;200;300;400;500;600;700;800;900&family=Kablammo&family=Kanit:wght@100;200;300;400;500;600;700;800&family=Lilita+One&family=Nunito+Sans:wght@200;300;400;600;700;800;900&family=Playpen+Sans:wght@200;300;400;500;600;700;800&family=Roboto+Slab:wght@200;300;400&family=Roboto:wght@100;300;400;500;700;900&family=Special+Elite&display=swap"
                    rel="stylesheet"
                ></link>
                {/* <link
                    rel="shortcut icon"
                    href="/icon-logo.png"
                    type="image/png"
                /> */}
            </head>
            <body>
                <div className="app overflow-hidden">
                    <ModalProvider>
                        <Header />
                        {children}
                        <Footer />
                    </ModalProvider>
                </div>
            </body>
        </html>
    );
}
