// import skills from "./skills"

// describe("Skill Testing",()=>{
//      test('renders the list of skills in proper order',()=>{
//         redner(<Skills  Skills={skills}/>)
//         const itemElem=screen.getAllNByRole('listen')
//         expect(itemElem).toHave
//         expect(itemElem[0]).toHaveTextContent(/plumbing/i)
//      })

//      test('should show login button',()=>{
//         redner(<Skills skills={skills}/>)
//         const loginBtn=screen.getByRole('button',{
//             name:'login'
//         })
//         expect(loginBtn).toBeInTheDocument()
//      })

//      test('should show start working later',async()=>{
//         redner(<Skills skill={skills}/>)
//         const startBtn=await screen.findByRole('button',{
//             name:'start Working'
//         }, { timeout:1010})
//         expect (startBtn).toBeInTheDocument()
//      })
// })