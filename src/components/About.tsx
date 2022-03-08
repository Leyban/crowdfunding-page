import { useContext } from "react"
import { CrowdfundContext } from "../contexts/CrowdfundContext"
import { Reward } from "./Reward"

interface AProps {
    setPopup: React.Dispatch<React.SetStateAction<number>>
}

export const About: React.FC<AProps> = (props) => {
    const rewardMode = useContext(CrowdfundContext)

    return(
        <div className="about" id="About">
            <h3>About this project</h3>    
            <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
                to a more comfortable viewing height. Placing your monitor at eye level has the potential to 
                improve your posture and make you more comfortable while at work, helping you stay focused on 
                the task at hand. 
            </p>
            <p>
                Featuring artisan craftsmanship, the simplicity of design creates extra desk 
                space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>
            <Reward {...rewardMode[1]} setPopup={props.setPopup}/>
            <Reward {...rewardMode[2]} setPopup={props.setPopup}/>
            <Reward {...rewardMode[3]} setPopup={props.setPopup}/>
        </div>
    )
}