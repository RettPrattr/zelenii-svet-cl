import Button from '../components/atoms/Button'
import useWindowDimensions from './hooks/useWindowDimensions'


export default function Advantages (props) {

    return (
        <section className="advantage-cards flex flex-col container mym">
            <h2 className='cd12 cm4'>{props?.data?.data?.attributes.title}</h2>
            <div className="flex flex-row justify-between">
                {props?.data?.data.attributes.advantage.map((m, i) => <AdvantageCard key={i} {...m} index={i} />)}
            </div>
        </section>
    )
}


function AdvantageCard (props) {


    const [width] = useWindowDimensions()
    
    const {field, span} = props

    return (
        <div className={"cd4 cm4 flex h-auto" + (width > 800 ? ' mys' : ' mys')}>
            <div className={"advantage-card flex-col h-full w-full flex"}> 
                <span className='advantage-span mbs'>{span}</span>
                <p>{field}</p>
            </div>
        </div>
    )
}