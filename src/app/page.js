import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "./components/Navbar";
import { Categories } from "./components/Categories";
import { Product } from "./components/Product";
import { SimilarArticles } from "./components/SimilarArticles";
import { MoreArticles } from "./components/MoreArticles";
import { Poster } from "./components/Poster";

export default function Home() {
  return (
    <>
      <div className="navbar_categories">
        <Navbar />
        <Categories />
        <Product />
        <SimilarArticles />
        <MoreArticles />
        <Poster />
      </div>
    </>
  );
}
