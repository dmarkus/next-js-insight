import { config } from "../../utils/config";
import { Event } from "../../utils/types";

interface EventProps {
  event: Event;
}

export async function getStaticPaths() {
  const response = await fetch(`${config.apiPath}/events.json`);
  const events = await response.json();
  return events.map(({ id }) => {
    params: {
      id;
    }
  });
}

export async function getStaticProps({ params }) {
  const response = await fetch(`${config.apiPath}/events.json`);
  const events = await response.json();
  return {
    props: {
      event: events.find(({ id }) => id === params.id),
    },
  };
}

export default function EventPage({ event }: EventProps) {
  return <>{event}</>;
}
