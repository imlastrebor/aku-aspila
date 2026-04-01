import { PaperTexture } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

function ContentPaperTexture() {
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

  if (viewport.width === 0 || viewport.height === 0) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[20px] opacity-60">
      <PaperTexture
        width={viewport.width}
        height={viewport.height}
        style={{ height: "100%", width: "100%" }}
        colorBack="#ffffff"
        colorFront="#e7c99d"
        contrast={0.43}
        roughness={0.49}
        fiber={0.3}
        fiberSize={0.2}
        crumples={0.22}
        crumpleSize={0.75}
        folds={0.36}
        foldCount={15}
        drops={0.2}
        fade={0.19}
        seed={0.8}
        scale={0.68}
        fit="cover"
      />
    </div>
  );
}

export default ContentPaperTexture;
