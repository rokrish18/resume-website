import React, {Component} from "react";
import SocialMediaButtons from 'react-social-media-buttons';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import "./menu.css";
import 'bootstrap/dist/css/bootstrap.css';

import About from "./Images/about.jpg";

class Container extends Component {
    constructor(){
        super();
        this.state = {
            modal: false
        };
        
        this.workDetails = [
            {
                company: "Cisco Systems",
                items: [
                    {
                        duration: "November 2020 - August 2021",
                        location: "Chennai",
                        position: "Software Engineer II",
                        experience: [
                            `Established a framework for contributions to an API Marketplace in Cisco DNA Center. 
                            Responsible for publishing, maintenance, and backward compatibility of over 700 artifacts in the API catalogue. 
                            Worked with various teams across Cisco to manage API registration and documentation for successful delivery through JIRA and Confluence, improved traceability, and ownership of APIs by 80%.`, 
                            <br/>,
                            <br/>,
                            "Conducted technical interviews as part of the Cisco Campus Recruitment team.",
                        ]
                    },
                    {
                        duration: "August 2018 - Noveember 2020",
                        location: "Chennai",
                        position: "Software Engineer",
                        experience: [
                            `Developed the UI and implemented features for DNA-Events (multi-channel, event-based notification system) in Cisco DNA- Center Platform using ReactJS, Bootstrap and NodeJS. 
                            Designed the UX using Invision and implemented the Destinations configuration portal for Cisco DNA Center. 
                            Optimized the Cisco DNA-Center’s API Consumer Portal to handle the data of 100,000 APIs without performance issues`, 
                            <br/>,
                            <br/>,
                            "Led a team that organized Tech-Talks, Team Games, and new employee on-boarding events.",
                        ]
                    }
                ]
                
            },
            {
                company: "Thermo Fisher Scientific",
                items: [
                    {
                        duration: "May 2017 - July 2017",
                        location: "Bangalore",
                        position: "Summer Intern",
                        experience: ["Developed a Single Page Application for the Device Connect Dashboard by developing re-usable UI components and REST APIs to support data operations. Developed a proof-of-concept marking and annotation integration for document viewer. Features included a marking tool with free-form shape editing with multiple layers along with comments and tags, along with REST APIs to preserve marking data to support collaboration among different users."]
                    }
                ]
            }
        ];

        this.projects = [
            {
                place: "NIT Calicut",
                color: "red",
                topic: "NLP",
                heading: "NATURAL LANGUAGE QUESTION ANSWERING SYSTEM",
                content: "The input was a given set of questions and a paragraph, and the NLQA system would select the sentences from the paragraph which could answer each question. For the implementation, we used a TensorFlow based Question Classifier, Wordnet for synonym sets and Natural Language Toolkit (NLTK) and Stanford's CoreNLP for NLP operations."
            },
            {
                place: "Thermo Fisher Scientific",
                color: "blue",
                topic: "Application",
                heading: "SINGLE PAGE APPLICATION FOR DEVICE CONNECT",
                content: "The Thermo Fisher Scientific Device Connect platform enables connected equipment, remote monitoring of equipment telemetry data provides you with better insights into equipment health and availability. Built an application that displays status and telemetry data of connected devices by creating re-usable components in Angular 2."
            },
            {
                place: "Thermo Fisher Scientific",
                color: "blue",
                topic: "Application",
                heading: "MARKING INTEGRATION FOR DOCUMENT VIEWER",
                content: "Built an annotation and marking integration for Thermo Fisher Scientific collaboration document viewer which allows the user to make markings on shared documents using simple shapes and add notes and comments. This marking can be viewed by all team collaborators and with high scalability."
            },
            {
                place: "NIT Calicut",
                color: "green",
                topic: "AI",
                heading: "CONNECT-4 GAME",
                content: "The Connect-4 bot that makes intelligent moves via heuristic graph search. My role included development of the heuristic, implementation of alpha-beta search and documentation and presentation of the project. Python was used to develop this bot."
            },
            {
                place: "NIT Calicut",
                color: "grey",
                topic: "Data Mining",
                heading: "EUROPEAN SOCCER LEAGUE DATA ANALYSIS",
                content: "Detecting interesting patterns from European Soccer League dataset that contained match records of 250000+ matches. I performed data cleaning, used K-Means method to cluster the data-points and visualised the data using MatPlotLib. Python was used with Numpy, Pandas and MatPlotLib libraries."
            },
            {
                place: "NIT Calicut",
                color: "orange",
                topic: "Operating Systems",
                heading: "PARENTAL CONTROL MODULE FOR LINUX",
                content: "The model shuts the system down if the user types a word/phrase that has been blacklisted by the system administrator. The module is integrated into the Linux Kernel on system startup."
            },
            {
                place: "NIT Calicut",
                color: "brown",
                topic: "Web Development",
                heading: "TECH BLOG",
                content: "A full stack webpage to post reviews on electronic devices using HTML, CSS, JQuery and PHP with an SQL Database."
            },
            {
                place: "NIT Calicut",
                color: "DarkSlateGray",
                topic: "Compilers",
                heading: "EXPL COMPILER",
                content: "Built an EXPL compiler for a simple programming language using Flex, Bison and C."
            },
            {
                place: "NIT Calicut",
                color: "orange",
                topic: "Operating Systems",
                heading: "XOS OPERATING SYSTEM",
                content: "A simple OS with a terminal using the XOS Simulator."
            },
        ]
    }

    componentDidMount(){
        const image1 = document.getElementById("image1")
        const windowRect = document.getElementById("about").getBoundingClientRect();
        const image1Width = (1435 * image1.getBoundingClientRect().height) / 797 ;
        if(image1Width > windowRect.width){
            let marginLeft = (windowRect.width - image1Width)/2
            const imageRatio = (image1.getBoundingClientRect().height / windowRect.width);
            if(imageRatio > 1.44){
                marginLeft = marginLeft - windowRect.width*(0.18*imageRatio)
            }
            image1.style.marginLeft =  marginLeft + "px";
        }
        else{
            image1.style.height = "unset";
            image1.style.width = "100%";
        }
        if(image1.height === 0){
            const image1Height = (797 * image1.getBoundingClientRect().width) / 1435 ;
            if(image1Height > windowRect.height){
                let marginTop = (windowRect.height - image1Height)/2
                image1.style.marginTop =  marginTop+ "px";
            }
        }
    }

    scroll = () => {
        const scrollContainer = document.getElementById("scrollDiv");
        var winScroll = scrollContainer.scrollTop;
        var height = scrollContainer.scrollHeight - scrollContainer.clientHeight;
        var scrolled = (winScroll / height) * 262 - 2
        document.getElementById("menuId").style.transform = "rotate(" + scrolled + "deg)";
    }

    openModal = project => () => {
        this.setState({
            modal: true,
            project: project
        });
    }

    closeModal = () => {
        this.setState({
            modal: false
        });
    }

    render(){
        return(
            [<div className={"menu"} onScroll={this.scroll} id={"menuId"}>
                <span className="char1">A</span>
                <span className="char2">B</span>
                <span className="char3">O</span>
                <span className="char4">U</span>
                <span className="char5">T</span>
                <span className="char6">&nbsp;</span>
                <span className="char7">M</span>
                <span className="char8">E</span>

                <span className="char9">&nbsp;</span>
                <span className="char10">|</span>
                <span className="char11">&nbsp;</span>

                <span className="char12">W</span>
                <span className="char13">O</span>
                <span className="char14">R</span>
                <span className="char15">K</span>

                <span className="char16">&nbsp;</span>
                <span className="char17">|</span>
                <span className="char18">&nbsp;</span>

                <span className="char19">P</span>
                <span className="char20">R</span>
                <span className="char21">O</span>
                <span className="char22">J</span>
                <span className="char23">E</span>
                <span className="char24">C</span>
                <span className="char25">T</span>
                <span className="char26">S</span>
                
                <span className="char27">&nbsp;</span>
                <span className="char28">|</span>
                <span className="char29">&nbsp;</span>

                <span className="char30">C</span>
                <span className="char31">O</span>
                <span className="char32">N</span>
                <span className="char33">T</span>
                <span className="char34">A</span>
                <span className="char35">C</span>
                <span className="char36">T</span>

                <span className="char37">&nbsp;</span>
                <span className="char38">|</span>
                <span className="char39">&nbsp;</span>
            </div>,
            <div className={"contents"} onScroll={this.scroll} id={"scrollDiv"} >
                <div className={"contentsInside"}>
                    <div className={"contentAbout"} id={"about"}>
                        <img src={About} alt="" className={"aboutImage"} id={"image1"}/>
                        <div className={"aboutHeader"}>
                            <Fade right delay={250} duration={500}><h1>Roshan Krishna</h1></Fade>
                            <Fade right delay={350} duration={500}><h4>Software Engineer</h4></Fade>
                            <Fade right delay={450} duration={500}><h4>Web Developer</h4></Fade>
                            <Fade right delay={550} duration={500}><h2>Arizona State University<br/>Computer Science <br/></h2></Fade>
                            <Fade right delay={650} duration={500}><h4>NIT Calicut</h4></Fade>
                        </div>
                        <Fade bottom delay={650} duration={500}>
                            <div className={"aboutSubHeader"}>
                                <p>"motto"</p>
                                <h2>Engineer =&gt; Develop =&gt; Deliver</h2>
                            </div>
                        </Fade>
                    </div>
                    <div className={"contentWork"}>
                        {
                            this.workDetails.map(work => {
                                return <div key={work} className={"workItem"}>
                                    <Fade left delay={500} duration={250}>
                                        <table>
                                            <tr>
                                                <td>
                                                    <div className={"company"}>{work.company}</div>
                                                    {
                                                        work.items.map(item => {
                                                            return <div>
                                                                <div className={"duration"}>{item.duration}</div>
                                                                <div className={"location"}>{item.location}</div>
                                                                <div className={"experience"}>
                                                                <span className={"position"}>{item.position}</span>&nbsp;
                                                                {
                                                                    item.experience.map(ex => {
                                                                        return ex;
                                                                    })
                                                                }
                                                                </div>
                                                            </div>
                                                        })
                                                    }
                                                </td>
                                            </tr>
                                        </table>
                                    </Fade>
                                </div>
                            })
                        }
                    </div>
                    <div className={"contentProject"}>
                    <Fade left delay={250} duration={500}>
                        <div className={"projectsContainer"}>
                            {
                                this.projects.map((project, index) => {
                                    return <Fade bottom delay={250} duration={500}>
                                        <div className={"projectContainer"} onClick={this.openModal(project)}>
                                            <div className={"topic"}>{project.topic}</div>
                                            <div className={"projectheading"}>{project.heading}</div>
                                        </div>
                                    </Fade>
                                })
                            }
                        </div>
                    </Fade>
                    </div>
                    <div className={"contenContact"}>
                        <div className={"contactContainer"}>
                            <Zoom bottom delay={500} duration={500}>
                                <div className={"contactButtons"}>
                                    <a href={"mailto:roshankrishna.official@gmail.com"}>Get In Touch</a>
                                </div>
                            </Zoom>
                            <Zoom bottom delay={500} duration={500}>
                            <div className={"contactButtons"}>
                                <a href={"https://drive.google.com/file/d/1tuNfVeadeSV7zy3v4jhoPFh8HRugBl-c/view?usp=sharing"} target="_blank" rel="noopener noreferrer">Resume</a>
                            </div>
                            </Zoom>
                            <div className={"contactFooter"}>Designed and built by Roshan Krishna</div>
                        </div>
                    </div>
                </div>
            </div>,
            <div>
            {
                this.state.modal
                ? <div className={"pageModal"}>
                    <Zoom top delay={0} duration={300}>
                        <div className={"pageModalContent"}>
                            <div className={"closeButton"} onClick={this.closeModal}>
                                &times;
                            </div>
                            <div className={"projectModalTopic"}>{this.state.project.topic}</div>
                            <div className={"projectModalHeading"}>{this.state.project.heading}</div>
                            <div className={"projectModalContent"}>
                                {this.state.project.content}
                                <div className={"projectModalPlace"}>{this.state.project.place}</div>
                            </div>
                        </div>
                    </Zoom>
                </div>
                : null
            }
            </div> ,
            <div className={"socialContainer"}>
                <Fade bottom delay={650} duration={500}>
                    <SocialMediaButtons
                        links={
                            [
                                "https://www.linkedin.com/in/rokrish18/",
                                "https://www.instagram.com/roshankrishna_",
                                "https://www.facebook.com/rokrish18",
                                "https://twitter.com/makro_maniak",
                            ]
                        }
                        openNewTab={true}
                        buttonStyle={{
                            width: 'clamp(20px, 3vw, 50px)',
                            height: '3vw',
                        }}
                        iconStyle={{
                            color: 'black',
                        }}/>
                    <div className={"line socialLine"}/>
                </Fade>
            </div>        
        ]

            
    );}
}

export default Container;