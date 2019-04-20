import * as React from 'react';

const Form = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className='card card-body mt-4 mb-4'>
      <h2>Add Lead</h2>
      <form onSubmit={submit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            className='form-control'
            id='name'
            type='text'
            name='name'
            onChange={e => setName(e.target.value)}
            value={name}
            required={true}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='name'>Email</label>
          <input
            className='form-control'
            id='email'
            type='email'
            name='email'
            onChange={e => setEmail(e.target.value)}
            value={email}
            required={true}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message</label>
          <textarea
            className='form-control'
            name='message'
            id='message'
            cols={30}
            rows={10}
            onChange={e => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-primary' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
