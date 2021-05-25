# Server side rendering
Server side rendering used to be painful in configuration. With next.js it works out of the box.
Next.js ofer two strategies:
 * static generation - generates html at build time
 * server side rendering - generates html on each request
Both on them can be mixed withing single application.

Static generation is possible also when there's a need to fetch data from external sources.
The expected data is once fetched during build time.

Server side rendering is now as easy as using function `getStaticProps`. That function runs once at build time, inside that function we can fetch all data and send it to props of the page.

```tsx
export async function getStaticProps() {
  const response = await fetch(`${config.apiPath}/events.json`);
  return { props: { events: await response.json() } };
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
```
