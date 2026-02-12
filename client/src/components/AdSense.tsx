import { useEffect } from "react";

interface AdSenseProps {
  adSlot: string;
  adFormat?: "auto" | "rectangle" | "horizontal" | "vertical";
  fullWidth?: boolean;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

export function AdSense({ 
  adSlot, 
  adFormat = "auto", 
  fullWidth = false,
  className = ""
}: AdSenseProps) {
  useEffect(() => {
    // Carrega o script do Google AdSense
    if ((window as any).adsbygoogle === undefined) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx";
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    } else {
      // Se o script já foi carregado, push o anúncio
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    }
  }, []);

  return (
    <div className={`flex justify-center my-6 ${className}`}>
      <ins
        className={`adsbygoogle ${fullWidth ? "w-full" : ""}`}
        style={{
          display: "block",
          minHeight: adFormat === "rectangle" ? "250px" : "auto",
        }}
        data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidth ? "true" : "false"}
      />
    </div>
  );
}
