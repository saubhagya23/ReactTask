/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Header, Icon, Segment } from 'semantic-ui-react';
import { CardGrid, Card } from './styles';
import timeSince from '../../../services/common';

const DisplayCharacter = props => {
  // eslint-disable-next-line prefer-destructuring
  // eslint-disable-next-line prefer-destructuring
  const character = props.character;
  if (character) {
    switch (props.sorting) {
      case 'ascendant':
        character.sort((a, b) => parseInt(a.id, 2) - b.id);
        break;
      case 'descendant':
        character.sort((a, b) => parseInt(b.id, 2) - a.id);
        break;
      default:
        character.sort((a, b) => parseInt(a.id, 2) > b.id);
    }
  }
  if (character && character.length === 0) {
    return (
      <Segment placeholder>
        <Header icon>
          <Icon name="search" />
            No Data Found!!!
        </Header>
      </Segment>
    );
  }

  if (!character) {
    return (
      <div>
        <p>LOADING...</p>
      </div>
    );
  }
  return (
    <CardGrid>
      {character.map(char => {
        const infoObject = {
          'STATUS': char.status,
          'SPECIES': char.species,
          'GENDER': char.gender,
          'ORIGIN': char.origin.name,
          'LAST LOCATION': char.location.name,
        };
        return (
          <Card key={char.id}>
            <div>
              <div>
                <img src={char.image} alt={char.name} />
                <div class='overlay'>
                <div>
                  <h4>{char.name}</h4>
                  <div>
                    <p>Id: {char.id}, Created {timeSince(char.created)} ago</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <section>
              <header>
                <ul className="details">
                  {
                    Object.keys(infoObject).map(info => (
                      <li>
                        <span className="title">{info}</span>
                        <span className="value">{infoObject[info]}</span>
                      </li>
                    ))
                  }
                </ul>
                {/* <h3>
                  <span>{char.id}</span> {char.name} - {char.gender}
                </h3>
                <h5>
                  {char.species} - {char.status}
                </h5>
                <p>Latest - {char.location.name}</p> */}
              </header>
            </section>
          </Card>
        )
      })}
    </CardGrid>
  );
};

export default DisplayCharacter;
