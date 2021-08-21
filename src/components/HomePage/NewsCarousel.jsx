import React from "react";

export default function NewsCarousel(props) {
    return(
        <div className="carousel slide px-0" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                        className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2" />
            </div>
            <div className="carousel-inner news-carousel">
                <div className="carousel-item news-item-1 active">
                    <div className="carousel-caption d-none d-md-block">
                        <h5>News Story 1</h5>
                        <p>Insert some bullshit story about our website</p>
                    </div>
                </div>
                <div className="carousel-item news-item-2">
                    <div className="carousel-caption d-none d-md-block">
                        <h5>News Story 2</h5>
                        <p>Insert some bullshit story about ESports.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}