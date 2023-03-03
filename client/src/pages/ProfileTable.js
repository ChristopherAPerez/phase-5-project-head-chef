import React, { useContext } from "react";
import { UserContext } from './components/App';

function ProfileTable() {

    const { user } = useContext(UserContext)

    return (
        <>
            <table className="profileTable">
                <tbody>
                    <tr>
                        <td>
                            <img className="profilePic" src={user.profile_pic} alt={user.profile_pic} width="150" height="150" />
                            <br></br>
                            <br></br>
                            <button className="editButton" onClick={() => setIsEditing(!isEditing)} >Edit Profile</button>
                        </td>
                        <td>
                            <p><b>Username: </b>{user.username}</p>
                            <p><b>About Me: </b>{user.bio}</p>
                        </td>
                    </tr >
                </tbody >
            </table >
        </>
    );
}

export default ProfileTable;