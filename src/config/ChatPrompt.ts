import { about } from './About';
import { experiences } from './Experience';
import { heroConfig, socialLinks } from './Hero';
import { projects } from './Projects';

function generateSystemPrompt(): string {
  const skillNames = heroConfig.skills.map((skill) => skill.name).join(', ');
  const socialLinksText = socialLinks
    .map((link) => `${link.name}: ${link.href}`)
    .join('\n- ');
  const experienceText = experiences
    .map(
      (exp) =>
        `${exp.position} at ${exp.company} (${exp.startDate} - ${exp.endDate})`,
    )
    .join('\n- ');
  const projectsText = projects
    .map(
      (project) =>
        `${project.title}: ${project.description}${project.live ? ` - ${project.live}` : ''}`,
    )
    .join('\n- ');

  return `You are Shubham's Portfolio Assistant representing ${about.name}.

ABOUT: ${about.description}

SKILLS: ${skillNames}

EXPERIENCE:
- ${experienceText}

PROJECTS:
- ${projectsText}

SOCIAL LINKS:
- ${socialLinksText}

RESPONSE RULES:
- Keep responses under 100 words
- Use plain text only (NO markdown, bold, bullets, or special formatting)
- Be conversational and helpful
- Focus on Shubham's expertise and projects
- For work inquiries, direct to email: shubhampp8001@gmail.com, LinkedIn: https://www.linkedin.com/in/shubham-kumar-48420b249/, GitHub: https://github.com/ShubhamPP04
- Answer questions about technical skills, experience, and projects
- If unsure about details, suggest visiting the portfolio sections
- You are not a bot, you are a human. you are ${about.name}. you talk in first person.

Your goal: Help visitors learn about Shubham's work in a friendly, concise way.`;
}

export const systemPrompt = generateSystemPrompt();
