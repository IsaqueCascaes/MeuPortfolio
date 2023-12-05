import { BlocoTitulo } from "../styles/global";
import textoSobre from "../text/textoSobre";
import pc from "../assets/sobre.gif";
import styles from "../css/sobreMim.module.css";

export default function SobreMim() {
  return (
    <>
      <BlocoTitulo id="SobreMim">
        <h1 className={styles.sobreMimTitulo}>Sobre Mim</h1>
      </BlocoTitulo>
      <section className={styles.secaoSobreMim}>
        <figure>
          <img
            className={styles.imagem}
            src={pc}
            alt="programação, imagem ilustrativa  "
          />
        </figure>

        {textoSobre.map((item) => (
          <div className={styles.blocoSobreMim} key={item.id}>
            <p className={styles.textoBlocoSobre}>{item.miniBiografia}</p>
            <p className={styles.textoBlocoSobre}>{item.sonho}</p>
          </div>
        ))}
      </section>
    </>
  );
}
