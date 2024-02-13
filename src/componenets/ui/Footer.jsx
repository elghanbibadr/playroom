import footerShadowLightImg from "../../assets/footerLightShadow.svg"


export const Footer = () => {
  return (
    <footer>
  <img className='mt-40 hidden md:block relative top-10' src={footerShadowLightImg} alt="footer shadow light image" />
<svg className='md:hidden' viewBox="0 0 393 169" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-868.789" y="0.711914" width="1366" height="175.965" fill="url(#paint0_linear_1_1202)"/>
<defs>
<linearGradient id="paint0_linear_1_1202" x1="-185.789" y1="274.436" x2="-185.789" y2="63.033" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9" stop-opacity="0.33"/>
<stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
    </footer>
  )
}
