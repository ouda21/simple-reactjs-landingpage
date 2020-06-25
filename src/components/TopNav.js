import React, {Component} from 'react';

class TopNav extends Component{
    render(){
        return(
            <div className="top-nav">
                <nav>
                    <a href="#" className="logo">Lethal.</a>
                    <ul>
                        <li><a href="#" className="menu-item">Home</a></li>
                        <li><a href="#" className="menu-item">Portfolio</a></li>
                        <li><a href="#" className="menu-item">Blog</a></li>
                        <li><a href="#" className="menu-item">Articles</a></li>
                        <li><a href="#" className="menu-item">Contacts</a></li>
                    </ul>
                    <a href="#" className="hire">Hire Me</a>
                    <button className="toggle-button">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                    </button>
                    
                </nav>
            </div>
        )
    }
}

export default TopNav;