import React, { useRef } from "react";
import { addFriend } from "../../store/action";

const Add = () => {
    const form = useRef(null);
    const handleKeyDown = (e) => {
        if (e.which === "13" && e.key === "Enter") {
            handleFormSubmit(e);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const name = form.current.name.value;
        addFriend(name)
        form.current.name.value = "";
    };
    return (
        <form className="form" onSubmit={handleFormSubmit} ref={form}>
            <input type="text" className="input" name="name" onKeyDown={handleKeyDown} placeholder="Enter your friend's name" />
        </form>
    );
};

export default Add;
