import Navbar from "@/components/navbar/navbar";
import "./globals.css";

export const metadata = {
  title: "deHypeChief",
  description: "Hi there, I am David Okoye a Full-stack Dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Navbar />

          {children}
        </main>
      </body>
    </html>
  );
}
