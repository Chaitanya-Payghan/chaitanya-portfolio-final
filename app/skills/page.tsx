import { PageHero } from "../components";
import { skills } from "../data";
export default function SkillsPage(){return <main><PageHero eyebrow="Skills" title="Technical strengths under active development.">The tools and disciplines Chaitanya is learning, practicing, and strengthening for the AI research path.</PageHero><section className="panel full"><div className="skillGrid">{skills.map(([skill,level])=><div key={skill}><b>{skill}</b><span>{level}%</span><progress value={level} max="100"/></div>)}</div></section></main>}
