import React from "react";

function UrlCard({ url, handleLinkClick }) {
  return (
    <div className="url-card">
      <p>
        <strong>Short Url:</strong>{" "}
        <a
          href={`http://${url.shortCode}`}
          onClick={(e) => handleLinkClick(e, url)}
          className="short-link"
        >
          http://{url.shortCode}
        </a>
      </p>
      <p>
        <strong>Original Url:</strong>{" "}
        <span className="long-url">{url.longUrl}</span>
      </p>
      <p>
        <strong>Expires On:</strong> {new Date(url.expiry).toLocaleString()}
      </p>
    </div>
  );
}

export default UrlCard;
