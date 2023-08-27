import '../Footer/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div className="container-footer">

        <div className="links-footer">
            <p>@Copytight CyberRM Dev - 2023</p>
        </div>  

        <div className="icons-footer">
          <a href="#"><FontAwesomeIcon icon={ faGithub } size="xl"/></a>
          <a href="#"><FontAwesomeIcon icon={ faLinkedin } size="xl"/></a>
          <a href="#"><FontAwesomeIcon icon={ faWhatsapp } size="xl"/></a>
        </div>

      </div>
    </footer>
  )
}

export default Footer