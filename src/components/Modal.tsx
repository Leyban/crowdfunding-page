import { useContext } from "react"
import { CrowdfundContext } from "../contexts/CrowdfundContext"
import { image } from "../images/image";
import { ModalRewardChoices } from "./ModalRewardChoices"

interface MProps {
    setPopup: React.Dispatch<React.SetStateAction<number>>
}

export const Modal: React.FC<MProps> = (props) => {
    const choices = useContext(CrowdfundContext);

    const handleClose = () => { 
        props.setPopup(0);
    }

    return (
            <div className="modal">
                <div className="modal-popup-container">
                    <div className="close-button" onClick={handleClose}><img src={image.iconCloseModal} alt="close modal" /></div>
                    <h2>Back this project</h2>
                    <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                    <ModalRewardChoices {...choices[0]} setPopup={props.setPopup}/>
                    <ModalRewardChoices {...choices[1]} setPopup={props.setPopup} />
                    <ModalRewardChoices {...choices[2]} setPopup={props.setPopup} />
                    <ModalRewardChoices {...choices[3]} setPopup={props.setPopup} />
                </div>
                
            </div>
    )
}