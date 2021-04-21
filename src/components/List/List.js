import React, { useEffect } from "react";
import { connect } from "react-redux";
import Item from "./../List-Item/List-Item";
import { fetchList, reOrder } from "../../store/action";
import Add from "./../Add-Item/Add";
import Pagination from "./../Pagination/Pagination";

const List = (props) => {
    const { friends } = props;
    useEffect(() => {
        fetchList();
    }, []);

    const handleSort = () => {
        reOrder();
    };

    return (
        <div className="list-container">
            <div className="heading">
                <span>Friends List</span>
                <span className="actions" onClick={handleSort}>⭐</span>
            </div>
            <Add />
            {friends.paginatedList.map((friend) => {
                return <Item key={friend.id} friend={friend} />;
            })}
            <Pagination />
        </div>
    );
};

const mapStateToProps = (state) => ({
    friends: state.friends,
});

export default connect(mapStateToProps, { fetchList })(List);
