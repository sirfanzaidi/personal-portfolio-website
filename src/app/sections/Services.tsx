import React from 'react'
import SectionTitle from '../components/SectionTitle';
import ServicesItem from '../components/ServicesItem';

async function getServicesData() {
    const res = await fetch('http://localhost:3000/api/services');
    return res.json();
}

export default async function Services() {
    const items: [] = await getServicesData();
  return (
  <section id='sevices' className='services'>
    <div className="container">
        <SectionTitle title='Services'
        brief='Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          liquid fuga eum quidem Magnam dolores commodi suscipit. Necessitatibus
          eius consequatur ex aliquid fuga eum quidem Magnam dolores commodi
          suscipit'
          />

          <div className="row">
            {items.map(
              (item: {
              id: number;
              delay: string;
              svgPath: string;
              icon: string;
              iconColor: string;
              name: string;
              brief: string;
            }) => (
              <ServicesItem key={item.id} item={item} />
            ))}
          </div>
    </div>
  </section>
  )
}
