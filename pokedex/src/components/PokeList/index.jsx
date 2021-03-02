import React from 'react';
import { List, Image } from 'semantic-ui-react';

import logo from 'Poke_Ball.png';


export default class PokeList extends React.PureComponent {

  render = () => {
    return (
      <List divided size="large">
        <List.Item>
          <Image src={logo} size="tiny" />
          <List.Content>
            <List.Header>Header</List.Header>
            <List.Description>Description</List.Description>
          </List.Content>
        </List.Item>

        <List.Item>
          <Image src={logo} size="tiny" />
          <List.Content>
            <List.Header>Header</List.Header>
            <List.Description>Description</List.Description>
          </List.Content>
        </List.Item>

        <List.Item>
          <Image src={logo} size="tiny" />
          <List.Content>
            <List.Header>Header</List.Header>
            <List.Description>Description</List.Description>
          </List.Content>
        </List.Item>

        <List.Item>
          <Image src={logo} size="tiny" />
          <List.Content>
            <List.Header>Header</List.Header>
            <List.Description>Description</List.Description>
          </List.Content>
        </List.Item>

        <List.Item>
          <Image src={logo} size="tiny" />
          <List.Content>
            <List.Header>Header</List.Header>
            <List.Description>Description</List.Description>
          </List.Content>
        </List.Item>
      </List>
    );
  };
}

