import { describe } from "node:test";
import {render, screen} from '@testing-library/react';
import Signup from "../src/app/Signup/page";

describe('Home Page - Rendering',()=>{
    it('should have the text "SIGNUP PAGE"',()=>{
        render(<Signup/>);
        expect(screen.getByText('SIGNUP PAGE')).toBeInTheDocument();
    });

    it('should have a button with the text "Submit"',()=>{
        render(<Signup/>);
        expect(screen.getByRole('button',{name:'Submit'})).toBeInTheDocument();
    });
    
    it('should have an Email Input Field',()=>{
        render(<Signup/>);
        expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    });

    it('should have a Name Input Field',()=>{
        render(<Signup/>);
        expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    });

    it('should have an Image Input Field',()=>{
        render(<Signup/>);
        expect(screen.getByPlaceholderText('Image')).toBeInTheDocument();
    });

    it('should have a Password Input Field',()=>{
        render(<Signup/>);
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    });
}); 