import React from "react";
import "./Account.css";
import ProfilePic from "./Imgs/ProfilePic.jpg";
import BannerPic from "./Imgs/BannerPic.jpg";

export default function Account() {
  return (
    <div className="col">
      <section className="col-2 pt-3 side-piece">
        <h5 className="color-electric">Your Playlists</h5>
        <div className="your-playlist">
          <p>You have no playlists yet</p>
        </div>
        <h5 className="color-electric">Your Friends' Playlists</h5>
        <div className="friends-playlist">
          <p>You have no friends yet</p>
        </div>
      </section>
      <section className="col-10 banner-sect">
        <img className="col-12 banner-img" alt="Banner Image" src={BannerPic} />
        <img className="profile-img" alt="Profile Picture" src={ProfilePic} />
      </section>
      <section className="user-info">
        <div className="offset-2 text-start ps-5 col-2">
          <h3 className="color-white">Brad Smith</h3>
          <h6 className="color-white">Pianist at Union Church</h6>
        </div>
      </section>
      <section>
        <div className="col-3 pt-4 favorites-sect">
          <div>
            <h3 className="color-electric">Favorites</h3>
            <p className="offset-1 col-10 favorites-text">
              You have no favorites yet
            </p>
          </div>
        </div>
        <div className="mt-5 pt-3 categories">
          <h3 className="offset-3 text-start">New Releases</h3>
          <div className="offset-2 col-7 mb-5 hor-scroll"></div>

          <h3 className="offset-3 text-start">Most Popular</h3>
          <div className="offset-2 col-7 mb-5 hor-scroll"></div>

          <h3 className="offset-3 text-start">Your Recents</h3>
          <div className="offset-2 col-7 mb-5 hor-scroll"></div>

          <h3 className="offset-3 text-start">Upcoming Events Near You</h3>
          <div className="offset-2 col-7 mb-5 hor-scroll"></div>
        </div>
      </section>
    </div>
  );
}
