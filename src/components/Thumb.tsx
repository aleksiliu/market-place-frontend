import React, { useState, useEffect } from 'react';

import Spinner from './Spinner';

type OwnProps = {
	file: any;
};

const Thumb: React.FC<OwnProps> = ({ file }) => {
	const [thumb, setThumb] = useState<any>({ loading: false, thumb: undefined });

	useEffect(() => {
		if (!file) {
			return;
		}
		let reader = new FileReader();

		reader.onloadend = () => {
			setThumb({ loading: false, thumb: reader.result });
		};
		reader.readAsDataURL(file);
	}, [file]);

	if (!file) {
		return null;
	}
	if (thumb.loading === 'loading') {
		return <Spinner />;
	} else {
		return <img src={thumb.thumb} width='200' height='200' />;
	}
};

export default Thumb;
