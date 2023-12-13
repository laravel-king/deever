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
                        <MenubarTrigger>File</MenubarTrigger>
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
                  <div className="relative">
                      <Badge variant="destructive" className="absolute rounded-full p-1.5 border-2 border-white top-1 left-0.5" />
                      <Button variant="ghost" size="icon">
                          <BellIcon className="h-5 w-5" />
                      </Button>
                  </div>

                  <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

              </div>
          </div>
        </header>
    )
}

export default Header;