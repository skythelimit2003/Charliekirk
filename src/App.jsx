import './App.css'

import kirkLogo from './assets/KirkLogoNoBG.png'
import HeroKirk from './assets/HeroKirk.png'
import telegram from './assets/telegram-png.webp'
import x from './assets/x-logo.png'

import kirk from './assets/kirk1 (1).jpeg'
import kirk2 from './assets/kirk1 (2).jpeg'
import kirk3 from './assets/kirk1 (3).jpg'
import kirk4 from './assets/kirk1 (4).jpg'
import kirk5 from './assets/kirk1 (5).jpg'
import kirk6 from './assets/kirk1 (6).jpg'
import kirk7 from './assets/kirk1 (7).jpg'
import kirk8 from './assets/kirk1 (8).jpg'
import kirk9 from './assets/kirk2 (1).jpg'
import kirk10 from './assets/kirk2 (2).jpg'
import kirk11 from './assets/kirk2 (3).jpg'
import kirk12 from './assets/kirk2 (4).jpg'
import kirk13 from './assets/kirk2 (5).jpg'
import kirk14 from './assets/kirk2 (6).jpg'
import kirk15 from './assets/kirk2 (7).jpg'
import kirk16 from './assets/kirk2 (8).jpg'
import kirk17 from './assets/kirk2 (9).jpg'
import kirk18 from './assets/kirk2 (10).jpg'
import kirk19 from './assets/kirk2 (11).jpg'
import kirk20 from './assets/kirk2 (12).jpg'
import kirk21 from './assets/kirk2 (13).jpg'
import kirk22 from './assets/kirk2 (14).jpg'
import kirk23 from './assets/kirk2 (15).jpg'
import kirk24 from './assets/kirk3 (1).jpg'
import kirk25 from './assets/kirk3 (2).jpg'

import kirksit from './assets/kirkSit.png'
import Insta from './assets/Insta.webp'
import kirkcash from './assets/kirkCash.png'


function App() {

  /* =========================
     COPY CONTRACT ADDRESS
  ========================== */

  const copyCA = () => {
    const text = document.getElementById('ca-text')?.innerText

    if (text) {
      navigator.clipboard?.writeText(text)
    }
  }


  /* =========================
     MEME ARRAYS
  ========================== */

  const row1 = [
    kirk,
    kirk2,
    kirk3,
    kirk4,
    kirk5,
    kirk6,
    kirk7,
    kirk8,
    kirk9,
  ]

  const row2 = [
    kirk10,
    kirk11,
    kirk12,
    kirk13,
    kirk14,
    kirk15,
    kirk16,
    kirk17,
  ]

  const row3 = [
    kirk18,
    kirk19,
    kirk20,
    kirk21,
    kirk22,
    kirk23,
    kirk24,
    kirk25,
  ]


  const renderMemeRow = (images, direction) => (
    <div className={`polaroid-track ${direction}`}>

      {[...images, ...images].map((image, index) => (
        <figure
          className="polaroid"
          key={`${direction}-${index}`}
        >
          <div className="frame">
            <img
              src={image}
              alt={`Kirk meme ${index + 1}`}
            />
          </div>
        </figure>
      ))}

    </div>
  )


  return (
    <main>

      {/* =========================
          NAVIGATION
      ========================== */}

      <nav className="bar">

        <div className="logo">
          <img
            src={kirkLogo}
            alt="KirkCoin logo"
          />
        </div>


        <div className="nav-links">

          <a href="#community">

            <img
              className="social-icon"
              src={x}
              alt="X"
            />

            <img
              className="social-icon telegram-icon"
              src={telegram}
              alt="Telegram"
            />

            <span>Join us!</span>

          </a>

        </div>

      </nav>


      {/* =========================
          HERO
      ========================== */}

      <section className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            WE ARE ALL
          </p>


          <h1>

            CHARLIE

            <br />

            <span className="redKirk">
              $KIRK
            </span>

          </h1>


          <p className="tagline">
            A coin made to unite all of the $KIRK
          </p>


          <div className="buttons">

            <a
              href="#buy"
              className="btn btn-primary"
            >
              Buy $KIRK
            </a>


            <a
              href="https://en.wikipedia.org/wiki/Charlie_Kirk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              About Charlie $KIRK
            </a>

          </div>


          <div className="contract-chip">

            <span>CA</span>

            <span
              className="ca"
              id="ca-text"
            >
              Contract address
            </span>

            <button
              type="button"
              className="copy-btn"
              onClick={copyCA}
            >
              Copy
            </button>

          </div>

        </div>


        <div className="coin">

          <img
            src={HeroKirk}
            alt="KirkCoin mascot"
          />

        </div>

      </section>


      {/* =========================
          MARQUEE
      ========================== */}

      <div className="marquee">

        <div className="marquee-track">

          {Array.from({ length: 24 }).map((_, index) => (
            <span key={index}>

              <span>CHARLIE</span>

              <span className="ticker">
                $KIRK
              </span>

            </span>
          ))}

        </div>

      </div>


      {/* =========================
          BUY
      ========================== */}

      <section
        id="buy"
        className="light-section buy-section"
      >

        <div className="wrap">

          <div className="section-head">

            <h2>
              Become a $KIRK today
            </h2>

          </div>


          <div className="steps">

            <div className="step hard-box">

              <span className="step-num">
                1
              </span>

              <h3>
                Get a wallet
              </h3>

              <p>
                Use a compatible cryptocurrency wallet
                and make sure you understand how it works
                before using it.
              </p>

            </div>


            <div className="step hard-box">

              <span className="step-num">
                2
              </span>

              <h3>
                Get crypto
              </h3>

              <p>
                If you decide to participate, obtain the
                required cryptocurrency through a service
                you already use.
              </p>

            </div>


            <div className="step hard-box">

              <span className="step-num">
                3
              </span>

              <h3>
                Explore $KIRK
              </h3>

              <p>
                Verify the contract address and project
                information before making any transaction.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          MEMES
      ========================== */}

      <section
        id="memes"
        className="light-section memes-section"
      >

        <div className="wrap">

          <div className="section-head">

            <h2>
              The $KIRK Campaign
            </h2>

          </div>

        </div>


        <div className="gallery">

          {renderMemeRow(row1, 'slide-left')}

          {renderMemeRow(row2, 'slide-right')}

          {renderMemeRow(row3, 'slide-left')}

        </div>

      </section>


      {/* =========================
          COMMUNITY
      ========================== */}

      <section
        id="community"
        className="community"
      >

        <div className="community-wrap">

          <h2 >
            Join the Community
          </h2>

          <p>
            Follow the project, share memes, and keep up
            with the community.
          </p>


          <div className="social-row">

            <a
              href="https://t.me/CharlieKirkPORTAL"
              target='_blank'
              className="btn btn-ghost btn-icon"
            >

              <img
                src={telegram}
                alt="Telegram"
                className="button-icon"
              />

              Telegram

            </a>


            <a
              href="https://x.com/CKirkOnSol"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-icon"
            >

              <img
                src={x}
                alt="X"
                className="button-icon"
              />

              X

            </a>


            <a
              href="https://www.instagram.com/explore/search/keyword/?q=%23kirk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-icon"
            >

              <img
                src={Insta}
                alt="Instagram"
                className="button-icon"
              />

              #KIRK

            </a>

          </div>

        </div>


        <img
          src={kirksit}
          alt="Kirk character"
          className="community-character"
        />

      </section>


      {/* =========================
          DONATION
      ========================== */}

      <section
        id="donate"
        className="donate-section"
      >

        <div className="donate-box hard-box">

          <h3>
            Donate
          </h3>

          <p>
            If you want to donate, link to the Charlie Kirk's vision
          </p>


          <div className="contract-chip donation-chip">

            <span></span>

            <span className="ca">
              https://tpusa.com/donate
            </span>


            <a
              href="https://tpusa.com/donate"
              className="copy-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit
            </a>

          </div>

        </div>

      </section>


      {/* =========================
          STRIPE
      ========================== */}

      <div className="stripe-rule"></div>


      {/* =========================
          FOOTER
      ========================== */}

      <footer>

        <div className="footer-wrap">

          <div className="foot-brand">
            $KIRK
          </div>


          <p className="footer-copy">
            Copyright © 2026 KirkCoin.
          </p>


          <p className="disclaimer">
            KirkCoin is a fictional parody meme project and
            is not affiliated with, endorsed by, or operated
            by Charlie Kirk, Turning Point USA, any political
            party, or any political campaign. Cryptocurrency
            assets can be highly speculative and may result
            in the loss of funds. Do your own research and
            understand the risks before interacting with
            cryptocurrency.
          </p>


          <img
            id="cash"
            src={kirkcash}
            alt=""
          />

        </div>

      </footer>

    </main>
  )
}

export default App