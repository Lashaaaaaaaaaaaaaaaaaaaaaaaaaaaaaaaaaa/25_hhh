import React, { useId } from 'react';

const EmailForm: React.FC = () => {
  const emailId = useId();

  return (
    <form>
      <label htmlFor={emailId}>Email:</label>
      <input type="email" id={emailId} placeholder="Enter your email" />
    </form>
  );
};

export default EmailForm;
