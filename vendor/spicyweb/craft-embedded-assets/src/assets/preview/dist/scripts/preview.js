(()=>{"use strict";var e={168:(e,o,t)=>{t.r(o)}},o={};function t(i){var d=o[i];if(void 0!==d)return d.exports;var r=o[i]={exports:{}};return e[i](r,r.exports,t),r.exports}t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};t(168),window.EmbeddedAssetsPreview={addCallback(e){window.addEventListener("load",(()=>{var o,t,i;const d=null!==(i=null===(t=null===(o=window.parent)||void 0===o?void 0:o.EmbeddedAssetsPreviewMap)||void 0===t?void 0:t.get(e))&&void 0!==i&&i;"function"==typeof d&&window.requestAnimationFrame(d)}))},applyRatio(e){const o=Array.from(e.children).find((e=>"iframe"===e.tagName.toLowerCase()));if(void 0!==o){const t=o,i=t.offsetWidth,d=t.offsetHeight/i*100;e.classList.add("is-ratio"),e.style.paddingTop=`${d}%`}else e.classList.remove("is-ratio"),e.style.paddingTop=""}}})();
//# sourceMappingURL=preview.js.map