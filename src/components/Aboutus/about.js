import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="abouCont">
        <div className="aboutSec1Cont">
          <div className="aboutSec1 ">
            {/* <img src="About us.png" alt="img" width="100%" height="100%" /> */}
            <h1 className="aboutSec1Title">Abou<span id="titleBlend">t Us</span></h1>
            <h2>Wallpaper in interior design</h2>
            <p>
              Wallpaper is the ultimate way to add a splash of color and pattern
              to any space. While it's been all the rage recently, the earliest
              forms of this decorative wall treatment actually date back all the
              way to the 16th century. Wallpaper has made a huge comeback in
              recent years, ushering in a new era of wall decor.
            </p>
          </div>
          <div className="aboutSec1Imgs1Cont">
            <div className="aboutSec1Imgs1">
              <img src="/image 151.png" width="100%" height="100%" alt="img" />
            </div>
            <div className="aboutSec1Imgs2">
              <img src="/Rectangle 404.png" width="100%" height="100%"  alt="img"/>
            </div>
            <div className="aboutSec1Imgs3 aboutSec1Title3">
              {/* <img
                src="/DESIGN SYNDICATE - background text.png"
                width="100%"
                height="100%" alt="Title"
              /> */}
              <h2>DESIGN SYNDICATE</h2>
            </div>
          </div>
        </div>

        <div className="aboutSec2Cont">
          <div className="aboutSec2Imgs">
            <img src="/image 138.png" width="100%" height="100%" alt="img" />
            <img src="/image 137.png" width="100%" height="100%" alt="img" />
          </div>
          <div className="aboutSec2Text">
            <h3>Luce</h3>
            <p>
              Irregular triangles on a textile structure come together structure
              come together in TRIANGOLO to create a graphic and dynamic pattern
              that plays skillfully with two colours. In muted shades, this
              wallcovering brings a feeling of peace to a room: in stronger
              colours, it adds wonderful vitality. Depending on the viewpoint,
              the matif is created through the colors in single-tone TESSILE can
              be combined with TRIANGOLO in alterrnating rolls or on alternating
              walls.
            </p>
          </div>
        </div>

        <div className="aboutSec3Cont">
          <div className="aboutSec3Div">
            <img src="/image 152.png" width="100%" height="100%" alt="img" />
            <h3>YEA51302</h3>
          </div>
          <div className="aboutSec3Div">
            <img src="/image 153.png" width="100%" height="100%" alt="img" />
            <h3>YEA51302</h3>
          </div>
          <button className="sec3Btn">Next</button>
        </div>

        <div className="aboutSec4Cont">
          <h1>
            Wallpaper <br /> Symbol Guides
          </h1>
          <h3>Wallpaper Patterns Symbols</h3>

          <div className="aboutSec4Symbols">
            <div className="symbolCont">
              <div className="symbol">
                <div id="symbol1"></div>
                <div id="symbol1-1"></div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium dolorem
              </p>
            </div>
            <div className="symbolCont">
              <div className="symbol symbol2">
                <div id="symbol2"></div>
                <div id="symbol2-1"></div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium dolorem
              </p>
            </div>
            <div className="symbolCont">
              <div className="symbol symbol3">
                <div className="symbolImg SI1">
                  <img
                    src="/Ellipse 24.png"
                    alt="img"
                    width="60%"
                    height="60%"
                  />
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium dolorem
              </p>
            </div>
            <div className="symbolCont">
              <div className="symbol symbol4">
                <div className="symbolImg SI1">
                  <img
                    src="/Ellipse 26.png"
                    alt="img"
                    width="60%"
                    height="60%"
                  />
                  <img
                    src="/Ellipse 28.png"
                    alt="img"
                    width="60%"
                    height="60%"
                  />
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium dolorem
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
