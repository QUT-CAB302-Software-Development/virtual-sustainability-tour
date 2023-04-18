import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';
import { BrowserRouter } from 'react-router-dom';
import  '@testing-library/jest-dom/extend-expect';


describe('HeroSection component', () => {

    /* This test whether a HeroSection component renders the correct title and description text content
    *  It checks the h1 element in HeroSection contains the text
    * "TECHTITANS VIRTUAL SUSTAINABLE TOUR
    *  Also, it checks if the p element contains the text
    * Experience more green accommodation from the comfort of your couch"*/

    it('renders the title and description correctly', () => {
        render(<BrowserRouter><HeroSection /> </BrowserRouter>);
        const titleElement = screen.getByText(/TECHTITANS VIRTUAL SUSTAINABLE TOUR/i);
        const descriptionElement = screen.getByText(/Experience more green accommodation from the comfort of your couch/i);
        expect(titleElement).toBeInTheDocument();
        expect(descriptionElement).toBeInTheDocument();
    });

    /* This test whether a Button component renders the correct text
    *  It checks the button element contains the text
    * "EXPLORE NOW!"*/
    it('renders the button with correct text', () => {
        render(<BrowserRouter><HeroSection /></BrowserRouter>);
        const buttonElement = screen.getByText(/EXPLORE NOW!/i);
        expect(buttonElement).toBeInTheDocument();
    });


    it('renders the button with correct style and size', () => {
        render(<BrowserRouter><HeroSection /></BrowserRouter>);
        const buttonElement = screen.getByText(/EXPLORE NOW!/i);
        expect(buttonElement).toHaveClass('btn--outline');
        expect(buttonElement).toHaveClass('btn--large');
    });
});