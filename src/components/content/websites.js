import React from "react";
import style from "./content.module.scss";
import reactIcon from "../../images/icons/react-icon.svg";
import reduxIcon from "../../images/icons/redux-icon.svg";
import graphqlIcon from "../../images/icons/graphql-icon.svg";
import nodeIcon from "../../images/icons/node-icon.svg";
import uxuiIcon from "../../images/icons/uxui-icon.svg";

const WebsitesContent = () => (
  <div className="container">
    <div className="content">
      <h1>
        Front-end contract JavaScript developer from Bristol, specializing in
        React JS.
      </h1>
      <p>
        I've been designing and building websites professionally for over 12
        years. Starting out creating bespoke WordPress sites for small local
        businesses, I then went on to run my own premium theme store. In recent
        years I have fully embraced front-end JavaScript libraries and
        frameworks, and now consider myself a React specialist.
      </p>
      <p>
        I've had the pleasure of working as a contract front-end developer with
        numerous agencies and companies. As a contractor, I can't publicly
        disclose much of my best work, but if you'd like some examples I can
        point you in the right direction.
      </p>
      <p>
        If you're interested in hiring me for a project, either as a front-end
        contract developer or on a freelance basis, please get in touch...
      </p>

      <div className="button-group">
        <a class="button" href="mailto:gsmerin@gmail.com">
          Email me
        </a>
        <a class="button" href="https://uk.linkedin.com/in/smerin">
          LinkedIn
        </a>
      </div>

      <h3 className={style.skillsTitle}>My key skills / interests</h3>
      <p>
        I love learning and am fasinated by how quickly the JavaScript ecosystem
        is developing. Below are some of the technologies I have been using
        recently.
      </p>

      <div className={style.skillsItem}>
        <img src={reactIcon} />
        <h2>React JS</h2>
        <p>
          React is an open-source javascript library for developing front-end
          user interfaces. It's become immensely popular, and powers some of the
          biggest modern web applications such as Facebook, Instagram and
          Airbnb. It's had a huge impact on how I go about building websites,
          and certainly improved my JavaScript skills no end. I've used React in
          several large-scale projects, and a few smaller side projects. I keep
          a close eye on the latest React library additions such as Context,
          Hooks and Suspense, as well as popular tools like the Next JS
          framework, and Gatsby static-site generator.
        </p>
      </div>

      <div className={style.skillsItem}>
        <img src={reduxIcon} />
        <h2>Redux</h2>
        <p>Redux is a state-management tool, that has</p>
      </div>

      <div className={style.skillsItem}>
        <img src={graphqlIcon} />
        <h2>GraphQL</h2>
        <p>
          In recent years I have fully embraced front-end JavaScript libraries
          and frameworks, and React JS is now my speciality. Alongside React, I
          have used Redux extensively for state management. Over the past few
          months I have become particularly interested in GraphQL, and am
          looking forward to using this much more in the future.
        </p>
      </div>

      <div className={style.skillsItem}>
        <img src={nodeIcon} />
        <h2>Node JS</h2>
        <p>
          In recent years I have fully embraced front-end JavaScript libraries
          and frameworks, and React JS is now my speciality. Alongside React, I
          have used Redux extensively for state management. Over the past few
          months I have become particularly interested in GraphQL, and am
          looking forward to using this much more in the future.
        </p>
      </div>

      <div className={style.skillsItem}>
        <img src={uxuiIcon} />
        <h2>UX / UI design</h2>
        <p>
          Coming from a family of architects, well-considered user experience
          has always been an interest of mine.
        </p>
      </div>
    </div>
  </div>
);

export default WebsitesContent;
