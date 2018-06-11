// No actual JavaScript should be written in this file,
// this should only be used to import the other JavaScript
// files and import the main SCSS file for webpack to bundle it

if (process.env["CRYOMETRIX_BUILD"] !== "prod") {
  // console.log('-----------------');
  // console.log('-----------------');
  // console.log('-----------------');
  // console.log('ITS NOT PROD, SO IM IMPORTIGN');
  // console.log('-----------------');
  // console.log('-----------------');
  // console.log('-----------------');
  require("./watch");
}

import "./product-slider";
import "../sass/styles.scss";
import "./switch";
import "./header";
import "./calculator-popup"
// import './contact-popup'
