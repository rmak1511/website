import { machines, siteContent, steps } from "../data/siteContent";
import { Icon } from "./Icons";
import { Link } from "./Link";

// Two-tone title: bold white lead, light grey continuation.
export function SplitTitle({ title, accent, as: Tag = "h2", className = "" }) {
  return (
    <Tag className={`split-title ${className}`}>
      <span className="split-title-lead">{title}</span>
      {accent ? <span className="split-title-accent"> {accent}</span> : null}
    </Tag>
  );
}

export function SectionHeading({ eyebrow, title, accent }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <SplitTitle title={title} accent={accent} />
    </div>
  );
}

// Page header for inner pages — eyebrow, two-tone display title, lede.
export function PageHeader({ page }) {
  return (
    <section className="page-header container">
      <p className="eyebrow">{page.eyebrow}</p>
      <SplitTitle as="h1" title={page.title} accent={page.titleAccent} className="display" />
      {page.intro ? <p className="lede">{page.intro}</p> : null}
    </section>
  );
}

export function BulletList({ items }) {
  return (
    <ul className="bullet-list">
      {items.map((item) => (
        <li key={item.lead}>
          <strong>{item.lead}</strong> — {item.body}
        </li>
      ))}
    </ul>
  );
}

// Machine card. `detailed` adds the full bullet list and a quote button
// (Rentals page); the compact version links through (Home).
export function MachineCard({ machine, detailed = false }) {
  return (
    <article className={`machine-card ${detailed ? "is-detailed" : ""}`} id={machine.id}>
      <div className="machine-card-media">
        <img
          src={`${import.meta.env.BASE_URL}${machine.image}`}
          alt={machine.name}
          loading="lazy"
        />
      </div>
      <div className="machine-card-body">
        <h3 className="machine-card-name">{machine.name}</h3>
        <p className="machine-card-tagline">{machine.tagline}</p>
        <p className="machine-card-context">{machine.context}</p>
        <p className="machine-card-best">
          <span>Best for</span> {machine.bestFor}
        </p>
        {detailed ? <BulletList items={machine.bullets} /> : null}
        <div className="machine-card-actions">
          {detailed ? (
            <a className="button" href={siteContent.quoteHref}>
              Request a quote
            </a>
          ) : (
            <Link className="text-link" href={`/rentals`}>
              Learn more <Icon name="arrow" className="icon icon-inline" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export function MachineGrid({ detailed = false }) {
  return (
    <div className="machine-grid">
      {machines.map((machine) => (
        <MachineCard machine={machine} detailed={detailed} key={machine.id} />
      ))}
    </div>
  );
}

export function StepsRow() {
  return (
    <ol className="steps">
      {steps.map((step, i) => (
        <li className="step" key={step.title}>
          <span className="step-number">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="step-title">{step.title}</h3>
          <p className="step-body">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

// Closing call-to-action band on every page.
export function CtaBand() {
  const { cta, quoteHref, contactEmail } = siteContent;
  return (
    <section className="cta-band">
      <div className="container cta-band-inner">
        <div>
          <h2 className="cta-band-title">{cta.title}</h2>
          <p className="cta-band-subtitle">{cta.subtitle}</p>
        </div>
        <div className="cta-band-actions">
          <a className="button button-large" href={quoteHref}>
            {cta.label}
          </a>
          <a className="cta-band-email" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
        </div>
      </div>
    </section>
  );
}
