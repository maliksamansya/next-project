// import { Children } from "react";
import "./../styles/globals.css";

export const metadata = {
  title: "AIPrompt",
  description: "Discover and Share AI Prompt",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
