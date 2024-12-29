import React, { useContext } from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'
import Card from './Cards/Card'
import { AppContext } from './context/Context'
import ApiCard from './Apicards.jsx/ApiCard'
import { cardData1, cardData2 } from './Utlis/Utlis'
import { TbRosetteDiscountCheckFilled } from "react-icons/tb"
import { BiSolidDiscount } from "react-icons/bi";
import Button from './Button/Button'

function Home() {
    const navigate = useNavigate()
    const { data1, data2, data4 } = useContext(AppContext)
    const click = () => {
        navigate("/movies")
    }
    
    return (
        <>
            <NavBar />
            <div className="hero-section">
                <div className="hero-section-info">
                    <h1>Book Your Movies, Great Offers And Deals</h1><br />
                    <Button className="explore" text = "Explore Movies" onClick={click}/>
                </div>
                <div className="trending-movies">
                    <div className="heading">
                        <h1>Top Rated Movies</h1>
                        <Button text="View All" onClick={click} className="view-all" />
                    </div>
                    <ApiCard state={data1} />
                </div>
                <div className="add-section">
                    <div className="logo">
                        <h1>Logo</h1>
                    </div>
                    <div className="add">
                        <h1>Endless Entertainment AnyTime. Anywhere!</h1>
                    </div>
                </div>
                <div className="trending-movies2">
                    <div className="heading">
                        <h1>Upcoming Movies</h1>
                        <Button text="View All" onClick={click} className="view-all" />
                    </div>
                    <ApiCard state={data2} />
                </div>
                <div className="info">
                    <div className="more-info"><h1>More Reason To Choose</h1>
                        <Card data={cardData2} icons = {<TbRosetteDiscountCheckFilled/>} />
                    </div>
                </div>
                <div className="trending-movies2">
                    <div className="heading">
                        <h1>Popular Movies</h1>
                        <Button text="View All" onClick={click} className="view-all" />
                    </div>
                    <ApiCard state={data4} />
                </div>
            </div>
            <div className="info2">
                <div className="more-info2"><h1>More Reason To Choose</h1>
                    <Card data={cardData1} icons2={<BiSolidDiscount/>} />
                </div>
            </div>
            <footer>
                <footer class="footer">
                    <div class="footer-container">
                        <div class="footer-section">
                            <h3>About My Project</h3>
                            <p>This is a Movie Booking Website where you can book any movie for your entertaiment.</p>
                        </div>
                        <div class="footer-section">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div class="footer-section">
                            <h3>Follow Us</h3>
                            <ul>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; Copyright 2024 Arnab Roy. All Rights Reserved.</p>
                    </div>
                </footer>
            </footer>
        </>
    )
}

export default Home
