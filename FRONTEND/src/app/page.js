import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/categoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/menu";


export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>

        <CardList />
        <Menu />
      </div>
    </div>
  );
}
