import * as React from "react";
import styles from "./Description.module.css";

export const Description: React.FC = ({ children }) => (
  <p className={styles.container}>{children}</p>
);
