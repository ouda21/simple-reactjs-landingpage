import React, {Component} from 'react';
import IosHeadsetOutline from 'react-ionicons/lib/IosHeadsetOutline'
import IosCardOutline from 'react-ionicons/lib/IosCardOutline'
import IosFlaskOutline from 'react-ionicons/lib/IosFlaskOutline'
import IosSchoolOutline from 'react-ionicons/lib/IosSchoolOutline'
import MdCode from 'react-ionicons/lib/MdCode'
import IosUnlockOutline from 'react-ionicons/lib/IosUnlockOutline'
class ServiceSection extends Component{
    render(){
        return (
            <>
           
            <section id="service-section">
                <div className="section-title">
                    <h2>Services</h2>
                </div>
                <div className="services">
                    <div className="item">
                      <IosHeadsetOutline fontSize="60px"/>
                      <h2>24/7 Support</h2>
                      <p></p>
                    </div>
                    <div className="item">
                        <IosCardOutline fontSize="60px"/>
                        <h2>Secure Transaction</h2>
                        <p></p>
                    </div>
                    <div className="item">
                      <IosFlaskOutline fontSize="60px"/>
                      <h2>Testing</h2>
                      <p></p>
                    </div>
                    <div className="item">
                        <IosSchoolOutline fontSize="60px"/>
                        <h2>Tutorials</h2>
                        <p></p>
                    </div>
                    <div className="item">
                      <MdCode fontSize="60px"/>
                      <h2>Code Editors</h2>
                      <p></p>
                    </div>
                    <div className="item">
                        <IosUnlockOutline fontSize="60px"/>
                        <h2>Privacy</h2>
                        <p></p>
                    </div>
                </div>
            </section>
            </>
        )
    }
}

export default ServiceSection;