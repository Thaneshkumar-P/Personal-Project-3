import './styles.sass'
import SearchBar from './SearchBar';
import Icon from '@mdi/react'
import { mdiClose, mdiInstagram , mdiMagnify, mdiTwitter } from "@mdi/js";
const Header = () => {

    return (
        <div>
            <div className="d-flex bd-highlight mb-0 header">
                <div className="p-2 flex-grow-1 bd-highlight">Flex item</div>
                <div className="p-2 bd-highlight header-padding">
                    <Icon path={mdiInstagram} size={1} className="icon" /> 
                    {/* <a href='https://www.instagram.com/_thaneshkumar/' className='link'>Instgram</a> */}
                </div>
                <div className="p-2 bd-highlight">
                    <Icon path={mdiTwitter} size={1} className="icon" /> 
                    {/* <a href='https://twitter.com/_thaneshkumar' className='link'>Twitter</a> */}
                </div>
            </div>
            <div className='d-flex border border-primary header-nav ms-5 me-5 overlay rounded-1' id='bar'>
                <div className='d-flex p-1 flex-grow-1 position-absolute-top top-25 start-50 justify-content-center ms-5' >
                    <div className='pe-2 cont' id='nav1'>Home</div>
                    <div className='pe-2 cont' id='nav2'>Books</div>
                    <div className='pe-2 cont' id='nav3'>series</div>
                </div>
                <SearchBar />
            </div>
        </div>
    )
}

export default Header;
