"use client";
import { useState } from "react";
import UserIcon from "../../../../../public/user.svg";
import MailIcon from "../../../../../public/mail.svg";
import PasswordIcon from "../../../../../public/password.svg";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
import styles from "./RegisterForm.module.css";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const [form, setForm] = useState<RegisterForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setForm((form) => {
      form[target.name as keyof RegisterForm] = target.value;

      return { ...form };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="name"
        placeholder="Nome"
        className={styles.input}
        value={form.name}
        onChange={handleChange}
      >
        <UserIcon />
      </Input>
      <Input
        type="email"
        name="email"
        placeholder="E-mail"
        className={styles.input}
        value={form.email}
        onChange={handleChange}
      >
        <MailIcon />
      </Input>
      <Input
        type="password"
        name="password"
        placeholder="Senha"
        className={styles.input}
        value={form.password}
        onChange={handleChange}
      >
        <PasswordIcon />
      </Input>
      <Input
        type="password"
        name="confirmPassword"
        placeholder="Confirmar senha"
        className={styles.input}
        value={form.confirmPassword}
        onChange={handleChange}
      >
        <PasswordIcon />
      </Input>
      <Button fullWidth className={styles.button}>
        Criar conta
      </Button>
      <div className={styles["registered"]}>
        <Link href={"/account/login"} className={styles.link}>
          Já sou cadastrado
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
