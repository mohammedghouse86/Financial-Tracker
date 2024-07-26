import { describe } from "node:test";
import {render, screen} from '@testing-library/react';
import SamplePage from "../src/app/SampleTestPage/page";
import userEvent from '@testing-library/user-event';

describe('SamplePage - Rendering',()=>{
    it('should have the text "Information Detail Form"',()=>{
        render(<SamplePage/>);
        expect(screen.getByText('Information Detail Form')).toBeInTheDocument();
        expect(screen.getByText('First Name')).toBeInTheDocument();
        expect(screen.getByText('Last Name')).toBeInTheDocument();
        expect(screen.getByText('Age')).toBeInTheDocument();
        expect(screen.getByText('Gender')).toBeInTheDocument();
    });

    it('should have the following buttons',()=>{
        render(<SamplePage/>);
        expect(screen.getByRole('button',{name:'Submit Form'})).toBeInTheDocument();
    })

    it('should have the following buttons',()=>{
        render(<SamplePage/>);
        expect(screen.getByRole('button',{name:'Clear Form'})).toBeInTheDocument();
    })

    it('should have the following inputfield placeholders',()=>{
        render(<SamplePage/>);
        expect(screen.getByPlaceholderText('firstname')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('lastname')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('age')).toBeInTheDocument();
    })

    it('should have the combobox',()=>{
        render(<SamplePage/>);
        expect(screen.getByLabelText(/Gender/)).toBeInTheDocument();
    })

    it('fills input fields and selects an option', async () => {
        render(<SamplePage />);
      
        // Fill in the input fields
        await userEvent.type(screen.getByLabelText(/First Name/i), 'John');
        await userEvent.type(screen.getByLabelText(/Last Name/i), 'Doe');
      
        // Select an option from the combobox
        const genderSelect = screen.getByLabelText(/Gender/i);
          await userEvent.selectOptions(
            genderSelect,
            screen.getAllByRole('option').find(option => option.textContent === 'Male') 
        );
      
        // Submit the form
        await userEvent.click(screen.getByRole('button', { name: /Submit/i }));
      
        // Check the form data
        expect(screen.getByLabelText(/First Name/i)).toHaveValue('John');
        expect(screen.getByLabelText(/Last Name/i)).toHaveValue('Doe');
        expect(screen.getByLabelText(/Gender/i)).toHaveValue('Male');
      });
})
 
