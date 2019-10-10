import React from 'react';
import AnnouncementForm from './ui/AnnouncementForm';
import AnnouncementList from './ui/AnnouncementList';
import Header from './ui/Header';
import Frontpage from './ui/Frontpage';
import { GlobalStyle } from './global';
import Container from './components/Container';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from './ui/NotFoundPage';
import AnnouncementPage from './ui/AnnouncementPage';

const App: React.FC = () => {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Container>
				<Switch>
					<Route exact path='/' component={Frontpage} />
					<Route path='/new-announcement' component={AnnouncementForm} />
					<Route path='/announcements' component={AnnouncementList} />
					<Route path='/:announcementId' component={AnnouncementPage}></Route>
					<Route component={NotFoundPage} />
				</Switch>
			</Container>
		</>
	);
};

export default App;
