"use client";

import { useEffect, useRef } from "react";

type DGWidgetLoaderOptions = {
  width: number | string;
  height: number;
  borderColor?: string;
  pos?: { lat: number; lon: number; zoom: number };
  opt?: { city: string };
  org: { id: string }[];
};

declare global {
  interface Window {
    DGWidgetLoader?: new (options: DGWidgetLoaderOptions) => void;
  }
}

type TwoGisMapProps = {
  firmId: string;
  lat: number;
  lon: number;
  height?: number;
};

export function TwoGisMap({ firmId, lat, lon, height = 320 }: TwoGisMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const init = () => {
      if (!window.DGWidgetLoader) return;

      container.innerHTML = "";

      const initScript = document.createElement("script");
      initScript.charset = "utf-8";
      initScript.text = `new DGWidgetLoader(${JSON.stringify({
        width: "100%",
        height,
        borderColor: "#e5e0d8",
        pos: { lat, lon, zoom: 16 },
        opt: { city: "almaty" },
        org: [{ id: firmId }],
      })});`;
      container.appendChild(initScript);
    };

    if (window.DGWidgetLoader) {
      init();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://widgets.2gis.com/js/DGWidgetLoader.js";
    script.charset = "utf-8";
    script.async = true;
    script.onload = init;
    document.body.appendChild(script);

    return () => {
      script.onload = null;
      container.innerHTML = "";
    };
  }, [firmId, lat, lon, height]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden rounded-xl border border-border bg-surface"
      style={{ minHeight: height }}
    />
  );
}
