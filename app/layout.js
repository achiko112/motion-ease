import { Noto_Sans, Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";

// "Noto Sans Book" ≈ Regular (400), plus Medium (500) per brand spec.
const notoSans = Noto_Sans({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const notoSansGeorgian = Noto_Sans_Georgian({
  variable: "--font-noto-ge",
  subsets: ["georgian"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata = {
  title: "Motion Ease — საიტი მალე განახლდება",
  description:
    "Motion Ease — მოუშენ იზი. საიტი მალე განახლდება. დაგვიკავშირდით: contact@studiomotionease.com",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ka"
      className={`${notoSans.variable} ${notoSansGeorgian.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
