function Nav (){
  return (
    <>
    <div className = "w-full px-2 pb-px md:px-10 pt-2 md:pt-3 top-0">
      <div className = "grid grid-cols-2 md:flex sm:flex-row portrait:items-start justify-between">
        <div className = "p-3 pt-0">
          <span>
            <img alt = "logo" src = "/images/logo.jpg" style = {{width: "5rem"}}/>
          </span>
        </div>
        <div className = "sm:ml-8 flex justify-center space-x-5 mt-2.5 portrait:justify-self-end md:h-2/3 text-center bg-lime-500 max-w-fit hover:bg-lime-600 text-white rounded-md shadow-md text-xl lg:mr-12 ">
          <span>
            <button className = "font-semibold px-4 py-1 ">Login</button>
          </span>
        </div>
      </div>
    </div>
    <hr className = "w-full border-t border-gray-150 "/>
    </>
  )
}


export default Nav;
