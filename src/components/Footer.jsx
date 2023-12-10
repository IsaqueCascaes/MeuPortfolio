import styles from "../css/footer.module.css";
import inforedes from "../assets/imagensJS/redes.js";

export default function Footer() {
  return (
    <>
      <footer>
        <div className={styles.blocoTituloRedes}>
          <h3>Entre em contato em minhas redes:</h3>
        </div>
        <figure className={styles.blocoImgRedes}>
          {inforedes.map((item) => (
            <a href={item.link}>
              <img
                src={item.img}
                alt="imagens, redes sociais de Isaque"
                key={item.id}
              />
            </a>
          ))}
        </figure>
        <div className={styles.blocoDireitos}>
          <p>Isaque Cascaes - 2023</p>
          <p>Todos os direitos reservados</p>
        </div>
      </footer>
    </>
  );
}
