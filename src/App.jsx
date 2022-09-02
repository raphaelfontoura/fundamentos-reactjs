import './global.css';

import styles from './App.module.css';
import { Header } from './components/Header';
import { Post } from './Post';
import { Sidebar } from './components/Sidebar';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Raphael Fontoura"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum a expedita nisi reprehenderit praesentium vel aut nemo! Omnis, distinctio! Provident repellendus labore, eveniet mollitia quos eum harum quidem at."
          />
          <Post
            author="Sophia Fontoura"
            content="Um novo post aqui"
          />
        </main>
      </div>
    </div>
  )
}

