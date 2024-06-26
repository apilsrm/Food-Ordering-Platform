import { assets } from "../../assets/frontend_assets/assets"

const AppDownload = () => {
  return (
    <div className="m-auto mt-24 text-[max(3vw,20px)] text-center font-medium" id="app-download">
      <p>For Better Experience Download <br /> Tomato App</p>
   <div className="flex justify-center gap-[max(2vw,10px)] mt-9">
    <img className=" w-[max(30vw,120px)] max-w-44  transitions pb-2 cursor-pointer hover:scale-105" src={assets.play_store} alt="Play Store" />
    <img className=" w-[max(30vw,120px)] max-w-44  transitions pb-2 cursor-pointer  hover:scale-105" src={assets.app_store} alt="App Store" />
   </div>
    </div>
  )
}

export default AppDownload
