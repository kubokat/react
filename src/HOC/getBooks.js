import React from 'react';

const key = 'key3eShYFKG0oFCkD';
const path = 'https://api.airtable.com/v0/appgSrex1ZN9GqVfd/';

const getBooks = EnhancedComponent => class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: null
    }
  }

  componentDidMount() {
    this._getData();
  }

  _setData(data) {
    this.setState({
      books: this._mapFromAirTable(data.records),
    })
  }

  _getData() {
    this._request('Book')
      .then(json => this._setData(json))
  }

  _request() {
    let params = {};
    let url = path + this.props.table;

    if (this.props.limit) {
      params['maxRecords'] = this.props.limit;
    }

    if (Object.keys(params).length) {
      params = new URLSearchParams(params).toString();
      url = `${url}?${params}`
    }

    return fetch(
      url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + key
      }
    }
    ).then(response => response.json())
  }

  _mapFromAirTable(data) {
    return data.map(function (item) {
      let keys = Object.keys(item.fields);
      let obj = {};

      obj['id'] = item.id;

      keys.forEach(function (field) {
        obj[field] = item.fields[field];
      });

      return obj
    });
  }

  render() {
    return (
      <EnhancedComponent isLoading={this.state.loading} books={this.state.books} />
    );
  }

}

export default getBooks;
