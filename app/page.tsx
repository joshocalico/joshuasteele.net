
import styles from './page.module.css'

import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

export default function Home() {
  return (
    <>
    
    <main className={styles.landing}>
        <h1 className={[styles.ko, styles.heading].join(" ")}>
          {"The Scratchpad"}
          <hr />
        </h1>
        <div>
        <p className={[styles.purp, styles.caption].join(" ")} style={{marginBottom: "10px"}}>
          {"Joshua Steele"}<br />
          <strong>Software Engineer @ Canva</strong><br />
        </p>
        <div className={styles.row} style={{
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "100%",
        }}>
          <a href='https://linkedin.com/in/joshuasteele0'>
            <FaLinkedin />
          </a>
          <a href='https://github.com/joshocalico'>
            <FaGithub />
          </a>
          <a href='https://x.com/joshocalico'>
            <FaXTwitter />
          </a>
          <a href='mailto:hello@joshuasteele.net'>
            <FaEnvelope />
          </a>
        </div>
        </div>
        <p className={styles.lead}>
          {"Josh is me, this is my place, and tales of my impact outside of it."}
        </p>
        
        <p>
          &copy; 2024 - Joshua Steele
        </p>
    </main>

    <p style={{
      textAlign: "center",
      fontSize: "0.8em",
      opacity: 0.5,
    }}>
          Still a WIP. More to come. 🚀
    </p>
    </>
  )
}
