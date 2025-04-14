// IMAGES
import sokol from '../images/SokolLogo.png';

// STYLES
import './Footer.scss';

export default function Footer() {
    return (
        <div className="footer">
            <div className="overlay">
                <div className="logo">
                    <img src={sokol.src} alt="logo klubu" />
                    <h2><strong>Sokół</strong> Marcinkowice</h2>
                </div>
                <div className="links-container">
                    <div className="links">
                        <ul>
                            <li><a href="/artykuly">Aktualności</a></li>
                            <li><a href="/grupy-mlodziezowe">Grupy Młodzieżowe</a></li>
                            <li><a href="/trenerzy">Trenerzy</a></li>
                            <li><a href="/oboz">Obóz</a></li>
                            <li><a href="/galeria">Galeria</a></li>
                            <li><a href="/sklep">Sklep</a></li>
                            <li><a href="/kontakt">Kontakt</a></li>
                        </ul>
                    </div>
                    <div className="contact-info">
                        <ul>
                            <li>Sportowa 20, Marcinkowice</li>
                            <li><a href='mailto:example@example.com'>example@example.com</a></li>
                            <li><a href="tel:609406003">609 406 003</a></li>
                            <li><a href="https://facebook.com">Strona na Facebooku</a></li>
                            <li><a href="https://facebook.com">Strona na Facebooku 2</a></li>
                        </ul>
                    </div>
                </div>
               
                <div className="copyright">
                    <p>Prawa autorskie &copy; {new Date().getFullYear()} Wszelkie prawa zastrzeżone</p>
                    <p>Klub Piłkarski Sokół Marcinkowice</p>
                </div>
            </div>
        </div>
    );
}