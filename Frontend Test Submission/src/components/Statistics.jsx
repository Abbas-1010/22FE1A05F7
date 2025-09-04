import React from "react";

function Statistics({ urls, clicks }) {
  return (
    <div className="statistics">
      {urls.map((u) => {
        const urlClicks = clicks.filter((c) => c.shortCode === u.shortCode);
        return (
          <div key={u.id} className="url-card">
            <p><strong>Short Url:</strong> http://{u.shortCode}</p>
            <p><strong>Original Url:</strong> <span className="long-url">{u.longUrl}</span></p>
            <p><strong>Expires On:</strong> {new Date(u.expiry).toLocaleString()}</p>
            <p><strong>Total Clicks:</strong> {urlClicks.length}</p>
            <ul className="click-list">
              {urlClicks.map((c) => (
                <li
                  key={c.id}
                  className={c.source === "link expired" ? "click-expired" : "click-valid"}
                >
                  {new Date(c.timestamp).toLocaleString()} | source: {c.source}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Statistics;
