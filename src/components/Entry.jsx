export default function Entry(props){
    return(
        <>
            <div className="art-entry">
                <div className="img-con">
                    <img 
                        src={props.img.src} 
                        alt={props.img.alt}
                        className="image"
                    />
                </div>
                <div className="main-content">
                    <h1 className="title">{props.title}</h1>
                    <h3 className="artist">{props.artist}</h3>
                    <p className="desc">{props.text}</p>
                    <button className="butt"><a className="link"href={props.link}>Read More</a></button>
                </div>
            </div>
        </>
    )
}