import React from "react";
import "./radio-button.styles.scss";

const RadioButton = ({handleChange, id, isSelected, label, ...otherProps}) => {
    return (
        <div className="RadioButton">
            <input onChange={handleChange} {...otherProps} type="radio" checked={isSelected} />
            {
            label ? (<label htmlFor={id}>
                {label}
            </label>) : null
        }
        </div>
    );
}

export default RadioButton;
