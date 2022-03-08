import { createContext } from "react";
import { Props } from "../components/Reward";

const noReward: Props = { 
    title: 'Pledge with no reward',
    details: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    modal: 0
}

const bamboo: Props = {
    title: 'Bamboo Stand',
    details: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    price: 25,
    inventory: 101,
    modal: 1

}
const black: Props = {
    title: 'Black Edition Stand',
    details: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    price: 75,
    inventory: 64,
    modal: 2
}
const mahogany: Props = {
    title: 'Mahogany Special Edition',
    details: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    price: 200,
    inventory: 0,
    modal: 3
}

export const CrowdfundContext: React.Context<Props[]> = createContext([noReward, bamboo, black, mahogany]);



interface InputProviderProps {
    children: React.ReactNode;
}


export const CrowdfundContextProvider = ({ children }: InputProviderProps) => {
    return (
        <CrowdfundContext.Provider value={[noReward, bamboo, black, mahogany]}>
            {children}
        </CrowdfundContext.Provider>
    )
}