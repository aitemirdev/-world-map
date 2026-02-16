export default function CountryModal({ country, position }) {
    if (!country) return null;

    const safeX = Math.min(position.x + 20, window.innerWidth - 260);
    const safeY = Math.min(position.y + 20, window.innerHeight - 160);

    return (
        <div
            // style={{
            //     position: "fixed",
            //     top: safeY,
            //     left: safeX,
            //     // background: "rgba(15,23,42,0.96)",
            //     padding: "14px 18px",
            //     borderRadius: "14px",
            //     color: "white",
            //     fontSize: "14px",
            //     zIndex: 9999,
            //     pointerEvents: "none",
            //     boxShadow: "0 18px 45px rgba(0,0,0,0.65)",
            //     border: "1px solid rgba(148,163,184,0.45)",
            //     animation: "fadeInModal 0.18s ease-out"
            // }}
        >
            <div
                style={{
                    fontSize: "26px",
                    textAlign: "center",
                    marginBottom: "6px"
                }}
            >
                {country.flag}
            </div>

            <div
                style={{
                    fontWeight: 600,
                    fontSize: "15px",
                    marginBottom: "4px"
                }}
            >
                {country.countryName}
            </div>

            <div
                style={{
                    color: "#9ca3af",
                    marginBottom: "6px",
                    fontSize: "13px"
                }}
            >
                Язык: {country.language}
            </div>

            <div
                style={{
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#facc15",
                    opacity: 0,
                    animation: "phraseFade 0.4s ease forwards"
                }}
            >
                «{country.phrase}»
            </div>

            <style>
                {`
          @keyframes fadeInModal {
            from { opacity: 0; transform: translateY(4px) scale(0.98); }
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