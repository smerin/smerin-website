import React from "react";
import cx from "classnames";
import {
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook
} from "react-icons/fa";
import style from "./buttons.module.scss";

export const EmailButton = ({ alt }) => {
  const className = cx(style.button, {
    [style.alt]: alt
  });
  return (
    <a className={className} href="mailto:contact@smerin.com" target="blank">
      <span className={style.icon}>
        <FaEnvelope />
      </span>
      Email
    </a>
  );
};

export const LinkedinButton = ({ alt }) => {
  const className = cx(style.button, {
    [style.alt]: alt
  });
  return (
    <a
      className={className}
      href="https://uk.linkedin.com/in/smerin"
      target="blank"
    >
      <span className={style.icon}>
        <FaLinkedin />
      </span>
      LinkedIn
    </a>
  );
};

export const TwitterButton = ({ alt }) => {
  const className = cx(style.button, {
    [style.alt]: alt
  });
  return (
    <a
      className={className}
      href="https://twitter.com/smerindigital"
      target="blank"
    >
      <span className={style.icon}>
        <FaTwitter />
      </span>
      Twitter
    </a>
  );
};

export const InstagramButton = ({ alt }) => {
  const className = cx(style.button, {
    [style.alt]: alt
  });
  return (
    <a
      className={className}
      href="https://www.instagram.com/smerin/"
      target="blank"
    >
      <span className={style.icon}>
        <FaInstagram />
      </span>
      Instagram
    </a>
  );
};

export const YoutubeButton = ({ alt }) => {
  const className = cx(style.button, {
    [style.alt]: alt
  });
  return (
    <a
      className={className}
      href="https://www.youtube.com/channel/UClXTgDt-_ZWXrvljBFB1f3A"
      target="blank"
    >
      <span className={style.icon}>
        <FaYoutube />
      </span>
      YouTube
    </a>
  );
};

export const FacebookButton = ({ alt }) => {
  const className = cx(style.button, {
    [style.alt]: alt
  });
  return (
    <a
      className={className}
      href="https://www.facebook.com/smerin"
      target="blank"
    >
      <span className={style.icon}>
        <FaFacebook />
      </span>
      Facebook
    </a>
  );
};
