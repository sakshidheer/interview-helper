import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import App from './App';

jest.mock('./pages/SignUp/SignUp', () => () => {
    return <div data-testid="app">SignUp</div>;
});
jest.mock('./pages/Login/Login', () => () => {
    return <div data-testid="app">Login</div>;
})

it('Test signup screen render', () => {
    const history = createMemoryHistory({ initialEntries: ['/signup'] });
    let app = render(
        <Router location="/signup" navigator={history}>
            <App />
        </Router>
    );
    expect(history.location.pathname).toBe("/signup");
    expect(screen.getByTestId('app').textContent).toBe('SignUp');
})


it('Test login screen render', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    let app = render(
        <Router location="/" navigator={history}>
            <App />
        </Router>
    );
    expect(history.location.pathname).toBe("/");
    expect(screen.getByTestId('app').textContent).toBe('Login');
})