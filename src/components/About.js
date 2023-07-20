import React,{useEffect} from 'react'
import TagCloud from 'TagCloud'
import './About.scss';

function About() {
    useEffect(() => {
        const container = ".tagcloud";
        const texts = [
          "JAVA",
          "PYTHON",
          "C/C++",
          "JavaScript",
          "React",
          "MYSQL",
          "NodeJS",
          "VSCODE",
          "PANDAS",
          "NUMPY",
          "MATPOTLIB",
          "ML",
          "DSA",
          "PHOTOSHOP",
          "GIT",
          "GITHUB",
        ];
      
        let tagCloudInstance = null; // Variable to store the TagCloud instance
      
        const updateTagCloud = () => {
          const screenWidth = window.innerWidth;
          const radius = screenWidth >= 768 ? 300 : 200; // Adjust the breakpoint as needed
      
          const options = {
            radius: radius,
            maxSpeed: "normal",
            initSpeed: "normal",
            keep: true,
          };
      
          if (tagCloudInstance) {
            tagCloudInstance.destroy(); // Destroy the previous instance
          }
      
          tagCloudInstance = TagCloud(container, texts, options);
        };
      
        updateTagCloud(); // Initial setup
      
        window.addEventListener("resize", updateTagCloud); // Update on window resize
      
        return () => {
          window.removeEventListener("resize", updateTagCloud);
          if (tagCloudInstance) {
            tagCloudInstance.destroy(); // Cleanup the TagCloud instance
          }
        };
      }, []);
      
    return (
        <section className='bg-black text-white px-5 py-20 md:py-32' id='about'>
            <div className="aboutc container mx-auto grid md:grid-cols-2 justify-center md:justify-between">
                <div className='text-shpere mr-auto md:mr-28 mt-0 md:-mt-16 '>
                  <span className="tagcloud"></span>
                </div>
                <div className='about-info'>
                    <h2 className='text-4xl font-bold mb-5 border-b-[4px] w-[180px] border-teal-500 pb-2'>
                        About Me
                    </h2>
                    <p className='pb-5 pt-6'>
                      I'm a passionate <span className='text-teal-500'>Software Developer</span> building user friendly and interactive Websites. I am currently pursuing a Master's degree in Computer Science from the University of Central Florida.
                    </p>
                    <p className='pb-5'>
                      As a developer, my expertise spans across various technologies for <span className='text-teal-500'>coding</span> and <span className='text-teal-500'>problem-solving</span>. I have dedicated myself to mastering various programming languages and frameworks, constantly exploring new advancements in the field and staying up-to-date with the latest trends.
                    </p>
                    <p className='pb-5'>
                      In addition to my technical skills, I have excellent <span className='text-teal-500'>communication skills</span>. I perform best in fast-paced settings where I can use my analytical skills and creativity to solve difficult problems. My attention to detail and commitment to quality help me deliver high-quality code and ensure a <span className='text-teal-500'>smooth user experience</span>.
                    </p>
                    <p>
                      I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <a href='#contact' className='text-teal-500 cursor-pointer border-b'>contact me</a>.
                    </p>
    
                </div>
            </div>
        </section>
    
    )
}


export default About
