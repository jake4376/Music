import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config.js';
import Logo from '../../image/modacity-logo-white.png';

// export default function({ collapsed, styling }) {
export default function({ collapsed }) {
  return (
    <div
      className="isoLogoWrapper">
      {collapsed
        ? <div>
            <h3>
              <Link to="/dashboard">
                <i className={siteConfig.siteIcon} />
              </Link>
            </h3>
          </div>
        : <h3>
            <Link to="/dashboard">
              <span>Modacity</span>
            </Link>
          </h3>}
    </div>
  );
}
