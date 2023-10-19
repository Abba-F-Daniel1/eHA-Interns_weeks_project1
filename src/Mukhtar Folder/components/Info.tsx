type AboutProps = {
  title: string;
  profession: string;
  description: string[];
};

type SkillProps = {
  title: string;
  category: "soft" | "technical";
};

export const information: AboutProps = {
  title: "Mukhtar Mahmud",
  profession: "Software Engineer",
  description: [
    "I am a passionate and results-driven software engineer with a deep love for all things code",
    "and technology. With a strong foundation in computer science and years of hands-on experience, I have honed",
    "my skills to craft efficient, innovative, and scalable software solutions. My journey as a software engineer",
    "has taken me through a diverse range of projects and challenges, providing me with a unique perspective and a",
    "robust problem-solving mindset",
  ],
};

export const skills: SkillProps[] = [
  { title: "React & Typescript", category: "technical" },
  { title: "Python", category: "technical" },
  { title: "Java", category: "technical" },
  { title: "AI", category: "technical" },
  { title: "Detail oriented", category: "soft" },
  { title: "Team player", category: "soft" },
  { title: "Communications", category: "soft" },
  { title: "Friendly", category: "soft" },
];
