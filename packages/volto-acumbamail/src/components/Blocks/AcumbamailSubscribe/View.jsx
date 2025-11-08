import React, { useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  subscriptionForm: {
    id: 'Subscription Form',
    defaultMessage: 'Subscription Form',
  },
  email: {
    id: 'Email',
    defaultMessage: 'Email',
  },
  yourEmail: {
    id: 'Your email',
    defaultMessage: 'Your email',
  },
  // name: {
  //   id: 'Name',
  //   defaultMessage: 'Name',
  // },
  // yourName: {
  //   id: 'Your name',
  //   defaultMessage: 'Your name',
  // },
  sending: {
    id: 'Sending...',
    defaultMessage: 'Sending...',
  },
  subscriptionSuccess: {
    id: 'Subscription completed successfully!',
    defaultMessage: 'Subscription completed successfully!',
  },
  subscriptionError: {
    id: 'Error subscribing. Please try again later.',
    defaultMessage: 'Error subscribing. Please try again later.',
  },
  subscribe: {
    id: 'Subscribe',
    defaultMessage: 'Subscribe',
  },
});

const View = () => {
  const [email, setEmail] = useState('');
  // const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const intl = useIntl();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(intl.formatMessage(messages.sending));

    try {
      const response = await fetch('/plone/@acumbamail-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify({ email, name }),
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setMessage(
        data.message || intl.formatMessage(messages.subscriptionSuccess),
      );
    } catch (err) {
      setMessage(intl.formatMessage(messages.subscriptionError));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-xl">
      <h3 className="text-xl font-semibold mb-2">
        Subscribe to the newsletter
      </h3>
      {/* <input
        type="text"
        placeholder={intl.formatMessage(messages.yourName)}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded mb-2 w-full"
      /> */}
      <input
        type="email"
        placeholder={intl.formatMessage(messages.yourEmail)}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded mb-2 w-full"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {intl.formatMessage(messages.subscribe)}
      </button>
      {message && <p className="mt-2 text-sm">{message}</p>}
    </form>
  );
};

export default View;
