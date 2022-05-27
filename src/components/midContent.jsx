import AddLocationIcon from '@mui/icons-material/AddLocation';
import CakeIcon from '@mui/icons-material/Cake';
import GroupsIcon from '@mui/icons-material/Groups';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

function MidContent(){
  let detisClicked = false;
  function detailClickHandel(){
    if (!detisClicked){
      document.getElementById("detailcontent").style.display = "none";
      detisClicked = true;
      // console.log(isClicked)
    }else if (detisClicked === true) {
      document.getElementById("detailcontent").style.display = "block";
      detisClicked = false;
      // console.log(isClicked)
    }
  }

  let hwisClicked = false;

  function hwClickHandel(){
    if (!hwisClicked){
      document.getElementById("hwcontent").style.display = "none";
      hwisClicked = true;
      // console.log(isClicked)
    }else if (hwisClicked === true) {
      document.getElementById("hwcontent").style.display = "block";
      hwisClicked = false;
      // console.log(isClicked)
    }
  }

  let lgisClicked = false;

  function lgClickHandel(){
    if (!lgisClicked){
      document.getElementById("lgcontent").style.display = "none";
      lgisClicked = true;
      // console.log(isClicked)
    }else if (lgisClicked === true) {
      document.getElementById("lgcontent").style.display = "block";
      lgisClicked = false;
      // console.log(isClicked)
    }
  }


  return (
    <>
    <div className = "flex justify-center">
      <div className = "w-4/5 portrait:w-5/6 pt-4 flex flex-col">
        <div className = "flex text-sky-600 font-bold pb-4">
          <AddLocationIcon style = {{color: "#1E90FF"}}/>
          <p className = "mx-2">Maths</p>
        </div>
        <h1 className = "text-3xl pb-4 font-bold text-neutral-700 font-nunito">MENTAL MATHS</h1>
        <div className = "md:grid md:grid-cols-2 flex flex-col-reverse justify-items-start">
          <div className = "flex flex-col">
            <div>
              <p className = "text-lg py-2">
              Have Fun with Math! Get rid of your Math phobia. Become a Human Calculator yourself and be able to calculate 10-15 times faster than before!
              </p>
            </div>
            <div className = " py-4 grid grid-cols-2 ">
              <div className = "w-full flex justify-evenly items-center">
                <div className = " md:mx-4 w-full flex items-center md:gap-2 ">
                  <div className = "basis-1/4 py-4 rounded-l-md flex justify-center items-center pr-1 ">
                    <CakeIcon style = {{color: "#1E90FF"}}/>
                  </div>
                  <h3 className = "md:text-lg text-md text-gray-700 flex justify-start text-left w-full ">6 - 8 Years</h3>
                </div>
              </div>
              <div className = "w-full flex justify-evenly items-center">
                <div className = " md:mx-4 w-full flex items-center md:gap-2 ">
                  <div className = "basis-1/4 py-4 rounded-l-md flex justify-center items-center pr-1 ">
                    <GroupsIcon style = {{color: "#1E90FF"}}/>
                  </div>
                  <h3 className = "md:text-lg text-md text-gray-700 flex justify-start text-left w-full ">7 - 8 Students</h3>
                </div>
              </div>
              <div className = "w-full flex justify-evenly items-center">
                <div className = " md:mx-4 w-full flex items-center md:gap-2 ">
                  <div className = "basis-1/4 py-4 rounded-l-md flex justify-center items-center pr-1 ">
                    <AccessTimeIcon style = {{color: "#1E90FF"}}/>
                  </div>
                  <h3 className = "md:text-lg text-md text-gray-700 flex justify-start text-left w-full ">60 Mins Per Class</h3>
                </div>
              </div>
              <div className = "w-full flex justify-evenly items-center">
                <div className = " md:mx-4 w-full flex items-center md:gap-2 ">
                  <div className = "basis-1/4 py-4 rounded-l-md flex justify-center items-center pr-1 ">
                    <CalendarTodayIcon style = {{color: "#1E90FF"}}/>
                  </div>
                  <h3 className = "md:text-lg text-md text-gray-700 flex justify-start text-left w-full ">5 Weeks Duration</h3>
                </div>
              </div>
            </div>
            <div className = " border-2 rounded-md py-6 text-center bg-gray-100 text-slate-600">
              <p className = "p-1 text-2xl font-bold">
              ₹1499 INR For 10 Live Classes
              </p>
            </div>
          </div>
          <div className = "flex justify-center items-center">
            <img alt = "cover" className = "h-fit md:w-fit lg:w-5/6 portrait:mb-6 rounded-lg" src = "/images/courseCover.png"/>
          </div>
        </div>

        <div className = "mt-8 border-t-2 ">
          <p className = "font-nunito text-2xl text-gray-700 py-4 font-semibold ">
          Available Batches
          </p>
          <div className = "flex overflow-x-auto gap-3"></div>
        </div>

        <div className = "lg:w-full mx-auto my-6">
          <div className = "pb-4 rounded-lg flex flex-col border-2 px-4">
            <p className = " py-4 md:p-4 font-semibold text-2xl text-sky-700">
            Description
            </p>
            <p className = "md:pl-4">
            The course aims at enhancing mathematical skills and brain development. It improves one's number sense and helps them gain the ability to understand relationships between quantities, while stimulating their brain and improving observation skills.
            </p>
            <p className = "md:p-4 pt-4 font-semibold text-sky-700 text-xl"> Details <ExpandCircleDownIcon onClick = {detailClickHandel} id = "arwdetail"/></p>
            <div id = "detailcontent" className = "pb-4 md:pl-4" >
              <p>CLASS 1- Criss-cross multiplication</p>
              <p>CLASS 2- Subtraction with numbers near to 10 and multiples of 10 Cutoff method addition/ Vyavakalanam method Dot method addition/ Rekhanth method</p>
              <p>CLASS 3- Multiplication upto 100 (Done mentally)</p>
              <p>CLASS 4- Subtraction with Numbers near 10 and multiple of 10</p>
              <p>CLASS 5- Digit sum method Multiplication using base method part 1/ Nikhilam method, Fractions</p>
              <p>CLASS 6- Base method multiplication part 2 Division part 1</p>
              <p>CLASS 7 - LCM and HCF</p>
              <p>CLASS 8- Multiplication with series of 9 Division part 2</p>
              <p>CLASS 9- Multiplication with series of 1 Multiplication with 21,31 41 91 Base complement method subtraction/ Nikhil am method ,Division of any number by 11</p>
              <p>CLASS 10- Division with series of 9 Multiplication by digits 12 to 19 Multiplication with 5, 25, 125 Percentage</p>
            </div>
          </div>
        </div>

        <div className = "pb-4 rounded-lg border-2 flex px-4 flex-col">
          <p className = "md:p-4 pt-4 font-bold text-sky-700 text-2xl"> Homework <ExpandCircleDownIcon onClick = {hwClickHandel} /> </p>
          <div id = "hwcontent">
            <p className = "md:pl-4">Comprehensive home assignments will be provided , which will be an extension of what is done is the class.</p>
          </div>
        </div>

        <div className = "mt-6 pb-4 rounded-lg flex border-2 mt-4 px-4 flex-col">
          <p className = "md:p-4 pt-4 font-semibold text-sky-700 text-2xl"> Learning Goals <ExpandCircleDownIcon onClick = {lgClickHandel} /> </p>
          <div id = "lgcontent">
            <p className = "md:pl-4">Have Fun with Math! Get rid of your Math phobia. Become a Human Calculator yourself and be able to calculate 10-15 times faster than before!</p>
          </div>
        </div>

      </div>
    </div>

    </>
  )
}

export default MidContent;
