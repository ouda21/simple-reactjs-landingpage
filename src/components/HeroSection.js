import React, {Component} from 'react';
import hero from '../assets/hero.jpg'

class HeroSection extends Component{
    render(){
        return (
            <section id="hero-section">
                <div className="hero-image">
                    <img src={hero} alt="" />
                    <div className="hero-text">
                        <h2>Business of Choice</h2>
                        <div className="underliner"></div>
                        <p>
                            Be part of our pride. Support Lethal and the next luck might be yours
                        </p>
                        <a href="" class="main-button">Get Started</a>
                    </div>
                </div>
            </section>
        )
    }
}

export default HeroSection;