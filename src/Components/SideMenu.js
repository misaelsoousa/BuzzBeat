import { Destaque, Explorar, Home, Lists, Notify } from '../assets/assets';
import './SideMenu.scss';

function SideMenu() {
    return (
        <div className='slideMenu'>
            <ul>
                <li><a>
                    <Home />
                    <p>
                        Página Inicial
                    </p>
                </a></li>

                <li><a>
                    <Explorar />
                    <p>
                        Explorar
                    </p>
                </a></li>
                <li><a>
                    <Destaque />
                    <p>
                        Destaques
                    </p>
                </a></li>
                <li><a>
                    <Notify />
                    <p>
                        Notificação
                    </p>
                </a></li>
                <li><a>
                    <Lists />
                    <p>
                        Listas
                    </p>
                </a></li>
            </ul>

        </div>
    )
}

export default SideMenu;
