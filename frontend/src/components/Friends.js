import React from "react";
import "./Friends.css";

const friends = [
  { name: "Vincent Wheeler", username: "nofiltermick", img: "https://i.pinimg.com/736x/a9/d6/fa/a9d6fae1e2514b97d127475bb4d4111d.jpg" },
  { name: "Lauren Arnette", username: "laurenarnette", img: "https://i.pinimg.com/736x/68/66/47/686647f39b98e89eff8583cfadbea038.jpg" },
  { name: "Jessica Wagner", username: "jamewag", img: "https://i.pinimg.com/736x/17/7a/09/177a0946e5e7e92bec87cdacd0477f5e.jpg" },
  { name: "Lizzy Johnson", username: "lizzyjohnson", img: "https://i.pinimg.com/736x/9f/fd/37/9ffd374638476433881c7583678f2969.jpg" },
  { name: "Andre Llewlyn", username: "dralex", img: "https://i.pinimg.com/736x/d5/56/6f/d5566f34d21482ba20225f42d77e2ff1.jpg" },
  { name: "Nina Yamamura", username: "ninaryc", img: "https://i.pinimg.com/736x/bb/8e/f0/bb8ef02b027f6ece4aded3e45af119f4.jpg" },
  { name: "Hazel Jennings", username: "hazejennings", img: "https://i.pinimg.com/736x/8e/32/5c/8e325c195e05c0f30b51a358aacb7ed3.jpg" },
];

export default function FriendsList() {
  return (
    <div className="friends-container">
      <input type="text" className="search-box" placeholder="Search" />
      {friends.map((friend, index) => (
        <div key={index} className="friend">
          <img src={friend.img} alt={friend.name} />
          <div className="friend-info">
            <div className="friend-name">{friend.username}</div>
            <div className="friend-username">{friend.name}</div>
          </div>
          <button className="add-btn">Add</button>
        </div>
      ))}
    </div>
  );
}
