import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { links } from './constants'

const SideBar = () => {
    return (
        <nav className="hidden lg:block text-white py-3 h-[100vh] relative w-[20vw]">
            <div className='w-[20vw] h-full fixed top-0 bg-blue-700 '>
                <div className='flex gap-2 h-[10vh] items-center px-5'>
                    <AiOutlineMenu className="text-white text-2xl" />
                    <h3 className='font-semibold text-lgn'>myMSU</h3>
                </div>
                <div className="px-5 h-[90vh] overflow-y-auto">

                    <ul className="text-sm font-bold">

                        {
                            links.map((link) => {
                                return (<li className="flex items-center gap-2 py-2 hover:bg-blue-800 cursor-pointer" key={link.text}> {link.Icon} {link.text}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default SideBar