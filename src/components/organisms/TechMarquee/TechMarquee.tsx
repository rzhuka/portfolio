/** Infinite horizontal ticker. The list is rendered twice for a seamless loop. */
export function TechMarquee({ items }: { items: readonly string[] }) {
  const unique = [...new Set(items)];

  return (
    <div className="marquee" aria-label="Technologies">
      <div className="marquee__track">
        {[0, 1].map((copy) =>
          unique.map((item) => (
            <span key={`${copy}-${item}`} className="marquee__item" aria-hidden={copy === 1}>
              {item}
            </span>
          )),
        )}
      </div>
    </div>
  );
}
