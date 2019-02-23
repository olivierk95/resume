import React from "react"

// import Image from "../components/image"
import hairImg from "../images/profile_picture_destroyed_hair.png"
import eyesImg from "../images/profile_picture_destroyed_eyes.png"
import noseImg from "../images/profile_picture_destroyed_nose.png"
import mouthImg from "../images/profile_picture_destroyed_mouth.png"
import shadowImg from "../images/profile_picture_destroyed_shadow.png"

//import css
import "../styles/components/profilepicture.css"

const ProfilePicture = () => (
    <div className="profile-picture">
        <img src={hairImg} id="hair" />
        <img src={eyesImg} id="eyes" />
        <img src={noseImg} id="nose" />
        <img src={mouthImg} id="mouth" />
        <img src={shadowImg} id="shadow" />
    </div>
);

export default ProfilePicture;