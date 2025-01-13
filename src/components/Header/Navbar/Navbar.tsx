import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      {/* <nav id="menu">
        <div className="menu-item">
          <div className="menu-text">
            <a href="#">About</a>
          </div>
          <div className="sub-menu">
            <div className="icon-box">
              <div className="text">
                <div className="title">Our Campus</div>
                <div className="sub-text">Explore our vast campus.</div>
              </div>
            </div>
            <div className="icon-box">
              <div className="text">
                <div className="title">Board of Members</div>
                <div className="sub-text">
                  Think of an idea, and have an AI create it.
                </div>
              </div>
            </div>
            <div className="icon-box">
              <div className="text">
                <div className="title">Super Collider</div>
                <div className="sub-text">Remove mass from any object.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-item highlight">
          <div className="menu-text">
            <a href="#">Services</a>
          </div>
          <div className="sub-menu double">
            <div className="icon-box gb a">
              <div className="text">
                <div className="title">Consult</div>
                <div className="sub-text">From Professionals</div>
              </div>
            </div>
            <div className="icon-box gb b">
              <div className="text">
                <div className="title">Teach</div>
                <div className="sub-text">In classNameroom</div>
              </div>
            </div>
            <div className="icon-box gb c">
              <div className="text">
                <div className="title">Learn</div>
                <div className="sub-text">By Video</div>
              </div>
            </div>
            <div className="icon-box gb d">
              <div className="text">
                <div className="title">Keep</div>
                <div className="sub-text">The Castle</div>
              </div>
            </div>
            <div className="icon-box gb e">
              <div className="text">
                <div className="title">Become</div>
                <div className="sub-text">A Creator</div>
              </div>
            </div>
            <div className="icon-box gb f">
              <div className="text">
                <div className="title">Understand</div>
                <div className="sub-text">Our Journey</div>
              </div>
            </div>
            <div className="bottom-container">
              Ready to dive in? <a href="#">Get Started</a>
            </div>
            <div className="sub-menu-holder"></div>
          </div>
        </div>
        <div className="menu-item highlight">
          <div className="menu-text">
            <a href="#">Support</a>
          </div>
          <div className="sub-menu triple">
            <div className="top-container gb c icon-box">
              <div className="text">
                <div className="title">Where to start</div>
                <div className="sub-text">Find out where to begin below</div>
              </div>
            </div>
            <div className="box">
              <h3>Your Journey</h3>
              <a href="#">Get Started</a>
              <a href="#">Learn the Basics</a>
              <a href="#">Get Advanced</a>
              <a href="#">Start Teaching</a>
            </div>
            <div className="box">
              <h3>Your Tools</h3>
              <a href="#">Turbo Editor</a>
              <a href="#">Time Stopper</a>
              <a href="#">Brain Enhancer</a>
              <a href="#">Network Maker</a>
            </div>
            <div className="icon-box flat">
              <div className="text">
                <div className="title">API Guide</div>
              </div>
            </div>
            <div className="icon-box flat">
              <div className="text">
                <div className="title">Support Line</div>
              </div>
            </div>
            <div className="icon-box flat">
              <div className="text">
                <div className="title">Live Chat</div>
              </div>
            </div>
            <div className="icon-box flat">
              <div className="text">
                <div className="title">Documentation</div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-text">
            <a href="#">Community</a>
          </div>
          <div className="sub-menu">
            <div className="icon-box">
              <div className="text">
                <div className="title">Forum</div>
                <div className="sub-text">Join our passionate community.</div>
              </div>
            </div>
            <div className="icon-box">
              <div className="text">
                <div className="title">Twitter</div>
                <div className="sub-text">Follow us on twitter.</div>
              </div>
            </div>
            <div className="icon-box">
              <div className="text">
                <div className="title">Live Stream</div>
                <div className="sub-text">We stream content every day.</div>
              </div>
            </div>
            <div className="sub-menu-holder"></div>
          </div>
        </div>
        <div id="sub-menu-container">
          <div id="sub-menu-holder">
            <div id="sub-menu-bottom"></div>
          </div>
        </div>
      </nav> */}
      <nav id="menu">
        <div className="menu-item">
          <div className="menu-text">
            <a href="#">About</a>
          </div>
          <div className="sub-menu">
            <div className="icon-box">
              <div className="icon">
                <i className="fal fa-lightbulb-on"></i>
              </div>
              <div className="text">
                <div className="title">
                  Vision and Mission <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">Find what drives us</div>
              </div>
            </div>
            <div className="icon-box">
              <div className="icon">
                <i className="fal fa-wind-turbine"></i>
              </div>
              <div className="text">
                <div className="title">
                  Campus <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">Explore our Campus</div>
              </div>
            </div>
            <div className="icon-box">
              <div className="icon">
                <i className="fal fa-wind-turbine"></i>
              </div>
              <div className="text">
                <div className="title">
                  Board of Members <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">View our Members</div>
              </div>
            </div>
            <div className="icon-box">
              <div className="icon">
                <i className="fal fa-bomb"></i>
              </div>
              <div className="text">
                <div className="title">
                  Mandatory Disclosure<i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">Know what matters</div>
              </div>
            </div>
            <div className="sub-menu-holder"></div>
          </div>
        </div>
        <div className="menu-item highlight">
          <div className="menu-text">
            <a href="#">Academics</a>
          </div>
          <div className="sub-menu double">
            <div className="icon-box gb a">
              <div className="icon">
                <i className="far fa-question-circle"></i>
              </div>
              <div className="text">
                <div className="title">
                  Consult <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">From Professionals</div>
              </div>
            </div>
            <div className="icon-box gb b">
              <div className="icon">
                <i className="far fa-users-className"></i>
              </div>
              <div className="text">
                <div className="title">
                  Teach <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">In Classroom</div>
              </div>
            </div>
            <div className="icon-box gb c">
              <div className="icon">
                <i className="far fa-school"></i>
              </div>
              <div className="text">
                <div className="title">
                  Learn <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">By Video</div>
              </div>
            </div>
            <div className="icon-box gb d">
              <div className="icon">
                <i className="far fa-chess-rook"></i>
              </div>
              <div className="text">
                <div className="title">
                  Keep <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">The Knowledge</div>
              </div>
            </div>
            <div className="icon-box gb e">
              <div className="icon">
                <i className="far fa-video-plus"></i>
              </div>
              <div className="text">
                <div className="title">
                  Become <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">A Professional</div>
              </div>
            </div>
            <div className="icon-box gb f">
              <div className="icon">
                <i className="far fa-cat"></i>
              </div>
              <div className="text">
                <div className="title">
                  Understand <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">Our Journey</div>
              </div>
            </div>
            <div className="bottom-container">
              Ready to start your journey? <a href="#">Enrol Now</a>
            </div>
            <div className="sub-menu-holder"></div>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-text">
            <a href="#">Courses</a>
          </div>
          {/* <div className="sub-menu triple">
            <div className="top-container gb c icon-box">
              <div className="icon big">
                <i className="far fa-book"></i>
              </div>
              <div className="text">
                <div className="title">Where to start</div>
                <div className="sub-text">Find out where to begin below</div>
              </div>
            </div>
            <div className="box">
              <h3>Your Journey</h3>
              <a href="#">Get Started</a>
              <a href="#">Learn the Basics</a>
              <a href="#">Get Advanced</a>
              <a href="#">Start Teaching</a>
            </div>
            <div className="box">
              <h3>Your Tools</h3>
              <a href="#">Turbo Editor</a>
              <a href="#">Time Stopper</a>
              <a href="#">Brain Enhancer</a>
              <a href="#">Network Maker</a>
            </div>
            <div className="icon-box flat">
              <div className="icon">
                <i className="fal fa-plug"></i>
              </div>
              <div className="text">
                <div className="title">
                  API Guide <i className="far fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="icon-box flat">
              <div className="icon">
                <i className="fal fa-comments"></i>
              </div>
              <div className="text">
                <div className="title">
                  Support Line <i className="far fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="icon-box flat">
              <div className="icon">
                <i className="fal fa-phone-volume"></i>
              </div>
              <div className="text">
                <div className="title">
                  Live Chat <i className="far fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="icon-box flat">
              <div className="icon">
                <i className="fal fa-book-spells"></i>
              </div>
              <div className="text">
                <div className="title">
                  Documentation <i className="far fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div> */}
          <div className="sub-menu">
            <div className="icon-box">
              <div className="icon">
                <i className="fal fa-lightbulb-on"></i>
              </div>
              <div className="text">
                <div className="title">
                  Bachelor of Technology CS/ME/ECE/PT{" "}
                  <i className="far fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="icon-box">
              <div className="icon">
                <i className="fal fa-lightbulb-on"></i>
              </div>
              <div className="text">
                <div className="title">
                  Master of Technology CS/ME/ECE/PT{" "}
                  <i className="far fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="icon-box">
              <div className="icon">
                <i className="fal fa-lightbulb-on"></i>
              </div>
              <div className="text">
                <div className="title">
                  Bachelor of Business Administration{" "}
                  <i className="far fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="icon-box">
              <div className="icon">
                <i className="fal fa-lightbulb-on"></i>
              </div>
              <div className="text">
                <div className="title">
                  Master of Business Administration{" "}
                  <i className="far fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="icon-box">
              <div className="icon">
                <i className="fal fa-lightbulb-on"></i>
              </div>
              <div className="text">
                <div className="title">
                  Bachelor of Computer Application{" "}
                  <i className="far fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="icon-box">
              <div className="icon">
                <i className="fal fa-lightbulb-on"></i>
              </div>
              <div className="text">
                <div className="title">
                  Diploma in Pharmacy <i className="far fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="icon-box">
              <div className="icon">
                <i className="fal fa-lightbulb-on"></i>
              </div>
              <div className="text">
                <div className="title">
                  B. Voc. M.L.T. <i className="far fa-arrow-right"></i>
                </div>
              </div>
            </div>

            <div className="sub-menu-holder"></div>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-text">
            <a href="#">Social</a>
          </div>
          <div className="sub-menu">
            <div className="icon-box">
              <div className="icon">
                <i className="far fa-satellite"></i>
              </div>
              <div className="text">
                <div className="title">
                  Gallery <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">Get as glimpse of Life at Somany</div>
              </div>
            </div>
            <div className="icon-box">
              <div className="icon">
                <i className="fab fa-twitter-square"></i>
              </div>
              <div className="text">
                <div className="title">
                  Social Media <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">
                  Follow us on on our social media handles
                </div>
              </div>
            </div>
            <div className="icon-box">
              <div className="icon">
                <i className="fab fa-twitch"></i>
              </div>
              <div className="text">
                <div className="title">
                  Enquire <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">
                  We are available for you every day.
                </div>
              </div>
            </div>
            <div className="sub-menu-holder"></div>
          </div>
        </div>
        <div id="sub-menu-container">
          <div id="sub-menu-holder">
            <div id="sub-menu-bottom"></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
