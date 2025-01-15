import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../../../public/Logo.png'

function Navigate() {
	return (
		<nav>
			<ul className='flex justify-center items-end gap-10'>
				<li>
					<Link href='#' className='text-white text-xl font-medium 2xl:text-2xl'>Kết nối bản địa</Link>
				</li>
				<li>
					<Link href='#' className='text-white text-xl font-medium 2xl:text-2xl'>Trải nghiệm</Link>
				</li>
				<li>
					<Link href='#' className='text-white text-xl font-medium 2xl:text-2xl'>Lễ hội & Sự kiện</Link>
				</li>
				{/* logo */}
				<li className='flex items-center'>
					<Link href='#'>
						<Image src={logo} alt='Logo Traveloge' width={190} className="align-middle mt-" />
					</Link>
				</li>
				<li>
					<Link href='#' className='text-white text-xl font-medium 2xl:text-2xl'>Đặt chỗ của tôi</Link>
				</li>
				<li>
					<Link href='#' className='text-white text-xl font-medium 2xl:text-2xl'>Dấu chân của tôi</Link>
				</li>
				<li>
					<Link href='#' className='text-white text-xl font-medium 2xl:text-2xl'>Hỗ trợ</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navigate