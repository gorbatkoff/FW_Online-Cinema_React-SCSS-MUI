import React from 'react';

import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (

        <footer className={styles.footer}>
            <div className={styles.copyright}>
                <p>© Вce права защищены, материалы предоставляются только для ознакомления. 16+</p>

                <p className={styles.domain}>2022 family-watch.ru</p>
            </div>
            <div className={styles.social}>
                <div>
                    <TelegramIcon fontSize="large" />
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="35" height="35" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.581 15.997c.304 0 .429-.204.425-.458-.016-.958.356-1.474 1.03-.802.744.744.896 1.26 1.801 1.26h1.601c.403 0 .562-.13.562-.334 0-.432-.711-1.194-1.312-1.752-.844-.783-.882-.802-.156-1.744.9-1.169 2.079-2.667 1.037-2.667h-1.991c-.387 0-.414.217-.551.542-.498 1.173-1.443 2.693-1.803 2.461-.377-.243-.204-1.203-.175-2.63.008-.377.006-.636-.571-.77-.314-.073-.621-.103-.903-.103-1.137 0-1.922.477-1.477.56.785.146.711 1.846.527 2.58-.319 1.278-1.518-1.012-2.018-2.152-.12-.275-.155-.488-.586-.488h-1.627c-.247 0-.394.08-.394.258 0 .301 1.479 3.36 2.892 4.885 1.379 1.487 2.742 1.354 3.689 1.354z"/></svg>
                </div>
                <div>
                    <GitHubIcon fontSize="large"/>
                </div>
            </div>
            <div className={styles.links}>
                <ul>
                    <li><Link to="/temp">Краткое пособие</Link></li>
                    <li><Link to="/temp">Для правообладетелей</Link></li>
                    <li><Link to="/temp">Пользовательское соглашение</Link></li>
                    <li><Link to="/temp">Условия пользования сайтом</Link></li>
                    <li><a href="https://vk.com/eto_moye_korotkoe_imya">Калмыков Азамат | BackEnd</a></li>
                    <li><a href="https://vk.com/hu66le">Горбатков Артём | FrontEnd</a></li>
                </ul>
            </div>
        </footer>
    )
}