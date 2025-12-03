import {
  ArrowBigDown,
  ArrowUp,
  ArrowUpAZ,
  ArrowUpCircle,
  ArrowUpIcon,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useEffect, useState } from "react";
import { BsArrowUpCircle, BsArrowUpRightCircle } from "react-icons/bs";

export const Footer = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBtn(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
        <p className="text-sm text-muted-foreground">
          {" "}
          &copy; {new Date().getFullYear()} All rights reserved,Inc.
        </p>
        <div className="flex flex-wrap justify-evenly items-center gap-x-4 mx-2">
          <a
            className="hover:text-primary transition-colors"
            href="https://www.instagram.com/dunclonemaname/?hl=en"
            target="_blank"
          >
            <Instagram />
          </a>
          <a
            className="hover:text-primary transition-colors"
            href="https://www.linkedin.com/in/thok-panha-491625357/"
            target="_blank"
          >
            <Linkedin />
          </a>
          <a
            className="hover:text-primary transition-colors"
            href="https://github.com/"
            target="_blank"
          >
            <Github />
          </a>
        </div>
      </footer>
      {showScrollBtn && (
        <a
          href="#Hero"
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 p-3 rounded-full bg-primary/40 hover:bg-primary/20 text-muted-foreground shadow-lg transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <BsArrowUpCircle size={24} />
        </a>
      )}
    </>
  );
};
