import { mdiChevronRight } from '@mdi/js';
import Icon from '@mdi/react';

const DisplayCard = () => {
    return (
        <>
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
            <div className="card">
                <div className="card-content">
                    
                </div>
            </div>
        </>
    )
}

export default DisplayCard