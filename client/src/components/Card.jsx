import { mdiPlayCircle, mdiProgressCheck } from "@mdi/js";
import Icon from "@mdi/react";

const Card = props => {
    return (
        <div className="p-2 position-relative">
            <Icon path={mdiPlayCircle} size={2} className="card-image-play" />
            <img src={props.img} className="card-image shadow-lg" alt='...' />
            <div className="card-title pt-1" >
                <h5 className="text-white">{props.title}</h5>
            </div>
            <div className="card-desp d-flex flex-grow-1">
                <Icon path={mdiPlayCircle} size={1} className="card"/>
                <span className="ps-1 pe-2 text-white">{props.Ecount}</span>
                <Icon path={mdiProgressCheck} size={1} className="card"/>
                <span className="text-white ps-1">{props.status}</span>
            </div>
        </div>
    )
}

export default Card;