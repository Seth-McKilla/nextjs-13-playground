import type { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
