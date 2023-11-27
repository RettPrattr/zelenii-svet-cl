import React from 'react';
import Image from 'next/image'

// Как фетчить несколько таких блоков на одну страницу???
//  - Делаем проп - fetchUrl чтобы подбирать ссылку

// Тут надо, чтобы если фоток >1 то автоматом карусель
// - За это будет отвечать компонент AutoSlider

// Надо добавить возможность вставлять кнопку
// - Просто делать это через проброс children внутрь нужного места

const Story = (props) => {

    // Fetch кладется внутрь тела компонента и вызывается универсально для любого типа
    // После фетчей подключаем все в переменные ниже

    const type = props.type // : number
    const fullSize = props.fullsize // : boolean
    const reverse = props.reverse // : boolean
    
    const imageWidth = 2000
    const imageHeight = 2000
    
    const title = props.title
    const subtitle = props.subtitle
    const text = props.text
    const photo = props.photo

    // TYPE 1
    if ( type === 1 ) {
        return (
            // <section className={'story story-1 flex flex-col ' + (reverse && ' reverse ')}>
            <section className={'story story-1 flex flex-col ' + (reverse && ' reverse ')}>
                <div className="container text justify-between">
                    <div className="cd3 cm4">
                        <div className="subtitle">
                            <h4>{subtitle}</h4>
                        </div>
                    </div>
                    <div className="cd8 cm4 flex-col">
                        <h2>{title}</h2>
                        <p>{text}</p>
                        {props.children}
                    </div>
                </div>
                {
                    photo 
                    && 
                    <div className={'photoWrapper ' + (fullSize === false && ' container')}>    
                        <Image quality={100} width={imageWidth} height={imageHeight} className={'cd12 cm4'} src={photo} alt={title}></Image>
                    </div>
                }
            </section>
        )
    }

    // TYPE 4
    if ( type === 4 ) {
        return (
            <section className={'story story-4 flex flex-col ' + (reverse && ' reverse')}>
                
                <div className={"items-center " + (fullSize !== true && ' container')}>
                    <div className="cd-s-1"></div>
                    <Image quality={100} width={imageWidth} height={imageHeight} className={fullSize !== true && 'cd10 cm4'} src={photo} alt={title}></Image>
                </div>
                <div className="container items-center">
                    <div className="cd-s-3"></div>
                    <div className="cd6 cm4 flex-col h-fit text">
                        <div className="subtitle">
                            <h4>{subtitle}</h4>
                        </div>
                            <h2>{title}</h2>
                            <p>{text}</p>
                            {props.children}
                    </div>
                </div>  
            </section>
        )
    }

    // TYPE 5
    if ( type === 5 ) {
        return (
            <section className={'story story-5 flex flex-col ' + (reverse && ' reverse')}>
                <div className="container flex flex-row items-center">
                    <div className="cd6 cm4 flex-col h-fit text">
                        <div className="subtitle">
                            <h4>{subtitle}</h4>
                        </div>
                        <h2>{title}</h2>
                        <div className="mbm" dangerouslySetInnerHTML={{ __html: text }}></div>
                        {/* <p className='mbm'>{text}</p> */}
                        {props.children}
                    </div>
                    <div className={'cd6 cm4'}>
                        <Image quality={100} width={imageWidth} height={imageHeight}  src={photo} alt={title}></Image>
                    </div>
                </div>  
            </section>
        )
    }
}

export default Story