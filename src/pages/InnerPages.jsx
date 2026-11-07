import { Icon } from "../components/Icons";
import {
  BulletList,
  MachineGrid,
  PageHeader,
  SectionHeading,
  StepsRow,
} from "../components/Sections";

export function RentalsPage({ page }) {
  return (
    <>
      <PageHeader page={page} />
      <section className="section section-tight container">
        <MachineGrid detailed />
      </section>
    </>
  );
}

export function ServicesPage({ page }) {
  return (
    <>
      <PageHeader page={page} />
      <section className="section section-tight container">
        <div className="service-grid">
          {page.items.map((item) => (
            <article className="service-card" key={item.name}>
              <div className="service-card-head">
                <Icon name={item.icon} className="icon service-card-icon" />
                <span className="tag">{item.tag}</span>
              </div>
              <h2 className="service-card-title">{item.name}</h2>
              <p className="service-card-context">{item.context}</p>
              <BulletList items={item.bullets} />
            </article>
          ))}
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          eyebrow={page.stepsSection.eyebrow}
          title={page.stepsSection.title}
          accent={page.stepsSection.titleAccent}
        />
        <StepsRow />
      </section>
    </>
  );
}

export function AboutPage({ page }) {
  const { audience, location } = page;
  return (
    <>
      <PageHeader page={page} />
      <section className="section section-tight container about-grid">
        <div className="panel">
          <h2 className="panel-title">{audience.title}</h2>
          <ul className="audience-list">
            {audience.items.map((item) => (
              <li key={item.lead}>
                <strong>{item.lead}</strong>
                <span>{item.body}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="panel panel-location">
          <h2 className="panel-title">{location.title}</h2>
          <p className="location-place">{location.place}</p>
          <p className="panel-body">{location.body}</p>
        </div>
      </section>
    </>
  );
}
