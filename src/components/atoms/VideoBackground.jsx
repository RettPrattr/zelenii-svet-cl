
export default function VideoBackground(){

    return(
        <div className="videoBack">
            <video playsInline autoPlay loop muted width="100%" height="auto">
                <source src="/images/back.mp4" type="video/mp4" />
            </video>
        </div>
    )
}