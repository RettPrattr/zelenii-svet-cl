import React, { useState, useEffect, useRef, useMemo, useCallback, useContext } from 'react'
import ReactDOM from 'react-dom';
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import { motion, animate } from "framer-motion";
import Button from '@/components/atoms/Button'
// import { Range } from 'react-range';
import * as Yup from "yup";
import MaskedInput from "react-text-mask";
import axios from 'axios';
import FormС from '@/components/FormС';

import VideoBackground from './atoms/VideoBackground';

import ScrollAnimation from './animations/ScrollAnimation'

const MIN = 500000
const MAX = 20000000
const STEP = 100000

const itemVariants = {
	open: {
	  opacity: 1,
	  y: 0,
	  transition: { type: "spring", stiffness: 300, damping: 24 }
	},
	closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };

function Counter({ from, to, className}) {
	const nodeRef = useRef();

	useEffect(() => {
		const node = nodeRef.current;

		const controls = animate(from, to, {
		duration: 1,
		onUpdate(value) {
			let newValue = parseInt(value)
			node.textContent = newValue;
		}
		});

		return () => controls.stop();
	}, [from, to]);
	// return <p ref={nodeRef}/>
	return <div className={'div-result-' + (className) + ' font-5-bold'}><p className={'p-result-' + (className)} ref={nodeRef}/> &nbsp;руб / мес</div>
}

const Calculator = ({rtl}) => {

	// const dateC = new Date();

	// let day = dateC.getDate();
	// let month = dateC.getMonth() + 1;
	// let year = dateC.getFullYear();

	// let currentDate = `${day}.${month}.${year}`;

	const services = [
		{ id: 0, name: 'Аннуитетный' },
		{ id: 1, name: 'Дифференцированный'}
	]

	const [togglePopup, setTogglePopup] = useState(false)
	const [isOpen, setIsOpen] = useState(false);
	const [choosenService, setChoosenService] = useState(1)
	const [sum, setSum] = useState('1 000 000')
	const [term, setTerm] = useState('60')
	const [rate, setRate] = useState('4.4')
	const [result, setResult] = useState(0)
	const [overpayment, setOverpayment] = useState(0)
	const [kindOfPayment, setKindOfPayment] = useState("Аннуитетный")
	// const [date, setDate] = useState(currentDate)
	const [valueSum, setValueSum] = useState(sum)
	const [valueTerm, setValueTerm] = useState(term)
	const [valueRate, setValueRate] = useState(rate)
	const wrapperRef = useRef(null);

	useOutsideAlerter(wrapperRef, isOpen);

	function usePrevious(value) {
		const ref = useRef();
		useEffect(() => {
		  ref.current = value; //assign the value of ref to the argument
		},[value]); //this code will run when the value of 'value' changes
		return ref.current; //in the end, return the current ref value.
	  }

	const prevCountResult = usePrevious(result)

	const prevCountOverpayment = usePrevious(overpayment)

	function calc(sum, term, rate, kind) {

		let calcResult;

		let sumString = sum?.toString().replace(/\s/g, '')
		let termString = term?.toString().replace(/\s/g, '')
		let S = parseInt(sumString)
		let n = parseInt(termString)
		let p = parseFloat(rate)

		// p = p;
		// n = n;

		// console.log(S/n, (S - S/n) * p/12/100)

		kind === "Дифференцированный" ? calcResult = Math.round((S/n) + ((S - S/n) * p/12/100)) : calcResult = S * (p/12/100 + ((p/12/100)/(Math.pow(1 + p/12/100, n) - 1)))

		let overpayment = calcResult * n - S

		if (isNaN(calcResult)) {
			setResult(0)
			setOverpayment(0)
		} else {
			setResult(calcResult)
			setOverpayment(overpayment)
		}

	}
	
	function useOutsideAlerter(ref) {
		useEffect(() => {
			/**
			 * Alert if clicked on outside of element
			 */
			function handleClickOutside(event) {
				if (ref.current && !ref.current.contains(event.target)) {
					setIsOpen(false)
				}
			}
			// Bind the event listener
			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				// Unbind the event listener on clean up
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}, [ref]);
	}
	
	useEffect(() => {
		valueSumHandler(sum)
	}, [sum])

	useEffect(() => {
		valueTermHandler(term)
	}, [term])

	useEffect(() => {
		valueRateHandler(rate)
	}, [rate])

	useEffect(() => {
		const timer = setTimeout(() => {
			calc(sum, term, rate, kindOfPayment)
		  }, 200);
		  return () => clearTimeout(timer);
	}, [sum, term, rate, kindOfPayment])


	const sumHandler = (e) => {
		var sumInput = e.target.value
		var sum = sumInput.match(/\d/g);
		sum = sum?.join("")
		parseInt(sum) > 15000000 ? setSum('15 000 000')
			: setSum(sum?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))
	}

	const valueSumHandler = (sum) => sum ? setValueSum(sum) : setValueSum('')

	const termHandler = (e) => parseInt(e.target.value) > 360 ? setTerm('360') : setTerm(e.target.value)

	const valueTermHandler = (term) => term ? setValueTerm(term) : setValueTerm('')

	const rateHandler = (e) => parseFloat(e.target.value) > 50 ? setRate('50') : setRate(e.target.value)

	const valueRateHandler = (rate) => rate ? setValueRate(rate) : setValueRate('')

	// const dateHandler = (e) => { setDate(e.target.value) }

	const kindOfPaymentHandler = (kind) => setKindOfPayment(kind.name)

	const [values, setValues] = useState([MIN])

  return (
	<div className='calcblock flex flex-row bc-white-container'>
		<div className="calcblock-left cd7 cm4 flex flex-col">
			<div className='top-text cd12 cd4 flex flex-col'>
				<h2 className='mt'>Узнайте свой будущий платёж.</h2>
				<p className=''>Прямо здесь и сейчас выберите необходимую сумму <span className='font-2-bold'>кредита</span> и его срок. А на консультации с нашим сотрудником сможете задать ему любые вопросы по своему расчёту. </p>
			</div>
			<div className="main flex flex-col">
				<div className="sum flex flex-col">
					<p className='param-name'>Сумма кредита</p>
					<div className="sum-container flex flex-row">
						<div className="input-container cd6 cm4 relative">
							<div className="fake-input absolute flex flex-row">
								<div className="reset-input">{valueSum}</div>
								<div className="after-input">&nbsp;руб</div>
							</div>
							<input
								className='calc-input cd6 cm4 '
								autoComplete="off"
								id='sum'
								type="text"
								min="300000"
								max="15000000"
								value={valueSum}
								onChange={(e) => {
									sumHandler(e)
								}}
							/>
						</div>
						<div className="var-container cd6 cm4 flex flex-row justify-between">
							<a className={'text-center cd3 var' + (sum === '1 000 000' ? ' active' : '')} onClick={() => setSum('1 000 000')}>1 млн</a>
							<a className={'text-center cd3 var' + (sum === '3 000 000' ? ' active' : '')} onClick={() => setSum('3 000 000')}>3 млн</a>
							<a className={'text-center cd3 var' + (sum === '5 000 000' ? ' active' : '')} onClick={() => setSum('5 000 000')}>5 млн</a>
						</div>
					</div>
				</div>
				<div className="term flex flex-col">
					<p className='param-name'>Срок кредита</p>
					<div className="term-container flex flex-row w-full">
						<div className="input-container cd6 cm4 relative">
							<div className="fake-input absolute flex flex-row">
								<div className="reset-input">{valueTerm}</div>
								<div className="after-input">&nbsp;мес</div>
							</div>
							<input
								className='calc-input'
								autoComplete="off"
								type="text"
								min="12"
								max="360"
								value={valueTerm}
								onChange={(e) => {
									termHandler(e)
								}}
							/>
						</div>
						<div className="var-container flex flex-row justify-between cd6 cm4">
							<a className={'var ' + (term === '60' ? ' active' : '')} onClick={() => setTerm('60')}>5 лет</a>
							<a className={'var ' + (term === '84' ? ' active' : '')} onClick={() => setTerm('84')}>7 лет</a>
							<a className={'var ' + (term === '240' ? ' active' : '')} onClick={() => setTerm('240')}>20 лет</a>
							<a className={'var ' + (term === '360' ? ' active' : '')} onClick={() => setTerm('360')}>30 лет</a>
						</div>
				</div>
				</div>
				<div className="rate flex flex-col">
					<p className='param-name'>Годовая ставка</p>
					<div className="rate-container flex flex-row">
						<div className="input-container cd6 cm4 relative">
							<div className="fake-input absolute flex flex-row">
								<div className="reset-input">{valueRate}</div>
								<div className="after-input">&nbsp;%</div>
							</div>
							<input
								className='calc-input'
								autoComplete="off"
								type="text"
								// value={rate}
								value={valueRate}
								onChange={(e) => {
									rateHandler(e)
								}}
							/>
						</div>
						<div className="var-container flex flex-row justify-between cd6 cm4">
							<a className={'var' + (rate === '4.4' ? ' active' : '')} onClick={() => setRate('4.4')}>4.4%</a>
							<a className={'var' + (rate === '8' ? ' active' : '')} onClick={() => setRate('8')}>8%</a>
							<a className={'var' + (rate === '10' ? ' active' : '')} onClick={() => setRate('10')}>10%</a>
							<a className={'var' + (rate === '12' ? ' active' : '')} onClick={() => setRate('12')}>12%</a>
							<a className={'var' + (rate === '16' ? ' active' : '')} onClick={() => setRate('16')}>16%</a>
						</div>
					</div>
				</div>
				<div className="flex flex-row">

					
					<div className="cd5 cm4 choose-kind-and-date flex flex-row w-full">
						<motion.nav
									initial={false}
									ref={wrapperRef}
									animate={isOpen ? "open" : "closed"}
									className="menu cd12 cm4"
								>
									<p className='param-name'>Вид платежа</p>
									<motion.button
									whileTap={{ scale: 0.97 }}
									onClick={() => setIsOpen(!isOpen)}
									>
									<a className=''>{kindOfPayment}</a>
									<motion.div
										variants={{
										open: { rotate: 180 },
										closed: { rotate: 0 }
										}}
										transition={{ duration: 0.2 }}
										style={{ originY: 0.55 }}
									>
										<svg width="19" height="9" viewBox="0 0 19 9" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M9.98681 8.92392C10.1193 8.91019 10.2446 8.85592 10.3467 8.76852L18.7619 1.53126L18.7618 1.5311C18.8974 1.41515 18.9822 1.24887 18.9975 1.06888C19.0128 0.888886 18.9573 0.709974 18.8432 0.571921C18.7292 0.43388 18.5659 0.347744 18.3896 0.332913C18.2134 0.317926 18.0385 0.375194 17.9037 0.492251L9.91753 7.362L1.93139 0.49225C1.79654 0.375193 1.62168 0.317925 1.44542 0.332912C1.26917 0.347741 1.10589 0.433878 0.991881 0.57192C0.877726 0.70996 0.822268 0.88886 0.837563 1.06888C0.85286 1.24889 0.937659 1.41516 1.07329 1.5311L9.48849 8.76836C9.62706 8.88731 9.80698 8.94348 9.98681 8.92392Z" fill="white"/>
										</svg>

									</motion.div>
									</motion.button>
									<motion.ul
									className=''
									variants={{
										open: {
										clipPath: "inset(0% 0% 0% 0% round 10px)",
										transition: {
											type: "spring",
											bounce: 0,
											duration: 0.7,
											delayChildren: 0.3,
											staggerChildren: 0.05
										}
										},
										closed: {
										clipPath: "inset(10% 50% 90% 50% round 10px)",
										transition: {
											type: "spring",
											bounce: 0,
											duration: 0.3
										}
										}
									}}
									style={{ pointerEvents: isOpen ? "auto" : "none" }}
									>
									{services.map((service, index) => {
										return (
											<motion.li key={service.id + index} id={service.id} variants={itemVariants} className={(kindOfPayment === service.name) ? 'active' : ''}>
												<a onClick={() => kindOfPaymentHandler(service)}>{service.name}</a>
											</motion.li>
										)
									})}

									</motion.ul>
						</motion.nav>
						{/* <div className="input-date cd6 cm4 hidden">
							<p className='param-name'>Дата получения кредита</p>
							<input
									className='calc-input-date'
									type="text"
									value={date}
									onClick={(e) => {e.target.value = date}}
									onChange={dateHandler}
							/>
						</div> */}
					</div>
					<div className="ind-calc flex flex-row cd7 cm4 justify-end">
						<img className='mrs' src="/images/ind-calc.svg" alt="" />
						<Link 
							href={'/kreditniy-kalkulyator'}					
							className='' 
							as={`/kreditniy-kalkulyator?sum=${sum}&term=${term}&rate=${rate}`}
							>
								Перейти в индивидуальный калькулятор
						</Link>
					</div>
				</div>
			</div>
		</div>
		<div className="calcblock-right cd5 cd4 flex flex-col mtl">
			<div className="cover relative">
				<VideoBackground />
			</div>
			<div className="text-cover cd10 cm4 pxm">
				<h3 className='cd8 cm4 p-top'>Ежемесячный платёж</h3>
				<Counter from={prevCountResult} to={result} className={'payment'} /> 
				{/* <p className='p-top font-4-regular'>Переплата по процентам за кредит</p>
				<Counter from={prevCountOverpayment} to={overpayment} text={'руб'} />  */}
				{/* <div className='button bc-white flex flex-row action--light' onClick={() => setTogglePopup(true)}>
					<a className=''>Нужна консультация</a>
					<svg width="18" height="19"  fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.5 13.6299L9.45 12.5424L12.1125 9.87988H3V8.37988H12.1125L9.45 5.71738L10.5 4.62988L15 9.12988L10.5 13.6299Z" fill="#fff"/>
					</svg>
				</div> */}
				<Button
					component="Calculator"
					mode='white'
					text='Оставить заявку'
					icon={true}
				/>
			</div>
			<motion.div
				className={"flex flex-col popup " + (togglePopup === true ? 'active' : '')}

			>
				<div className="popup-container flex flex-col">
					<FormС 
						props={{sum, term, rate, result}}
					/>
				</div>
			</motion.div>
		</div>
	</div>
  )
}

export default Calculator
