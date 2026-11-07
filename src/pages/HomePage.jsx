import { siteContent } from "../data/siteContent";
import { Icon } from "../components/Icons";
import { Link } from "../components/Link";
import { MachineGrid, SectionHeading, StepsRow } from "../components/Sections";

export function HomePage({ page }) {
  const { hero, features, machinesSection, stepsSection, statement } = page;

  return (
    <>
      {/* Hero — headline left over the product photograph, which bleeds
          to the right edge and fades into the black. */}
      <section className="home-hero">
        <div className="home-hero-media" aria-hidden="true">
          <img
            src={`${import.meta.env.BASE_URL}${hero.image.src}`}
            alt=""
            width={hero.image.width}
            height={hero.image.height}
          />
        </div>
        <div className="container home-hero-inner">
          <span className="hero-rule" aria-hidden="true" />
          <h1 className="hero-title">
            <span className="hero-title-lead">{hero.headline}</span>
            <span className="hero-title-accent">{hero.subhead}</span>
          </h1>
          <p className="hero-body">{hero.body}</p>
          <div className="hero-actions">
            <a className="button button-large" href={siteContent.quoteHref}>
              Request a quote
            </a>
            <Link className="text-link" href={hero.secondary.href}>
              {hero.secondary.label} <Icon name="arrow" className="icon icon-inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature strip — three columns with hairline dividers. */}
      <section className="container">
        <ul className="feature-strip">
          {features.map((feature) => (
            <li className="feature" key={feature.title}>
              <Icon name={feature.icon} className="icon feature-icon" />
              <h2 className="feature-title">{feature.title}</h2>
              <p className="feature-body">{feature.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section container">
        <SectionHeading
          eyebrow={machinesSection.eyebrow}
          title={machinesSection.title}
          accent={machinesSection.titleAccent}
        />
        <MachineGrid />
      </section>

      <section className="section container">
        <SectionHeading
          eyebrow={stepsSection.eyebrow}
          title={stepsSection.title}
          accent={stepsSection.titleAccent}
        />
        <StepsRow />
      </section>

      <section className="section container">
        <figure className="statement">
          <p className="eyebrow">{statement.eyebrow}</p>
          <blockquote className="statement-quote">{statement.quote}</blockquote>
          <figcaption className="statement-body">
            {statement.body}{" "}
            <Link className="text-link" href={statement.link.href}>
              {statement.link.label} <Icon name="arrow" className="icon icon-inline" />
            </Link>
          </figcaption>
        </figure>
      </section>
    </>
  );
}
