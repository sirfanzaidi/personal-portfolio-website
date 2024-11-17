"use client";

import React, { useState, useEffect } from "react";
import { counterData } from "../data/data";
import SectionTitle from "../components/SectionTitle";
import CounterItem from "../components/CounterItem";

export default function Facts() {
  const [counters, setCounters] = useState(counterData);
  const [scroll, setScroll] =  useState(0)
  const [active, setActive] = useState(false)

useEffect(() => {
  window.addEventListener('scroll', () => {
    setScroll(window.scrollY);
  });
  return () => {
    window.removeEventListener('scroll', ()=> {
      setScroll(window.scrollY);
    });
  };
}, [scroll]);

const handleSectionActive = () => {
  let sectionPosition: HTMLElement | any = document.querySelector('#facts');
  let position = scroll + 500;
  if (sectionPosition && position >= sectionPosition.offsetTop && position <= sectionPosition.offsetTop + sectionPosition.offsetHeight) {
    setActive(true);
  }
  
};

useEffect(() => {
  handleSectionActive();
}, [scroll])
 
  return (
    <section id="facts" className="facts">
      <div className="container">
        <SectionTitle
          title="Facts"
          brief="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          liquid fuga eum quidem Magnam dolores commodi suscipit. Necessitatibus
          eius consequatur ex aliquid fuga eum quidem Magnam dolores commodi
          suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem"
        />
      <div className="row">
        {counters &&
        active &&
        counters.length > 0 &&
        counters.map(counter => (
          <CounterItem key={counter.id} item={counter} />
        ))}
      </div>
      </div>
    </section>
  )
};
