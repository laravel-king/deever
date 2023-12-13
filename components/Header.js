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

const Header = () =>{
    return (
        <header className="px-8 py-4 ">
          <div className="flex items-center justify-between">
            <div>
                <AppLogo />
            </div>
            <div className="hidden md:flex">
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger className="cursor-pointer">File</MenubarTrigger>
                        <MenubarContent>
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
                  <div className="relative">
                      <Button variant="ghost" size="icon">
                      </Button>
                  </div>

                  <Menubar className="border-0 shadow-none">
                      <MenubarMenu>
                          <MenubarTrigger>
                              <Avatar className="cursor-pointer">
                                  <AvatarImage src="https://github.com/shadcn.png" />
                                  <AvatarFallback>CN</AvatarFallback>
                              </Avatar>
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



              </div>
          </div>
        </header>
    )
}

export default Header;