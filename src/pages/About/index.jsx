import styles from "./About.module.css";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.title}>About</h1>
      <p className={styles.text}>
        I've created this webpage to practice my experience in implementing APIs
        in React. During the year I have been watching a lot of movies in my
        free time and found it very enjoyable as a way to unwind. During an
        earlier project I made a similar website which was a single page
        application that I used to showcase the latest movies I had watched,
        with a color scheme inspired by Letterboxd.
      </p>
      <p className={styles.text}>
        On this page you can browse the most popular, upcoming and top-rated
        movies from the TMDB API. A small note about the upcoming page, you may
        see older movies appear. This is because TMDB includes films that are
        receiving a new release in certain countries.
      </p>
      <p className={styles.text}>
        I also added a favourites page showing the movies I have enjoyed the
        most this year. Hope you enjoy exploring!
      </p>
    </motion.div>
  );
};

export default About;
