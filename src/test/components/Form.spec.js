/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import LogInForm from '../../Components/Log-In/LogInForm';

describe('Form should be render', () => {
  test('Render form component', () => {
    expect(render(<LogInForm />)).toMatchSnapshot();
  });
});

describe('elements of form should be render', () => {
  test('about form component', () => {
    const logInAuth = jest.fn();
    render(<LogInForm logInAuth={logInAuth} />);
    // const component = render(<LogInForm />);
    // render(<LogInForm />);

    const contentEmail = screen.getByPlaceholderText('Correo electrónico');
    const contentPassword = screen.getByPlaceholderText('Contraseña');
    const contentButton = screen.getByRole('button', { name: 'Ingresar' });
    // const button = screen.getByText('Ingresar');
    // const contentEmail = component.container.querySelector('.e-mail');
    // const contentPassword = component.container.querySelector('.password');
    /*  expect(contentEmail).toBeInTheDocument();
    expect(contentPassword).toBeInTheDocument();
    expect(contentButton).toBeInTheDocument(); */

    fireEvent.change(contentEmail, {
      target: { value: 'mesero@burgerqueen.com' }
    });

    fireEvent.change(contentPassword, {
      target: { value: 'mesero123' }
    });

    fireEvent.click(contentButton);

    expect(logInAuth).toHaveBeenCalledWith(
      'mesero@burgerqueen.com',
      'mesero123'
    );
    expect(logInAuth).toHaveBeenCalled();

    /*     expect(contentEmail.value).toBe('mesero@burgerqueen.com');
    expect(contentPassword.value).toBe('mesero123'); */
  });
});
