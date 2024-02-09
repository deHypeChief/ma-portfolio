const { default: Link } = require("next/link");
import Logo from '../logo/logo';
import './style.css'

export default function Navbar() {
    return (
        <nav>
            <div className="navWrap">
            <div className="navLogo">
                <Logo/>
            </div>
            <div className="links">
                <Links />
            </div>
            </div>
        </nav>
    )
}


function Links() {
    const nav_Links = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "About",
            link: "/about"
        },
        {
            title: "Projects",
            link: "/work"
        },
        {
            title: "Hire Me",
            link: "/hire"
        }
    ]

    return (
        (nav_Links.map((e) => {
            return (
                <div className="linkBox" key={e.title}>
                    <Link href={e.link}>{e.title}</Link>
                </div>
            )
        }))
    )
}
