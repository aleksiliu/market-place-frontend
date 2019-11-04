import React, { useState, useEffect } from 'react';

import Spinner from './Spinner';

type OwnProps = {
	file: any;
};

type StatusLoading = {
	status: 'loading';
};

type StatusLoaded = {
	status: 'success';
	thumb: any;
};

type Status = StatusLoading | StatusLoaded;

const Thumb: React.FC<OwnProps> = ({ file }) => {
	const [thumb, setThumb] = useState<Status>({
		status: 'loading'
	});

	useEffect(() => {
		if (!file) {
			return;
		}
		let reader = new FileReader();

		reader.onloadend = () => {
			setThumb({ status: 'success', thumb: reader.result });
		};
		reader.readAsDataURL(file);
	}, [file]);

	if (!file) {
		return null;
	}
	if (thumb.status === 'loading') {
		return <Spinner />;
	} else {
		return <img src={thumb.thumb} width='200' height='200' />;
	}
};

export default Thumb;
