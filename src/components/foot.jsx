import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsappRoundedIcon from '@mui/icons-material/WhatsappRounded';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

function Foot(){

  return (
    <div className = "mt-8" style = {{backgroundColor: "#bddc78"}}>
      <div className = "bg-grey-50 gap-0.5 h-1/4 w-full flex flex-col-reverse md:flex-row justify-around items-start">
        <div className = "p-3 text-center md:text-left basis-1 md:basis-1/3 md:pl-10">
          <ul>
            <div className = "flex text-sm pb-6">
              <p>Your friend, your guide and your partner in the journey of parenting</p>
            </div>
            <div className = "justify-center md:justify-start flex gap-12 pb-3">
              <a href = "https://www.facebook.com/Younglabs"><FacebookRoundedIcon/></a>
              <a href = "https://www.facebook.com/Younglabs"><InstagramIcon/></a>
              <a href = "https://www.facebook.com/Younglabs"><WhatsappRoundedIcon/></a>
            </div>
            <li className = "text-gray-800 text-sm">© 2022 All Rights Reserved. webpage</li>
          </ul>
        </div>

        <div className = "flex flex-row basis-1 md:basis-1/2">
          <div className = "p-3 md:basis-1/2">
            <p className = "text-gray-800 gap-0.5 text-base">Quick Links</p>
            <div className = "text-sm p-1 text-gray-600 hover:text-white flex item-center cursor-pointer">
              <a href = "/about">About</a>
            </div>
            <div className = "text-sm p-1 text-gray-600 hover:text-white flex item-center cursor-pointer">
              <a href = "/Privacy-Policy">Privacy Policy</a>
            </div>
            <div className = "text-sm p-1 text-gray-600 hover:text-white flex item-center cursor-pointer">
              <a href = "/tac">Terms & Conditions</a>
            </div>
            <div className = "text-sm p-1 text-gray-600 hover:text-white flex item-center cursor-pointer">
              <a href = "/sad">Shipping & Delivery </a>
            </div>
            <div className = "text-sm p-1 text-gray-600 hover:text-white flex item-center cursor-pointer">
              <a href = "/rraep">Return, Refunds & Exchange Policy</a>
            </div>
          </div>

          <div className = "p-3 md:pl-20">
            <ul>
              <p className = "text-gray-800 text-base">Address</p>
              <li className = " flex items-center cursor-pointer">
                <a href = "/somewhere">
                  <LocationOnIcon/>
                </a>
                <div className = "text-gray-600 text-sm p-1.5">
                  A-39, Sector - 4, Noida -201301
                </div>
              </li>
              <li className = " flex items-center cursor-pointer">
                <a href = "/somewhere">
                  <CallOutlinedIcon/>
                </a>
                <div className = "text-gray-600 text-sm p-1.5">
                  1-2345-56778568
                </div>
              </li>
              <li className = " flex items-center cursor-pointer">
                <a href = "/somewhere">
                  <MailOutlinedIcon/>
                </a>
                <div className = "text-gray-600 text-sm p-1.5">
                  info@mail.in
                </div>
              </li>
            </ul>
          </div>

        </div>



      </div>

    </div>
  )
}

export default Foot;
