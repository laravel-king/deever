import { Poppins } from 'next/font/google'
import './globals.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {cn} from "@/lib/utils";
import SideBar from "@/components/SideBar";
import AppLogo from "@/components/AppLogo";
import Link from "next/link";
import {Badge} from "@/components/ui/badge";
import {Button, buttonVariants} from "@/components/ui/button";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger
} from "@/components/ui/menubar";
import {BellIcon} from "@radix-ui/react-icons";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

const poppins = Poppins({ subsets: ['latin'], weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("bg-background antialiased", poppins.className)}>


      <div className="grid h-screen min-h-screen w-full lg:grid-cols-[280px_1fr]">
          <SideBar />
          <div className="flex flex-col">
              <Header />
              <main>
                  {children}
              </main>
          </div>
      </div>

        <Footer />
      </body>
    </html>
  )
}
