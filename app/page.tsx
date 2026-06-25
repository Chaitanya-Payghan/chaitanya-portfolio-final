import Link from "next/link";
import { ArtCard } from "./components";
import { posts, projects, roadmap, skills, values } from "./data";

const stats = [
  ["04", "Flagship project directions"],
  ["08", "Core skills in progress"],
  ["05", "Long-term roadmap milestones"],
  ["∞", "Curiosity for research"]
] as const;

const researchAreas = ["AI Agents", "Large Language Models", "Human-centered AI", "Automation Systems", "Deep Learning", "AI Safety"];

export default function Home() {
  return (
    <main className="gridShell landingV2">
      <section className="hero panel wide commandHero">
        <div className="constellation" />
        <div className="heroContent">
          <p className="hello">Personal AI Headquarters</p>
          <h1>CHAITANYA</h1>
          <h2>Future Artificial Intelligence Research Engineer <span>(AIRE)</span></h2>
          <p className="path">A cinematic portfolio for projects, learning, research ambition, and the mission to build intelligent systems that create meaningful impact.</p>
          <div className="actions"><Link href="/roadmap">Explore My Journey</Link><Link href="/projects">View Projects</Link></div>
        </div>
        <div className="portalMan" aria-label="Silhouette entering a glowing AI portal" />
      </section>

      <section className="panel missionBrief">
        <p className="eyebrow">Signal</p>
        <h2>Ambition shaped into discipline.</h2>
        <p>I am building the foundation to move from student and builder to AI researcher: learning deeply, shipping projects, and documenting the journey with clarity.</p>
        <div className="statGrid">{stats.map(([number, label]) => <article key={label}><strong>{number}</strong><span>{label}</span></article>)}</div>
      </section>

      <section className="panel aboutPreview"><ArtCard label="AI" /><div><p className="eyebrow">About Me</p><h2>Curious Mind. Relentless Learner. Future <span>Builder.</span></h2><p>I’m Chaitanya, an ambitious learner on a mission to become an Artificial Intelligence Research Engineer. I love solving complex problems, building futuristic systems, and turning ideas into impactful technologies.</p><div className="valueGrid">{values.map(v => <article key={v}>✦<b>{v.split(' ')[0]}</b><small>{v}</small></article>)}</div></div></section>

      <section className="panel researchPanel"><p className="eyebrow">Research Direction</p><h2>Learning toward systems that think, assist, and empower.</h2><p>These are the areas I want to explore through projects, experiments, papers, and future higher studies.</p><div className="chipCloud">{researchAreas.map(area => <span key={area}>{area}</span>)}</div></section>

      <section className="panel visionPanel"><p className="eyebrow">Vision & Mission</p><h2>My Why. My Purpose. My Future.</h2><div className="visionGrid"><p><b>Vision</b><br />To contribute to the advancement of artificial intelligence and build AI systems that enhance human potential.</p><div className="brainOrb">♙</div><p><b>Mission</b><br />To continuously learn, research, innovate, and build intelligent systems that solve real-world problems.</p></div></section>

      <section className="panel roadmapPanel"><p className="eyebrow">Roadmap to Become an AIRE</p><div className="roadLine">{roadmap.map(([title, body]) => <article key={title}><span>✦</span><h3>{title}</h3><p>{body}</p></article>)}</div><strong>One Step at a Time. Every Day. Consistently.</strong></section>

      <section className="panel projectsPanel"><div className="sectionTop"><div><p className="eyebrow">Featured Projects</p><h2>Things I’ve Built So Far</h2></div><Link href="/projects">View All Projects →</Link></div><div className="cardGrid four">{projects.map(([name, desc, stack, status], i) => <article className="projectCard" key={name}><ArtCard type={`thumb${i}`} /><h3>{name}</h3><p>{desc}</p><small>{stack}</small><em>{status}</em></article>)}</div></section>

      <section className="panel skillsPanel"><p className="eyebrow">My Skills</p><h2>Tools I Use. Skills I Master.</h2><div className="skillGrid">{skills.map(([skill, level]) => <div key={skill}><b>{skill}</b><span>{level}%</span><progress value={level} max="100" /></div>)}</div></section>

      <section className="panel journeyPanel"><p className="eyebrow">Timeline & Milestones</p><h2>My Journey So Far</h2><div className="milestones">{roadmap.slice(0,4).map(([title, body, year]) => <article key={title}><time>{year}</time><div><b>{title}</b><p>{body}</p></div></article>)}</div><div className="mountainScene" /></section>

      <section className="panel blogPanel"><div className="sectionTop"><div><p className="eyebrow">Blog & Insights</p><h2>Thoughts. Learnings. Ideas.</h2></div><Link href="/blog">View All Posts →</Link></div><div className="cardGrid three">{posts.map(([title, tag, date], i) => <article className="postCard" key={title}><ArtCard type={`blog${i}`} /><h3>{title}</h3><p>{tag}</p><time>{date}</time></article>)}</div></section>

      <section className="panel galleryPanel"><p className="eyebrow">Gallery</p><h2>Moments. Memories. Milestones.</h2><div className="galleryGrid">{Array.from({ length: 8 }, (_, i) => <ArtCard key={i} type={`gallery${i}`} label={`Scene ${i + 1}`} />)}</div><Link href="/gallery" className="centerBtn">View Full Gallery →</Link></section>

      <section className="panel contactPanel"><div><p className="eyebrow">Let’s Connect</p><h2>Have an Idea? Let’s Build Something Amazing.</h2><p>I’m always open to discussing new opportunities, collaborations, and impactful ideas.</p><ul><li>✉ chaitanya@example.com</li><li>⌖ India</li><li>⌁ LinkedIn · GitHub · X · Instagram</li></ul></div><form><input placeholder="Your Name" /><input placeholder="Your Email" /><input placeholder="Subject" /><textarea placeholder="Message" /><button type="button">Send Message ↗</button></form></section>
const roadmap = [
  ["JEE", "Build discipline, mathematical depth, and problem-solving speed."],
  ["B.Tech CSE", "Master computer science foundations while shipping real products."],
  ["MS AI/ML", "Dive into machine learning systems, research methods, and labs."],
  ["PhD AI/ML", "Contribute original ideas to intelligent systems and human impact."],
  ["AI Research Engineer", "Build world-class AI products, papers, and platforms."]
];

const projects = [
  ["J.A.R.V.I.S.", "Personal AI assistant for automation, learning, and productivity.", "AI · Python · Voice", "Prototype"],
  ["Lumaroz", "Premium product concept focused on elegant digital experiences.", "Web · Brand · UX", "Concept"],
  ["DreamBuild", "A builder platform for turning ambitious ideas into structured plans.", "Next.js · Systems", "Building"],
  ["Future Research", "Upcoming experiments in agents, learning systems, and AI safety.", "ML · Research", "Planned"]
];

const skills = ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Python", "Web Development", "Data Structures", "Problem Solving", "Research"];
const posts = ["Why I want to become an AI Research Engineer", "Building projects while preparing for the future", "How curiosity becomes technical discipline"];

export default function Home() {
  return (
    <main>
      <div className="loader" aria-hidden="true"><span>CHAITANYA</span></div>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#hero">C.</a>
        <div>
          {['About','Vision','Roadmap','Projects','Skills','Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </div>
      </nav>

      <section id="hero" className="hero section">
        <div className="orb orbOne" /><div className="orb orbTwo" />
        <p className="eyebrow">Personal Headquarters · AI Journey · Research Future</p>
        <h1>Chaitanya</h1>
        <h2>Future Artificial Intelligence Research Engineer (AIRE)</h2>
        <p className="heroCopy">Building intelligent systems, products, and technologies that create meaningful impact.</p>
        <div className="actions"><a href="#projects">Explore Projects</a><a href="#contact">Collaborate</a></div>
        <div className="portal" aria-label="Futuristic city and glowing portal concept artwork"><span /></div>
      </section>

      <section id="about" className="section split">
        <div className="portrait"><span>AI</span></div>
        <div><p className="eyebrow">About Me</p><h2>A disciplined learner designing a future in intelligence.</h2><p>I am Chaitanya, an ambitious builder pursuing the path toward artificial intelligence research. This portfolio is designed as a living record of my projects, values, learning journey, and long-term mission.</p>
          <div className="cards">{['Passionate','Dedicated','Focused','Driven'].map((v)=><article key={v}><h3>{v}</h3><p>Curiosity converted into consistent execution.</p></article>)}</div>
        </div>
      </section>

      <section id="vision" className="section vision"><p className="eyebrow">Vision & Mission</p><h2>Advance AI and build technology that positively impacts humanity.</h2><p>My mission is to continuously learn, research, innovate, and create intelligent systems with trust, usefulness, and beauty at their core.</p><div className="brain">Intelligence · Research · Impact · Products · Humanity</div></section>

      <section id="roadmap" className="section"><p className="eyebrow">Roadmap</p><h2>Path to becoming an AIRE</h2><div className="timeline">{roadmap.map(([title, body], i)=><article key={title}><b>{String(i+1).padStart(2,'0')}</b><h3>{title}</h3><p>{body}</p></article>)}</div></section>

      <section id="projects" className="section"><p className="eyebrow">Featured Projects</p><h2>Building capability through ambitious systems.</h2><div className="projectGrid">{projects.map(([name, desc, stack, status])=><article className="project" key={name}><div className="cover" /><span>{status}</span><h3>{name}</h3><p>{desc}</p><small>{stack}</small><button>View Scope</button></article>)}</div></section>

      <section id="skills" className="section"><p className="eyebrow">Skills & Technologies</p><h2>Technical strengths under active development.</h2><div className="skills">{skills.map((skill, i)=><div key={skill}><span>{skill}</span><progress value={58+i*5} max="100" /></div>)}</div></section>

      <section className="section split"><div><p className="eyebrow">Journey & Milestones</p><h2>Beginning → Learning → Projects → Growth → Research.</h2><p>An interactive story of consistency, experiments, achievements, and future higher studies.</p></div><div className="mountain" /></section>

      <section className="section"><p className="eyebrow">Blog & Insights</p><h2>Thoughts on AI, research, technology, and learning.</h2><div className="cards">{posts.map((post)=><article key={post}><h3>{post}</h3><p>5 min read · AI · Learning</p></article>)}</div></section>

      <section className="section"><p className="eyebrow">Gallery</p><h2>Cinematic milestones and future memories.</h2><div className="gallery">{Array.from({length:6},(_,i)=><div key={i}>Scene {i+1}</div>)}</div></section>

      <section id="contact" className="section contact"><p className="eyebrow">Contact</p><h2>Let’s build, research, or collaborate.</h2><form><input aria-label="Name" placeholder="Name" /><input aria-label="Email" placeholder="Email" /><input aria-label="Subject" placeholder="Subject" /><textarea aria-label="Message" placeholder="Message" /><button type="button">Send Message</button></form></section>

      <footer><b>Chaitanya</b><p>Building intelligent systems, products, and technologies that create meaningful impact.</p><a href="#hero">Back to top ↑</a></footer>
    </main>
  );
}
