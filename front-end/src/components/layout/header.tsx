import Link from "next/link";
import { Button } from "../ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Header() {
    const isLoggedIn = false;
    const isAdmin = true;

    const user = {
        username: "Test User",
        profileUrl: "https://github.com/shadcn.png",
        isAdmin: true
    }

    return (
        <header className="fixed top-0 left-0 right-0 flex justify-between shadow-2xl z-50 p-3 bg-background text-foreground"> 
            <div>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/home">Home</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/auctions">Auctions</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        { user && user.isAdmin &&
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="/manage-users">Manage Users</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        }
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex gap-3">
                { !isLoggedIn ? (
                    <>
                        <Button variant={'outline'} asChild><Link href={"/login"}>Log in</Link></Button>
                        <Button variant={'outline'} asChild><Link href={"/register"}>Register</Link></Button>
                    </>
                    ) : (
                        <>
                            <Link href={'/user-profile'}>
                                <Avatar>
                                    <AvatarImage src={user.profileUrl} />
                                    <AvatarFallback>{user.username.substring(0,2).toUpperCase()}</AvatarFallback>
                                </Avatar>
                            </Link>
                        </>
                    )
                }
            </div>
        </header>
    )
}
