import { GrainGradient } from "@paper-design/shaders-react";
import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

function BackgroundShader() {
  const reduceMotion = useReducedMotion();
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[hsl(14_60%_45%)]">
      {viewport.width > 0 && viewport.height > 0 ? (
        <div className="absolute inset-0 opacity-70">
          <GrainGradient
            width={viewport.width}
            height={viewport.height}
            style={{ height: "100%", width: "100%" }}
            colorBack="#800a1f"
            softness={0.7}
            intensity={0.15}
            noise={0.5}
            shape="wave"
            offsetX={0}
            offsetY={0}
            scale={2.88}
            rotation={0}
            speed={reduceMotion ? 0 : 0.34}
            colors={["#f6467b", "#f67213c9", "#501116", "#630d1d"]}
          />
        </div>
      ) : null}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_44%)] mix-blend-screen" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(182,74,46,0.08),rgba(122,59,42,0.1))]" />
    </div>
  );
}

export default BackgroundShader;
