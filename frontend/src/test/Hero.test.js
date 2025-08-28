import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';   
// import '@testing-library/jest-dom/extend-expect';   
import Hero from '../landing_page/home/Hero';
/* extend-expecat because in the some test it's also work with database or api so it may take some time by the importing 
it auto extending the testing time according to need in seconds or miliseconds */ 

describe("Hero Component" /*you can add comment according to understanding */ , () => {

    // first test
    test("renders hero image" , () => {
        render(<Hero />);
        const heroImage = screen.getByAltText("Hero_Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });

});

