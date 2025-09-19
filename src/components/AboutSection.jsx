import { Briefcase, Code, User } from "lucide-react";
export const AboutSection = () => {
  
  return (
    <section id="About" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About
          <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 flex flex-col justify-start h-full">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Designer
            </h3>
            <p className="text-muted-foreground">
              I’m a passionate Web Developer and Designer who thrives on
              turning ideas into interactive digital experiences. For me, web
              development is more than writing code — it’s about creating
              functional, engaging, and visually captivating platforms that
              truly connect with people.
            </p>
            <p>
              With a strong focus on responsive design, I ensure every project
              works seamlessly across all devices, delivering both performance
              and aesthetics. As a designer, I value creativity, detail, and
              user-centered design, crafting interfaces that are intuitive and
              visually striking. As a developer, I bring those designs to life
              with clean code, modern frameworks, and innovative solutions.
            </p>
            <p>
              I’m continuously exploring new trends, technologies, and design
              approaches, always pushing myself to grow. My ultimate goal is to
              create digital experiences that are impactful, meaningful, and
              unforgettable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/cv.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Cv
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gab-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left ml-3">
                  <h4 className="font-semibold text-lg">Website Development</h4>
                  <p className="text-muted-foreground">
                    I build modern, responsive, and user-friendly by blending
                    creativity and technology, ensuring seamless performance,
                    clean design, and engaging experiences tailored to client
                    needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gab-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left ml-3">
                  <h4 className="font-semibold text-lg">UX/UI Design</h4>
                  <p className="text-muted-foreground">
                    I craft intuitive UX/UI designs that blend creativity and
                    usability, ensuring seamless user journeys, engaging
                    visuals, and meaningful digital experiences across all
                    devices.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gab-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left ml-3">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className=" text-muted-foreground">
                    I excel in project management by organizing workflows,
                    coordinating teams, and ensuring projects are delivered on
                    time, within scope, and aligned with client goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
