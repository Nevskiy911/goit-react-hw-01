import FriendListItem from "../FriendListItem/FriendListItem";
import style from "./FriendList.module.css"

export default function FriendList({ friends }) {
  return (
    <ul className={style.list}>
      {friends.map(({ avatar, name, isOnline }, index) => (
        <li key={index}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}
