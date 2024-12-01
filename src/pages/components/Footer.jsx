const Footer = () => (
  <>
    {/*::footer_part start::*/}
    <footer className="footer_part">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="single_footer_part">
                <a href="index.html" className="footer_logo_iner">
                  {" "}
                  <img src="img/logo.png" alt="#" />{" "}
                </a>
                <p>
                  Heaven fruitful doesn&apos;t over lesser days appear creeping
                  seasons so behold bearing days open
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="single_footer_part">
                <h4>Contact Info</h4>
                <p>
                  Address : Your address goes here, your demo address.
                  Bangladesh.
                </p>
                <p>Phone : +8880 44338899</p>
                <p>Email : info@colorlib.com</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="single_footer_part">
                <h4>Important Link</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href=""> WHMCS-bridge</a>
                  </li>
                  <li>
                    <a href="">Search Domain</a>
                  </li>
                  <li>
                    <a href="">My Account</a>
                  </li>
                  <li>
                    <a href="">Shopping Cart</a>
                  </li>
                  <li>
                    <a href="">Our Shop</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="single_footer_part">
                <h4>Newsletter</h4>
                <p>
                  Heaven fruitful doesn&apos;t over lesser days appear creeping
                  seasons deve behold bearing days open
                </p>
                <div id="mc_embed_signup">
                  <form
                    target="_blank"
                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
                    method="get"
                    className="subscribe_form relative mail_part"
                  >
                    <input
                      type="email"
                      name="email"
                      id="newsletter-form-email"
                      placeholder="Email Address"
                      className="placeholder hide-on-focus"
                      onFocus={() => (this.placeholder = "")}
                      onBlur={() => (this.placeholder = "Email Address")}
                    />
                    <button
                      type="submit"
                      name="submit"
                      id="newsletter-submit"
                      className="email_icon newsletter-submit button-contactForm"
                    >
                      <i className="far fa-paper-plane" />
                    </button>
                    <div className="mt-10 info" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copygight_text">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="copyright_text">
                <p>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with{" "}
                  <i className="ti-heart" aria-hidden="true" /> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer_icon social_icon">
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="single_social_icon">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="single_social_icon">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="single_social_icon">
                      <i className="fas fa-globe" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="single_social_icon">
                      <i className="fab fa-behance" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/*::footer_part end::*/}
  </>
);

export default Footer;
