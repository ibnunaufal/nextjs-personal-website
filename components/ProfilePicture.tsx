import React from "react";
import style from "./ProfilePicture.module.css";

interface ProfilePictureProps {
  width: string;
  height: string;
  boxshadow?: string;
}
const ProfilePicture: React.FC<ProfilePictureProps> = (props) => {
  return (
    <div
      style={{ width: props.width, height: props.height }}
      className={`${props.width == "50px" ? style.imageThin : style.image} hover:scale-150`}
    ></div>
  );
};

export default ProfilePicture;
