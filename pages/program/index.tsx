import { Description } from "../../components/description/Description";
import {config} from "../../utils/config";

interface Event {
  id: string;
  name: string;
  description: string;
  time: string;
}

interface ProgramProps {
  events: Event[];
}

export async function getStaticProps() {
  const response = await fetch(`${config.apiPath}/events.json`);
  return { props: { events: await response.json() } };
}

export default function Program({events}:ProgramProps) {
  return (
    <Description>
      {events.map(({ id, name, description, time }) => (
        <li key={id}>
          {name}
          <br />
          {description}
          <br />
          {time}
        </li>
      ))}
    </Description>
  );
}
