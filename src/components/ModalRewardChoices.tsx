import { useContext, useRef, useState } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { Props } from "./Reward";

interface MRCProps extends Props {
    setPopup: React.Dispatch<React.SetStateAction<number>>
}

export const ModalRewardChoices: React.FC<MRCProps> = (props) => {
    const modalSelected = useContext(ModalContext)!;
    const pledgeInput = useRef<HTMLInputElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const [tooltipText, setTooltipText] = useState('Enter your pledge here');

    let checkmarkClass: string;
    if (modalSelected.modal===props.modal){
        checkmarkClass = 'checkmark checked';
    } else {
        checkmarkClass = 'checkmark';
    }

    let modalContainerClass: string;
    if (modalSelected.modal===props.modal){
        modalContainerClass = 'modal-container checked';
    } else if (props.inventory===0) {
        modalContainerClass = 'modal-container empty';
    } else {
        modalContainerClass = 'modal-container';
    }

    const handleSubmit = () => {
        if (props.price){
            if(pledgeInput.current!.value){
                if (pledgeInput.current!.value && pledgeInput.current!.valueAsNumber >= props.price){
                    props.setPopup(2);
                } else {
                    setTooltipText('Pledge should be higher than $' + props.price as string);
                    tooltipRef.current!.className = 'tooltip visible';
                }
            } else {
                tooltipRef.current!.className = 'tooltip visible';
                setTooltipText('Enter your pledge here');
            }
            
        } else if (pledgeInput.current!.value) {
            props.setPopup(2);
        } else {
            tooltipRef.current!.className = 'tooltip visible';
            setTooltipText('Enter your pledge here');
        }
    }

    const handleSelect = () => {
        if (checkmarkClass==='checkmark'){
            if(modalContainerClass==='modal-container empty'){ return } 
            modalSelected.setModal(props.modal);
        } else if (checkmarkClass === 'checkmark checked'){
            modalSelected.setModal(5);
        }
        
    }
    

    return (
            <div className={modalContainerClass}>
                <div className="description">
                    <div className="radio-container">
                        <div className="custom-radio">
                            <span className={checkmarkClass} onClick={handleSelect}></span>
                        </div>
                    </div>
                    <div className="details">
                        <div className="title-and-price">
                            <h3>{props.title}</h3>
                            {props.price && <h5 className="price">Pledge ${props.price} or more</h5>}
                        </div>
                        
                        <div className="inventory desktop">
                            <h3>{props.inventory}</h3>
                            <p>{props.inventory!=undefined && 'left'}</p>
                        </div>
                    </div>
                </div>
                <p>{props.details}</p>
                <div className="inventory mobile">
                    <h3>{props.inventory}</h3>
                    <p>{props.inventory!=undefined && 'left'}</p>
                </div>
                {modalSelected.modal === props.modal &&
                    <div className="pledge-input">
                        <input type="number" placeholder="Enter your pledge" ref={pledgeInput}/>
                        <div className='tooltip' ref={tooltipRef}>
                            <span className="tooltip-text">{tooltipText}</span>
                            <div className="down-arrow"></div>
                        </div>
                        <div className="minimum-and-submit">
                            {props.price && <div className="minimum"><h5 className="bling">$</h5><h5>{props.price}</h5></div>}
                            <div className='submit' onClick={handleSubmit}><h5>Continue</h5></div>
                        </div>
                    </div>
                }
            </div>
    )
}