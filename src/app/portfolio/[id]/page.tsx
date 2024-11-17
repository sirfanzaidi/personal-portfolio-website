'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import './style.css';


export default function portfolioDetails({
  params,
}: {
  params: { id: string };
}) {
  
    const id = params.id;
    const [item, setItems]  = useState<any | {}>({});

    const getPortfolioDetailsData = (id: string) => {
        const res = fetch (`http://localhost:3001/api/portfolio/${id}`)
        .then(res => res.json)
        .then(data => setItems(data))
        .catch(e => console.log(e.message));
    };

    useEffect(() => {
        getPortfolioDetailsData(id);
    }, []);
  
  
    return (
        <main id="main">
        <section id="portfolio-details" className="portfolio-details">
        <div className="container">
        <div className="row gy-4">
        <div className="col-lg-8">
        <Swiper
        spaceBetween={0}
        autoplay={{
         delay: 5000,
        disableOnInteraction: false,
    }}
        pagination={{
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    }}
        modules={[Autoplay, Pagination]}
        loop={true}
        className="portfolio-details-slider swiper"
        >
        {item && item.gallery && item.gallery.lenght > 0 && item.gallery.map((img: string, index: number) => (
            <SwiperSlide key={index}>
                <img src={img} alt='' />
            </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
        </Swiper>
        </div>

        <div className="col-lg-4">
        <div className="portfolio-info">
        <h3>Project information</h3>
        <ul>
        <li>
        <strong>Category</strong>:{' '}
        {item.category && item.category.toUpperCase()}
        </li>
        <li>
        <strong>Client</strong>: XXX Company
        </li>
        <li>
        <strong>Project date</strong>: 15 Nov, 2024
        </li>
        <li>
        <strong>Project URL</strong>:{' '}
        <a href="#">www.example.com</a>
        </li>
        </ul>
        </div>
        <div className="portfolio-description">
        <h2>This is an example of portfolio detail - {item.id}</h2>
        <p>
        Autem ipsum nam porro corporis rerum. Quis eos dolorem eos Itaque inventore commodi labore quia quia. Exercitationem
        repudiandae officiis neque suscipit non officia eaque itaque
        enim. Voluptaten officia accusantium nesciunt est omnis
        tempora consectetur dignissimos. Sequi nulla at esse enim cum
        deserunt eius.
        </p>
        </div>
        </div>
       
        </div>
        </div>
        </section>
        </main>
    );
}