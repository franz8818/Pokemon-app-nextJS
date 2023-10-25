import {
    Navbar as BNavbar,
    NavbarBrand,
    Button,
} from "@/components/bootstrap/client-bootstrap";
import Link from "next/link";

export const Navbar = () => {
    return (
        <BNavbar className="bg-body-tertiary mb-3">
            <Link href="/">
                <NavbarBrand className="mb-0 h1"> <img src="/img/pokemon.png" className="logo-navbar" alt="..." /></NavbarBrand>
            </Link>
            <div className="ms-auto">
                <Link href="/demo">
                    <Button variant="primary">
                        Favorites
                    </Button>
                </Link>
            </div>
        </BNavbar>
    );
};
