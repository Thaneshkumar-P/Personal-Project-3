import './styles.sass'
import Icon from '@mdi/react'
 import { mdiInstagram , mdiTwitter } from "@mdi/js";
const Header = () => {
    return (
        <div>
            <div className="d-flex bd-highlight mb-0 header">
                <div class="p-2 flex-grow-1 bd-highlight">Flex item</div>
                <div class="p-2 bd-highlight header-padding">
                    <Icon path={mdiInstagram} size={1} /> <a href='https://www.instagram.com/_thaneshkumar/' className='link'>Instgram</a>
                </div>
                <div class="p-2 bd-highlight">
                <Icon path={mdiTwitter} size={1} className='link'/> <a href='https://twitter.com/_thaneshkumar' className='link'>Twitter</a>
                </div>
            </div>
            <div className='d-flex border border-primary header ms-5 me-5 overlay rounded-1'>
                <div className='p-4 flex-grow-1 position-absolute-top top-25  start-50'> </div>
            </div>
        </div>
    )
}

export default Header;
