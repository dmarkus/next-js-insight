import { Description } from "../../components/description/Description";

interface Event {
  id: string;
  name: string;
  description: string;
  time: string;
}

interface ProgramProps {
  events: Event[];
}

export async function getProgram() {
  const events = await fetch("/api/program");
  return { props: { events } };
}

export default function Program({ events }: ProgramProps) {
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
