import React from "react"
import { Link } from "gatsby"
import styles from "./pageplus.module.css"

import SEO from "../components/seo"

console.log(styles)
const pageplus = props => (
    <pageplus>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `euphorika`, `communication`]} />
    {/*---------- Main Header ----------*/}
    <div className={styles.headerBox}>
      <h1 className={styles.headerMain}>Plus</h1>
    </div>

    {/*---------- Subtitle ----------*/}
    <section>
      <h2 className={styles.subheader}>3D, Text & Fotoshooting</h2>
      {/*---------- Description ----------*/}
      <p className={styles.description}>Guter und vor allem individeueller Content ist enorm wichtig für einegelungene Markendarstellung. Daher arbeiten wir im Textbereich mit erfahrenen Werbetextern und Lektoren zusammen. Bei der Produktion von Bild & Videomaterial sowie auch 3D-Animationen greifen wir auf erstklassige Spezialisten in unserem Team und Netzwerk zurück.</p>
      
      {/*---------- Contact Link ----------*/}
      <Link to="#" className={styles.contactLink}> > anfragen</Link>
    </section>

    <section>
      {/*---------- Subtitle ----------*/}
      <h2 className={styles.subheader}>Konzepte & Workshops</h2>
      {/*---------- Description ----------*/}
      <p className={styles.description}>Sie stehen noch ganz am Anfang mit Ihrer Geschäftsidee, Ihrem Start-Up oder dem Relaunch Ihres Unternehmens und wissen noch gar nicht, wohin die Reise konkret gehen soll? Gemeinsam arbeiten wir ein Konzept aus und beraten hinsichtlich strategischer Ausrichtung und technologischen Lösungen.</p>
      {/*---------- Contact Link ----------*/}
      <Link to="#" className={styles.contactLink}> > anfragen</Link>
    </section>


    <section className={styles.section}>
      {/*---------- Subtitle ----------*/}
      <h2 className={styles.subheader}>Software- & System-Schulungen</h2>
      {/*---------- Description ----------*/}
      <p className={styles.description}>Sie möchten sich oder Ihre Mitarbeiter fit für's Web machen? Sie wollen die Pflege Ihrer Webseite und dann das Einstellen neuer Produkte in Ihren Webshop in Zukunft selber übernehmen? Wir zeigen Ihnen wie das geht in Rahmen individueller Schulungen. Von WordPress und Shopware über Google Analytics bis Photoshop.</p>
      {/*---------- Contact Link ----------*/}
      <Link to="#" className={styles.contactLink}> > anfragen</Link>
    </section>

  </pageplus>
)

export default pageplus