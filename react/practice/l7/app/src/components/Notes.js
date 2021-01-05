export const Notes = ({notes, onRemove}) => (
	<ul className="list-group">
		{notes.map(note => (
			<li
				className="list-group-item note"
				key={note.id}
			>
				<div>
					<strong>{note.title}</strong>

					<small>{note.date}</small>
				</div>


				<button
					type="button"
					className="btn btn-outline-danger btn-sm"
					onClick={() => onRemove(note.id)}
				>
					&times;
				</button>
			</li>
		))}
	</ul>
)