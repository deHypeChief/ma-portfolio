import Button from "@/components/button/button";
import '@/lib/styles/workId.css'
export default function SingleWorkPage() {
    return (
        <>
            <div className="projectIntro">
                <div className="project_IntroInfo">
                    <p>Full-stack Dev</p>
                    <h1>Project Mbappe</h1>
                    <Button alt>Visit Site</Button>
                </div>
            </div>


            <div className="workIntro">
                <div className="introDisplay">
                    <div className="displayBox"></div>
                </div>

                <div className="workInfo_Section">
                    <div className="details">
                        <div className="deBox">
                            <p className="deTitle">Industry</p>
                            <p className="deSub">Industry Name</p>
                        </div>
                        <div className="deBox">
                            <p className="deTitle">Industry</p>
                            <p className="deSub">Industry Name</p>
                        </div>
                        <div className="deBox">
                            <p className="deTitle">Industry</p>
                            <p className="deSub">Industry Name</p>
                        </div>
                    </div>

                    <div className="workStart">
                        <p className="lowText">
                            I&#39;m David Okoye UI designer and full-stack developer from Nigeria,
                            I am  in the business of coding and making of stellar digital experiences.
                        </p>
                    </div>
                </div>
            </div>

            <div className="quickGrid">
                <div className="workBox"></div>
                <div className="workBox"></div>
                <div className="workBox"></div>
                <div className="workBox"></div>
            </div>


            <div className="nextProject">
                <div className="nextId_Bg">
                    <div className="nextProjectInfo">
                        <h1>
                            Next Project Name
                        </h1>
                        <Button alt>Next Project</Button>
                    </div>
                </div>
                
            </div>
        </>
    )
} 