'use client'

import React, { useEffect, useState } from 'react'
import ForeCast from './forecast'
import Navigate from './navigate'
import banner from '../../../public/Banner.png'
import banner1 from '../../../public/Banner1.png'
import banner2 from '../../../public/Banner2.png'
import banner3 from '../../../public/Banner3.png'
import banner4 from '../../../public/Banner4.png'


function Header() {
	const [currentImage, setCurrentImage] = useState(0)

	const images = [banner.src, banner1.src, banner2.src, banner3.src, banner4.src]

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((prevIndex) =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1
			);
		}, 3000);

		return () => clearInterval(interval);
	}, [images.length]);

	return (
		<header className='relative h-screen'
			style={{
				backgroundImage: `url(${images[currentImage]})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				transition: 'background-image 1.5s ease-in-out',
			}}>
			{/* ForeCast */}
			<section className='absolute top-6 left-32 px-3 py-2'>
				<ForeCast />
			</section>
			<section>
				<Navigate />
			</section>

		</header>
	)
}

export default Header
