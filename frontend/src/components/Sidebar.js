import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const shortcuts = [
    "📃 News Feed",
    "📩 Inbox",
    "📷 Images",
    "🎥 Videos",
    "📬 Notifications",
    "⚙ Settings",
    "🚪 Logout",
  ];

  return (
    <aside className="sidebar">
      <h3>Shortcuts</h3>
      <nav>
        <ul>
          {shortcuts.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}