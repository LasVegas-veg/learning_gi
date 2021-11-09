import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Link, List, HeaderButton, platform, removeEventListener } from '@vkontakte/vkui';
import Icon24Message from '@vkontakte/icons/dist/24/message';




const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Las Vegas Testing</PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group header={<Header mode="secondary">Navigation Example</Header>}>
			<Div>
			<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
			Персик/ 
				</Button>
			</Div>


			<Group header={<Header mode="secondary">Navigation Example</Header>}>
			<Div>
			<Button stretched size="l" mode="secondary" onClick={go} data-to="Help">
			Help
				</Button>
			</Div>

		</Group>


		</Group>


	


		<Div>
       <Button>Ты тут?</Button>
     </Div>




	</Panel>


);






Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;