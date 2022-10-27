import "tailwindcss/tailwind.css";
import type { FC } from "react";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>

      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
