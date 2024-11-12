import iconHome from '../img/nav/home.svg'
import iconFolder from '../img/nav/folder.svg'
import iconBriefcase from '../img/nav/briefcase.svg'
import iconTool from '../img/nav/tool.svg'
import iconSun from '../img/nav/sun.svg'


export default function Home() {
    return (
        <div className="bg-black min-h-screen">
            <nav className='relative flex items-center justify-center my-8'>
                <div className="flex gap-8">
                    <img src={iconHome} alt="iconHome" />
                    <img src={iconFolder} alt="iconFolder" />
                    <img src={iconBriefcase} alt="iconBriefcase" />
                    <img src={iconTool} alt="iconTool" />
                </div>
                <div className='absolute right-8'>
                    <img src={iconSun} alt='iconSun' />
                </div>
            </nav>
            <section className='ml-64 mr-64'>
                <div className='py-44 bg-white rounded-[4rem]'>

                </div>
            </section>

            {/* 
            <style>
            </style> */}
        </div>
    )
}
