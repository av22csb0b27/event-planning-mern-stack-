import React from 'react';
import { Link } from "react-scroll";

const HeroSection = ()=>{
    return(
         <section className='hero'>
            <img src="/hero.jpg" alt="event" />
            <div className='item'>
                <h3>Crafting Memories</h3>
                <div>
                    <h1>Creating Moments That Last a Lifetime</h1>
                    <p>
                        We believe that it is all about big dreams and small details!
                    </p>
                    <Link to='contact' spy={true} smooth={true} duration={500}>BOOK NOW</Link>
                </div>
            </div>
         </section>
    )
}

export default HeroSection