import React, {Component} from 'react';

const CommentList = ({commentList}) => {
	return (
		<div>
			<ul className="comment_list">
				{commentList.map((item, index) => {
					return <li className="comment_item" key={index}>{item}</li>
				})}
			</ul>
		</div>
	)
}

export default CommentList;