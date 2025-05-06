import { SobreMim } from "../styles/global";
import textoSobremim from "../text/textoSobreMim";
import styles from "../css/main.module.css";
import minhaFoto from "../assets/isaqueCascaes.jpeg";

export default function Main() {
  return (
    <>
      <SobreMim>
        {textoSobremim.map((item) => (
          <div className={styles.blocoSobreMim} key={item.id}>
            <p className={styles.txtSobreMim}>{item.saudacao}</p>
            <p className={styles.meuNome}>{item.meuNome}</p>
            <p className={styles.txtSobreMim}>{item.profissao}</p>
          </div>
        ))}

        <figure>
          <img
            className={styles.eu}
            src={minhaFoto}
            alt="Foto de Isaque Cascaes"
          />
        </figure>
      </SobreMim>
    </>
  );
}
