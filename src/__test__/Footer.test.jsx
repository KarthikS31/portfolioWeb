import { render, screen } from "@testing-library/react";
import Footer from "../Components/Footer";

describe('testing footer',()=>{

    it("hii",()=>{
        render(<Footer/>)
        expect(screen.getByText(/karthik/))
    })

    test('somthign',()=>{
        const {container}=render(<Footer/>);

        const footerElement = container.querySelector('.footer');
        expect(footerElement).toBeInTheDocument();

    })
})
