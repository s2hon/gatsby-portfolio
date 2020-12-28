import React from "react"
import Layout from "../components/App/layout"
import SEO from "../components/App/seo"
import Navbar from "../components/Main/Navbar"
import MainBanner from "../components/Main/MainBanner"
import About from "../components/Main/About"
import CaseStudy from "../components/Main/CaseStudy"
import Services from "../components/Main/Services"
import Education from "../components/Main/Education"
import Experience from "../components/Main/Experience"
import Partners from "../components/Main/Partners"
import Projects from "../components/Main/Projects"
import ContactForm from "../components/Main/ContactForm"
import Footer from "../components/Main/Footer"
import data from "../components/App/assets/data/profile"

const IndexPage = () => (
    <Layout>
        <div className="body-bg-five">
            <div className="main-area two">
                <Navbar />
                <SEO title="Staci Shon" />
                <div className="main-content two">
                    <MainBanner />
                    <About />
                    <CaseStudy />
                    <Partners />
                    <Education/>
                    <Experience data={data}/>
                    <Services />
                    <Projects />
                    <ContactForm />
                    <Footer />
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage