import { ArtCard, PageHero } from "../components";
import { projects } from "../data";
export default function ProjectsPage(){return <main><PageHero eyebrow="Projects" title="Systems, products, and research ideas.">A growing collection of builds that demonstrate initiative, technical curiosity, and future scope.</PageHero><section className="cardGrid four pagePad">{projects.map(([name,desc,stack,status],i)=><article className="projectCard panel" key={name}><ArtCard type={`thumb${i}`}/><h2>{name}</h2><p>{desc}</p><small>{stack}</small><em>{status}</em></article>)}</section></main>}
