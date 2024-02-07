import React from 'react';
import meta from "../../../assets/images/meta.svg"
import twi from "../../../assets/images/twitter.svg"
import youtube from "../../../assets/images/youtube.svg"
import play from "../../../assets/images/play.svg"
const Socials = () => {
    return (
        <div className=' flex justify-between items-center'>
            <div className=' flex gap-4'>
                <div className=' flex  gap-3 cursor-pointer hover:scale-125 hover:transition'>
                    <img src={meta} alt="meta" />
                    <span>facebook</span>
                </div>
                <div className=' flex gap-3 cursor-pointer hover:scale-125 hover:transition'>
                    <img src={twi} alt="meta" />
                    <span>twitter</span>
                </div>
                <div className=' flex gap-3 cursor-pointer hover:scale-125 hover:transition'>
                    <img src={youtube} alt="meta" />
                    <span>youtube</span>
                </div>
            </div>
            <div className=' flex gap-3 cursor-pointer items-center'>
                <span>play video</span>
                <div className=' w-[55px] h-[55px] rounded-full flex justify-center items-center bg-[#fff]'>
                    <img className=' hover:scale-125 hover:transition' src={play} alt="videoplayer" />
                </div>
            </div>
        </div>
    )
}

export default Socials