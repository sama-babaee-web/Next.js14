import Image from 'next/image'
import styles from './singlePost.module.css'

function SinglePostPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/brand.png' alt='' fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} src='/brand.png' alt='' fill />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Athour</span>
            <span className={styles.detailValue}>sama</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eveniet.
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage