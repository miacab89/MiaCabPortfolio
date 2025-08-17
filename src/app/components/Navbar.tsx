import {
    NavigationMenu,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/app/components/ui/navigation-menu"
import Link from "next/link"

export function Navbar() {
    return(
        <div className="text-white">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuLink>
                        <Link href="/about">About</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                        <Link href="/music">Music</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                        <Link href="/finance">Finance</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                        <Link href="/weather">Weather</Link>
                    </NavigationMenuLink>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}