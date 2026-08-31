/**
 * Inline JSON-LD emitter — the static-export replacement for applySeo's
 * `data-seo-jsonld` script injection. Rendered server-side, so every schema
 * ships inside the prerendered HTML (crawlers never execute JS).
 */
export default function JsonLd({ schemas }: { schemas: Record<string, unknown>[] }) {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
