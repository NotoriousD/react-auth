import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import axios from "axios";
import "./assets.css";

export const Assets = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const fetchAssets = async () => {
      const res = await axios.get(
        "https://www.winningpartner.com:26134/api/v1/default_assets",
        {
          headers: {
            Authorization:
              'Token token="RsKmjZCzqnTyfL1-yw8B", email="media@trafficlabel.com"',
          },
        }
      );
      console.log(res.data.default_assets);
      setAssets(res.data.default_assets);
    };
    fetchAssets();
  }, []);

  return (
    <>
      <Title title="Assets" />
      <div className="assets-list">
        {assets.map((asset) => (
          <div key={asset.id} className="asset">
            <div className="asset-thumb">
              <img
                src={`https://www.winningpartner.com:26134${asset.src}`}
                alt={asset.scheme}
              />
            </div>
            <div className="asset-description">
              <span className="casino-title">{`Casino: ${asset.scheme}`}</span>
              <div className="asset-link">
                <span className="tag">{`<a href="${asset.href}"><img src"https://www.winningpartner.com:26134${asset.src}" alt="${asset.scheme}" /></a>`}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
