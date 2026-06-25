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
