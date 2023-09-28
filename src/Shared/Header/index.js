import React from 'react'

const Header = () => {
  return (
    <div className='gap-[15%] flex bg-slate-400'>
            <div className='mx-10'><img src="https://websultanate.com/wp-content/uploads/2019/07/logo-white.png"/></div>
            <div><ul className='flex gap-20 m-6 opacity-50 hover:opacity-100'>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact</li>
            </ul></div>
        </div>
  )
}

export default Header