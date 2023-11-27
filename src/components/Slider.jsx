import React, { useState, useEffect, useCallback, useRef } from 'react'
import Flickity from 'react-flickity-component'
import Image from 'next/image';
// Import Swiper styles


const Slider = ({house}) => {

	const [activeSlideIndex, setActiveSlideIndex] = useState(0)

	const flickityOptions = {
		initialIndex: 1,
		wrapAround: true,
		autoPlay: 2000
	}

	return (
		<div className='slider'>
			<Flickity
				className={'carousel'} // default ''
				elementType={'div'} // default 'div'
				options={flickityOptions} // takes flickity options {}
				disableImagesLoaded={false} // default false
			>
			{house?.data.attributes.Slider.map((slide, index) => {
				// console.log(slide.attributes.Slider)
				return (
					// <div className="slider-slide">
						<div key={index}>
							<div className="con">
							<Image
								key={slide.id+slide.SliderPhoto.data[0].id}
								src={'http://localhost:1337' + slide.SliderPhoto.data[0].attributes.formats.medium.url}
								width={700}
								height={400}
								quality={100}
								alt={slide.SliderPhoto.data[0].attributes.name}
							/>
							</div>
						</div>
					// {/* </div> */}
				)
			})}
			</Flickity>
		</div>
	)
}

export default Slider
