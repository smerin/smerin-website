import Image from 'next/image';
import { EmailButton, LinkedinButton, TwitterButton } from '@/components/Buttons';
import ContentFeature from '@/components/ContentFeature';
import styles from './WebsitesContent.module.css';

export default function WebsitesContent() {
  return (
    <div className="container">
      <div className="content">
        <h1 className={styles.title}>
          JavaScript UI developer from Bristol, specialising in React JS.
        </h1>
        <p>
          I&apos;ve been designing and building websites professionally for over 12
          years. Starting out creating bespoke WordPress sites for small local
          businesses, I then went on to run my own premium theme store. In recent
          years I have fully embraced front-end JavaScript libraries and
          frameworks, and now consider myself a React specialist.
        </p>
        <p>
          I&apos;ve had the pleasure of working as a front-end developer with numerous
          agencies and companies. I can&apos;t publicly disclose much of my best work,
          but if you&apos;d like some examples I can point you in the right direction.
        </p>

        <ContentFeature>
          <p>
            If you are interested in hiring me for a project, please get in touch:
          </p>
          <div className="button-group">
            <EmailButton alt />
            <LinkedinButton alt />
            <TwitterButton alt />
          </div>
        </ContentFeature>

        <h2>My key skills &amp; interests</h2>
        <p>
          I love learning and am fascinated by how quickly the JavaScript
          ecosystem is developing. Below are some of the technologies I have been
          using recently.
        </p>

        <div className={styles.skillsItem}>
          <Image src="/images/icons/react-icon.svg" alt="React" width={80} height={80} />
          <h3>React JS</h3>
          <p>
            React is an open-source javascript library for developing front-end
            user interfaces. It&apos;s become immensely popular, and powers some of the
            biggest modern web applications such as Facebook, Instagram and
            Airbnb. It&apos;s had a huge impact on how I go about building websites,
            and certainly improved my JavaScript skills no end. I&apos;ve used React in
            several large-scale projects, and a few smaller side projects. I keep
            a close eye on the latest React library additions such as Context,
            Hooks and Suspense, as well as popular tools like the Next JS
            framework, and Gatsby static-site generator.
          </p>
        </div>

        <div className={styles.skillsItem}>
          <Image src="/images/icons/redux-icon.svg" alt="Redux" width={80} height={80} />
          <h3>Redux</h3>
          <p>
            Redux is a state-management tool for JavaScript applications, and is
            very commonly used alongside React. I used Redux extensively whilst
            developing a complex signup process for an energy management company.
            It is particularly useful for managing data from multiple sources, and
            also in apps that handle a lot of user interaction.
          </p>
        </div>

        <div className={styles.skillsItem}>
          <Image src="/images/icons/graphql-icon.svg" alt="GraphQL" width={80} height={80} />
          <h3>GraphQL</h3>
          <p>
            GraphQL is a language for querying an API. It gives a lot of
            flexibility and efficiency when querying data from a database. I&apos;ve
            used it on a couple of side projects with React and either Apollo
            Client or Gatsby on the frontend. I&apos;m particularly excited about the
            future of GraphQL and hope to be using it in some larger projects very
            soon.
          </p>
        </div>

        <div className={styles.skillsItem}>
          <Image src="/images/icons/node-icon.svg" alt="Node.js" width={80} height={80} />
          <h3>Node.js</h3>
          <p>
            Node.js allows JavaScript to be run server-side. Express is a commonly
            used framework for Node.js and I&apos;ve used it to build both RESTful and
            GraphQL APIs. I&apos;ve been working hard recently on this side of my
            skillset, which would take me into full-stack developer territory.
          </p>
        </div>

        <div className={styles.skillsItem}>
          <Image src="/images/icons/uxui-icon.svg" alt="UX/UI" width={80} height={80} />
          <h3>UX / UI design</h3>
          <p>
            Coming from a family of architects, well-considered user experience
            and design has always been an interest of mine. I&apos;m equally happy
            crafting user interfaces from scratch or working with designers. I
            strongly believe that the best results come from a close collaboration
            between design and development.
          </p>
        </div>
      </div>
    </div>
  );
}
