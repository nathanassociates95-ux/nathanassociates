import Link from "next/link";
import { Fragment } from "react";

const Breadcrumb = ({ current, items = [{ label: "Home", href: "/" }], className }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`inline-flex flex-wrap items-center gap-2 text-sm ${className || ""}`}
    >
      {items.map((item, idx) => (
        <Fragment key={idx}>
          <Link href={item.href} className="text-slate-400 transition-colors hover:text-white">
            {item.label}
          </Link>
          <span className="text-slate-500" aria-hidden="true">
            /
          </span>
        </Fragment>
      ))}
      <span className="font-medium text-white/90">{current}</span>
    </nav>
  );
};

export default Breadcrumb;