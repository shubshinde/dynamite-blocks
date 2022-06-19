export default function BlockFooter({ blockAuthor }) {
	return (
		<div className="dynamite-block-footer row">
			<div className="col-lg-9"></div>
			<div className="col-lg-3">
				<small
					style={{ fontSize: "11px", color: "#999" }}
					className="float-end p-1 pr-3"
				>
					{blockAuthor}
				</small>
			</div>
		</div>
	);
}
