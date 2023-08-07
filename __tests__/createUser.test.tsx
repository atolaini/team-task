import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CreateUser from '../components/createUser/createUser';

describe('CreateUser', () => {
  it('display a button when loaded', () => {
    render(<CreateUser />);

    const button = screen.getAllByRole('button');
    expect(button).toBeTruthy();
  });
});
