export default function BlockHeader({ blockTitle }) {
	return (
		<div className="dynamite-block-header">
			<h5 className="card-header bg-white text-muted">{blockTitle}</h5>
		</div>
	);
}
