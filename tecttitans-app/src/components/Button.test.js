import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import { Button } from './Button';
import  '@testing-library/jest-dom/extend-expect';


describe('Button', () => {

    /*This tests whether a button component renders childeren and handles click events.
    * It checks that when a user clicks on the button, if the button component is working and passing as a prop(properties)
    * For example, when the button text = "Click me!", the value of the text prop is "Click me!"*/
    it('renders children and handles click events', () => {
        /*fn() method is used to create a mock function called handleClick */
        const handleClick = jest.fn();
        // Then uses the getByText method from the React Testing Library to get
        // reference to the button element with the text "Click me"
        render(
            <BrowserRouter>
                <Button onClick={handleClick}>
                    Click me
                </Button>
            </BrowserRouter>

        );
        const button = screen.getByText('Click me');
        // Stimulates a click event on that button
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    // Test if the button element has all the expected class names from css file applied to it.
    // Ensure that the correct styles are applied to the correct elements

    // Sets description for the test using it function
    it('applies the correct style and size classes', () => {
        /* render function is used to render a Button component wrapped
        in a BrowserRouter component. The button component is passed two props*/
        render(<BrowserRouter><Button buttonStyle="btn--primary" buttonSize="btn--large">Click me</Button></BrowserRouter>);

        // getByRole() returns an element that has the role attribute with the
        // specified value
        const buttonElement = screen.getByRole('button');

        /*'toHaveClass' is a matcher that used to check whether the button
        element has the correct class names applied to it. If the button element
        has all the expected class names, the test case will pass.*/
        expect(buttonElement).toHaveClass('btn btn--primary btn--large');
    });

    // This test checks whether the anchor element has the correct href attribute value
    // applied to it.
    it('renders a link to sign up page', () => {
        render(<BrowserRouter><Button>Sign up</Button></BrowserRouter>);

        // querySelector() method returns the first element that matches
        // a specified CSS selecor in the document
        //const link = container.querySelector('a');

        // The matcher toHaveAttribute() checks whether the anchor element has the correct atribute name and value
        expect(screen.getByRole('link')).toHaveAttribute('href', '/sign-up');
    });
});