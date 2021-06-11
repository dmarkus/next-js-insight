import React from "react";
import { Description } from "../../components/description/Description";
import { config } from "../../utils/config";
import { Event } from "../../utils/types";

interface ProgramProps {
  events: Event[];
}

export async function getStaticProps() {
  const response = await fetch(`${config.apiPath}/events.json`);
  return { props: { events: await response.json() } };
}

export default function Program({ events }: ProgramProps) {
  return (
    <Description>
      <Program events={events} />
    </Description>
  );
}
