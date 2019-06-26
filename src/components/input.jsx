import React from "react";

const Input = ({ name, value, error, onChange }) => {
  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        type={name}
        name={name}
        id={name}
        className="form-control mb-4 p-4"
        placeholder={name}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
