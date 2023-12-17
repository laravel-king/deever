import AppLogo from "@/components/AppLogo";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button, buttonVariants} from "@/components/ui/button";
import {BellIcon, ChevronRightIcon} from "@radix-ui/react-icons";
import {Badge} from "@/components/ui/badge";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu, MenubarSeparator,
    MenubarTrigger
} from "@/components/ui/menubar";
import Link from "next/link";
import {Input} from "@/components/ui/input";

const Header = () =>{
    return (
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <div className="flex-1">
                <AppLogo />
            </div>
            <div className="flex-1">
                <h1 className="font-semibold text-lg">Accounts Overview</h1>
            </div>
            <div>
                <div className="flex items-center space-x-2">
                    <div className="hidden md:flex">
                        <Button className={buttonVariants({variant: "default", className: "bg-indigo-700 text-white hover:bg-indigo-600 hover:text-white"} )}>Add Funds</Button>
                    </div>
                    <div className="hidden md:flex">
                        <Button>Move Money</Button>
                    </div>
                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger className="cursor-pointer relative">
                                <Badge variant="destructive" className="absolute rounded-full p-1.5 border-2 border-white top-0.5 left-1.5" />
                                <BellIcon className="h-5 w-5" />
                            </MenubarTrigger>
                            <MenubarContent align="end">
                                <MenubarItem>
                                    New Tab
                                </MenubarItem>
                                <MenubarItem>New Window</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>Share</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>Print</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>

                    <Menubar className="border-0 shadow-none px-0">
                        <MenubarMenu>
                            <MenubarTrigger>
                                <Avatar className="cursor-pointer">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </MenubarTrigger>
                            <MenubarContent align="end" alignOffset={2}>
                                <MenubarItem>
                                    <Link href="/login">Login</Link>
                                </MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem><Link href="/login">Register</Link>
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>



                </div>
            </div>
        </header>
    )
}

export default Header;