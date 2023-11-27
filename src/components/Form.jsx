import React from 'react'
import FormС from './FormС'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios';

import VideoBackground from '@/components/atoms/VideoBackground'

import { AllContexts } from '@/context/Context'

import useWindowDimensions from './hooks/useWindowDimensions'

const Form = (props) => {

	const [formData, setFormData] = useState()

	async function fetchData() {
        const formResponse = await axios.get(`${process.env.API_LINK}/block-form?populate=womanPhoto`)

        return {formRes: formResponse.data}
    }

	useEffect(() => {
        (async () => {
            const data = await fetchData()
            setFormData(data.formRes)
          })()
    }, [])

	const [width, height] = useWindowDimensions();

	return (
		<div className='flex flex-row flex-wrap container form-card px0 ov-visible'>
			<VideoBackground />
			<div className="cd-s-1"></div>
			<div className="formblock formblock-container relative cd5 cm4">
				<FormС 
					data={props.data2}
				/>
			</div>
			<div className="cd-s-1"></div>
			<div className={"z-100 woman cd5 cm4" + (width < 800 && ' hidden')}>
				<img src={`${process.env.API_LINK}${formData?.data.attributes.womanPhoto.data.attributes.url}`} alt="" />
			</div>
		</div>
	)
}

export default Form
