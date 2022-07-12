import { FaRegEye } from 'react-icons/fa';

import LCategoryList from './LCategoryList';
import './styles/HomePage.css';

const HomePage = () => {
    return (
        <main className="App__home">
            <section className='hero-section'>
                <div className="left-card">
                    <h2 className='title'>
                        Everything about Health Fitness
                    </h2>
                    <p className='content'>
                        Lorem Ipsum Is Simply Dummy Text
                        Of The Printing And
                    </p>
                </div>
                <div className='right-card'>
                    <article>
                        <img src='https://media.istockphoto.com/photos/blogging-woman-reading-blog-picture-id887987150?k=20&m=887987150&s=612x612&w=0&h=vCVYGvEkLb3DuCL7DOSoNm8i78Lci4oCt7XD4HGasIg=' alt='' />
                        <p>lorem ipsum we a re = fjfigfnv vigvvi</p>
                    </article>
                    <article>
                        <img src='https://media.istockphoto.com/photos/blogging-woman-reading-blog-picture-id887987150?k=20&m=887987150&s=612x612&w=0&h=vCVYGvEkLb3DuCL7DOSoNm8i78Lci4oCt7XD4HGasIg=' alt='' />
                        <p>lorem ipsum we a re = fjfigfnv vigvvi</p>
                    </article>
                    <article>
                        <img src='https://media.istockphoto.com/photos/blogging-woman-reading-blog-picture-id887987150?k=20&m=887987150&s=612x612&w=0&h=vCVYGvEkLb3DuCL7DOSoNm8i78Lci4oCt7XD4HGasIg=' alt='' />
                        <p>lorem ipsum we a re = fjfigfnv vigvvi</p>
                    </article>
                    <article>
                        <img src='https://media.istockphoto.com/photos/blogging-woman-reading-blog-picture-id887987150?k=20&m=887987150&s=612x612&w=0&h=vCVYGvEkLb3DuCL7DOSoNm8i78Lci4oCt7XD4HGasIg=' alt='' />
                        <p>lorem ipsum we a re = fjfigfnv vigvvi</p>
                    </article>
                </div>
            </section>
            <section className='posts-container'>
                <div className='left-container'>
                    <ul className='category-types'>
                        <li className='active'>Latest</li>
                        <li>Popular</li>
                    </ul>
                    <LCategoryList />
                </div>
                <div className='right-container'>
                    <div className='featured-post-info'>
                        <div className='left'>
                            <img src='https://media.istockphoto.com/photos/blogging-woman-reading-blog-picture-id887987150?k=20&m=887987150&s=612x612&w=0&h=vCVYGvEkLb3DuCL7DOSoNm8i78Lci4oCt7XD4HGasIg=' alt='' />
                            <p>By <span className='author'>Chioma Methusalah</span></p>
                            <span className='timestamp'>2 days ago</span>
                        </div>
                        <button className='share-btn'>Share</button>
                    </div>
                    <h1 className='post-title'>
                        Facebook To Add 3,000 To Team Reviewing Posts
                        With Hate Speech, Crimes, And Other Harming Posts
                    </h1>
                    <img src='https://media.istockphoto.com/photos/blogging-woman-reading-blog-picture-id887987150?k=20&m=887987150&s=612x612&w=0&h=vCVYGvEkLb3DuCL7DOSoNm8i78Lci4oCt7XD4HGasIg=' alt='' />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet magnam consequuntur? Ut ratione obcaecati quod
                        laborum aut deleniti modi totam ad, nobis alias at error voluptate quis eum magni. Cupiditate, eos ipsam in quisquam
                        nobis perferendis corrupti quo cumque nulla? Ullam facilis architecto numquam asperiores assumenda excepturi quibusdam
                        perspiciatis at expedita quidem nihil temporibus sint saepe laborum totam, officiis, ipsa iusto. Alias nam aliquid
                        optio consectetur perspiciatis exercitationem quia iste. Est officia fugiat blanditiis iusto placeat consequuntur,
                        necessitatibus minus quis nam assumenda porro eos voluptatibus deserunt molestiae magnam quasi optio itaque velit!
                        Tenetur et, molestiae natus impedit beatae nam recusandae vero blanditiis accusantium voluptatum obcaecati
                        perspiciatis non id saepe? Dolore ipsam officia praesentium neque non odit, illum ex a nulla, nesciunt, et natus velit
                        quaerat animi, et sed. Quibusdam nobis obcaecati cupiditate facilis dolores.
                    </p>
                    <button className='view-more'>View More <FaRegEye /></button>
                </div>
            </section>
        </main>    
    );
};

export default HomePage;