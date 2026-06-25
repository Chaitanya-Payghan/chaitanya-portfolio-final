import { PageHero } from "../components";
import { roadmap } from "../data";
export default function RoadmapPage(){return <main><PageHero eyebrow="Roadmap" title="The path to becoming an AI Research Engineer.">A long-term academic and technical route from strong foundations to world-class AI contribution.</PageHero><section className="panel full"><div className="roadLine expanded">{roadmap.map(([title, body, year])=><article key={title}><span>{year}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section></main>}
