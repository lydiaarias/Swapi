import type { Metadata } from "next";
import "./globals.css";
import "./layout.css";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "API Star Wars",
  description: "Que la fuerza os acompañe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><div className="MainContainer">
      <div className="TitleContainer">
        <h1>Página que llama a cosas de Star Wars</h1>
      </div>
      <NavBar/>
      {children}
    </div></body>
    </html>
  );
}