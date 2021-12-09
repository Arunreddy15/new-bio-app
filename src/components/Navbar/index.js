import { useState } from "react";
import { Link } from "react-router-dom";
import { BsJournalBookmark } from "react-icons/bs";
import { BiMessageSquareDetail,BiMenu } from "react-icons/bi";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import "./navbar.css";

const Navbar = () => {
  const [clicked,setMenu]=useState(false)



  return(
  <nav className="nav-container">
    <div className="nav-inner-container">
      <Link to="/" className="nav-links">
        <h1 className="logo">
          ab<span>.</span>
        </h1>
      </Link>
      <ul className="navigation-links">
        <li>
          <Link to="/" className="nav-links">
            <button type="button" className="nav-btn">
              <AiOutlineHome size={26}></AiOutlineHome>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-links">
            <button type="button" className="nav-btn">
              <AiOutlineUser className="ding" size={26}></AiOutlineUser>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/career" className="nav-links">
            <button type="button" className="nav-btn">
              <BsJournalBookmark size={23}></BsJournalBookmark>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/info" className="nav-links">
            <button type="button" className="nav-btn">
              <BiMessageSquareDetail size={26}></BiMessageSquareDetail>
            </button>
          </Link>
        </li>
      </ul>
      {clicked?
      <ul className="navigation-links-mob">
        <li>
          <Link to="/" className="nav-links">
            <button type="button" className="nav-btn">
              <AiOutlineHome size={24}></AiOutlineHome>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-links">
            <button type="button" className="nav-btn">
              <AiOutlineUser className="ding" size={24}></AiOutlineUser>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/career" className="nav-links">
            <button type="button" className="nav-btn">
              <BsJournalBookmark size={21}></BsJournalBookmark>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/info" className="nav-links">
            <button type="button" className="nav-btn">
              <BiMessageSquareDetail size={24}></BiMessageSquareDetail>
            </button>
          </Link>
        </li>
       
      </ul>:""}<BiMenu className="menuham" size={26} onClick={()=>setMenu(clicked=>!clicked)}/>
    </div>
  </nav>
);}
export default Navbar;
