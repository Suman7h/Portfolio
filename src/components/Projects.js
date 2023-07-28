import React from 'react';
//import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {

  faGithub,

} from '@fortawesome/free-brands-svg-icons'

const Projects = () => { 
    //const navigate = useNavigate();

    // const handleProjectClick = (projectId) => {
    //   navigate(`/projects/${projectId}`);
    // };

    return (
        <section className='bg-black text-white px-5 py-20 ' id='project'>
            <div className="container mx-auto pb-6">
                <div className='project-info md:text-left'>
                    <h2 className='text-4xl font-bold mb-5 border-b-[4px] w-[180px] border-teal-500 pb-2'>
                        Projects
                    </h2>
                </div>
            </div>
            <div className="cards container mx-auto grid grid-cols-3 gap-x-4 gap-y-14  pt-6">

                    <div className='bg-white w-96 h-60 rounded-2xl relative transition-transform duration-1000 ease-in-out hover:translate-x-4 hover:-translate-y-4  '>  {/*onClick={() => handleProjectClick(1)}*/}
                        <header>
                            <div className="project-name text-black px-5 pt-8 text-lg font-bold">
                                Buzz
                            </div>
                            <a href='https://github.com/Suman7h/Buzzz'  style={{fontSize:"30px"}}>
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    color="#4d4d4e"
                                    className="anchor-icon"
                                />
                            </a>
                            <div className="high-idea text-black px-5 "> Developed a "Full-Stack" Social media web Application which enables you to get new connections.</div>
                        </header>
                        <footer className=''>
                            <div className='text-black text-xs opacity-60 flex px-5 pt-9'>
                                <ul className='flex space-x-4'>
                                    <li>React.js</li>
                                    <li>MaterialUI</li>
                                    <li>Node.js</li>
                                </ul>
                            </div>
                        </footer>
                    </div>
                    <div className='bg-white w-96 h-60 rounded-2xl relative transition-transform duration-1000 ease-in-out hover:translate-x-4 hover:-translate-y-4  '>  {/*onClick={() => handleProjectClick(1)}*/}
                        <header>
                            <div className="project-name text-black px-5 pt-8 text-lg font-bold">
                                Semantic Segmentation
                            </div>
                            <a href="https://github.com/Suman7h/Semanticsegmentation" style={{fontSize:"30px"}}>
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    color="#4d4d4e"
                                    className="anchor-icon"
                                />
                            </a>
                            <div className="high-idea text-black px-5 ">Performing pixel based Image processing with the help of convolutional neural networks like U-Net++, to obtain the accuracy of 85%  </div>
                        </header>
                        <footer className=''>
                            <div className='text-black text-xs opacity-60 flex px-5 pt-9'>
                                <ul className='flex space-x-4'>
                                    <li>Python</li>
                                    <li>Computer Vision</li>
                                    <li>CNN</li>
                                </ul>
                            </div>
                        </footer>
                    </div>

                    <div className='bg-white w-96 h-60 rounded-2xl relative transition-transform duration-1000 ease-in-out hover:translate-x-4 hover:-translate-y-4  '>  {/*onClick={() => handleProjectClick(1)}*/}
                        <header>
                            <div className="project-name text-black px-5 pt-8 text-lg font-bold">
                                Credit Card Approval
                            </div>
                            <a href="https://github.com/Suman7h/Creditcard_approval_system" style={{fontSize:"30px"}}>
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    color="#4d4d4e"
                                    className="anchor-icon"
                                />
                            </a>
                            <div className="high-idea text-black px-5 ">Developed a machine learning model with an improved accuracy of 8% using xgboost that aids in identifying potential defaulters. </div>
                        </header>
                        <footer className=''>
                            <div className='text-black text-xs opacity-60 flex px-5 pt-9'>
                                <ul className='flex space-x-4'>
                                    <li>Python</li>
                                    <li>Machine learning</li>
                                    <li>Neural Networks</li>
                                </ul>
                            </div>
                        </footer>
                    </div>
                    
            </div>

            <div className=' more flex justify-center items-center py-28'> {/*nedd to modify padding when more projects are added*/}
                <a href="https://github.com/Suman7h" className='border-2 border-teal-500 px-4 py-2'>See More</a>
            </div>
        </section>
    
    )
}

export default Projects
