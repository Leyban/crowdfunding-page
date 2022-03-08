import { image } from "../images/image"

interface CProps {
    setPopup: React.Dispatch<React.SetStateAction<number>>
}

export const Completed: React.FC<CProps> = (props) => {

    const handleClick = () => {
        props.setPopup(0);
    }

    return ( 
        <div className="completed">
            <div className="completed-container">
                <img src={image.iconCheck} alt="Check" />
                <h2>Thanks for your support!</h2>    
                <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
                <div className="got-it" onClick={handleClick}>
                    <h5>Got it!</h5>
                </div>
            </div>
            
        </div>
    )
}