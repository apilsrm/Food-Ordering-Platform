
const Header = () => {
  return (
    <div className="h-[34vw] mx-auto my-[30px] relative bg-header-img bg-contain bg-no-repeat " >
        <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] mobile:max-w-[65%] bottom-[10%] left-[6vw] fade-in">
            <h2 className=" font-medium text-white text-[max(4.5vw,22px)]">Order your favourite food here</h2>
            <p className=" text-white text-[1vw] mobile:hidden">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our satisfy your cravings and elevate your dining experience, one delicious meal at a time. </p>
            <button className=" border-none text-[#747474]  font-medium  py-[1vw] px-[2.4vw] mobile:py-[2vw] mobile:px-[4vw] bg-white  text-[max(1vw,13px)] rounded-3xl">View Menu</button>
        </div>
      
    </div>
  )
}

export default Header
