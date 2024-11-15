import { FaFolder, FaHome } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { AiFillTool } from "react-icons/ai";
import { IoSunnySharp } from "react-icons/io5";
import IconBriefcase from '../img/firstSection/briefcase.svg'
import IconFigma from '../img/firstSection/figma.svg'
import IconDatabase from '../img/firstSection/database.svg'
import IconLike from '../img/firstSection/like.svg'
import IconComputer from '../img/firstSection/computer.svg'
import IconFolder from '../img/firstSection/folder.svg'
import IconLamp from '../img/firstSection/lamp.svg'
import IconCellphone from '../img/firstSection/cellphone.svg'
import ProfilePhoto from '../img/firstSection/vini.png'
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <div className="bg-black min-h-screen">
            <nav className='relative flex items-center justify-center my-8'>
                <div className="flex gap-8">
                    <FaHome size={30} color="white" />
                    <FaFolder size={30} color="white" />
                    <FaBriefcase size={30} color='white' />
                    <AiFillTool size={30} color="white" />
                </div>
                <div className='absolute right-8'>
                    <IoSunnySharp size={30} color="white" />
                </div>
            </nav>
            import {motion} from 'framer-motion';

            <section className='ml-64 mr-64 mt-10'>
                <div className='flex py-10 rounded-[4rem] bg-[#7C8C84] relative overflow-hidden'>
                    <div className="pt-28 px-14 max-w-60 bg-gradient-to-tr from-[#CF4305] to-[#971F04] rounded-[4rem] ml-16 relative overflow-hidden z-10">
                        <img src={ProfilePhoto} alt="ProfilePhoto" />
                    </div>
                    <div className="flex items-center ml-12 text-white font-[anton] text-[96px] leading-[110px] tracking-[5px] z-20">
                        <h1>VINICIUS<br />CORADINI</h1>
                    </div>
                    <div className="absolute bottom-[-65px] left-96 z-0">
                        <motion.img
                            src={IconBriefcase}
                            alt="IconBriefcase"
                            whileHover={{ scale: 1.1, y: -10, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />
                    </div>
                    <div className="absolute left-64 top-32 z-0">
                        <motion.img
                            src={IconFigma}
                            alt="IconFigma"
                            whileHover={{ scale: 1.1, x: 10, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />
                    </div>
                    <div className="absolute top-4 left-[40%] z-0">
                        <motion.img
                            src={IconDatabase}
                            alt="IconDatabase"
                            whileHover={{ scale: 1.1, y: -10, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />
                    </div>
                </div>
                <div className="absolute right-[42%] top-[380px]">
                    <motion.img
                        src={IconLike}
                        alt="IconLike"
                        whileHover={{ scale: 1.1, y: 10, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </div>
                <div className="absolute top-20 right-[35%]">
                    <motion.img
                        src={IconComputer}
                        alt="IconComputer"
                        whileHover={{ scale: 1.1, y: -10, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </div>
                <div className="absolute right-[26%] top-64">
                    <motion.img
                        src={IconFolder}
                        alt="IconFolder"
                        whileHover={{ scale: 1.1, y: -10, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </div>
                <div className="absolute right-[9%] top-28">
                    <motion.img
                        src={IconLamp}
                        alt="IconLamp"
                        whileHover={{ scale: 1.1, y: -10, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </div>
                <div className="absolute right-[11%] top-[380px]">
                    <motion.img
                        src={IconCellphone}
                        alt="IconCellphone"
                        whileHover={{ scale: 1.1, x: 10, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </div>
            </section>


            <section>
                <div className="ml-64 mr-64 mt-28">
                    <h1 className="text-white font-[anton] text-[96px] leading-[110px] tracking-[5px]">DESENVOLVEDOR</h1>
                    <h1 className="text-[#353334] font-[anton] text-[96px] leading-[110px] tracking-[5px]">FULLSTACK</h1>
                </div>
            </section>


            {/* 
            <style>
            </style> */}
        </div>
    )
}
