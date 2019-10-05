import styled from 'styled-components';
import { space } from '../styles';

const Container = styled.div`
	margin: 0 auto;
	max-width: 1110px;
	padding: 0 ${space.xl}px;
	@media (max-width: 768px) {
		padding: 0 ${space.l}px;
	}
`;

export default Container;
