export function Footer({ name }: { name: string }) {
  return <footer className="site-footer">© {new Date().getFullYear()} {name}</footer>;
}
