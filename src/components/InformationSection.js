import React, {Component} from 'react';
import Person from '../assets/image_1.jpg';

class InformationSection extends Component{
    render(){
        return (
            <section id="information-section">
                <div className="information">
                    <div className="image">
                        <img src={Person} alt="Person" />
                    </div>
                    <div className="description">
                        <div className="sub__section-title">
                            <h2>Information</h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Eligendi non quis exercitationem culpa nesciunt nihil aut 
                            nostrum explicabo reprehenderit optio amet ab temporibus 
                            asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
                        </p>
                        <a href="" className="more-info">Read More</a>
                    </div>
                </div>
            </section>
        )
    }
}

export default InformationSection;