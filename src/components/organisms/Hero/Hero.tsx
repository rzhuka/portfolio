"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/atoms";
import { SECTION } from "@/config/site";
import { useSpotlight } from "@/hooks/useSpotlight";
import { cx } from "@/lib/cx";
import { CV_FILENAME, CV_HREF } from "@/lib/paths";
import { staggerLetters } from "@/lib/stagger";

interface HeroProps {
  name: string;
  role: string;
  tagline: string;
  location?: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;
const LETTER_STEP = 0.05;

export function Hero({ name, role, tagline, location }: HeroProps) {
  const reduceMotion = useReducedMotion();
  const { ref, onMouseMove } = useSpotlight<HTMLElement>();
  const { words, total } = staggerLetters(name, LETTER_STEP);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? (false as const) : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: EASE, delay },
  });

  return (
    <section ref={ref} onMouseMove={onMouseMove} className="hero">
      <div className="hero__grid" aria-hidden="true" />
      {[1, 2, 3].map((n) => (
        <span key={n} className={cx("hero__blob", `hero__blob--${n}`)} aria-hidden="true" />
      ))}

      <motion.div className="hero__content" style={reduceMotion ? undefined : { y, opacity }}>
        <motion.p className="hero__badge" {...fadeUp(0.1)}>
          <span className="hero__dot" />
          {role}
          {location && <span className="hero__sep">/ {location}</span>}
        </motion.p>

        <h1 className="hero__name" aria-label={name}>
          {words.map((word, w) => (
            <span key={w} className="hero__word" aria-hidden="true">
              {word.map(({ char, delay }, c) => (
                <motion.span
                  key={c}
                  className={cx("hero__letter", w > 0 && "hero__letter--gradient")}
                  initial={reduceMotion ? false : { y: "115%", rotate: 6 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ duration: 0.9, ease: EASE, delay }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p className="hero__tagline" {...fadeUp(total + 0.2)}>{tagline}</motion.p>
        <motion.div className="hero__actions" {...fadeUp(total + 0.4)}>
          <Button href={`#${SECTION.work}`}>View work</Button>
          <Button variant="ghost" href={CV_HREF} download={CV_FILENAME}>Download CV</Button>
        </motion.div>
      </motion.div>

      <span className="hero__scroll" aria-hidden="true"><i /></span>
    </section>
  );
}
