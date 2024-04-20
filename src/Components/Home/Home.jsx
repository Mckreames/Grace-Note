import React from 'react';
import logo from "./Imgs/NameAndSloganOnly.png";
import "./Home.css";
import blackBun from "./Imgs/BlackBun.jpg";
import groupWave from "./Imgs/groupWaveOnStage.jpg";
import bubblyGum from "./Imgs/bubblyGum.jpg";
import upUp from "./Imgs/upUp.jpg";
import reach from "./Imgs/Reach.jpg";
import theaterStyle from "./Imgs/theaterStyle.jpg";
import wrestleMic from "./Imgs/wrestleMic.jpg";
import Lottie from "@lottiefiles/react-lottie-player";

export default function Home() {
    
    return (
        <div>
            <header className="app-header">
                <img className="row offset-2 col-8 mt-5 mb-5 groupWave"
                    alt="A group of people performing on a stage"
                    src={groupWave}
                    />
                <img className="row col-4 mt-4 p-5 home-logo"
                    alt="logo"
                    src={logo}
                />
            </header>
            <main>
                <div className="container-fluid row pb-5 welcome">
                    <div className="offset-1 pt-5 col-4 welcome-text">
                        <h1 className="pt-3 home-header"> Welcome! </h1>
                        <p className="p-text">Welcome to Grace Note, the soulful sanctuary for gospel music enthusiasts and worshippers alike. With Grace Note, immerse yourself in the divine melodies of gospel music, uplifting your spirit and connecting you to the heart of worship. Whether you're a seasoned gospel musician, a fervent choir member, or simply seeking inspiration through soul-stirring hymns, Grace Note offers an enriching platform to deepen your faith journey and express your devotion through music.</p>
                    </div>
                    <div className=" col-6 welcome-img">
                        <img className="mt-5 pe-1 col-4 home-img blackBun"
                            alt="A man performing into a mic"
                            src={blackBun}
                        />
                        <img className="mt-5 pe-1 col-4 home-img blackBun"
                            alt="A man performing into a mic"
                            src={upUp}
                        />
                        <img className="mt-5 col-4 home-img blackBun"
                            alt="A man performing into a mic"
                            src={bubblyGum}
                        />
                    </div>
                </div>
                <div className="container-fluid pt-5 pb-5">
                    <h2 className="pb-5">
                        Practice and Coordinate the way <span className="fancy-text">YOU</span> want
                    </h2>
                    <div className="w-100"></div>
                    <div className="row">
                        <div className="offset-1 col-5 p-3 home-newsletter">
                            <h3 className="pb-3 home-newsletter-head">Join Our Newsletter!</h3>
                            <p className="pb-3 p-text">We'll keep you updated on the newest songs releasing, new lyrics, chord charts, new artists, and even concerts in your area!</p>
                            <button className="col-5 prim-btn">Sign Up</button>
                            <button className="col-5 sec-btn">Newsletters</button>
                        </div>
                        <div className="offset-1 col-4">
                            <h3>Made by Musicians with Musicians in Mind</h3>
                            <p className="p-text">For gospel musicians, Grace Note serves as a sacred repertoire, providing a harmonious blend of traditional hymns, contemporary gospel hits, and uplifting worship songs. Explore our vast selection of gospel tunes, each imbued with the power to uplift, inspire, and ignite the flame of faith within your heart. From accessing sheet music and chord charts to discovering new gospel arrangements, Grace Note equips you with the tools you need to lead worship and spread the message of love and redemption through music.</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid row pt-5 pb-5 connect-sect">
                    <div className="offset-1 col-5">
                        <h2 className="connect-text">I'ts Not Just For Musicians</h2>
                        <p className="p-text">But Grace Note isn't just a music app—it's a beacon of hope and fellowship for the gospel community. Singers can raise their voices in praise, guided by the spirit-filled lyrics and melodies that resonate with the soul. Dive into the depths of gospel music, uncovering the timeless truths and promises woven into each song. Our group feature invites believers from all walks of life to come together in unity, sharing their passion for gospel music and fostering a community of faith, love, and encouragement. Join Grace Note today and let the power of gospel music transform your worship experience.</p>
                    </div>
                    <div className="offset-1 col-4 connect-img">
                        <img className="col-12 home-img"
                            alt="A man performing into a mic"
                            src={reach}
                        />
                    </div>
                </div>
                <div className="container-fluid row d-flex pt-5 pb-5 call-to-action-sect">
                    <div className="offset-1 col-5 align-content-center">
                        <img className="col-12 home-img"
                            alt="A sign that says, music is the way"
                            src={wrestleMic}
                        />
                        {/* <Lottie
                        src="https://lottie.host/487cd45d-92f6-4dd5-ac29-8bb5fcec45e6/0lplu3QzPe.json"
                        background="transparent"
                        speed={1}
                        style={{ width: '300px', height: '300px' }}
                        loop
                        autoplay
                        /> */}
                    </div>
                    <div className="offset-1 col-4 call-text-sect">
                        <h2 className="call-header">Let's Do This!</h2>
                        <p className="p-text call-p">Ready to elevate your gospel music experience and deepen your connection to the divine through music? Join Grace Note today and unlock a world of soul-stirring melodies, uplifting worship songs, and vibrant community fellowship. Whether you're a musician, singer, or devoted worshipper, Grace Note offers the tools and resources you need to enhance your worship experience and grow in your faith journey. Don't miss out on the opportunity to join a thriving community of gospel enthusiasts and experience the transformative power of music. Embrace the harmony of faith and music with Grace Note—download now and let your soul soar!</p>
                    </div>
                </div>
            </main>
        </div>
  )
}
