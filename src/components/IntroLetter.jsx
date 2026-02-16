import { useState } from "react";

export default function IntroLetter({ onFinish }) {
    const [opened, setOpened] = useState(false);

    const handleClick = () => {
        setOpened(true);
        setTimeout(() => onFinish(), 6000);
    };

    return (
        <div style={styles.overlay}>
            <div style={styles.container} onClick={handleClick}>

                {/* Конверт */}
                <div
                    style={{
                        ...styles.envelope,
                        transform: opened ? "translateY(-40px)" : "translateY(0)",
                    }}
                >
                    {/* Верхний клапан */}
                    <div
                        style={{
                            ...styles.flap,
                            transform: opened ? "rotateX(180deg)" : "rotateX(0deg)",
                        }}
                    ></div>

                    {/* Лист бумаги */}
                    <div
                        style={{
                            ...styles.paper,
                            transform: opened ? "translateY(-120px)" : "translateY(40px)",
                            opacity: opened ? 1 : 0,
                        }}
                    >
                        <div style={styles.text}>
                            My love, I love you ❤️
                            <br />
                            And I’ll say it to you in every language in the world 🌍
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    overlay: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(4px)",
        zIndex: 999999,
    },

    container: {
        cursor: "pointer",
        perspective: "1400px", // глубже — реалистичнее
    },

    envelope: {
        width: "380px",
        height: "260px",
        background: "#f3e9d7",
        borderRadius: "12px",
        position: "relative",
        boxShadow: "0 12px 40px rgba(0,0,0,0.28)",
        transition: "0.8s ease",
        // overflow: "hidden",
    },

    flap: {
        position: "absolute",
        top: 0,
        left: 0,
        marginTop:"-30",
        width: "100%",
        height: "65%",
        background: "#e8dcc4",
        clipPath: "polygon(0 0, 100% 0, 50% 100%)",
        transformOrigin: "top center",
        transform: "rotateX(0deg)",
        transition: "transform 0.9s ease",
        boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
    },

    paper: {
        position: "absolute",
        width: "92%",
        height: "100%",
        left: "4%",
        top: "22%",
        background: "#fffdf7",
        borderRadius: "10px",
        padding: "26px",
        boxShadow: "0 0 14px rgba(0,0,0,0.15)",
        transition: "transform 1.2s ease, opacity 1.2s ease",
    },

    text: {
        fontSize: "22px",
        fontWeight: 600,
        color: "#b22222",
        textAlign: "center",
        lineHeight: "1.5",
        marginTop: "20px",
        opacity: 0,
        animation: "textFade 1.6s ease forwards",
        animationDelay: "1s",
    },
};