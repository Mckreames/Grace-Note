import React, { useState } from "react";
import logo from "./Imgs/NameAndSloganOnly.png";
import "./Home.css";
import blackBun from "./Imgs/BlackBun.jpg";
import groupWave from "./Imgs/groupWaveOnStage.jpg";
import bubblyGum from "./Imgs/bubblyGum.jpg";
import upUp from "./Imgs/upUp.jpg";
import reach from "./Imgs/Reach.jpg";
import theaterStyle from "./Imgs/theaterStyle.jpg";
import wrestleMic from "./Imgs/wrestleMic.jpg";
import guitarLean from "./Imgs/guitarLean.jpg";
import HandsUpNobodyMove from "./Imgs/HandsUpNobodyMove.jpg";
import threeGuitars from "./Imgs/threeGuitars.jpg";
import phoneNotifications from "./Imgs/phoneNotifications.png";
import spaceJam from "./Imgs/Space_Jam.webm";
import { Link } from "react-router-dom";
import {
  UncontrolledCarousel,
  //   Button,
  //   Modal,
  //   ModalHeader,
  //   ModalBody,
  //   ModalFooter,
} from "reactstrap";

export default function Home() {
  // const [modal, setModal] = useState(false);

  // const toggle = () => setModal(!modal);

  return (
    <>
      <header className="app-header">
        <img
          className="row offset-md-1 offset-lg-2 col-12 col-md-10 col-lg-8 mt-5 mb-5 groupWave"
          alt="A group of people performing on a stage"
          src={groupWave}
        />
        <img
          className="row offset-1 offset-md-2 offset-lg-3 offset-xxl-4 col-10 col-md-8 col-lg-6 col-xxl-4 mt-4 p-5 home-logo"
          alt="logo"
          src={logo}
        />
      </header>
      <div className="overlay hidden"></div>
      <div className="col-10 newsletter-modal hidden">
        <div className="mb-5">
          <h1>Stay In The Loop!</h1>
          <h4 className="offset-2 col-8">
            Stay up to date with new music, get suggestions for new Sound
            Circles, and be notified about events near you
          </h4>
        </div>
        <div className="offset-1 col-5 mt-5 form-container">
          <form
            class="row offset-1 col-10  justify-content-center"
            id="signupForm"
          >
            <h2 className="mt-3 mb-4">
              <span class="orange">Sign Up!</span>
            </h2>
            <div class="mb-4 col-md-12">
              <label for="inputEmail4" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                required
              />
            </div>
            <div class="mb-4 col-md-10">
              <label for="inputPassword4" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="inputPassword4"
                required
              />
            </div>
            <div class="mb-4 col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label
                  class="form-check-label newsletter-label"
                  for="gridCheck"
                >
                  Sign up for our newsletter!
                </label>
              </div>
            </div>
            <div class="mb-4 col-12 d-flex justify-content-center">
              <button type="submit" class="btn btn-primary close-modal">
                Sign in
              </button>
            </div>
          </form>
        </div>
        <div className="newsletter-img">
          <img
            className=""
            alt="An astronaut bouncing his head to music"
            src={spaceJam}
          />
        </div>
      </div>
      <main className="overflow-x-hidden">
        <div className="row pb-5 welcome">
          <div className="offset-1 col-10 col-md-4 pt-5 welcome-text">
            <h1 className="pt-3 home-header">Welcome!</h1>
            <p className="p-text">
              Welcome to Grace Note, your haven for gospel music enthusiasts.
              Immerse yourself in the soulful melodies that uplift your spirit
              and connect you to the heart of worship. Whether you're a seasoned
              musician or seeking inspiration through hymns, Grace Note enriches
              your faith journey and expresses devotion through music.
            </p>
            <Link to="/sign-up">
              <button className="offset-1 col-10 col-md-10 col-lg-5 mb-2 prim-btn">
                Sign Up
              </button>
            </Link>
            <Link to="/about">
              <button className="offset-1 col-10 col-md-10 col-lg-5 sec-btn">
                About Us
              </button>
            </Link>
          </div>
          <div className="w-100 d-md-none"></div>
          <div className=" d-none d-md-block align-self-center col col-md-6 welcome-img">
            <img
              className="mt-5 col-4 float-elem1 home-img"
              alt="A man performing into a mic"
              src={blackBun}
            />
            <img
              className="mt-5  col-4 float-elem2 home-img"
              alt="A man performing into a mic"
              src={upUp}
            />
            <img
              className="mt-5 col-4 float-elem3 home-img"
              alt="A man performing into a mic"
              src={bubblyGum}
            />
          </div>
        </div>
        <div className="pt-5 pb-5">
          <h2 className="pb-5">
            Practice and Coordinate the way{" "}
            <span className="fancy-text">YOU</span> want
          </h2>
          <div className="w-100"></div>
          <div className="row">
            <div className="offset-sm-1 col-12 col-sm-10 col-md-4 pt-3 pb-3 home-newsletter">
              <h3 className="pb-3 home-newsletter-head">
                Join Our Newsletter!
              </h3>
              <p className="offset-1 pb-3 col-10 p-text">
                We'll keep you updated on the newest songs releasing, new
                lyrics, chord charts, new artists, and even concerts in your
                area!
              </p>
              <button className="offset-md-1 col-8 col-lg-10 prim-btn">
                Let's Go!
              </button>
            </div>
            <div className="w-100 d-md-none"></div>
            <div className="offset-1 col-10 col-md-5 col-lg-5 mt-sm-3">
              <h3>Made by Musicians with Musicians in Mind</h3>
              <p className="p-text">
                Grace Note offers a sacred repertoire for gospel musicians,
                blending traditional hymns with contemporary hits. Explore our
                vast selection, each song imbued with power to inspire faith and
                ignite your heart. Access sheet music, chord charts, and
                discover new arrangements to spread love and redemption through
                music.
              </p>
            </div>
          </div>
        </div>
        <div className="row pt-5 pb-5 connect-sect">
          {/* Carousel for pages below 768px. placed here to add better flow to smaller screens */}
          <div className="d-block d-md-none offset-sm-1 col-12 col-sm-10 pb-5 connect-img">
            <UncontrolledCarousel
              items={[
                {
                  altText: "",
                  caption: "",
                  key: 1,
                  src: reach,
                  className: "carousel-img",
                },
                {
                  altText: "",
                  caption: "",
                  key: 2,
                  src: HandsUpNobodyMove,
                  className: "carousel-img",
                },
                {
                  altText: "",
                  caption: "",
                  key: 3,
                  src: threeGuitars,
                  className: "carousel-img",
                },
                {
                  altText: "",
                  caption: "",
                  key: 4,
                  src: guitarLean,
                  className: "carousel-img",
                },
                {
                  altText: "",
                  caption: "",
                  key: 5,
                  src: theaterStyle,
                  className: "carousel-img",
                },
              ]}
            />
            {/* <img className="col-12 home-img"
                            alt="A man performing into a mic"
                            src={reach}
                        /> */}
          </div>
          <div className="offset-1 col-10 col-md-5 pt-4 pt-md-0">
            <h2 className="connect-text">But Not Just For Musicians</h2>
            <p className="p-text">
              But Grace Note isn't just a music app—it's a beacon of hope and
              fellowship for the gospel community. Singers can raise their
              voices in praise, guided by the spirit-filled lyrics and melodies
              that resonate with the soul. Dive into the depths of gospel music,
              uncovering the timeless truths and promises woven into each song.
              Our group feature invites believers from all walks of life to come
              together in unity, sharing their passion for gospel music and
              fostering a community of faith, love, and encouragement. Join
              Grace Note today and let the power of gospel music transform your
              worship experience.
            </p>
          </div>
          {/* Carousel for pages above 768px */}
          <div className="d-none d-md-block align-self-center offset-lg-1 col-4 col-md-5 col-lg-4 connect-img">
            <UncontrolledCarousel
              items={[
                {
                  altText: "",
                  caption: "",
                  key: 1,
                  src: reach,
                  className: "carousel-img",
                },
                {
                  altText: "",
                  caption: "",
                  key: 2,
                  src: HandsUpNobodyMove,
                  className: "carousel-img",
                },
                {
                  altText: "",
                  caption: "",
                  key: 3,
                  src: threeGuitars,
                  className: "carousel-img",
                },
                {
                  altText: "",
                  caption: "",
                  key: 4,
                  src: guitarLean,
                  className: "carousel-img",
                },
                {
                  altText: "",
                  caption: "",
                  key: 5,
                  src: theaterStyle,
                  className: "carousel-img",
                },
              ]}
            />
          </div>
        </div>
        <div className=" row d-flex call-to-action-sect">
          <div className="d-none d-md-block offset-1 col-10 col-md-4 phone">
            <img
              className="col-12 mb-5 home-img phone-img"
              alt="A sign that says, music is the way"
              src={phoneNotifications}
            />
          </div>
          <div className="offset-lg-1 col-12 col-md-6 pt-lg-5 pb-lg-5 mt-5 call-text-sect">
            <h2 className="call-header">Let's Do This!</h2>
            <p className="offset-1 col-10 p-text call-p">
              Ready to elevate your gospel music experience and deepen your
              connection to the divine through music? Join Grace Note today and
              unlock a world of soul-stirring melodies, uplifting worship songs,
              and vibrant community fellowship.
            </p>
            <Link to="/sign-up">
              <button className="offset-1 col-6 p-3 mt-md-2 mt-lg-4 ter-btn">
                Sign Up
              </button>
            </Link>
          </div>
          <div className="d-md-none w-100"></div>
          <div className="d-none d-sm-block d-md-none offset-1 col-10 phone">
            <img
              className="col-12 mb-5 home-img phone-img"
              alt="A sign that says, music is the way"
              src={phoneNotifications}
            />
          </div>
        </div>
      </main>
    </>
  );
}
