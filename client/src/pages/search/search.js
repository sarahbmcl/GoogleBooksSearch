import React, { Component } from "react";
import API from "../../utils/API";
import CardList from '../../components/CardList';
import Card from 'react-bootstrap/Card';



class Search extends Component {
  
  state = {
    action: 'save',
    books: [],
    query: ''
  };

  // search googlebooks API and store the data in books array
  searchBooks(query) {
    API.searchBooks(query)
      .then((res) => {
        const card = res.data.map((book) => {
          return {
            googleId: book.id,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink
          };
        });

        this.setState({ books: card });
      })
      .catch((error) => console.log(error));
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      this.searchBooks(this.state.query);
    }

  };


  // saves book to database
  handleSaveBook = book => {
    API.saveBook(book)
      .then(() => this.searchBooks(this.state.query))
      .catch((error) => console.log(error));

  }
  
  


  render() {
    return (
      <div className="body" style={{ marginBottom: "70px" }}>
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              <Card className="mt-1 shadow cardz" style={{ marginBottom: "20px" }}>
                <Card.Header className="cardHeader" style={{ background: "#4285f4", color: "#fff" }}>
                  <h3 style={{ marginBottom: "0px" }}>
                    Search
                </h3>
                </Card.Header>
                <Card.Body style={{ background: "#f2f2f2" }}>
                  <form>
                    <div className="form-group">
                      <div className="input-group">
                        <input
                          onChange={this.handleInputChange}
                          value={this.state.query}
                          query={this.state.query}
                          name="query"
                          type="text"
                          className="form-control"
                          placeholder="Search for a Book, Author, or Topic..."
                          id="query"
                        />
                        <div className="input-group-append">
                          <button disabled={!(this.state.query)} onClick={this.handleFormSubmit} className="btn btn-primary search">
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <Card className="mt-1 shadow">
                <Card.Header className="cardHeader" style={{ background: "#4285f4", color: "#fff" }}>
                  <h3 style={{ marginBottom: "0px" }}>
                    Results
                </h3>
                </Card.Header>
                <Card.Body style={{ background: "#f2f2f2" }}>
                  {!this.state.books.length ? (
                    <h5 className="text-center">Book search will appear here</h5>
                  ) : (
                      <CardList
                        books={this.state.books}
                        handleSaveBook={this.handleSaveBook}
                        action={this.state.action}
                      />
                    )}
                </Card.Body>
              </Card>
            </div>
          </div>



        </div>
      </div>
    );
  }
}

export default Search;