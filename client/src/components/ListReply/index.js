import React from 'react';

const ListReply = (props) => {
    return (
        <ul className="list-group">
            {props.reply.map((item) => {
                if (item.comment_id === props.comment_id) {
                    return (
                        <div key={item.id}>
                            <ul>
                                <li className="list-group-item" style={{ backgroundColor: "rgb(143,147,202)"}}>{item.reply}</li>
                            </ul>
                        </div>
                    )
                }
            })}
        </ul>
    );
};
export default ListReply;