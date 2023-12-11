import { BlocoTitulo } from "../styles/global";
import imgHabilidades from "../assets/imagensJS/imgHabilidades";
import styles from "../css/habilidades.module.css";

export default function Habilidades() {
  return (
    <>
      <BlocoTitulo id="Habilidades">
        <h1>Habilidades em:</h1>
      </BlocoTitulo>

      <section>
        <figure className={styles.blocoImagens}>
          {imgHabilidades.map((item) => (
            <img
              src={item.imagem}
              className={styles.imagens}
              alt={`Imagem ${item.id}`}
              title={item.descricao}
              key={item.id}
            />
          ))}
        </figure>
      </section>
    </>
  );
}
