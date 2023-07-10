import { mdiClose, mdiMagnify } from '@mdi/js';
import './styles.sass'
import Icon from '@mdi/react';


const SearchBar = () => {
    return (
        <>
            <div className="search-box">
                <button className="btn-search">
                    <Icon path={mdiMagnify} size={1} className='' />
                </button>
                <input className="input-search" type="text" placeholder='Search...' />
                {/* <Icon path={mdiClose} size={1} /> */}
            </div>
        </>
    )
}


export default SearchBar;