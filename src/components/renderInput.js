import React from 'react';

const renderInput = field =>
	<div>
		<input className="form-control" {...field.input} type={field.type}/>
		{field.meta.touched &&
		field.meta.error &&
		<span className="error" style={{ color: 'red' }}>{field.meta.error}</span>}
	</div>;

export default renderInput;
