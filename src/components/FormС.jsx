// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik, dirty, isValid } from 'formik';
import * as Yup from "yup";
import MaskedInput from "react-text-mask";
import axios from 'axios';
import { motion } from "framer-motion";
import ScrollAnimation from '../components/animations/ScrollAnimation'


import { AllContexts } from '@/context/Context'

import { useRouter } from "next/router";

import { useState, useEffect, useContext } from 'react';

import Metrika from '@/components/utils/metrika'
import findValue from '@/components/utils/findValue'

const phoneNumberMask = [
	// "+", "7", " ",
	/[\+]/,
	/[1-9]/,
	" ",
	/\d/,
	/\d/,
	/\d/,
	" ",
	/\d/,
	/\d/,
	/\d/,
	" ",
	/\d/,
	/\d/,
	" ",
	/\d/,
	/\d/
  ];




const FormС = (data, props) => {
	const [togglePopup, setTogglePopup] = useState(false)
	const [isSchemaValid, setIsSchemaValid] = useState(false)
	const [disableInput1, setDisableInput1] = useState(true)
	const [disableInput2, setDisableInput2] = useState(true)	
	const [submitDelay, setSumbitDelay] = useState(true)
	const [focused, setFocused] = useState(false)
	const [focused2, setFocused2] = useState(false)
	const onFocus = () => setFocused(true)
	const onFocus2 = () => setFocused2(true)
	const onBlur = () => setFocused(false)
	const onBlur2 = () => setFocused2(false)
	const [onBlurOnce1, setOnBlurOnce1] = useState(false)
	const [onBlurOnce2, setOnBlurOnce2] = useState(false)
	const [formData, setFormData] = useState()
	const [metrikaData, setMetrikaData] = useState()
	const [submitDisable, setSubmitDisable] = useState(false)
	const [currentUrl, setCurrentUrl] = useState('')


	// console.log(data)


	const [phonesData, setPhonesData] = useState({})


	const {currentPage, currentComponent} = useContext(AllContexts)

	async function fetchData() {
        const formResponse = await axios.get(`${process.env.API_LINK}/block-form?populate=*`)
		const metrikaResponse = await axios.get(`${process.env.API_LINK}/metrikas?populate=deep`)
        return {formRes: formResponse.data, metrikaRes: metrikaResponse.data}
    }

    useEffect(() => {
		if (window.location.href) {
			const curUrl = window.location.href
			const clearUrl = curUrl.substring(curUrl.indexOf("/") + 2)
			const clearUrl2 = clearUrl.substring(clearUrl.indexOf("/"))
			// console.log(metrikaData, "OP")
			setCurrentUrl(clearUrl2)
		}
        (async () => {
            const data = await fetchData()
            // console.log(data)
            setFormData(data.formRes)
			setMetrikaData(data.metrikaRes)
          })()

    }, [])

	// useEffect(()=> {
	// 	if (metrikaData && currentUrl) {
	// 		var result = findValue(metrikaData, 'location', currentUrl)
	// 		console.log(result)
	// 		// Metrika(result)
	// 	}
	// }, [metrikaData, currentUrl])

	// вот тут нужно определять по currentUrl к какому счетчику относится данная страница



	useEffect(() => {
		const timer = setTimeout(() => {
			setDisableInput1(false)
			setDisableInput2(false)
		}, 1000);
		return () => clearTimeout(timer);
	}, [])

	setTimeout(() => {
		submitDelay ? '' : setSumbitDelay(true)
	}, 3000);


	
	// useEffect(() => {
	// 	console.log(currentPage, currentComponent)
	// }, [])




	const animateInput = {
		x: [100, 200],
		opacity: [0.5, 0],
		transition: {
			// type: 'spring',
			duration: 0.08,
			ease: [0.075, 0.82, 0.165, 1],
			stiffness: 1000 ,
			repeatType: 'reverse'
			// damping: 24
		}
	}

	const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) 

	// console.log(sevenDaysAgo)


	let day = sevenDaysAgo.getDate();
	let month = sevenDaysAgo.getMonth() + 1;
	let year = sevenDaysAgo.getFullYear();






	const schema = Yup.object({
		name: Yup.string()
				.min(3, 'Минимальное количество символов: 3')
				.required('Обязательное поле'),
		mobilephone: Yup.string()
				.min(16, 'Введите номер полностью')
				.required('Обязательное поле')

				.test('existenceNumber',
					function(value, formData) {

						// const arr = await fetchStrapiPhones()

						axios.get(`${process.env.API_LINK}/form-requests?populate=*&sort[0]=updatedAt%3Adesc&pagination[pageSize]=1000`)
							.then(function(res) {
								setPhonesData(res.data)
								// console.log(phonesData)
							})
							.catch(function(error) {
								return error
							})

						let phonesArr = [];
						
						phonesData.data?.map((item) => {
							phonesArr.push(item.attributes.phonenumber)
							return phonesArr
						})

						const booleanResult = !phonesArr.includes(value)
						// console.log(phonesData)
						// console.log(phonesArr)
						// console.log(booleanResult)
						// console.log(arr)
						return booleanResult === true ? true : this.createError({
							message: `Вы недавно уже отправляли заявку`,
							path: 'mobilephone', // Fieldname
						  })

					} 
				)
	  })



	const handleSchemaValue = (nameForm, numberForm) => {
	
	const obj = {
		name: nameForm,
		mobilephone: numberForm
	}

	setIsSchemaValid(schema.isValidSync(obj))
	// console.log(schema, schema.isValid(obj), schema.isValidSync(obj))
	// console.log(e.value)
	}

	const router = useRouter();
	const redirectHandler = (c) => {
		if (c === 'CreditStory1') { router.push('https://credistory.ru/rating') }
		else if (c === 'CreditStory2') { router.push('https://nbki.ru/nbki-history/') }
		else { null }
	}

	

	const submitBtnHandler = () => {
		// setRedirect(currentComponent)
		// console.log('click')
		setTogglePopup(!togglePopup)
		redirectHandler(currentComponent)
	}


	const formik = useFormik({
		initialValues: {
		  name: '',
		  mobilephone: '',
		},
		validationSchema: schema,
		onSubmit: function (values) {

			



			const STRAPI_API = `${process.env.API_LINK}/form-requests`
			const TOKEN = `${process.env.TOKEN}`;
			const CHAT_ID = `${process.env.CHAT_ID}`;
			const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;


			let message = `Новая заявка! \n\n<b>Имя:</b> ${values.name} \n<b>Телефон:</b> ${values.mobilephone} \n<b>Ссылка:</b> ${currentPage ? currentPage : 'Главная'} \n<b>Блок:</b> ${currentComponent}`;

			// if (creditStory1) {
			// 	axios.post(CS1_API, {
			// 		text: message
			// 	})
			// }

			// if (creditStory2) {
			// 	axios.post(CS2_API, {
			// 		text: message
			// 	})
			// }

			const c = metrikaData?.data?.filter(f => f.attributes.location === currentUrl)
			const cur = c[0]?.attributes?.metrika
			cur ? Metrika(Number(cur?.number), cur?.type, cur?.name) : ''
			// console.log(Number(cur?.number), c, currentUrl, "CURRENT M")

			axios.post(URI_API, {
				chat_id: CHAT_ID,
				parse_mode: 'html',
				text: message
			})

			axios.post(STRAPI_API,{
				data: {
					name: values.name,
					phonenumber: values.mobilephone
				}
			})

			//process.env.BX24

			axios.post(`${process.env.BX24}/crm.lead.add.json?FIELDS[TITLE]=Лид с сайта&FIELDS[NAME]=${values.name}&FIELDS[PHONE][0][VALUE]=${values.mobilephone}`)

		}
	  })
	return (
		<div className="flex flex-col form mtm mbm relative">
			<div className='form-top-text flex flex-col z-100'>
				<h2 className='mbs'>{formData?.data.attributes.title}</h2>
				<p className='mb0'>{formData?.data.attributes.description}</p>
			</div>
			<ScrollAnimation
				delay={0}
			>
				<form onSubmit={formik.handleSubmit} id={`${currentUrl}`} className='cd8 cm4 px0'>
					<div className='input-field relative mb ov-visible mtm'>
						<div className='input-container w-full relative'>

							<input
								disabled={disableInput1}
								autoComplete="off"
								type="text"
								name="name"
								id="name"
								placeholder=" "
								onFocus={(e) => {
									onFocus(e)
									setDisableInput2(true)
								}}
								// onHover={() => {
								// 	setDisableInput1(false)
								// }}
								onChange={(e) => {
									formik.handleChange(e)
									const timer = setTimeout(() => {
										handleSchemaValue(e.target.value, formik.values.mobilephone)
									}, 100);
									return () => clearTimeout(timer);
								}
								}
								onBlur={(e) => {
									onBlur(e)
									setDisableInput2(false)
									setOnBlurOnce1(true)
								}}
								value={formik.values.name}
							/>
							<label
								// initial={{x: 0, opacity: 1}}
								// animate={focused === false && formik.values.name === '' ? '' : animateInput}
								className={(focused === false && formik.values.name === '' ? 'label' : 'label animate')}
								htmlFor="name">
								Имя
							</label>
							<br />
							{formik.errors.name && onBlurOnce1 === true ? (
								<motion.div 
									transition={{
										duration: .2,
										ease: 'easeInOut'
									}}
									initial={{opacity: 0, scale: 0.9}}
									animate={{opacity: 1, scale: 1}}
									className="error-container absolute flex items-center">
									<span className='error-message'>{formik.errors.name}</span>
								</motion.div>
							) : ''}
						</div>
					</div>
					<div className='input-field relative mbm ov-visible mts'>
						<ScrollAnimation
							delay={0}
						>
							<div className='input-container w-full relative'>

								<MaskedInput
									disabled={disableInput2}
									guide={false}
									autoComplete="off"
									mask={phoneNumberMask}
									type="tel"
									name="mobilephone"
									id="mobilephone"
									placeholder=" "
									className=''
									onFocus={(e) => {
										if (formik.values.mobilephone === "") {
											// console.log("INPUT ACTIVE!!!!!!!!")
											formik.values.mobilephone = "+7 "
										}
										onFocus2(e)
										setDisableInput1(true)
										
									}}
									onChange={(e) => {
										formik.handleChange(e)
										const timer = setTimeout(() => {
											handleSchemaValue(formik.values.name, e.target.value)
										}, 100);
										return () => clearTimeout(timer);
									}
									}
									onBlur={(e) => {
										onBlur2(e)
										setDisableInput1(false)
										setOnBlurOnce2(true)
									}}
									// onBlur={formik.handleBlur} 
									value={formik.values.mobilephone.replace(/_/g, " ")}
								/>
								<label 
									className={(focused2 === false && formik.values.mobilephone === '' ? 'label2' : 'label2 animate')}
									htmlFor="phone">Телефон
								</label>
								<br /> 
								{formik.errors.mobilephone && onBlurOnce2 === true ? (
									<motion.div 
										transition={{
											duration: .2,
											ease: 'easeInOut',
											repeatType: 'mirror'
										}}
										initial={{opacity: 0, scale: 0.9}}
										animate={{opacity: 1, scale: 1}}
										exit={{ opacity: 0 }}
										className="error-container absolute flex items-center">
										<span className='error-message'>{formik.errors.mobilephone}</span>
									</motion.div>
								) : ''}
							</div>
						</ScrollAnimation>
					</div>
					<div className='form-button px0 justify-center'>
						<button 
							disabled={submitDelay && isSchemaValid ? false : true}  
							className={(submitDisable ? ' p-events-none' : " ") + ' button ' + (isSchemaValid === true ? "" : "disabled") }
							onClick={()=>submitBtnHandler()}
							type='submit'
						>
							<a className='py'>
								Оставить заявку
							</a>
						</button>
					</div>
				</form>
					<motion.div
						className={"flex flex-col popup " + (togglePopup === true ? 'active' : '')}

					>
						<div className="popup-container flex flex-col">
							{isSchemaValid ? <p className=''>{formData?.data.attributes.successMessage}</p> : <p className=''>{formData?.data.attributes.rejectionMessage}</p>}
							<div className='ok-button-container flex justify-end'>
								<button 
									className='action action--light '
									onClick={() => {setTogglePopup(!togglePopup); setSubmitDisable(true)}}
								>OK</button>
							</div>
						</div>
					</motion.div>
			</ScrollAnimation>
		</div>
	);
}

export default FormС
