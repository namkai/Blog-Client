import React, { PureComponent } from 'react';

class BlogPostLayout extends PureComponent {
	render() {
		return (
			<div className="container pt-4">
				<div className="row">
					<div className="col-lg-2">
						{/*{ this.props.card }*/}
					</div>
					<div className="col-lg-8">
						<ul className="list-group media-list media-list-stream mb-4">
							{ this.props.children }
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default BlogPostLayout;