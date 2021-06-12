import s from './Footer.module.css';

let Footer = () => {
    return(
      <div className={s.footer}>
    <div className={s.logo}></div>
          <a href="#">Договор оферты</a>
          <a href="#">Конфиденциальность</a>
          <a href="#">Контакты</a>
          <a href="#">Обратная связь</a>
      </div>
    );
}

export default Footer;