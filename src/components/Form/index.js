import React, { useRef } from "react";

const Form = () => {
  const refContent = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let formVal = refContent.current;
    let formData = new FormData(formVal);
    fetch("/", {
      method: "POST",
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  };

  return (
    <form name="testing" data-netlify="true" ref={refContent}>
      <input name="name" type="text" />
      <input name="lastname" type="text" />
      <button id="submit" type="submit" onClick={(e) => handleFormSubmit(e)}>
        Submit
      </button>
    </form>
  );
};

export default Form;
