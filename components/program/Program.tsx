import Link from "next/link";
import React from "react";
import { Event } from "../../utils/types";
import styles from "./Program.module.css";

interface ProgramProps {
  events: Event[];
}

export const Program = ({ events }: ProgramProps) => (
  <div className={styles.main}>
    {events.map(({ id, name, description, time }) => (
      <li key={id}>
        <Link href={`/events/${id}`}>{name}</Link>
        <br />
        {description}
        <br />
        {time}
      </li>
    ))}
  </div>
);
