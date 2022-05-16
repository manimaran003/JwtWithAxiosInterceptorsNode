import { render, screen } from '@testing-library/react';  
import userEvent from '@testing-library/user-event';
import Signup from './Componets/UI/Signup';
import {rest} from'msw';
import { setupServer } from 'msw/node'

const server=setupServer()
rest.post("/signup",(req,res,ctx)=>{
  return res(ctx.json({
   user:"tokens generated"
  }))
})
//enable api for the server
beforeAll(()=>server.listen())
//Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())
//after the test finish close the api
afterAll(()=>server.close())


describe("Regidtration form component",()=>{
  test("render registration form text",()=>{
    render(<Signup/>)
    const registrationForm=screen.getByText("signup In to Your Udemy Account")
    expect(registrationForm).toBeInTheDocument();
  })
  test("render the input field",()=>{
    render(<Signup/>)
    const email=screen.getByPlaceholderText("email")
    expect(email).toBeInTheDocument()
    const password=screen.getByPlaceholderText("password")
    expect(password).toBeInTheDocument()
  })
  test("show error when render input field",()=>{
    render(<Signup/>)
    const email=screen.getByPlaceholderText("email")
    const password=screen.getByPlaceholderText("password")
    userEvent.type(email," ")
    userEvent.type(password," ")
    const registerButton=screen.getByTestId("button")
    console.log(registerButton)
    userEvent.click(registerButton)
})
test("allow the user to signup",()=>{
  render(<Signup/>)
  const email=screen.getByPlaceholderText("email")
  const password=screen.getByPlaceholderText("password")
  userEvent.type(email,"cmmaran1999@gmail.com")
  userEvent.type(password,"mani6379")
  const buttons=screen.getByTestId("button")
  userEvent.click(buttons)
  // const alert=screen.getByRole("span")
  // // console.log("alert",alert)
  // expect(alert).toHaveTextContent("successfully signuped")
})
})