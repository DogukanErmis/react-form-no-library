import "./FormInput.css";

const FormInput = (props) => {
  return (
    <div className="formInput">
      {/*<label htmlFor="">Username</label>*/}
      <input placeholder={props.placeholder} />
    </div>
  );
};

export default FormInput;
