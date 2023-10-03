"use client";
import { useState } from "react";
import SearchIcon from "../../public/search.svg";
import CloseIcon from "../../public/close.svg";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  placeholder: string;
  onChange: (text: string) => void;
}

const SearchBar = (props: SearchBarProps) => {
  const [text, setText] = useState("");

  const clearInput = () => {
    setText("");
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setText(target.value);
    props.onChange(target.value);
  };

  return (
    <div className={styles.container}>
      <SearchIcon className={styles["search-icon"]} />
      <input
        type="search"
        placeholder={props.placeholder}
        className={styles.input}
        value={text}
        onChange={handleChange}
      />
      <button className={styles["clear-button"]} onClick={clearInput}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default SearchBar;
