export const Alert = ({alert}) => {
	if(!alert) {
		return null
	}

	return (
		<div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
			<strong>Some text</strong>
			{alert.text}
			<button type="button" className="close" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	)
}