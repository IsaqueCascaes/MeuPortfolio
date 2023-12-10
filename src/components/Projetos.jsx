import { BlocoTitulo } from "../styles/global";
import projects from "../projects/projects";
import styles from "../css/projects.module.css";
export default function Projetos() {
  return (
    <>
      <BlocoTitulo id="Projetos">
        <h1>Projetos</h1>
      </BlocoTitulo>

      <section className={styles.blocoCards}>
        {/* DEIXAR RESPONSIVO */}
        {projects.map((item) => (
          <div className={styles.cardProjetos} key={item.id}>
            <figure className={styles.blocoImagemProjetos}>
              <img className={styles.imgCards} src={item.img} alt="" />
            </figure>
            <h3>{item.nomeProjeto}</h3>
            <p className={styles.txtCard}>{item.descricao}</p>
            <div className={styles.blocoBotoes}>
              <a href={item.linkSite} target="_blank">
                <button>Acessar Site</button>
              </a>
              <a href={item.linkGitHub} target="_blank">
                <button>Acessar repositório</button>
              </a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
