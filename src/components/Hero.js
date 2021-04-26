import FloatReservation from './FloatReservation'

const Hero = () => {
    return (
        <section className="hero">
            <div className="overlay">
                <div className="banner">
                    <h3>Welcome to</h3>
                    <h1>Boqueria</h1>
                    <h3>Serving authentic spanish cuisine since 2004</h3>
                    <a><h3>Book Now</h3></a>
                </div>
            </div> 
        <FloatReservation></FloatReservation>
        </section>
    )
}

export default Hero
