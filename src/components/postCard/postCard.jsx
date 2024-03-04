import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

function PostCard() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src='/about.png' alt='' fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est facilis voluptatibus dicta ipsum natus placeat reiciendis veniam nesciunt ducimus, dolorem vero! Quidem pariatur fugit in at. Quibusdam, laboriosam! Rem, iusto!</p>
        <Link className={styles.link} href='/blog/post'>Read More</Link>
      </div>

    </div>
  )
}

export default PostCard