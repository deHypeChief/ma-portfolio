"use client"
import '@/lib/styles/home.css'
import Image from 'next/image';
import maProfile from '../lib/images/profile.png'
import Button from '@/components/button/button';
import { useEffect, useState } from 'react';
import PreLoad from '@/components/preLoad/preLoad';
import Footer from '@/components/footer/footer';

function HomeContent(){
  return(
    <>
      <section className="hero">
        <div className="heroWrap">

          <div className="heroStrap">
            <div className="orangeLine"></div>
            <div className="heroImg">
              <Image
                src={maProfile}
                alt="Okoye David"
                height="600"
                width="400"
              />
            </div>
          </div>

          <div className="heroText">
            <h1>deHypeChief</h1>
            <div className="subtext">
              <p>Full-stack Developer</p>
              <p>Ui Designer</p>
            </div>

            <div className="heroIcons">
              <div className="boxIcons"></div>
              <div className="boxIcons"></div>
              <div className="boxIcons"></div>
              <div className="boxIcons"></div>
            </div>
          </div>

        </div>
      </section>


      <section className="intro">
        <h3>Intro</h3>

        <div className="introDisplay">
          <div className="displayBox"></div>
        </div>
        <div className="introText">
          <p >
            Dreaming big, I&#39;m all about creating impactful services for schools, brands, and companies.
          </p>
          <p className="lowText">
            I&#39;m David Okoye UI designer and full-stack developer from Nigeria,
            I am  in the business of coding and making of stellar digital experiences.
          </p>
        </div>
      </section>

      <section className="techStack">
        <h3>Tech Stack</h3>
        <div className="impactList">
          <p >
            Dreaming big, I&#39;m all about creating impactful services for schools, brands, and companies.
          </p>
          <div className="expList">
            <div className="exp">
              <h2>2+</h2>
              <p>Years <br />Experience</p>
            </div>
            <div className="exp">
              <h2>10+</h2>
              <p>Projects <br />Completed</p>
            </div>
            <div className="exp">
              <h2>5+</h2>
              <p>Happy <br />Client</p>
            </div>
          </div>
        </div>
        <div className="skillsGrid">
          <div className="skillBox">
            <div className="resText">
              <h4 className="resTop">
                Get my
              </h4>
              <h2 className="resBig">
                Reu <br /> sme
              </h2>
              <p >
                Dreaming big, I&#39;m all about creating impactful services for schools, brands, and companies.
              </p>

              <Button>Download</Button>
            </div>
          </div>
          <div className="skillBox">
            <div className="skillText">
              <div className="skillsListText">
                <p>
                  Node | Python | JavaScript | Next Js | Typescript
                </p>
              </div>
              <div className="skillSection">
                <h2>Front-end Development</h2>
              </div>
            </div>
          </div>
          <div className="skillBox">
            <div className="skillText">
              <div className="skillsListText">
                <p>
                  Photoshop | Figma | Adobe illustrator | Adobe XD
                </p>
              </div>
              <div className="skillSection">
                <h2>Ui <br />Design</h2>
              </div>
            </div>
          </div>
          <div className="skillBox">
            <div className="skillText">
              <div className="skillsListText">
                <p>
                  Node | Python | Express | Firebase | MongoDB | Amazon Web Service
                </p>
              </div>
              <div className="skillSection">
                <h2>Back-end  <br />Development</h2>
              </div>
            </div>
          </div>
          <div className="skillBox">
            <div className="skillText">
              <div className="skillsListText">
                <p>
                  Logo Design | Brand Design | Visual Guidelines
                </p>
              </div>
              <div className="skillSection">
                <h2>Brand <br />Design</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="banner">
        <h1 className="HypeText">
          Hype
        </h1>
        <div className="bannerText">
          <h2>
            Spice <br /> it up, stay <br /> hyped!
          </h2>
          <Button alt>Hire Me</Button>
        </div>
      </section>

      <section className="projects">
        <h3>My Projects</h3>

        <div className="projectBox">
          <div className="pBox"></div>
          <div className="pInfo">
            <div className="pleft">
              <h2>Project Name</h2>
              <p className='pType'>Work Type</p>
              <p>
                Dreaming big, I&#39;m all about creating impactful services for schools, brands, and companies.
              </p>
            </div>
            <div className="pButton">
              <Button alt>View Project</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default function Home() {
  const [preLoad, isPreLoading ] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
        isPreLoading(false)
    }, 6000)
  }, [])

  return (
    <>
      {!preLoad ? <HomeContent/> : <PreLoad />}
    </>
  );
}




