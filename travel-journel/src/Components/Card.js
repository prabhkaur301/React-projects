export default function Card(props){
    return (
        <section className="card">
            <div className="img-box">
                 <img src={props.item.imageUrl} alt=""></img> 
            </div>
            <div className="text">
                <div className="country">
                    <img src="/images/location.svg" alt=""></img>
                    <p className="city">{props.item.location.toUpperCase()}</p>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.item.title}</h1>
                <h2>{props.item.startDate+"-"+props.item.endDate}</h2>
                <p className="desc">{props.item.description}</p>
            </div>
        </section>
    )
}