import React, {Component} from 'react';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin'
import LogoFacebook from 'react-ionicons/lib/LogoFacebook';
import LogoTwitter from 'react-ionicons/lib/LogoTwitter';
import LogoDropbox from 'react-ionicons/lib/LogoDropbox'
class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="footerContent">
                    <div className="logoSection">
                        <h2>Lethal.</h2>
                        <p>Lethal Company</p>
                    </div>
                    <div className="link1">
                        <a href="">Home</a>
                        <a href="">Portfolio</a>
                        <a href="">Demo</a>
                        <a href="">Contact</a>
                    </div>
                    <div className="link2">
                        <a href="">Support</a>
                        <a href="">Donate</a>
                        <a href="">Sponsor</a>
                    </div>
                </div>
                <div className="social-media">
                    <a><LogoGithub fontSize="20px" color="white"/></a>
                    <a><LogoLinkedin fontSize="20px" color="white"/></a>
                    <a><LogoFacebook fontSize="20px" color="white"/></a>
                    <a><LogoTwitter fontSize="20px" color="white"/></a>
                    <a><LogoDropbox fontSize="20px" color="white"/></a>
                </div>
                <div className="copyright">&copy; Lethal Ouda.2020</div>
            </footer>
        )
    }
}

export default Footer;