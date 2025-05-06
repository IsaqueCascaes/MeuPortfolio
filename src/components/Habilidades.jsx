import { useEffect, useRef, useState } from "react";
import { BlocoTitulo } from "../styles/global";
import imgHabilidades from "../assets/imagensJS/imgHabilidades";
import styles from "../css/habilidades.module.css";

export default function Habilidades() {
  const [ativo, setAtivo] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const wrapperRefs = useRef([]);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const toggleTooltip = (id) => {
    if (isMobile) {
      setAtivo((prev) => (prev === id ? null : id));
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isOutside = wrapperRefs.current.every(
        (ref) => ref && !ref.contains(event.target)
      );
      if (isOutside) setAtivo(null);
    };

    if (isMobile) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  return (
    <>
      <BlocoTitulo id="Habilidades">
        <h1>Habilidades em:</h1>
      </BlocoTitulo>

      <p
        style={{
          textAlign: "center",
          fontSize: "1rem",
          marginTop: "-1rem",
          marginBottom: "2rem",
          color: "#ccc",
        }}
      >
        {isMobile
          ? "Clique na imagem para saber mais sobre a stack"
          : "Passe o mouse nas tecnologias para saber mais sobre as stacks"}{" "}
        <span className="point-down">👇</span>
      </p>

      <figure className={styles.blocoImagens}>
        {imgHabilidades.map((item, index) => (
          <div
            className={styles.cardWrapper}
            key={item.id}
            onClick={() => toggleTooltip(item.id)}
            ref={(el) => (wrapperRefs.current[index] = el)}
          >
            <img
              src={item.imagem}
              className={styles.imagens}
              alt={item.descricao}
            />
            <div
              className={`${styles.tooltip} ${
                ativo === item.id ? styles.tooltipAtivo : ""
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                onClick={(e) => {
                  e.stopPropagation();
                  setAtivo(null);
                }}
              >
                ×
              </button>
              <h3>{item.descricao}</h3>
              <p>{item.detalhe}</p>
            </div>
          </div>
        ))}
      </figure>
    </>
  );
}
