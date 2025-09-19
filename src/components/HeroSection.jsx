import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="Hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-float">
            <span className="opacity-19 animate-fade-in-delay-4">
              GREETINGS{" "}
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              I'M{" "}
            </span>
            <span className=" text-blue-600 text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              PANHA THOK
            </span>
          </h1>
          <p className="text-lg animate-fade-in-delay-3 text-muted-foreground font-sans ">
            I'm web developer creates and maintains websites and web
            applications. They use coding languages like HTML, CSS, and
            JavaScript to build responsive, user-friendly designs. Developers
            ensure performance, accessibility, and security while integrating
            databases and backend systems. Their role combines creativity with
            technical expertise to deliver effective digital solutions for
            businesses.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-5">
            <a href="Project" className="cosmic-button">
              View my work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
