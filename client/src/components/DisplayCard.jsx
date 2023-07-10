import { mdiChevronRight } from '@mdi/js';
import Icon from '@mdi/react';
import Card from './Card';
import Card1 from '../assets/img/Card1.png'
import Card2 from '../assets/img/Card2.png'
import Card3 from '../assets/img/Card3.png'
import Card4 from '../assets/img/Card4.png'

const DisplayCard = () => {
    return (
        <>
            <div className="main-content">
                <div className="d-flex p-2 justify-content-between text-white">
                    <div>
                        <p className="h2 mt-1 ps-4" >Latest</p>
                    </div>
                    <div>
                        <p className="fst-italic fs-6 mt-3">
                            View More <Icon path={mdiChevronRight} size={1} />
                        </p>
                    </div>
                </div>
                <div className="Cards">
                    <div className="d-flex ps-5 justify-content-evenly flex-warp align-content-between">
                        <Card 
                            img={Card1}
                            title="One Piece" 
                            Ecount="1068" 
                            status="OnGoing" />
                        <Card 
                            img={Card2}
                            title="Jujutsu Kaisen" 
                            Ecount="25" 
                            status="OnGoing" />
                        <Card 
                            img={Card3}
                            title="Demon Slayer" 
                            Ecount="11" 
                            status="Completed" />
                        <Card 
                            img={Card4}
                            title="Hell's Paradise" 
                            Ecount="12" 
                            status="Completed" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DisplayCard