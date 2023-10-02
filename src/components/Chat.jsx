import React from 'react'
import {AiOutlineCamera, AiOutlineArrowLeft} from "react-icons/ai"
import {IoIosArrowDown} from "react-icons/io"
import {BsThreeDots} from "react-icons/bs"
import {BiTrendingUp, BiEdit} from "react-icons/bi"
import "../styles/chat.scss"
import { Link } from 'react-router-dom'

const Chat = () => {
  return (
    <div className="navchat">
        <div className="navhe">
             <Link to={"/"}><AiOutlineArrowLeft className='back' /></Link>
             <h4>jay_shree_ram</h4>
             <IoIosArrowDown />
             <BsThreeDots />
             <BiTrendingUp />
             <BiEdit />
             </div>
        <div className="search">
        <input type="search" placeholder='search' />
        <p>filter</p>
        </div>
       <div className="note">
        <img src="https://imgs.search.brave.com/DmqtoMgh0G1BQslHhUm-zJqvu01TPqmUE74DJxZXwRE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly92YXJp/ZXR5LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wNi9h/dmF0YXItMS5qcGc_/dz0xMDAwJmg9NTYz/JmNyb3A9MQ" alt="" />
        <h2>+</h2>
        <p>rabble_razz</p>
       </div>
       <div className="button">
        <button className='prime'>Primary</button>
        <button>general</button>
        <button>Request</button>
       </div>
       <div className="chatting">
        <img src="https://imgs.search.brave.com/8_hq5numl571mC8QQghEuR7-_8EtcJQBEu1CbRzI0bo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5Ua3pOakpo/WWpRdE5qVTBZeTAw/WTJNM0xXSTJaRGd0/TkRSaFptTmxOREZq/TWpRNVhrRXlYa0Zx/Y0dkZVFYVnlPRGsy/T0RJM01UVUAuanBn" alt="" />
       <div className="name"> <h2>Its Doremon</h2>
        <p>Sent 1h ago</p></div>
        <AiOutlineCamera className='camera' />
       </div>

       <div className="chatting">
        <img src="https://imgs.search.brave.com/mMJE4UDFIFyz0LPPbbHXYh0AcZHMD9pDBv-ft2VDNhU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y25ldC5jb20vYS9p/bWcvcmVzaXplLzEx/YWE0ZWIxNGU1NDc5/YTk1NjllN2NmNGQ4/ODdmMTFhYjA2NDg1/MTIvaHViLzIwMjAv/MDUvMTgvNWJhYzhj/YzEtNGJkNS00NDk2/LWE4YzMtNjZhNmNk/MTJkMGNiL2ZiLWF2/YXRhci0yLmpwZz9h/dXRvPXdlYnAmd2lk/dGg9NzY4" alt="" />
       <div className="name"> <h2>Madhusmita Das</h2>
        <p>Sent 1h ago</p></div>
        <AiOutlineCamera className='camera' />
       </div>

       <div className="chatting">
        <img src="https://imgs.search.brave.com/HMBHP-XvW7uj79Q82Z8t3F2RXa35JArbqVbJ6IFK3AY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXIuZG9nL2xh/cmdlLzIwNTMyNTA1/LmpwZw" alt="" />
       <div className="name"> <h2>chichan</h2>
        <p>Sent 1h ago</p></div>
        <AiOutlineCamera className='camera' />
       </div>

       <div className="chatting">
        <img src="https://imgs.search.brave.com/czfZfBxpTqwYCx3vv-lXAszblDLVi8LAaJge-qiw_9o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzBlL1NhbG1hbl9L/aGFuLmpwZw" alt="" />
       <div className="name"> <h2>Selmon_Bhoi</h2>
        <p>Sent 1h ago</p></div>
        <AiOutlineCamera className='camera' />
       </div>

       <div className="chatting">
        <img src="https://imgs.search.brave.com/3axEL1aV-Cm0HXWBmEJ2UsOTOEb81KYQHOlyfV7xyNo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZ3FpbmRpYS5j/b20vcGhvdG9zLzY1/MDQwMDM5YjBmMDZh/OGEzYzhjYjk2ZC9t/YXN0ZXIvd18xNjAw/LGNfbGltaXQvU1JL/LmpwZw" alt="" />
       <div className="name"> <h2>Sharuk_Khan</h2>
        <p>Sent 1h ago</p></div>
        <AiOutlineCamera className='camera' />
       </div>

       <div className="chatting">
        <img src="https://imgs.search.brave.com/KXlNM3ghgwPXZVcR62Fx2fMOQ3w3EhXKOppTICnJbBY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vemVuYnVzaW5l/c3MvaW1hZ2UvdXBs/b2FkL3YxNjcwNDQ1/MDQwL2xvZ2FzdGVy/L2xvZ2FzdGVyLTIw/MTktMDItMDA3NS10/LXBhbmRhLWxvZ28t/My5qcGc" alt="" />
       <div className="name"> <h2>Anshuman_Rout</h2>
        <p>Sent 1h ago</p></div>
        <AiOutlineCamera className='camera' />
       </div>

       <div className="chatting">
        <img src="https://imgs.search.brave.com/2CbZMWu8dHfqNY4w0m7T4A2N7enGA1Z8bnSSidptsD4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzcxLzY1LzQy/LzM2MF9GXzcxNjU0/MjkxXzdvTjRLbmcx/S0NqNHViOXp0Mmo1/SXExUkN3eGlSWFJP/LmpwZw" alt="" />
       <div className="name"> <h2>Rabble_Razz</h2>
        <p>Sent 1h ago</p></div>
        <AiOutlineCamera className='camera' />
       </div>

       <div className="chatting">
        <img src="https://imgs.search.brave.com/b61YCihEEP25bEl6a2ANZW364cQfg3Ct-nEXDTlCxAQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jYXJ0b29uLWRv/Zy1zaXR0aW5nLWJs/dWUtc3VyZmFjZV84/ODE2OTUtMjM5NTQu/anBnP3NpemU9NjI2/JmV4dD1qcGc" alt="" />
       <div className="name"> <h2>Manas_Ranjan_parida</h2>
        <p>Sent 1h ago</p></div>
        <AiOutlineCamera className='camera' />
       </div>

       <div className="chatting">
        <img src="https://imgs.search.brave.com/l3WouwtLheM6APECLMmU60sIOa5O7s29NMOsMeYhz2Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlptUTVOR0Zp/TldFdE1tTXlNQzAw/TURkaUxUZzRZamt0/T0dZNVl6YzJNRFV4/TVRFMVhrRXlYa0Zx/Y0dkZVFYVnlOVEE0/TnpZMU16WUAuanBn" alt="" />
       <div className="name"> <h2>Pratyus</h2>
        <p>Sent 1h ago</p></div>
        <AiOutlineCamera className='camera' />
       </div>


       <div className="chatting">
        <img src="https://imgs.search.brave.com/vhTAQLKjvIl1-5sOnUYvYpZIjEjL4543KR-tBpP_dM0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/NDY1MDk3L3Bob3Rv/L2h0bWwtY29kZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/cUlIWldfc3JaTkZI/RzVjamVrbGkwLU9T/UzRZbjlWSWNtcFl5/V19jS3B3MD0" alt="" />
       <div className="name"> <h2>Subasis_panda</h2>
        <p>Sent 1h ago</p></div>
        <AiOutlineCamera className='camera' />
       </div>
    </div>
  )
}

export default Chat