import { ArtCard, PageHero } from "../components";
import { posts } from "../data";
export default function BlogPage(){return <main><PageHero eyebrow="Blog" title="Thoughts, learnings, and ideas.">Short essays on AI, productivity, projects, research, and the discipline of learning.</PageHero><section className="cardGrid three pagePad">{posts.map(([title,tag,date],i)=><article className="postCard panel" key={title}><ArtCard type={`blog${i}`}/><h2>{title}</h2><p>{tag}</p><time>{date}</time></article>)}</section></main>}
