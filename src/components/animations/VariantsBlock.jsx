import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";



const itemVariants = {
	open: {
	  opacity: 1,
	  y: 0,
	  transition: { type: "spring", stiffness: 500, damping: 24 }
	},
	closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };


const VariantsBlock = () => {

	const services = [
		{
			id: 0,
			name: 'Услуга 1',
			percentage: 9
		},
		{
			id: 1,
			name: 'Услуга 2',
			percentage: 7
		},
		{
			id: 2,
			name: 'Услуга 3',
			percentage: 5
		}
	]
	
	const [isOpen, setIsOpen] = useState(false);
	const [choosenService, setChoosenService] = useState(1)
	const [sum, setSum] = useState(0)
	const [term, setTerm] = useState(0)
	const [creditRate, setCreditRate] = useState(services[choosenService].percentage)
	const [result, setResult] = useState(0)

	// const debounced = useDebounce(sum, 300)



	function calc(sum, term, rate) {

		let S = sum
		let p = term
		let n = rate



		p = p / 1200;
		n = n * 12;

		const calcResult = (S * p / (1 - Math.pow(1 + p, -n))).toFixed(2);
		setResult(calcResult)
	}

	// function useDebounce(value, delay) {
	// 	const [debounced, setDebounced] = useState(value)

	// 	useEffect(() => {
	// 		const handler = setTimeout(() => setDebounced(value), delay)
	// 		return () => clearTimeout(handler)
	// 	}, [value, delay])

	// 	return debounced
	// }

	useEffect(() => {
		// console.log(result)
		const timer = setTimeout(() => {
			calc(sum, term, creditRate)
		  }, 300);
		  return () => clearTimeout(timer);
	}, [sum, term, creditRate])



	const sumHandler = (e) => {
		const sumInput = e.target.value;
		setSum(sumInput)
	}

	const termHandler = (e) => {
		const termInput = e.target.value;
		setTerm(termInput)
	}

	const rateHandler = (service) => {
		setChoosenService(service.id)
		setCreditRate(service.percentage)
	}

	return (
		<div className='flex w-100 justify-center align-center'>
			<motion.nav
				initial={false}
				animate={isOpen ? "open" : "closed"}
				className="menu"
			>
				<motion.button
				whileTap={{ scale: 0.97 }}
				onClick={() => setIsOpen(!isOpen)}
				>
				Menu
				<motion.div
					variants={{
					open: { rotate: 180 },
					closed: { rotate: 0 }
					}}
					transition={{ duration: 0.2 }}
					style={{ originY: 0.55 }}
				>
					<svg width="15" height="15" viewBox="0 0 20 20">
					<path d="M0 7 L 20 7 L 10 16" />
					</svg>
				</motion.div>
				</motion.button>
				<motion.ul
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
						<motion.li key={service.id + index} id={service.id} variants={itemVariants}>
							<a onClick={() => rateHandler(service)}>{service.name}</a>
						</motion.li>
					)
				})}

				</motion.ul>
			</motion.nav>
			<div className='calculator flex flex-col'>
				<div className="sum">
					<input
						type="text"
						id="S"
						value={sum}
						onChange={sumHandler}
					/>
					Р
				</div>
				<div className="term">
					<input
						type="text"
						id="n"
						value={term}
						onChange={termHandler}
					/>
					месяцев
				</div>
				<div className="interest-rate">
					<p id="p">{creditRate}%</p>
				</div>
				<div className="calculation__form-row">Платеж за месяц:
					<div id="result">
						{result}
					</div>
				</div>
			</div>
		</div>
	);
  }


export default VariantsBlock
