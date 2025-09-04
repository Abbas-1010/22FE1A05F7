import React, { useState } from "react";
import UrlCard from "./UrlCard";

function Home({ urls, addUrl, registerClick }) {
  const [form, setForm] = useState({ url: "", code: "", expiry: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.url) return;
    addUrl(form.url, form.code, form.expiry);
    setForm({ url: "", code: "", expiry: "" });
  };

  const handleLinkClick = (e, u) => {
    e.preventDefault();
    const now = new Date();
    const expiryTime = new Date(u.expiry);

    if (now <= expiryTime) {
      registerClick(u.shortCode, "direct");
      window.open(u.longUrl, "_blank", "noopener,noreferrer");
    } else {
      registerClick(u.shortCode, "link expired");
      alert("This link has expired and cannot be used.");
    }
  };

  return (
    <div className="home">
      {/* Form */}
      <div className="form-card">
        <form onSubmit={handleSubmit} className="url-form">
          <input
            type="text"
            placeholder="Enter the original URL"
            value={form.url}
            onChange={(e) => setForm({ ...form, url: e.target.value })}
            className="form-input"
            required
          />
          <input
            type="text"
            placeholder="Custom short code (optional)"
            value={form.code}
            onChange={(e) => setForm({ ...form, code: e.target.value })}
            className="form-input"
          />
          <input
            type="datetime-local"
            value={form.expiry}
            onChange={(e) => setForm({ ...form, expiry: e.target.value })}
            className="form-input"
          />
          <button type="submit" className="form-button">Shorten URL</button>
        </form>
      </div>

      {/* URL List */}
      <div className="url-list">
        {urls.map((u) => (
          <UrlCard key={u.id} url={u} handleLinkClick={handleLinkClick} />
        ))}
      </div>
    </div>
  );
}

export default Home;
