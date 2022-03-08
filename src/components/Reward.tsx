import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

export interface Props {
    title: string;
    details: string;
    price?: number;
    inventory?: number;
    modal: number;
}

interface RProps extends Props{
    setPopup: React.Dispatch<React.SetStateAction<number>>
}

export const Reward: React.FC<RProps> = (props) => {
    const modalSelected = useContext(ModalContext);

    let containerClass: string;
    if (props.inventory){containerClass = 'reward-container'}
    else {containerClass = 'reward-container unavailable'}

    const handleClick = () => {
        modalSelected?.setModal(props.modal);
        if (props.inventory) {props.setPopup(1)};
    }

    return (
        <div className={containerClass}>
            <div className="title-block">
                <h3 className="title">{props.title}</h3>    
                <p className="price">Pledge ${props.price} or more</p>
            </div>
            <p>{props.details}</p>
            <div className="bottom-part">
                <div className="inventory">
                    <h2>{props.inventory}</h2>
                    <p>left</p>
                </div>    
                <div className="selection-button" onClick={handleClick}>
                    <h5>{props.inventory? 'Select Reward': 'Out of stock'}</h5>
                </div>
            </div>
        </div>
    )
}