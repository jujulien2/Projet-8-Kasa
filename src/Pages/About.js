import PictureAbout from '../Assets/PictureAbout.png'
import '../Styles/AboutPage/About.css'
import AboutDetails from '../Componnent/Collapse/AboutDetails';
import Collapse from '../Componnent/Collapse/Collapse';
import '../Styles/Collapse/collapse.css'

const About = () => {


    return (
        <div className='containMainAbout'>

            <div className='pictureAbout'>
                <img src={PictureAbout} alt="picture-about-page" />
            </div>
            <div className="wrapper">

                <div className="accordionWrapper">
                    <ul>
                        {AboutDetails.map((items, index) => (
                            <li key={index}>
                                <Collapse items={items} index={index} cssCollapse={'CollapseAbout'} title={items.title} text={items.text} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;