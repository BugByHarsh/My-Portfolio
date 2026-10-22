export default function SectionHeading({index,title,accent,description}) {
 return <div className="section-heading reveal"><span className="section-index">{index}</span><h2>{title}<br/><span className="gradient-text">{accent}</span></h2><p>{description}</p></div>;
}
