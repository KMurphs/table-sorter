import React from "react";
import './index.css';

// https://loading.io/css/

export class CSSLoaderEllipsis extends React.Component {
  render() {
    return <div className="css-loader lds-ellipsis"><div></div><div></div><div></div><div></div></div>;
  }
}


export class CSSLoaderDualRing extends React.Component {
  render() {
    return <div className="css-loader lds-dual-ring"></div>;
  }
}