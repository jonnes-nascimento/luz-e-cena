import Link from '../Link'
import syles from './Footer.module.css'

const FooterInstitutional = () => {
  return (
    <div className={syles.institucional}>
      <h4 className={syles.titulo}>Institucional</h4>
      <Link className={syles.ancora} href='#'>Sobre nós</Link>
      <Link className={syles.ancora} href='#'>Para empresas</Link>
      <Link className={syles.ancora} href='#'>Club fidelidade</Link>
    </div>
  )
}

export default FooterInstitutional