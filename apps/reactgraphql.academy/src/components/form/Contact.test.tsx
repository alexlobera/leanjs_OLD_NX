import React from 'react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import { render, fireEvent } from '@testing-library/react';
import Contact, { THANKS_MESSAGE } from './Contact';

describe('Contact Form', () => {
  const triggerSubscribe = jest.fn((email) => Promise.resolve(email));

  it('the input email should be empty', () => {
    const { getByLabelText } = render(
      <Contact triggerSubscribe={triggerSubscribe} />
    );

    const input = getByLabelText(/Your email address:/i);
    expect(input.value).toBe('');
  });

  it('should keep the button disabled if email is not valid', () => {
    const { getByLabelText, getByText } = render(
      <Contact triggerSubscribe={triggerSubscribe} />
    );
    const input = getByLabelText(/Your email address:/i);

    fireEvent.change(input, { target: { value: 'hello' } });
    const button = getByText(/Submit email/i);

    expect(button).toHaveAttribute('disabled', '');
  });

  it(`should enable button if email is valid`, () => {
    const { getByLabelText, getByText } = render(
      <Contact triggerSubscribe={triggerSubscribe} />
    );

    const input = getByLabelText(/Your email address:/i);

    fireEvent.change(input, { target: { value: 'hello@email.com' } });
    const button = getByText(/Submit email/i);

    expect(button).not.toHaveAttribute('disabled');
  });

  it('should call api with a valid email', async () => {
    const { getByLabelText, getByText } = render(
      <Contact triggerSubscribe={triggerSubscribe} />
    );

    const input = getByLabelText(/Your email address:/i);

    fireEvent.change(input, { target: { value: 'hello@email.com' } });
    await act(async () => {
      fireEvent.click(getByText(/Submit email/i));
    });

    expect(triggerSubscribe).toHaveBeenCalledWith({ email: 'hello@email.com' });
  });

  it('should show the confirm message after form submit', async () => {
    const { getByLabelText, getByText } = render(
      <Contact triggerSubscribe={triggerSubscribe} />
    );

    const input = getByLabelText(/Your email address:/i);

    fireEvent.change(input, { target: { value: 'hello@email.com' } });
    await act(async () => {
      fireEvent.click(getByText(/Submit email/i));
    });

    getByText(THANKS_MESSAGE);
  });
});
