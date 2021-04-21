import React, { useState } from "react";
import { addToFavourite, deleteFriend } from "../../store/action";

const ListItem = (props) => {
    const { friend } = props;
    const [deleting, setDeleting] = useState(false);
    const handleAddToFav = () => {
        addToFavourite(friend);
    };

    const handleDelete = () => {
        setDeleting(true);
        setTimeout(() => {
            deleteFriend(friend);
        }, 1000);
    };
    return (
        <div className="list-item-container">
            <div className="name">{friend.name}</div>
            <div className="actions">
                <span className="action" onClick={handleAddToFav}>{friend.fav ? "⭐" : "☆"}</span>
                <span className="action" onClick={handleDelete}>{deleting ? "🥺" : "🗑️"}</span>
            </div>
        </div>
    );
};

export default ListItem;
