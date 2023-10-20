import './Footer.css';

function Footer() {
    return(
        <div className="footer-div">
            <nav className="footer-nav">
                <ul>
                    <li><a href="#" className='footer-a'>Media</a></li>
                    <li><a href="#" className='footer-a'>Privacy</a></li>
                    <li><a href="#" className='footer-a'>Legal</a></li>
                    <li><a href="#" className='footer-a'>Terms</a></li>
                </ul>
            </nav>
            <div className="copyright">
                <p>Copyright &copy; Zillion Services 2024</p>
            </div>
        </div>
    )
}

export default Footer;