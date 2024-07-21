import { Inter } from "next/font/google";
import "../../../src/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "dashboard",
  description: "Generated by Finance Tracker APP",
};

export default function DashBoardLayout({
  children,
  balanceSheet,
  budget,
  expenses
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>{budget}</div>
            <div>{expenses}</div>
            <div style={{ display: 'flex', flex: 1 }}>{balanceSheet}</div>
          </div>
        </div>
      </body>
    </html>
  );
}