import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const About = () => {
  const skills = [
    { name: "HTML/CSS", value: 95 },
    { name: "JavaScript", value: 90 },
    { name: "TypeScript", value: 85 },
    { name: "React", value: 90 },
    { name: "Node.js", value: 80 },
    { name: "Next.js", value: 85 },
    { name: "Tailwind CSS", value: 90 },
    { name: "MongoDB", value: 75 },
    { name: "GraphQL", value: 70 },
  ];

  const experiences = [
    {
      company: "Tech Innovations Inc.",
      role: "Senior Frontend Developer",
      period: "2021 - Present",
      description:
        "Lead development of the company's main SaaS platform, implemented new features, and improved performance by 40%.",
    },
    {
      company: "Digital Solutions LLC",
      role: "Full Stack Developer",
      period: "2018 - 2021",
      description:
        "Worked on various client projects using React, Node.js, and MongoDB. Collaborated with design team to create responsive UI/UX designs.",
    },
    {
      company: "WebDev Agency",
      role: "Junior Developer",
      period: "2016 - 2018",
      description:
        "Assisted in building websites for clients, focusing on frontend development with HTML, CSS, and JavaScript.",
    },
  ];

  const education = [
    {
      institution: "Tech University",
      degree: "Bachelor of Science in Computer Science",
      period: "2012 - 2016",
      description:
        "Focused on web development, software engineering, and database management systems.",
    },
    {
      institution: "Online Platforms",
      degree: "Various Certifications",
      period: "2017 - Present",
      description:
        "Continuously learning through platforms like Udemy, Coursera, and freeCodeCamp.",
    },
  ];

  return (
    <div className="container py-12 md:py-20">
      {/* About Section */}
      <section className="mb-16">
        <div className="flex flex-col items-center space-y-4 text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"
              alt="Profile"
              className="rounded-lg w-full h-auto shadow-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">John Doe</h2>
            <h3 className="text-xl text-muted-foreground">Full Stack Developer</h3>
            <p>
              I'm a passionate web developer with over 5 years of experience
              creating modern and responsive web applications. I specialize in
              JavaScript frameworks like React and have a strong foundation in
              backend technologies including Node.js and MongoDB.
            </p>
            <p>
              My goal is to build applications that not only look great but also
              provide exceptional user experiences. I'm constantly learning new
              technologies and techniques to stay at the forefront of web
              development.
            </p>
            <p>
              When I'm not coding, you can find me hiking, reading tech blogs,
              or contributing to open-source projects.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <h3 className="font-bold">{exp.role}</h3>
                    <span className="text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-primary">{exp.company}</p>
                  <p>{exp.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <h3 className="font-bold">{edu.degree}</h3>
                    <span className="text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="text-primary">{edu.institution}</p>
                  <p>{edu.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;