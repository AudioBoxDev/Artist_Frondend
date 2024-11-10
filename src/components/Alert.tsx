import React from 'react';

interface AlertProps {
	message: string;
	type?: 'error' | 'success' | 'warning' | 'info';
	onDismiss: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type = 'error', onDismiss }) => {
	const typeStyles = {
		error: 'bg-red-100 border-red-400 text-red-700',
		success: 'bg-green-100 border-green-400 text-green-700',
		warning: 'bg-yellow-100 border-yellow-400 text-yellow-700',
		info: 'bg-blue-100 border-blue-400 text-blue-700',
	};

	return (
		<div
			className={`${typeStyles[type]} border px-4 py-3 rounded relative mb-2`}
			role="alert"
		>
			<span className="block sm:inline">{message}</span>
			<button
				type="button"
				className="absolute top-0 bottom-0 right-0 px-4 py-3"
				onClick={onDismiss}
			>
				<svg
					className="fill-current h-6 w-6 text-current"
					role="button"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
				>
					<title>Close</title>
					<path
						d="M14.348 5.652a1 1 0 010 1.415L11.414 10l2.934 2.933a1 1 0 11-1.415 1.415L10 11.414l-2.933 2.934a1 1 0 01-1.415-1.415L8.586 10 5.652 7.067a1 1 0 011.415-1.415L10 8.586l2.933-2.934a1 1 0 011.415 0z"
					/>
				</svg>
			</button>
		</div>
	);
};

export default Alert;
