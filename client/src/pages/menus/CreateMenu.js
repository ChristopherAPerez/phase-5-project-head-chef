import React, { useContext, useState } from "react";

import MenuBar from './MenuBar'
import MenuRecipes from './MenuRecipes';
import SendMenu from "./SendMenu";

import { UserContext } from '../../components/App';
import { MenuContext } from '../../components/App';
import { PublishContext } from '../../components/App';

function CreateMenu() {

    const { user } = useContext(UserContext)
    const { unpublish, setUnPublish, unpublishRecipes, setUnPublishRecipes } = useContext(PublishContext)
    const { menus, setMenus } = useContext(MenuContext)

    const [phoneNumber, setPhoneNumber] = useState('');

    function handleCreate() {
        const date = new Date();
        const dateString = date.toDateString();
        fetch("menus", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                menu_date: dateString,
                user_id: user.id,
                publish: false
            }),
        })
            .then((r) => {
                if (r.ok) {
                    r.json().then((menu) => {
                        setUnPublish(menu)
                    });
                } else {
                    r.json().then((err) => {
                        alert(err.error)
                    })
                }
            })
    }

    // function sendSms() {
    //     fetch('/send_sms', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             number: phoneNumber
    //         }),
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //         .catch(err => console.log(err));
    // }

    function publishMenu() {
        fetch(`menus/${unpublish.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                publish: true
            }),
        })
            .then((r) => {
                if (r.ok) {
                    r.json().then((menu) => {
                        setMenus([...menus, menu])
                        setUnPublish(null)
                        setUnPublishRecipes([])
                    })
                } else {
                    r.json().then((err) => {
                        alert(err.error)
                    })
                }
            })
    }

    function sendMenu() {
        // sendSms()
        setPhoneNumber('')
        setTimeout(() => {
            publishMenu()
        }, 3000);
    }

    return (
        <>
            <MenuBar />
            <div className="egg">
                {unpublish ?
                    <div>
                        <br></br>
                        <p><b>{unpublish.menu_date}</b></p>
                        {unpublishRecipes.map((recipe, index) => {
                            return <MenuRecipes key={index} recipe={recipe} index={index} />
                        })}
                        <br></br>
                    </div>
                    :
                    <>
                    </>
                }
                <br></br>
            </div>
            <br></br>
            {unpublish ? (
                <>
                    <SendMenu phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} sendMenu={sendMenu} />
                </>
            ) : (
                <>
                    <button className="button" onClick={handleCreate}>Create New Form</button>
                </>
            )}
        </>
    )
}

export default CreateMenu;