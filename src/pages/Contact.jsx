function Contact() {
  return (
    <>
      {/* Required meta tags */}
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* breadcrumb start*/}
      <section className="breadcrumb breadcrumb_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb_iner text-center">
                <div className="breadcrumb_iner_item">
                  <h2>contact</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb start*/}
      {/* ================ contact section start ================= */}
      <section className="contact-section section_padding">
        <div className="container">
          <div className="d-none d-sm-block mb-5 pb-4">
            <div id="map" style={{ height: 480 }} />
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Get in Touch</h2>
            </div>
            <div className="col-lg-8">
              <form
                className="form-contact contact_form"
                action="contact_process.php"
                method="post"
                id="contactForm"
                noValidate="novalidate"
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="message"
                        id="message"
                        cols={30}
                        rows={9}
                        onFocus={() => (this.placeholder = "")}
                        onBlur={() => (this.placeholder = "Enter Messages")}
                        placeholder="Enter Message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="name"
                        id="name"
                        type="text"
                        onFocus={() => (this.placeholder = "")}
                        onBlur={() => (this.placeholder = "Enter Your Name")}
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="email"
                        id="email"
                        type="email"
                        onFocus={() => (this.placeholder = "")}
                        onBlur={() => (this.placeholder = "Email Address")}
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="subject"
                        id="subject"
                        type="text"
                        onFocus={() => (this.placeholder = "")}
                        onBlur={() => (this.placeholder = "Enter Subjects")}
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button type="submit" className="button-contactForm btn_1">
                    Send Message{" "}
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-home" />
                </span>
                <div className="media-body">
                  <h3>Buttonwood, California.</h3>
                  <p>Rosemead, CA 91770</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-tablet" />
                </span>
                <div className="media-body">
                  <h3>00 (440) 9865 562</h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-email" />
                </span>
                <div className="media-body">
                  <h3>support@colorlib.com</h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================ contact section end ================= */}
      {/*::footer_part start::*/}
      <footer className="footer_part black">
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
                    Heaven fruitful doesnt over lesser days appear creeping
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
                    Heaven fruitful doesnt over lesser in days. Appear creeping
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
      {/* jquery plugins here*/}
      {/* popper js */}
      {/* bootstrap js */}
      {/* easing js */}
      {/* swiper js */}
      {/* swiper js */}
      {/* particles js */}
      {/* slick js */}
      {/* custom js */}
    </>
  );
}

export default Contact