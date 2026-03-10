import LogoLoop from './LogoLoop';
import {
  SiReact, SiJavascript, SiHtml5, SiVite, SiNodedotjs, SiBootstrap, SiGit, SiGithub,
  SiPython, SiFlask, SiMysql, SiPostgresql, SiLinux, SiKalilinux, SiWireshark
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';

const makeLabeled = (logos) =>
  logos.map(item => ({
    ...item,
    node: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '42px', color: 'var(--logo-color)', opacity: 0.8, display: 'flex' }}>
          {item.node}
        </span>
        <span style={{
          fontFamily: "'Space Mono', monospace", fontSize: '10px',
          color: 'var(--logo-label)', letterSpacing: '1.5px', whiteSpace: 'nowrap',
        }}>
          {item.title}
        </span>
      </div>
    ),
  }));

const row1Items = [
  { node: <SiReact />,      title: 'React' },
  { node: <SiJavascript />, title: 'JavaScript' },
  { node: <SiHtml5 />,      title: 'HTML5' },
  { node: <FaCss3Alt />,    title: 'CSS3' },
  { node: <SiVite />,       title: 'Vite' },
  { node: <SiNodedotjs />,  title: 'Node.js' },
  { node: <SiBootstrap />,  title: 'Bootstrap' },
  { node: <SiGit />,        title: 'Git' },
  { node: <SiGithub />,     title: 'GitHub' },
];

const row2Items = [
  { node: <SiPython />,     title: 'Python' },
  { node: <SiFlask />,      title: 'Flask' },
  { node: <SiMysql />,      title: 'MySQL' },
  { node: <SiPostgresql />, title: 'PostgreSQL' },
  { node: <SiLinux />,      title: 'Linux' },
  { node: <SiKalilinux />,  title: 'Kali Linux' },
  { node: <SiWireshark />,  title: 'Wireshark' },
];

const Skills = ({ isDark }) => {
  const fadeColor = isDark ? "#000000" : "#efefef";
  const row1 = makeLabeled(row1Items);
  const row2 = makeLabeled(row2Items);

  return (
    <section id="skills" style={{
      minHeight: '60vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', padding: '120px 0',
      position: 'relative', zIndex: 1, flexDirection: 'column',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px', padding: '0 24px' }}>
        <div style={{
          fontFamily: "'Space Mono', monospace", fontSize: '10px',
          color: 'var(--fg-dim)', letterSpacing: '3px', marginBottom: '10px',
        }}>
          SKILLS
        </div>
        <h2 style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700,
          color: 'var(--fg)', letterSpacing: '-0.5px', margin: 0,
        }}>
          Tech Stack
        </h2>
      </div>

      {/* Row 1 — Frontend & Tooling */}
      <div style={{ width: '100%', marginBottom: '48px' }}>
        <LogoLoop
          logos={row1}
          speed={80}
          direction="left"
          logoHeight={70}
          gap={56}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor={fadeColor}
          ariaLabel="Frontend and tooling technologies"
        />
      </div>

      {/* Row 2 — Backend & Security */}
      <div style={{ width: '100%' }}>
        <LogoLoop
          logos={row2}
          speed={80}
          direction="right"
          logoHeight={70}
          gap={56}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor={fadeColor}
          ariaLabel="Backend and security technologies"
        />
      </div>
    </section>
  );
};

export default Skills;
