import React from 'react';

interface SchemaMarkupProps {
  schema: object | object[];
}

/**
 * Component to inject JSON-LD structured data into the page
 * Can accept a single schema object or an array of schemas
 */
export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  // If array, wrap in @graph structure
  const schemaData = Array.isArray(schema)
    ? { "@context": "https://schema.org", "@graph": schema.map(s => {
        // Remove @context from individual items if using @graph
        const { "@context": _, ...rest } = s as { "@context"?: string };
        return rest;
      })}
    : schema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
