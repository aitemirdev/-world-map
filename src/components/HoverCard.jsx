export default function HoverCard({ country, position }) {
    if (!country) return null;

    const safeX = Math.min(position.x + 20, window.innerWidth - 220);
    const safeY = Math.min(position.y + 20, window.innerHeight - 140);

    return (
        <div
            style={{
                position: "fixed",
                top: safeY,
                left: safeX,
                background: "rgb(92,42,58)",
                padding: "12px 16px",
                borderRadius: "12px",
                color: "#f6f6f6",
                fontSize: "14px",
                zIndex: 999999,
                pointerEvents: "none",
                boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
                border: "1px solid rgba(0,0,0,0.1)",
                animation: "hoverFade 0.18s ease-out"
            }}
        >


            <div style={{ fontWeight: 600, marginBottom: "4px" }}>
                {country.countryName}
            </div>

            <div style={{ color: "#ffffff", marginBottom: "6px" }}>
                На {country.language}ом я бы сказал
            </div>

            {/*<div style={{ fontSize: "22px", marginBottom: "4px" }}>*/}
            {/*     {country.flag}*/}
            {/*</div>*/}

            <div
                style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#ffffff",
                    opacity: 0,
                    animation: "phraseFade 0.4s ease forwards"
                }}
            >
                💕{country.phrase}💕
            </div>

            <style>
                {`
          @keyframes hoverFade {
            from { opacity: 0; transform: translateY(4px) scale(0.97); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }

          @keyframes phraseFade {
            from { opacity: 0; transform: translateY(4px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
            </style>
        </div>
    );
}