import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__divider" />
        <p className="footer__copy">© {year} karthik. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;