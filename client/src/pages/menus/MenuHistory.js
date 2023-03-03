import React, { useContext } from "react";

import MenuBar from "./MenuBar";
import MenuHistoryCard from './MenuHistoryCard'

import { MenuContext } from '../../components/App';

function MenuHistory() {

    const { menus } = useContext(MenuContext)

    return (
        <>
        <MenuBar />
        <br></br>
            {menus.map((menu) => {
                const id = menu.id * Math.random()
                return <MenuHistoryCard key={id} menu={menu}/>
            })}

        </>
    )
}

export default MenuHistory;