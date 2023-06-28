const ResumeItem = ({ title, value }) => {
	return (
		<div>
			<p className="font-medium text-xs text-primary">{title}</p>
			<p className="font-semibold text-lg pb-2.5 pt-2.5 text-white status-$">
				{value}
			</p>
		</div>
	);
};

export default ResumeItem;
