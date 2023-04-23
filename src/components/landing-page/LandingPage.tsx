import { Grid } from '@mui/material';
import { Reel } from '../reel/Reel';
import { Header } from '../header/Header';
import { Key, RefObject, useRef } from 'react';
import { Work } from '../work/Work';
import { About } from '../about/About';
import { Contact } from '../contact/Contact';
import { Footer } from '../footer/Footer';

export interface Section {
    title: Key;
    component: JSX.Element
}

const sections: Section[] = [
    {
        title: 'Reel',
        component: <Reel />,
    },
    {
        title: 'Work',
        component: <Work />
    },
    {
        title: 'About',
        component: <About />
    },
    {
        title: 'Contact',
        component: <Contact emailTo='jen@bendle.com' />
    }
]

export const LandingPage = () => {
    const sectionRefs = useRef<RefObject<HTMLElement>['current'][]>(Array(sections.length).fill(null))
    return (
        <Grid container spacing={2}>
            <Header sections={sections} sectionRefs={sectionRefs}/>
            {sections.map((section, i) => (
                <section key={section.title} ref={(ref) => (sectionRefs.current[i] = ref)}>
                    {section.component}
                </section>
            ))}
            <Footer />
        </Grid>
    )
}
