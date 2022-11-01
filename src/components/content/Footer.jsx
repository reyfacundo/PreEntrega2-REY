import React from 'react';
import {memo} from 'react';

const Footer = () => {
    return (
        <>
            <footer>
  <div className="footer">
    <div className="row py-4">
      <div className="col-lg-2 col-md- mb-4 mb-lg-0 socials"><img src="img/logo.png" alt="" width={180} className="mb-3" />
        <ul className="list-inline mt-4">
          <li className="list-inline-item "><a href="#" target="_blank" title="twitter"><i className="fa fa-twitter socials" /></a></li>
          <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="fa fa-facebook  socials" /></a></li>
          <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="fa fa-instagram socials" /></a></li>
          <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><i className="fa fa-pinterest socials" /></a></li>
          <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"><i className="fa fa-vimeo socials" /></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

        </>
    );
}

export default memo(Footer);
