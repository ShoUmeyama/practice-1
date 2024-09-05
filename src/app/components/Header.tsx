import Link from 'next/link';
import styles from './Header.module.css'

export default function Home() {
    return (
        <header className={styles.header}>
            <h2 className={styles.headerTitle}>これがヘッターです</h2>
            <nav className={styles.nav}>
                <Link href="/">index</Link>
                <Link href="/about">about</Link>
            </nav>
        </header>
    );
}