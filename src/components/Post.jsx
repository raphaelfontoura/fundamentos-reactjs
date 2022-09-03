import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src='https://github.com/raphaelfontoura.png' />
          <div className={styles.authorInfo}>
            <strong>Raphael Fontoura</strong>
            <span>Fullstack developer</span>
          </div>
        </div>

        <time title="01 de setembro às 18:00" dateTime="2022-09-01 18:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href='#'>👉 jane.design/doctorcare</a></p>

        <p>
          <a href='#'>#novoprojeto</a>{' '}
            <a href='#'>#nlw </a>{' '}
            <a href='#'>#rocketseat</a>
        </p>
      </div>
    </article>
  )
}