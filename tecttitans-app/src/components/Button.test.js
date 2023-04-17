import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import { Button } from './Button';
import  '@testing-library/jest-dom/extend-expect';


describe('Button', () => {

    it('renders children and handles click events', () => {
        const handleClick = jest.fn();
        const { getByText } = render(
            <BrowserRouter>
                <Button onClick={handleClick}>
                    Click me
                </Button>
            </BrowserRouter>

        );
        const button = getByText('Click me');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    // Sets description for the test using it function
    it('applies the correct style and size classes', () => {
        /* render function is used to render a Button component wrapped
        in a BrowserRouter component. The button component is passed two props*/
        const { getByRole } = render(<BrowserRouter><Button buttonStyle="btn--primary" buttonSize="btn--large">Click me</Button></BrowserRouter>);

        const button = getByRole('button');

        /*'toHaveClass' is a matcher that used to check whether the button
        element has the correct class names applied to it. If the button element
        has all the expected class names, the test case will pass.*/
        expect(button).toHaveClass('btn btn--primary btn--large');
    });

    it('renders a link to sign up page', () => {
        const { container } = render(<BrowserRouter><Button>Sign up</Button></BrowserRouter>);
        const link = container.querySelector('a');
        expect(link).toHaveAttribute('href', '/sign-up');
    });
});