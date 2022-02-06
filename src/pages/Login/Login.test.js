import {render, screen , logRoles} from '@testing-library/react'
import Login from './Login';
//https://stackoverflow.com/questions/66284286/react-jest-mock-usenavigate
const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate
}));

test('Login page is rendered correctly', ()=>{
    const el = render(<Login/>);
    let email = screen.queryByRole("textbox",{Name:'Email'});
    expect(email).toBeDefined();
    //console.log(logRoles(el.baseElement))
});

