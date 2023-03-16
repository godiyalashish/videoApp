import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'

const SideBar = () => {
const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    if(!isMenuOpen) return null;
  return (
    <div className='px-2 py-4 w-40'>
        <div className='border-gray-100 border-t-2'>
            <ul className='p-2'>
                <li className='py-1'>Home</li>
                <li className='py-1'>Shorts</li>
                <li className='py-1'>Subscriptions</li>
            </ul>
        </div>
        <div className='border-gray-100 border-t-2'>
            <ul className='p-2'>
                <li className='py-1'>Trending</li>
                <li className='py-1'>Shoping</li>
                <li className='py-1'>Music</li>
                <li className='py-1'>Movies</li>
                <li className='py-1'>Gaming</li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar