# Static generation and server side rendering
Server side rendering used to be painful in configuration. With next.js it works out of the box.
Next.js ofer two strategies:
 * static generation - generates html at build time
 * server side rendering - generates html on each request
Both on them can be mixed withing single application.

Static generation is possible also when there's a need to fetch data from external sources.
The expected data is once fetched during build time.

Static generation is now as easy as using function `getStaticProps`. That function runs once at build time, inside that function we can fetch all data and send it to props of the page.

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

Server side rendering at every request time is possible with method `getServerSideProps`.

#Statically generated pages with dynamic routers
If our side have number of pages which are generated based on external data (for example database),
it's possible to implement `getStaticPathes`.

In our example every event contain their own details page. Pages catalogue contain file `events/[id].tsx`.
Phrases within `[]` are treated as parameters which will be supplied by `getStaticPaths.

To render page with specific `id` is used function `getStaticProps` in the same way as was described in chapter about [static generation](#static-generation-and-server-side-rendering).

```tsx
export async function getStaticPaths() {
  const response = await fetch(`${config.apiPath}/events.json`);
  const events = await response.json();

  return {
    paths: events.map(({ id }) => ({
      params: {
        id,
      },
    })),
    fallback: false,
  };
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
  return <>{event.description}</>;
}
```

Function `getStaticPaths` returns...