import React, {Component} from 'react';


class Contact extends Component{
    render(){
        return (
            <section id="contact-section">
                <div class="contact">
                    <div className="section-title">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="map-section">
                        Google Map
                    </div>
                    <div className="contact-form">
                        <form>
                            <input type="text" placeholder="Enter your name"/>
                            <input type="email" placeholder="Enter your email" />
                            <input type="text" placeholder="Enter the subject"/>
                            <textarea placeholder="Enter your text" cols="30" rows="10"></textarea>
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </section>
        )
    }
} 

export default Contact;