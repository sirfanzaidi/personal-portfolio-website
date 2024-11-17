'use client'

import React, {useState, useEffect} from 'react'
import { skillsData } from '../data/data'
import SectionTitle from '../components/SectionTitle';
import ProgressBar from '../components/ProgressBar';

export default function Skills() {
    const [skills, setSkills] = useState(skillsData);
    const [scroll, setScroll] = useState(0);
    const [active, setActive] = useState(false);

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
    <section id='skills' className='skills section-bg'>
        <div className='container'>
        <SectionTitle 
        title="Skills"
        brief='Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          liquid fuga eum quidem Magnam dolores commodi suscipit. Necessitatibus
          eius consequatur ex aliquid fuga eum quidem Magnam dolores commodi
          suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem'
        />
        <div className="row skills-content">
        <div className="col-lg-6">
            {skills.slice(0,3).map(skills =>(
                <ProgressBar 
                key={skills.id}
                status= {active}
                item={skills}
                />
            ))}
            </div>
            <div className='col-lg-6'>
                {skills.slice(3,6).map(skills => (
                    <ProgressBar key={skills.id} status={active} item={skills}
                    />
                ))}

            </div>
        </div>
        </div>

    </section>
  )
}
