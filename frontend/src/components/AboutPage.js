import { GiMuscleUp, GiBlood, GiMovementSensor } from 'react-icons/gi';
import { FaBone } from 'react-icons/fa';

import Footer from './Footer';
import './styles/AboutPage.css';

const AboutPage = () => {
    return (
        <>
            <div className='about-page-container'>
                <section className='hero-section'>
                    <article className='hero-text'>
                        <h1 className='hero-title'>
                            About CHI-Blogger
                        </h1>
                        <p className='hero-content'>
                            Blending our interests in Health and Fitness, we aim to
                            provide a time-tested syllabus to help others find a balance
                            between these two areas of their lives. Fitness exercises without
                            proper diet is absolutely not enough. We provide hacks, advices,
                            and roadmap to help you maintain a balance between health and fitness.
                        </p>
                    </article>
                    <article className='hero-image-box'>
                        <img src={require('../assets/logo2.jpeg')} alt='CHI-Blogger logo' />
                    </article>
                </section>
                <section className='benefit-perks-section'>
                    <h2 className='benefit-perks-heading'>
                        Benefits of Health Fitness
                    </h2>
                    <p className='benefit-perks-text'>
                        You are not convinced yet? Here are some of the benefits of Health Fitness!
                    </p>
                    <ul className='benefits-list'>
                        <li className='benefit-card'>
                            <GiMuscleUp />
                            <p className='benefit'>
                                Improved Muscle Power
                            </p>
                        </li>
                        <li className='benefit-card'>
                            <GiBlood />
                            <p className='benefit'>
                                Good Oxygen Supply and Blood Flow throughout
                                the Body
                            </p>
                        </li>
                        <li className='benefit-card'>
                            <GiMovementSensor />
                            <p className='benefit'>
                                Pain-free Movement in Joints
                            </p>
                        </li>
                        <li className='benefit-card'>
                            <FaBone />
                            <p className='benefit'>
                                Stronger Bones
                            </p>
                        </li>
                    </ul>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default AboutPage;