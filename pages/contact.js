import Link from 'next/link.js';
import Image from 'next/image'
import { useState } from 'react';
/* COMPONENTS */
import Forms from '../components/Forms.js';
import MapView from '../components/MapView'
import FormSend from '../components/modals/FormSend.js';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Info from '../components/Info';
import ScrollUp from '../components/ScrollUp'
import Burger from '../components/Burger';
/* STYLES */
import styles from '../styles/Contact.module.css'

const Contact = ({ scrollUpFunction, styleScrollUp, styleBurger }) => {

    const [modalFormSend, setModalFormSend] = useState(false);

    return (
        <div className={styles.body}>
            <Navbar />
            <section id='section1' className={styles.section1}>
                <Image
                    className={styles.imageS1}
                    src="/ContactUs2.png"
                    alt=""
                    width={700}
                    height={600}
                    objectFit="contain"
                />
                <div className={styles.text_s1}>
                    <h1>Contáctenos</h1>
                    <p>
                    Para más información sobre nuestros productos, precio y distribución, rellene nuestro formulario y nos pondremos en contacto lo antes posible.
                    </p>
                    <Link href="#section3" className={styles.buttontest} >
                        <div className={styles.buttonS1}>
                            <div className={styles.svgWrapper1}>
                                <div className={styles.svgWrapper}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                    </svg>
                                </div>
                            </div>
                            <span>Email</span>
                        </div>
                    </Link>
                </div>
            </section>
            <section id='section2' className={styles.section2}>
                <div className={styles.info}>
                    <Info
                        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe eum dicta atque est repudiandae neque delectus ex, autem consequatur quos? Sapiente vel perferendis blanditiis totam voluptatibus! Nobis dicta voluptatum enim."
                    />
                </div>
                <div className={styles.map}>
                    <MapView />
                </div>
            </section>
            <section id='section3' className={styles.section3}>
                <Image
                    src="/ContactUs.png"
                    alt=""
                    className={styles.imageS3}
                    width={600}
                    height={450}
                    objectFit="contain"

                />
                <div className={styles.contact_form}>
                    <Forms modalFormSend={modalFormSend} setModalFormSend={setModalFormSend} />
                </div>
            </section>
            <FormSend modalFormSend={modalFormSend} setModalFormSend={setModalFormSend} />
            <ScrollUp
                scrollUpFunction={scrollUpFunction}
                styleScrollUp={styleScrollUp}
            />
            <Burger 
                styleBurger={styleBurger}
            />
            <Footer
                page="/contact"
                section1="Section 1"
                section2="Section 2"
                section3="Section 3"
            />
        </div>
    )
}
export default Contact;