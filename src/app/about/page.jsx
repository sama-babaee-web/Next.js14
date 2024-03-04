import Image from "next/image"
import styles from "./about.module.css"


function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>
          About Agency
        </h2>
        <h1 className={styles.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellendus dolor dignissimos laboriosam, aliquam labore, soluta fuga dolores rerum enim esse voluptatem distinctio nesciunt omnis tempora praesentium nemo blanditiis perferendis!
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>your experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>your experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>your experience</p>
          </div>
        </div>

      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png"
          alt="pic" fill
          className={styles.img} />
      </div>

    </div>
  )
}

export default AboutPage  