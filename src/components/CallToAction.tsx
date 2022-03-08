import { useContext, useEffect, useRef } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { image } from "../images/image"

interface Props {
    bookmark: boolean;
    setPopup: React.Dispatch<React.SetStateAction<number>>;
    setBookmark: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CallToAction: React.FC<Props> = (props) => {
    const bookmarkRef = useRef<HTMLDivElement>(null);
    const modalSelected = useContext(ModalContext);

    useEffect(() => {
        props.bookmark? bookmarkRef.current!.className = "bookmark bookmarked"
            : bookmarkRef.current!.className = "bookmark not-bookmarked"
    },[props.bookmark])

    const handleBookmark = () => {
        props.setBookmark(!props.bookmark)
        props.bookmark? bookmarkRef.current!.className = "bookmark bookmarked"
            : bookmarkRef.current!.className = "bookmark not-bookmarked"
    }
    const handleModal = () => {
        modalSelected?.setModal(0);
        props.setPopup(1);
    }

    return (
        <div className="call-to-action" id="GetStarted">
            <div className="container">
                <img src={image.logoMastercraft} alt="Mastercraft" className="mastercraft-logo"/>
                <h2>Mastercraft Bamboo Monitor Riser</h2>
                <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                <div className="buttons">
                    <div className="back-this-project" onClick={handleModal}><h5>Back this project</h5></div>
                    <div className="bookmark" onClick={handleBookmark} ref={bookmarkRef}>
                        <div className="bookmark-icon">
                            <div className="rectangle">
                                <div className="rotated-square"></div>
                            </div>    
                        </div>
                        <div className="bookmark-button"><h5>{props.bookmark? 'Bookmarked' : 'Bookmark'}</h5></div>
                    </div>
                </div>
            </div>
        </div>
    )
}