import React, { useState } from "react";
import HoverCard from "./HoverCard";
import {
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";
import translations from "../../src/data/translations";
import CountryModal from "./CountryModal";

const geoUrl = "/world.json"; // лежит в public/

export default function WorldLoveMap() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [hoveredCountryCode, setHoveredCountryCode] = useState(null);
    const [modalPos, setModalPos] = useState({ x: 0, y: 0 });
    const [flagPos, setFlagPos] = useState({ x: 0, y: 0 });

    const handleEnter = (event, geo) => {

        const code = geo.properties.name;
        // console.log(geo.properties);
        // console.log(geo.properties.name);
        // console.log("hovered code:", geo.properties.ISO_A2);
        if (!translations[code] || !translations[code].phrase) return;

        setHoveredCountryCode(code);
        setSelectedCountry({
            code,
            ...translations[code]
        });

        setModalPos({
            x: event.clientX,
            y: event.clientY
        });

        setFlagPos({
            x: event.clientX,
            y: event.clientY
        });

    };

    const handleMove = (event) => {
        setModalPos({
            x: event.clientX,
            y: event.clientY
        });

        setFlagPos({
            x: event.clientX,
            y: event.clientY
        });
    };

    const handleLeave = () => {
        setHoveredCountryCode(null);
        setSelectedCountry(null);
    };

    return (
        <div
            style={{
                display: "flex",
                height: "80vh",
                width: "90vw",
                background: "rgb(171,83,112)",
                borderRadius: "24px",
                boxShadow: "0 30px 80px rgba(0,0,0,0.65)",
                border: "1px solid rgba(148,163,184,0.25)",
                overflow: "visible",
                backdropFilter: "blur(12px)"
            }}
        >
            <div style={{ flex: 2, position: "relative", padding: "16px" }}>
                <ComposableMap
                    projectionConfig={{
                        scale: 155
                    }}
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                const code = geo.properties.ISO_A2;
                                const hasPhrase = translations[code];

                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        onMouseEnter={(e) => handleEnter(e, geo)}
                                        onMouseMove={handleMove}
                                        onMouseLeave={handleLeave}
                                        style={{
                                            default: {
                                                fill: hasPhrase ? "#ffffff" : "#da9bb2",
                                                stroke: "#f7f9fa",
                                                strokeWidth: 0.4,
                                                outline: "none",
                                                transition: "all 0.25s ease"
                                            },
                                            hover: {
                                                fill: hasPhrase ? "#ab3c63" : "#ab3c63",
                                                cursor: hasPhrase ? "pointer" : "default",
                                                stroke: "#facc15",
                                                strokeWidth: 1.4,
                                                filter: hasPhrase
                                                    ? "drop-shadow(0 0 10px rgba(250,204,21,0.9))"
                                                    : "none",
                                                transform: hasPhrase ? "scale(1.03)" : "none",
                                                outline: "none"
                                            },
                                            pressed: {
                                                fill: "#5e182d",
                                                outline: "none"
                                            }
                                        }}
                                    />
                                );
                            })
                        }
                    </Geographies>
                </ComposableMap>

                {/* Флаг внутри страны */}
                {/*{hoveredCountryCode && translations[hoveredCountryCode] && (*/}
                {/*    <div*/}
                {/*        style={{*/}
                {/*            position: "absolute",*/}
                {/*            top: flagPos.y - 80,*/}
                {/*            left: flagPos.x - 80,*/}
                {/*            width: "160px",*/}
                {/*            height: "160px",*/}
                {/*            display: "flex",*/}
                {/*            justifyContent: "center",*/}
                {/*            alignItems: "center",*/}
                {/*            fontSize: "80px",*/}
                {/*            opacity: 0.22,*/}
                {/*            pointerEvents: "none",*/}
                {/*            transform: "translate(-50%, -50%) scale(1)",*/}
                {/*            transition: "opacity 0.2s ease, transform 0.2s ease",*/}
                {/*            zIndex: 5*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        {translations[hoveredCountryCode].flag}*/}
                {/*    </div>*/}
                {/*)}*/}

                {/*{console.log("HoverCard:", selectedCountry)}*/}
                {/*{console.log("translations:", translations)}*/}


                {/* Модальное окно */}
                <CountryModal country={selectedCountry} position={modalPos} />
                <HoverCard country={selectedCountry} position={modalPos} />

            </div>


            {/* Правая панель — просто фон/декор, можно потом оживить */}
            <div
                style={{
                    flex: 1,
                    borderLeft: "1px solid rgba(148,163,184,0.25)",
                    background:
                        "radial-gradient(circle at top, rgba(56,189,248,0.15), transparent 55%), radial-gradient(circle at bottom, rgba(34,197,94,0.18), transparent 55%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontSize: "18px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    textAlign: "center",
                    padding: "24px"
                }}
            >
                <div className="title-block">
                    Карта признаний в любви
                    <br />
                    Наведи на любую страну
                    <br/><br/>
                    <div className="planet-wrapper">
                        <div className="planet"></div>
                        <div className="heart heart1">❤️</div>
                        <div className="heart heart2">❤️</div>
                        <div className="heart heart3">❤️</div>
                    </div>

                </div>

            </div>
            {/*<HoverCard country={selectedCountry} position={modalPos} />*/}
        </div>
    );
}