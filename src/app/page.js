'use client';
import Button from "@/components/Button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
        <Button label="Click Me" onClick={() => alert('You just clicked a button!')} />
    </div>
  );
}
