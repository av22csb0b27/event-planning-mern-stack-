import React from 'react';

const Services = ()=>{
    const services = [
        {
            id: 1,
            url: "/birthday.jpg",
            title: "Birthday Planning",
            description: "Celebrate your special day with a perfectly planned birthday event. We handle everything from decorations to entertainment!"
        },
        {
            id: 2,
            url: "/anniversary.jpg",
            title: "Anniversary Planning",
            description: "Make your anniversary unforgettable with our detailed planning services. We ensure every detail is perfect for your special milestone!"
        },
        {
            id: 3,
            url: "/camping.jpg",
            title: "Camping Trip Planning",
            description: "Enjoy the great outdoors with a well-organized camping trip. From site selection to gear rental, we've got you covered!"
        },
        {
            id: 4,
            url: "/gamenight.jpg",
            title: "Game Night Planning",
            description: "Host an epic game night with our comprehensive planning services. We arrange everything from game selection to snacks and prizes!"
        },
        {
            id: 5,
            url: "/party.jpg",
            title: "Party Planning",
            description: "Throw a memorable party with our expert planning. We handle everything from theme creation to guest coordination!"
        },
        {
            id: 6,
            url: "/wedding.jpg",
            title: "Wedding Planning",
            description: "Experience a flawless wedding with our full-service planning. We take care of every detail to ensure your big day is perfect!"
        }
    ];
    return <>
        <div className="services container">
            <h2>OUR SERVICES</h2>
            <div className="banner">
                {
                    services.map(element=>{
                        return(
                            <div className="item" key={element.id}>
                                <h3>{element.title}</h3>
                                <p>{element.description}</p>
                                <img src={element.url} alt={element.title} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
}

export default Services