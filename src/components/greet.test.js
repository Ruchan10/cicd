import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

describe('Greet component',()=>{
    test('renders correctly', ()=>{
        render(<Greet/>)
        // const h1Elem=screen.getRoleBy('heading',{
        //     level:1
        // })
        // ORR
        const h1Elem=screen.getByRole('heading',{
            name:"Hello"
        })
        expect(h1Elem).toBeInTheDocument()
    })
    
    test('renders with prop',()=>{
        render(<Greet name={'Ruchan'}/>)
    
        const h1Elem=screen.getByText("Hello Ruchan")
        expect(h1Elem).toBeInTheDocument()
    })
})
