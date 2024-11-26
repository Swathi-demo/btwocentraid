// src/pages/HomePage.js
import React, { useEffect, useRef } from 'react';
import './HomePage.css';

function HomePage() {
    const carouselRef = useRef(null);
    const topics = [
        { title: "D&I", subtitle: "Articles", image: "images/carosel4.jpg" },
        { title: "Multi-Cloud", subtitle: "Articles", image: "images/carosel2.jpg" },
        { title: "Data Security", subtitle: "Articles", image: "images/carosel3.jpg" },
        { title: "EDR", subtitle: "Articles", image: "images/carosel1.jpg" },
        { title: "Network Security", subtitle: "Articles", image: "images/carousel5.jpg" },
        { title: "AI & ML", subtitle: "Articles", image: "images/carousel6.jpg" },
        { title: "Cloud Migration", subtitle: "Articles", image: "images/carousel7.jpg" },
        { title: "AI 2& ML", subtitle: "Articles", image: "images/carousel8.jpg" },
        { title: "Cloud Migration", subtitle: "Articles", image: "images/carousel10.jpg" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (carouselRef.current) {
                carouselRef.current.scrollBy({ left: 220, behavior: 'smooth' });

                // Loop back to the beginning when reaching the end
                if (
                    carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
                    carouselRef.current.scrollWidth
                ) {
                    carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    const scrollCarousel = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = direction === 'left' ? -220 : 220;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };


    return (
        <div className="homepage">
            <div className="main-section">
                {/* Left Column: Text Content */}
                <div className="homepage-content">
                    <h1>
                        <span className="highlight loading-animation">..CIAM</span>
                    </h1>
                    <p>
                        Customer Identity and Access Management (CIAM) is a crucial cybersecurity framework that enables organizations to securely manage and protect customer identities, control access, and deliver personalized experiences.
                        By incorporating features such as single sign-on (SSO), multifactor authentication (MFA), and secure data storage                      {/* Add more content as needed */}
                    </p>
                    <button className="cta-button">Access to CIAM Details</button>
                </div>
                
               {/* Right Column: Image Content */}
               <div className="homepage-image">
    <img src="/images/Un.gif" alt="Antivirus Software Animation" className="robot-image" />
</div>


            </div>

            {/* Carousel Section */}
            <div className="hot-topics">
                <h2 style={{marginRight:'85%'}}>Hot Topics</h2>
                <p style={{marginRight:'65%'}}>Don't miss out on the latest news and deep dives...</p>
                <div className="carousel-container">
                    <button className="carousel-control left" onClick={() => scrollCarousel('left')}>&#8249;</button>
                    <div className="carousel" ref={carouselRef}>
                        {topics.map((topic, index) => (
                            <div className="carousel-card" key={index}>
                                <img src={topic.image} alt={topic.title} />
                                <h3>{topic.title}</h3>
                                <p>{topic.subtitle}</p>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control right" onClick={() => scrollCarousel('right')}>&#8250;</button>
                </div>
            </div>

        </div>
    );
}

export default HomePage;
