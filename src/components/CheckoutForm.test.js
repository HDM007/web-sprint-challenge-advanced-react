import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import { act } from "react-dom/test-utils";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const formHeader = screen.getByText(/checkout form/i)

    expect(formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    //arr
    render(<CheckoutForm/>)
    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const state = screen.getByLabelText(/state/i);
    const zip = screen.getByLabelText(/zip/i);
    const button = screen.getByRole('button');

    //act
    userEvent.type(firstName, 'test harry');
    userEvent.type(lastName, 'test mardy');
    userEvent.type(address, 'test home land place');
    userEvent.type(city, 'test city boston');
    userEvent.type(state, 'test MA');
    userEvent.type(zip, '00000');
    userEvent.click(button);

    //asst
    const successMessage = screen.getByTestId("successMessage");
    //find not needed
    expect(successMessage).toBeInTheDocument();

});
