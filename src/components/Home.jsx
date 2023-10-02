import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { ImArrowUpRight2 } from "react-icons/im";
import { MdOutlineModeComment } from "react-icons/md";
import {MdSaveAlt} from "react-icons/md"
import {BiDotsVerticalRounded} from "react-icons/bi"
import "../styles/home.scss"


const Home = () => {
  return (
    <div className="home">
        <div className="name">
            <img src="https://imgs.search.brave.com/2PyG7OApIGJKuo5GlmDM6srfl3wSryJaIhxo6Rohg84/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/YmhhZ3dhbmJoYWph/bi5jb20vYmhhZ3dh/bi12aXNobnUvYmhh/Z3dhbi12aXNobnUt/aW1hZ2VzLXdhbGxw/YXBlcnMvbG9yZC1y/YW1hLWhkLXdhbGxw/YXBlcnMuanBn" alt="" />
            <p>jay_shree_ram</p>
            <BiDotsVerticalRounded className='dot' />
        </div>

        <img src="https://imgs.search.brave.com/x0AShfPtwyf19HlHtXeNEhnKEMvwCTH2EIZ7MPTHK2g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qll6QmpPVGcy/TWpndFkyTXhOaTAw/WkRRNExUZzVZakV0/TW1NeE9EQTNOVE15/TUdKa1hrRXlYa0Zx/Y0dkZVFYVnlPRFUw/TWpJek1EQUAuanBn" alt="" />

        <a href=""><AiOutlineHeart className='share' /></a>
        <a href=""><MdOutlineModeComment className='share' /></a>
       <a href="">
        <ImArrowUpRight2 className='share' />
       </a>
       <a href=""><MdSaveAlt className='share2'/></a>

       <h4>1,000,000 likes</h4>
      <p>jay_shree_ram <span>On the path of bhakti yoga, help is proffered and spirits are healed through love—through the soul’s love for that which is eternal, and through the love of the eternal for each soul.</span></p>


      <div className="name">
            <img src="https://i.ibb.co/gPPbPry/Whats-App-Image-2023-08-11-at-19-52-12-removebg-preview.png" alt="" />
            <p>rabble_razz</p>
            <BiDotsVerticalRounded className='dot' />
        </div>

        <img src="https://imgs.search.brave.com/e3K0rLNkmcbaWhqpJgY31Hef7snIxkdPiykoR_MEL_4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTM0/NzA0NzUvcGhvdG8v/bXQta2FpbGFzaC10/aGUtaG9seS1tb3Vu/dGFpbi1pbi13ZXN0/ZXJuLXRpYmV0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1E/RGk2SU9rT1p2aHNw/bmhMd0JPZUdXVXhX/ZDdDaUZrWjdGMGhV/TUh1MDNBPQ" alt="" />

        <a href=""><AiOutlineHeart className='share' /></a>
        <a href=""><MdOutlineModeComment className='share' /></a>
       <a href="">
        <ImArrowUpRight2 className='share' />
       </a>
       <a href=""><MdSaveAlt className='share2'/></a>

       <h4>1,000,000 likes</h4>
      <p>jay_shree_ram <span>On the path of bhakti yoga, help is proffered and spirits are healed through love—through the soul’s love for that which is eternal, and through the love of the eternal for each soul.</span></p>
    </div>

  )
}

export default Home