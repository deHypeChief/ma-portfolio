import Footer from '@/components/footer/footer'
import '../../lib/styles/about.css'
export default function AboutPage() {
    return (
        <>
            <div className="aboutHero">
                <div className="aboutInfo">
                    <h1>About Me</h1>
                    <p>
                        Dreaming big, I'm all about creating impactful services for schools, brands, and companies.
                    </p>
                </div>
            </div>


            <section className="about-intro">
                <div className="about-introDisplay">
                    <div className="about-displayBox"></div>
                </div>
                <div className="about-introText">
                    <p className="lowText">
                        I'm David Okoye UI designer and full-stack developer from Nigeria,
                        I am  in the business of coding and making of stellar digital experiences.
                    </p>
                </div>
            </section>

            <Footer/>
        </>
    )
}