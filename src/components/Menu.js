import menuImage from '../media/menu-image.jfif'

const Menu = () => {
    return (
        <section className="menu-container">
            <div className="overlay">
                <div className="menu">
                    <div className="menu-items">
                        <h2>Our Favorites</h2>
                        <div className="menu-item">
                            <div className="top-line">
                                <h3>The Boqueria experience</h3>
                                <div className="line"></div>
                                <h3>$65</h3>
                            </div>
                            <p className="zero-top">Travel through the classics and beyond with a selection of seasonal market menu dishes and a taste of our most prized ingredient: 30-month-aged, hand-carved Jamón Ibérico.</p>
                            
                        </div>
                        <div className="menu-item">
                            <div className="top-line">
                                <h3>Chuletón A La Plancha</h3>
                                <div className="line"></div>
                                <h3>$35</h3>
                            </div>
                            <p className="zero-top">Grilled 10oz ribeye, parsnip confit, mojo verde</p>
                        </div>
                        <div className="menu-item">
                            <div className="top-line">
                                <h3>Paella De Verduras</h3>
                                <div className="line"></div>
                                <div className="two-prices">
                                    <h3>$24<span>SM</span></h3>
                                    <h3>$38<span>MED</span></h3>
                                </div>
                            </div>  
                            <p>Bomba rice, broccoli, eggplant, green beans, saffron, salsa verde</p>
                        </div>
                        <div className="menu-item">
                            <div className="top-line">
                                <h3>Pollo Rustido</h3>
                                <div className="line"></div>
                                <div className="two-prices">
                                    <h3>$23 <span>HALF</span></h3>
                                    <h3>$44 <span>WHOLE</span></h3>
                                </div>
                            </div>
                            <p>Catalan style roasted chicken, Ibérico lard, lemon, herbs, salsa verde</p>
                        </div>
                        <div className="menu-item">
                            <div className="top-line">
                            <h3>Paella De Mariscos</h3>
                            <div className="line"></div>
                                <div className="two-prices">
                                    <h3>$29<span>SM</span></h3>
                                    <h3>$48<span>MED</span></h3>
                                </div>
                            </div>
                            <p>Bomba rice, monkfish, sepia, squid, shrimp, clams, mussels, saffron, salsa verde</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu
