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
