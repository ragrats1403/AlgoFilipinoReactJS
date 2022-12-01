import React from "react";
import CardItems from "./CardItems";
import firstlogo from "../images/Events/olympic.jpg";
import secondlogo from "../images/Events/event-seminar.png";
import thirdlogo from  "../images/Events/event-training.png";
import fourthlogo from "../images/Events/event-workshop.png";
function Cards(){
    return(
        <div classname='cards'>
            <h1>RECENT EVENTS</h1>
            <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItems
                    src = {firstlogo}
                    text = "Lorem Ipsum Dolor Sit Amet, Consectetur Adelore Eiusmod Tempor Incididunt"
                    label = 'Tingnan'
                    path= '/services'
                    date = "03 August 2021"
                    />
                    <CardItems
                    src = {secondlogo}
                    text = "Seminar: Programming bilang isang Wikaㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
                    label = 'Tingnan'
                    path= '/services'
                    />
                    <CardItems
                    src = {thirdlogo}
                    text = "Mag aral nang CSS kasama nang mga eksperto.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
                    label = 'Tingnan'
                    path= '/services'
                    />
                    <CardItems
                    src = {fourthlogo}
                    text = "Coding Workshop.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
                    label = 'Tingnan'
                    path= '/services'
                    />

                    
                </ul>
            </div>

            </div>
        </div>
    )

}

export default Cards;