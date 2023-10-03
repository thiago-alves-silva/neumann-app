"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MailIcon from "../../../../../public/mail.svg";
import PasswordIcon from "../../../../../public/password.svg";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import displayNotification from "@/utils/displayNotification";
import styles from "./LoginForm.module.css";

interface LoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [form, setForm] = useState<LoginForm>({ email: "", password: "" });
  const router = useRouter();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (form.email === "fiap@fiap.com" && form.password === "admin") {
      router.push("/app");
    } else {
      displayNotification({
        text: "E-mail ou senha incorretos",
        type: "error",
      });
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setForm((form) => {
      form[target.name as keyof LoginForm] = target.value;

      return { ...form };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="E-mail"
        name="email"
        className={styles.input}
        value={form.email}
        onChange={handleChange}
      >
        <MailIcon />
      </Input>
      <Input
        type="password"
        placeholder="Senha"
        name="password"
        className={styles.input}
        value={form.password}
        onChange={handleChange}
      >
        <PasswordIcon />
      </Input>
      <Button fullWidth className={styles.button}>
        Entrar
      </Button>
      <div className={styles["not-registered"]}>
        <Link href={"/account/register"} className={styles.link}>
          Não sou cadastrado
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
