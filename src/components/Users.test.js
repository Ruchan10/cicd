import { render, screen } from "@testing-library/react"
import { rest } from "msw"
import { server } from "../mocks/server"
import Users from "./Users"
import userEvent from "@testing-library/user-event"

describe('Users',()=>{
    test('should render correctly',()=>{
        render(<Users/>)
        const h1Elem=screen.getByRole('heading',{level:1})
        expect(h1Elem).toBeInTheDocument()
    })
    test('should show a list of users',async ()=>{
        render(<Users/>)
        const userList=await screen.findAllByRole('listitem')
        expect(userList).toHaveLength(3)
    })
    test('show error',async ()=>{
        server.use(
            rest.get('https://jsonplaceholder.typicode.com/users',
            (req,res,ctx)=>{
                return res(ctx.status(500))
            })
        )
        render(<Users/>)
        const errElem=await screen.findByText('Error fetched in data')
        expect(errElem).toBeInTheDocument()
    })
    test('handle Delete',async ()=>{
        const mockDel=jest.fn()
        render(<Users handleDelete={mockDel}/>)
        const btnItem=await screen.findAllByRole('button',{
            name:'delete'
        })
        userEvent.click(btnItem[0])
        expect(mockDel).toHaveBeenCalled()
    })
})
