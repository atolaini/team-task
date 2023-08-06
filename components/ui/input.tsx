'use-client';

interface InputProps {
  label: string;
  type?: string;
  inputType?: string;
  onChangeHandler: (event: React.ChangeEvent) => void;
}

const Input = ({ label, type, inputType, onChangeHandler }: InputProps) => {
  if (inputType === 'text-area') {
    return (
      <div>
        <label>{label}</label>
        <textarea onChange={onChangeHandler} />
      </div>
    );
  } else {
    return (
      <div>
        <label>{label}</label>
        <input
          type={type}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
};

export default Input;
