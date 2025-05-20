/*!
 * Copyright by Space Squirrel Ltd.
 */
function a(a){const n=a.activeIndex,i=a.params.slidesPerView;Array.from(a.slides).forEach(((a,r)=>(a.setAttribute("tabindex",""+(n-1<r&&r<n+i?0:-1)),a.setAttribute("aria-hidden",`${!(n-1<r&&r<n+i)}`),a)))}export{a as s}