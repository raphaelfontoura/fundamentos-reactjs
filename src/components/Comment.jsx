import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src='https://github.com/raphaelfontoura.png' />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Raphael Fontoura</strong>
              <time title='03 de Setembro às 08:10h' dateTime='2022-09-03 08:10:00'>Cerca de 1h atrás</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>
          <p>Comentário</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}