import { type ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

const TestInput = () => {

  const [value, setValue] = useState('');
  const {register, handleSubmit} = useForm();

  const changeHandler = (e: ChangeEvent) => {
    // @ts-expect-error value does exist, for some reason the IDE is throwing an error
    setValue(e.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={value} onChange={changeHandler} />
        <pre>{value.toUpperCase()}</pre>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TestInput;