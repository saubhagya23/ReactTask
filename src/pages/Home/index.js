/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
import React from 'react';
import _ from 'lodash';
import { Dropdown } from 'semantic-ui-react';
import { Header, ContentContainer, Filters } from './styles';
import API from '../../services/api';
import DisplayCharacter from '../Common/CharacterGrid';
import FilterComponent from '../Common/FilterComponent';
import SearchBar from '../Common/SearchBar';
import { sort } from '../Common/DropDown/DropdownOptions';

export class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      characters: [],
      selectedCharacter: [],
      next: '',
      prev: '',
      searchTerm: '',
      speciesFilter: '',
      genderFilter: '',
      sorting: '',
      info: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateUrl = this.updateUrl.bind(this);
    this.onChangeDropdown = this.onChangeDropdown.bind(this);
    // Debounce 500ms
    this.updateUrl = _.debounce(this.updateUrl, 500);
  }

  componentDidMount() {
    this.getAllCharacters();
  }

  onChangeDropdown(e, data) {
    e.target.value = data.value;
    console.log(e.target.value);
    this.setState({
      speciesFilter: e.target.value,
    });
    this.updateUrl();
  }

  onFilterChange(e, itemValue) {
    console.log('***', itemValue);
    switch(itemValue.category) {
      case 'Species': {
        this.setState({ speciesFilter: itemValue.value })
        this.updateUrl();
        return;
      }
      case 'Gender': {
        this.setState({ genderFilter: itemValue.value })
        this.updateUrl();
        return;
      }
    }
  }

  onComponentRefresh() {
    this.setState({ refreshing: false });
  }

  getAllCharacters() {
    API.get(this.state.currentUrl)
      .then(res => {
        this.setState({
          characters: res.data.results,
          selectedCharacter: res.data.results[0],
          location: res.data.results.location,
          next: res.data.info.next,
          prev: res.data.info.prev,
          info: res.data.info,
        });
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status == 404) {
            this.setState({
              characters: [],
            });
          }
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      });
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
    this.updateUrl();
  }

  updateUrl() {
    const { searchTerm, speciesFilter, genderFilter } = this.state;
    const url = `/?name=${searchTerm}&species=${speciesFilter}&gender=${genderFilter}`;
    this.setState({
      currentUrl: url,
    });
    console.log('calling url again!!!');
    this.getAllCharacters();
  }

  refresh() {
    this.setState({ refreshing: true });
  }

  render() {
    const { speciesFilter, genderFilter } = this.state;
    return (
      <div>
        <Header>
          <header>
            <h1>Rick & Morty</h1>
          </header>
        </Header>
        <ContentContainer>
          <Filters>
            <form>
              <FilterComponent
                selectedSpecies={speciesFilter}
                selectedGender={genderFilter}
                onChange={(e, itemValue) => this.onFilterChange(e, itemValue)}
              />
              <Dropdown
                placeholder="Sort By ID"
                selection
                clearable
                options={sort}
                onChange={(e, data) => this.setState({ sorting: data.value })}
              />
              <SearchBar handleChange={this.handleChange} />
            </form>
          </Filters>
          <DisplayCharacter
            sorting={this.state.sorting}
            character={this.state.characters}
          />
        </ContentContainer>
      </div>
    );
  }
}

export default Home;
