import AppLogo from "@/components/AppLogo";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {BellIcon, ChevronRightIcon} from "@radix-ui/react-icons";
import {Badge} from "@/components/ui/badge";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu, MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger
} from "@/components/ui/menubar";
import Link from "next/link";

const Header = () =>{
    return (
        <header className="px-8 py-4 ">
          <div className="flex items-center justify-between">
            <div>
                <AppLogo />
            </div>
            <div className="hidden md:flex space-x-2">
                <Menubar className="border-0 shadow-none hover:border hover:border-slate-200 hover:shadow-sm w-28 justify-center">
                    <MenubarMenu>
                        <MenubarTrigger className="cursor-pointer">
                            <Link href="/" className="cursor-pointer">Dashboard</Link>
                        </MenubarTrigger>
                    </MenubarMenu>
                </Menubar>
                <Menubar className="border-0 shadow-none hover:border hover:border-slate-200 hover:shadow-sm w-28 justify-center">
                    <MenubarMenu>
                        <MenubarTrigger className="cursor-pointer">File</MenubarTrigger>
                        <MenubarContent alignOffset={-32}>
                            <MenubarItem>
                                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem>New Window</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Share</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Print</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>

            </div>
              <div className="flex items-center space-x-3">
                  <Menubar>
                      <MenubarMenu>
                          <MenubarTrigger className="cursor-pointer relative">
                              <Badge variant="destructive" className="absolute rounded-full p-1.5 border-2 border-white top-0.5 left-1.5" />
                              <BellIcon className="h-5 w-5" />
                          </MenubarTrigger>
                          <MenubarContent align="end">
                              <MenubarItem>
                                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                              </MenubarItem>
                              <MenubarItem>New Window</MenubarItem>
                              <MenubarSeparator />
                              <MenubarItem>Share</MenubarItem>
                              <MenubarSeparator />
                              <MenubarItem>Print</MenubarItem>
                          </MenubarContent>
                      </MenubarMenu>
                  </Menubar>

                  <Menubar className="border-0 shadow-none">
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