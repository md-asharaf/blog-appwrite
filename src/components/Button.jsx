import React from "react";
function Button({
    children,
    className = "",
    type = "button",
    onClickHandler,
    disabled = false,
    ...props
}) {
    return (
        <input
            type={type}
            value={children}
            onClick={onClickHandler}
            className={`rounded-[50px] ${
                !disabled && "hover:scale-95 hover:opacity-90"
            } ${className} ${disabled && "opacity-50 bg-gray-400"}`}
            {...props}
        />
    );
}

export default Button;
