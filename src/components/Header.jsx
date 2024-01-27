import { BiSolidCricketBall } from "react-icons/bi";

const Header=()=>{
    return(
        <div>
           <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="text-white bg-indigo-500 text-2xl p-1 rounded-full " ><BiSolidCricketBall/></span>
      <span className="ml-3 text-xl">CrickNews</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">HOME</a>
      <a className="mr-5 hover:text-gray-900">ICC-RANKING</a>
      <a className="mr-5 hover:text-gray-900">MATCH-LIST</a>
      <a className="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
  </div>
</header>
        </div>
    )
}

export default Header