import React from "react";
import { connect } from "react-redux";

import { changePage } from "../../store/action";

const Pagination = (props) => {
    const page = props.friends.page;

    const handlePageChange = (e) => {
        const dataPage = e.target.dataset.page;
        const nextPage = parseInt(dataPage) + page;
        // console.log({ nextPage });
        changePage(nextPage);
    };
    return (
        <div className="pagination-container">
            {props.friends.hasPreviousPage && (
                <span className="arrow left" onClick={handlePageChange} data-page="-1">
                    ◀
                </span>
            )}
            {props.friends.hasNextPage && (
                <span className="arrow right" onClick={handlePageChange} data-page="1">
                    ▶
                </span>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    friends: state.friends,
});

export default connect(mapStateToProps, {})(Pagination);
