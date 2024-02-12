import editorMobileImg from "../../../assets/image 36 (3).png"
import editorDesktopImg from "../../../assets/editorbgdesktop2.png"

const EditorBox = () => {
  return (
    <div>
    <svg className='md:hidden'  viewBox="0 0 374 192" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.402832" y="0.622681" width="183.516" height="190.868" fill="#161718"/>
<circle cx="92.4807" cy="98.646" r="31.8557" fill="#8C72F4"/>
<rect x="63.3477" y="130.502" width="60.9886" height="60.9886" fill="#5BEDB0"/>
<rect x="189.984" y="0.622681" width="183.516" height="190.868" fill="#161718"/>
<circle cx="276.609" cy="98.646" r="31.8557" fill="#8C72F4"/>
<rect x="247.476" y="130.502" width="60.9886" height="60.9886" fill="#5BEDB0"/>
</svg>
    <div className='mt-6'>
      <img className='w-full md:hidden' src={editorMobileImg} alt="" /></div>
    <img className='w-full hidden md:block' src={editorDesktopImg} alt="" />
  </div>
  )
}

export default EditorBox