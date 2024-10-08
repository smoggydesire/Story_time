import React, {useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Main_page_section.css'
import './Video.css'; 

function Video() {
    const videoSectionRef = useRef(null);

    useEffect(() => {
        const section = videoSectionRef.current;

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in-to-right');
                    entry.target.classList.remove('slide-out-to-left');
                }
                else 
                {
                    entry.target.classList.add('slide-out-to-left');
                    entry.target.classList.remove('slide-in-to-right');
                }
            });
        }, options);

        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    return (
        <section className="main-page-section" ref={videoSectionRef}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={12} lg={12}>
                        <div className="video-wrapper">
                        <iframe
                        src="https://www.youtube.com/embed/mjLSZ-K0kog?si=4bGa6OYB4aMjf_6Z" title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                        </iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Video;
