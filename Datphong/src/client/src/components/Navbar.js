import React from 'react'

const Navbar = () => {
  return (
    <nav >
      <ul className='grid grid-flow-col gap-7 font-sans'>
        <li><a href="/">Máy bay + Khách sạn</a></li>
        <li><a href="/">Chỗ ở</a></li>
        <li><a href="/">Phương tiện di chuyển</a></li>
        <li><a href="/">Hoạt động</a></li>
        <li><a href="/">Phiếu giảm giá và ưu đãi</a></li>
        <li><a href="/">eSim</a></li>
      </ul>
    </nav>
  )
}

export default Navbar