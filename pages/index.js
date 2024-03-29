import { useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'
/* COMPONENTS */
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import ScrollUp from '../components/ScrollUp'
import Burger from '../components/Burger';
import UseWindowSize from '../components/UseWindowSize';
/* STYLES */
import styles from '../styles/Home.module.css';

function Home({ scrollUpFunction, styleScrollUp, styleBurger }) {

    const size = UseWindowSize();
    /* console.log(size.width) */
    return (
        <div className={styles.body}>
            <Navbar />
            <section id='section1' className={styles.section1}>
                <Image
                    className={styles.imageS1}
                    src="/icecream.jpg"
                    alt=""
                    width={1400}
                    height={550}
                    /* objectFit="cover" */
                />
                {/* <Image
                            className={styles.imageS1}
                            src="/icecream.jpg"
                            alt=""
                            width={414}
                            height={573}
                            objectFit="cover"
                            objectPosition="15%"
                        /> */}
                <div className={styles.text1_a1_s1}>
                    <h1>Conos y Waffles Clarita</h1>
                    <p>Hacemos tu mundo más dulce y feliz.</p>
                    <Link href='#section2'>
                        Nuevos productos
                    </Link>
                    
                </div>

            </section>
            <section id='section2' className={styles.section2}>
                <h1>Nuevos productos</h1>
                <article className={styles.article1_s2}>
                    <div className={styles.text1_a1_s2}>
                        <h2>Cono Taco</h2>
                        <Link href='/products' className={styles.buttontest}>
                            <div className={styles.button_a1s2}>
                                Ordenar pedido
                                <div className={styles.arrowWrapper}>
                                    <div className={styles.arrow}></div>
                                </div>
                            </div>
                        </Link>
                        
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos fugiat explicabo nobis deleniti sapiente quis assumenda, aspernatur natus nemo nihil eaque totam rem a cum inventore magni vero. Vel, laudantium!</p>
                    </div>
                    <Image
                        className={styles.imageA1S2}
                        src="/conotaco2.jpeg"
                        alt=""
                        width={400}
                        height={450}
                        /* objectFit="cover"
                        objectPosition="50%" */
                    />
                </article>
                <article className={styles.article2_s2}>
                    <div className={styles.text1_a2_s2}>
                        <h2>Canasta de helado</h2>
                        <Link href='/products' className={styles.buttontest}>
                            <div  className={styles.button_a2s2}>
                                Ordenar pedido
                                <div className={styles.arrowWrapper}>
                                    <div className={styles.arrow}></div>
                                </div>
                            </div>
                        </Link>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos fugiat explicabo nobis deleniti sapiente quis assumenda, aspernatur natus nemo nihil eaque totam rem a cum inventore magni vero. Vel, laudantium!</p>
                    </div>
                    <Image
                        className={styles.imageA2S2}
                        src="/canastadehelado.jpg"
                        alt=""
                        width={400}
                        height={400}
                        /* objectFit="contain" */
                    />
                </article>
            </section>
            <section id='section3' className={styles.section3}>
                <div className={styles.text1_a1_s3}>
                    <h1>Article 1</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos fugiat explicabo nobis deleniti sapiente quis assumenda, aspernatur natus nemo nihil eaque totam rem a cum inventore magni vero. Vel, laudantium!</p>
                </div>
                <div className={styles.text1_a2_s3}>
                    <h1>Article 1</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos fugiat explicabo nobis deleniti sapiente quis assumenda, aspernatur natus nemo nihil eaque totam rem a cum inventore magni vero. Vel, laudantium!</p>
                </div>
                <Image
                    className={styles.backgroundS3}
                    src="/cityExample.jpg"
                    alt=""
                    width={1350}
                    height={700}
                    /* objectFit="cover" */
                />
            </section>
            <section id='section4' className={styles.section4}>
                <div className={styles.s4_item1}>
                    <i className="bi bi-cart4"></i>
                    <h3>Producto Nacional</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit adipisci dolor officiis natus ipsum saepe aliquam, illum, temporibus laboriosam expedita nulla eius, quas earum et quidem.</p>
                </div>
                <div className={styles.s4_item2}>
                    <i className="bi bi-person-video3"></i>
                    <h3>Soporte</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit adipisci dolor officiis natus ipsum saepe aliquam, illum, temporibus laboriosam expedita nulla eius, quas earum et quidem.</p>
                </div>
                <div className={styles.s4_item3}>
                    <i className="bi bi-shop"></i>
                    <h3>Producto de calidad</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit adipisci dolor officiis natus ipsum saepe aliquam, illum, temporibus laboriosam expedita nulla eius, quas earum et quidem.</p>
                </div>
            </section>
            <ScrollUp
                scrollUpFunction={scrollUpFunction}
                styleScrollUp={styleScrollUp}
            />
            <Burger 
                styleBurger={styleBurger}
            />
            <Footer
                page="/"
                section1="Section 1"
                section2="Section 2"
                section3="Section 3"
                section4="Section 4"
            />
        </div>
    )
}
export default Home;
