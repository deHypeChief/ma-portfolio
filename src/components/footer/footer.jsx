import Link from 'next/link'
import './style.css'
import Button from '../button/button'
export default function Footer() {
    return (
        <footer>
            <div className="footerContact">
                <div className="fText">
                    <h2>Contact</h2>
                    <Link href={'/'}>
                        <h1 >
                            deHypeChief
                        </h1>
                    </Link>
                </div>
                <div className="fButton">
                    <Button>dev.hype7@gmail.com</Button>
                    <Button>+234 9013903831</Button>
                </div>
            </div>
            <div className="footerSocial">
                <div className="fLine"></div>
                <div className="fBottom">
                    <div className="fSocial">
                        <div className="fSocial_Box">
                            <p className="fBold">
                                Twitter
                            </p>
                            <p className="fSub">
                                @dehypechief
                            </p>
                        </div>
                        <div className="fSocial_Box">
                            <p className="fBold">
                                Github
                            </p>
                            <p className="fSub">
                                @dehypechief
                            </p>
                        </div>
                    </div>
                    <div className="fRight">
                        <div className="fRight_Box">
                            <div className="fRight_Box">
                                <p className="fBold">
                                    Designed and Developed by David Okoye
                                </p>
                                <p className="fSub">
                                    2024
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}