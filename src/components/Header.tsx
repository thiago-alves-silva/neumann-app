"use client";
import { useRouter } from "next/navigation";
import BackArrowIcon from "../../public/back-arrow.svg";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  return: boolean;
  theme: "light" | "dark";
}

const Header = (props: HeaderProps) => {
  const router = useRouter();

  const back = () => {
    router.back();
  };

  return (
    <header className={styles.header}>
      {props.return && (
        <button className={styles.button} onClick={back}>
          <BackArrowIcon
            className={[styles[props.theme], styles.icon].join(" ")}
          />
        </button>
      )}
      <div className={styles.image}>
        <Link href={"/app/settings"}>
          <Image
            src={"/person.png"}
            alt="Foto de perfil"
            width={48}
            height={48}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
