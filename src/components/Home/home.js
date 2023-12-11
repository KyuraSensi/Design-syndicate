import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="design-syndicate-text-background">
        <div className="design-syndicate-text-background-text">
          <h1>DESIGN SYNDICATE</h1>
        </div>
      </div>
      {/* love-your-walls */}
      <div className="love-your-walls">
        <div className="love-your-walls-textBox">
          <div className="love-your-walls-text">
            <h1>Love Your Walls</h1>
            <h2>DESIGN SYNDICATE WALLPAPER</h2>
            <p>
              Since celebrating our 46th birthday this year, Design Syndicate
              has become Africa’s leading wallpaper supplier. Our vast range of
              international premium quality wallpaper collections create
              inspiration for all in the interior design field.
            </p>
            <button>VIEW OUR COLLECTIONS</button>
          </div>
          <div className="design-syndicate">
            <div className="design-syndicate-text">
              <h1>
                DESIGN <br /> SYNDICATE
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* love-your-walls */}
      {/* RANGES SECTION */}
      <div className="ranges-section">
        <div className="vinyl-ranges-section">
          <div className="vinyl">
            <div className="vinyl-box">
              <div className="discription">
                <h3>Vinyl Decals</h3>
                <p>
                  Transform your walls with our range of vinyl wall stickers
                  that allow you to decorate the affordable and easy way.
                </p>
                <button>VIEW OUR COLLECTIONS</button>
              </div>
            </div>
            <div className="digital-box">
              <div className="discription">
                <h3>Digital Wallpaper</h3>
                <p>
                  Transform your walls with our range of vinyl wall stickers
                  that allow you to decorate the affordable and easy way.
                </p>
                <button>VIEW OUR COLLECTIONS</button>
              </div>
            </div>
          </div>
          <div className="ranges">
            <div className="ranges-text">
              <h1>Ranges</h1>
              <p>
                Our standard stock ranges are sourced by our team of dedicated
                design professionals. Carefully selected to reflect the latest
                in local and international design trends.
              </p>
              <button>VIEW OUR COLLECTIONS</button>
            </div>
            <div className="ranges-borderBottom"></div>
          </div>
        </div>
        <div className="images">
          <div className="div"></div>
          <div className="div2"></div>
          <div className="div"></div>
          <div className="pictures">
            <div>
              <img src="image 141.png" alt="" />
              <p>
                ELA63002
                <span>ELA63002</span>
              </p>
            </div>
            <div>
              <img src="image 142.png" alt="" />
              <p>
                ELTM1208
                <span>ELTM1208</span>
              </p>
            </div>
            <div>
              <img src="image 143.png" alt="" />
              <p>
                ELMN2014
                <span>ELMN2014</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* RANGES SECTION */}
      {/*plank-border*/}
      <div className="plank-border"></div>
      {/*plank-border*/}
      <div className="special-imports-container">
        <div className="special-imports">
          <div className="special-imports-text">
            Sourced from the finest producers from around the world. We hold
            exclusive distribution rights to many of our special import ranges.
            Browse our collections online or contact a consultant in your area.
            <button>VIEW OUR COLLECTIONS</button>
          </div>
          <div className="white-border-container">
            <div></div>
            <div></div>
            <div></div>
            <h1>SPECIAL <br /><span>IMPORTS</span> </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
