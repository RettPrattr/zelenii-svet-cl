import React, {useContext} from 'react'

import Form from '@/components/Form'

import { AllContexts } from '@/context/Context'

export async function getStaticProps() {
	const respPhones = await axios.get(`${process.env.API_LINK}/form-requests?populate=*`);
	const dataPhonesResp = respPhones.data;
	// console.log(dataPhonesResp)
	return { props: { dataGetPhones: dataPhonesResp } }
}

const PopupLayout = ({dataGetPhones}) => {

    const {popupState, setPopupState} = useContext(AllContexts)

  return (
    <>
        <div className='popup popup-form flex justify-center items-center'>
            <Form 
              
            />
            <div 
                className='overlay'
                onClick={() => setPopupState(false)}
            ></div>
        </div>
    </>
  )
}

export default PopupLayout
