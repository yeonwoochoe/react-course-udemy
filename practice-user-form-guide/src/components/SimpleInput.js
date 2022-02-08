import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSumissionHandler = (event) => {
    event.preventDefault();

    if (!enteredName.trim() === "") {
      return; //  //위의 조건을 만족하면 해당 함수를 중단시킴
    }

    console.log(enteredName);

    // nameInputRef.current.value = ""; 돔의 직접 접근하는것은 좋지 않는 방식! 오로지 리액트만이 돔에 접근하도록 해야함.
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control";

  const emailInputClasses = emailInputHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSumissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={nameChangedHandler} onBlur={nameBlurHandler} value={enteredName} />
        {nameInputHasError && <p className="error-text">이름에 공백을 넣지마세요</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input type="email" id="email" onChange={emailChangedHandler} onBlur={emailBlurHandler} value={enteredEmail} />
        {emailInputHasError && <p className="error-text">올바른 이메일을 입력하세요</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
