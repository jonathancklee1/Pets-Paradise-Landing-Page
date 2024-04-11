import whiteBg from "../assets/white-bg.jpg";
const Footer = () => {
    const socials = [
        { socialText: "Tiktok", socialLink: "www.google.com" },
        { socialText: "Instagram", socialLink: "www.google.com" },
        { socialText: "Facebook", socialLink: "www.google.com" },
        { socialText: "X", socialLink: "www.google.com" },
        { socialText: "Pintrest", socialLink: "www.google.com" },
        { socialText: "Youtube", socialLink: "www.google.com" },
    ];
    const legalItems = [
        { legalItemText: "Cookie Settings", legalItemLink: "www.google.com" },
        {
            legalItemText: "Privacy and cookies",
            legalItemLink: "www.google.com",
        },
        { legalItemText: "Policy", legalItemLink: "www.google.com" },
        { legalItemText: "Terms of use", legalItemLink: "www.google.com" },
    ];
    return (
        <footer className="footer">
            <img src={whiteBg} alt="white bg" />
            <div className="footer__content">
                <div className="newsletter-text">Join our Newsletter</div>
                <div>
                    <ul className="social-list">
                        {socials.map((social) => {
                            return (
                                <li
                                    key={social.socialText}
                                    className="social-list-items"
                                >
                                    <a href={social.socialLink}>
                                        {social.socialText}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <ul className="legal-list">
                        {legalItems.map((legalItem) => {
                            return (
                                <li
                                    key={legalItem.legalItemText}
                                    className="legal-list-items"
                                >
                                    <a href={legalItem.legalItemLink}>
                                        {legalItem.legalItemText}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
