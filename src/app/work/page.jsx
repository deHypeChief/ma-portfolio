import Button from '@/components/button/button'
import '../../lib/styles/work.css'
export default function WorkPage() {
    return (
        <>
            <div className="workHero">
                <div className="workInfo">
                    <h1>My Projects</h1>
                    <p>
                        Dreaming big, I&#39;m all about creating impactful services for schools, brands, and companies.
                    </p>
                </div>
            </div>

            <div className="worksLog">

                <div className="wCard">
                    <div className="wBox">
                        <div className="wCard_wrap">
                            <h1 className="wHeader">
                                Big Bounce
                            </h1>
                            <Button alt>View Project</Button>
                        </div>
                    </div>
                </div>

                <div className="wCard">
                    <div className="wBox">
                        <div className="wCard_wrap">
                            <h1 className="wHeader">
                                Big Bounce
                            </h1>
                            <Button alt>View Project</Button>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}