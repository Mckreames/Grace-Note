import React from "react";
import "./About.css";
import OneHand from "./Imgs/OneHandLifted.jpg";

export default function About() {
  return (
    <div className="container-fluid about-sect">
      <div className="row">
        <img
          className="mt-1 col-6 about-img"
          alt="A man lifting his hand"
          src={OneHand}
        />
        <div className="offset-1 col-4">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias id
            aut earum explicabo ut, mollitia non tempora. Eveniet nesciunt nisi
            culpa a eum sed. Neque voluptate ex, quos id sapiente, tenetur
            incidunt rerum, totam numquam molestiae nulla. Omnis odit animi
            nostrum optio? Sunt fugiat id eos temporibus impedit error magni.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias id
            aut earum explicabo ut, mollitia non tempora. Eveniet nesciunt nisi
            culpa a eum sed. Neque voluptate ex, quos id sapiente, tenetur
            incidunt rerum, totam numquam molestiae nulla. Omnis odit animi
            nostrum optio? Sunt fugiat id eos temporibus impedit error magni.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias id
            aut earum explicabo ut, mollitia non tempora. Eveniet nesciunt nisi
            culpa a eum sed. Neque voluptate ex, quos id sapiente, tenetur
            incidunt rerum, totam numquam molestiae nulla. Omnis odit animi
            nostrum optio? Sunt fugiat id eos temporibus impedit error magni.
          </p>
          <h2>Transforming Church Music, One Note at a Time</h2>
        </div>
      </div>
    </div>
  );
}
