import React, { useEffect } from "react";
import { connect } from "react-redux";
import Item from "./../List-Item/List-Item";
import { fetchList, reOrder } from "../../store/action";
import Add from "./../Add-Item/Add";

const List = (props) => {
    const { friends } = props;

    console.log({ friends });
    useEffect(() => {
        fetchList();
        if (friends.list.length > 4) {

        }
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
            {friends.list.map((friend) => {
                return <Item key={friend.id} friend={friend} />;
            })}
            {friends.list.length > 4 &&
                <h2>
                    test
                </h2>
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    friends: state.friends,
});

export default connect(mapStateToProps, { fetchList })(List);
