import React from 'react'
import {AiFillHome, AiOutlineSearch, AiOutlinePlusSquare} from "react-icons/ai"
import "../styles/footer.scss"
import {MdOutlineVideoLibrary} from "react-icons/md"

const Footer = () => {
  return (
    <footer>
        <div className="foot">
            <AiFillHome />
            <AiOutlineSearch />
            <AiOutlinePlusSquare />
            <MdOutlineVideoLibrary />
            <img className='picture1' src="https://imgs.search.brave.com/6S4moB9nlYhC16vnkKuN3qAsKCMUaKKBmaRAVuMXx9k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I5LzJk/LzVlL2I5MmQ1ZWVj/OTAxODExMWZiMmRh/NWQ5NDAxMjAwYTcw/LmpwZw" alt="" />
        </div>
    </footer>
  )
}

export default Footer