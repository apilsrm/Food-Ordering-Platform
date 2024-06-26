import { assets } from "../../assets/frontend_assets/assets"

const Footer = () => {
  return (
    <div className="text-slate-200 bg-[#323232] flex flex-col items-center gap-5 pb-5 pt-20 px-10 " id="footer">
        <div className="w-full grid grid-cols-[2fr_1fr_1fr]  mobile:flex mobile:flex-col mobile:gap-[35px] gap-20 ">
            <div className="flex flex-col [align-items:start] gap-5">
                <img  className="cursor-pointer" src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquam delectus quia quidem ea rerum, totam modi consequatur necessitatibus itaque repudiandae harum dolorum non autem nesciunt in molestias molestiae accusamus.</p>
                <div className="flex flex-row">
                    <img className="cursor-pointer w-10 mr-4" src={assets.facebook_icon} alt="" />
                    <img className="cursor-pointer w-10 mr-4" src={assets.linkedin_icon} alt="" />
                    <img className="cursor-pointer w-10 mr-4" src={assets.twitter_icon} alt="" />
                </div>
                
            </div>
            <div className="flex flex-col items-start gap-5 ">
                <h2 className="text-white cursor-pointer font-medium text-xl">COMPANY</h2>
                <ul className="list-none ">
                    <li className="mb-2.5 cursor-pointer ">Home</li>
                    <li className="mb-2.5 cursor-pointer ">About Us</li>
                    <li className="mb-2.5 cursor-pointer">Delivery</li>
                    <li className="mb-2.5 cursor-pointer">Privacy Policy</li>
                </ul>
            </div>
            <div className="flex flex-col items-start gap-5">
                <h2 className="text-white cursor-pointer font-medium text-xl">GET IN TOUCH</h2>
                <ul className="list-none ">
                    <li className="mb-2.5 cursor-pointer">+1-111-111-1111</li>
                    <li className="mb-2.5 cursor-pointer">contact@email.com</li>
                </ul>
            </div>
        </div>
        <hr className=" w-full h-0.5 mx-0 my-5 bg-gray-500 border-none" />
        <p className="">Copyright 2024 @ Tomato.com - All Right Reserved. </p>
    </div>
  )
}

export default Footer
