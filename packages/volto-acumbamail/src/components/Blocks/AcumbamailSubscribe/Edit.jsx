import React, { useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { TextWidget } from '@plone/volto/components';

const messages = defineMessages({
  email: {
    id: 'Email',
    defaultMessage: 'Email',
  },
  // name: {
  //   id: 'Name',
  //   defaultMessage: 'Name',
  // },
  subscribe_message: {
    id: 'Save and view to test the submission.',
    defaultMessage: 'Save and view to test the submission.',
  },
});

const Edit = (props) => {
  const [email, setEmail] = useState('');
  // const [name, setName] = useState('');
  const intl = useIntl();

  return (
    <div className="block acumbamail-subscribe">
      <h3>{intl.formatMessage(messages.subscriptionForm)}</h3>
      {/* <TextWidget
        id="name"
        title={intl.formatMessage(messages.name)}
        value={name}
        onChange={(id, val) => setName(val)}
      /> */}
      <TextWidget
        id="email"
        title={intl.formatMessage(messages.email)}
        value={email}
        onChange={(id, val) => setEmail(val)}
      />
      <p>{intl.formatMessage(messages.subscribe_message)}</p>
    </div>
  );
};

export default Edit;
