
const Footer = () => {
    return (
        <>
            <div className="d-flex footer">
                <div className="footer-about">
                    <h6 className="footer-about-title">Hello wrold</h6>
                    <div className="footer-about-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                    </div>
                </div>
                <div className="footer-link">
                    <div className="footer-link-title">
                        <h5>Links</h5>
                        <div>
                        <ul>
                            <li><a href="" className="link text-white">Home</a></li>
                            <li><a href="" className="link text-white">Anime</a></li>
                            <li><a href="" className="link text-white">Manga</a></li>
                            <li><a href="" className="link text-white">Big Three</a></li>
                            {/* <li><a href="" className="link text-white">Blog</a></li> */}
                        </ul>
                        </div>
                    </div>
                </div>
                {/* <div className="x">
                    © 2021 All rights reserved. Created by 
                    ramadayaal gk
                </div> */}
            </div>
        </>
    )
}

export default Footer;