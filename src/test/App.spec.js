/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';
import Orders from '../Components/Menu/Orders';

test('About App component', () => {
  render(<App />);

  const contentEmail = screen.getByPlaceholderText('Correo electrónico');
  const contentPassword = screen.getByPlaceholderText('Contraseña');
  const contentButton = screen.getByRole('button', { name: 'Ingresar' });

  expect(contentEmail).toBeInTheDocument();
  expect(contentPassword).toBeInTheDocument();
  expect(contentButton).toBeInTheDocument();

  fireEvent.click(contentButton);
  expect(render(<Orders />)).toMatchSnapshot();

  const titleByText = screen.getByText('Aqui van los desayunos');
  expect(titleByText).toBeInTheDocument();
});
