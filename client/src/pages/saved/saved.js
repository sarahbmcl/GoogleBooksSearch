import React, { Component } from "react";
import API from "../../utils/API";
import CardList from '../../components/CardList';
import Card from 'react-bootstrap/Card';


class Saved extends Component {
        state = {
          valid: false,
          action: 'delete',
          books: [],
        };

    // grab the books from /api/books
    componentDidMount() {
        this.getSavedBooks();
    }

    // loads all saved books
    getSavedBooks = () => {
      API.getSavedBooks()
      .then((res) => {
        const bookList = res.data;

        this.setState({ books: bookList });
      })
      .catch((error) => console.log(error));
  }

    // deletes a book from database
    handleDeleteBook = id => {
        API.deleteBook(id)
            .then(res => this.getSavedBooks())
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="body" style={{ marginBottom: "70px" }}>
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              <Card className="mt-1 shadow">
                <Card.Header className="cardHeader" style={{ background: "#4285f4", color: "#fff" }}>
                  <h3 style={{ marginBottom: "0px" }}>
                    Saved Books
                </h3>
                </Card.Header>
                <Card.Body style={{ background: "#f2f2f2" }}>
                  {!this.state.books.length ? (
                    <h2 className="text-center">Save a Book!</h2>
                  ) : (
                      <CardList
                        books={this.state.books}
                        handleDeleteBook={this.handleDeleteBook}
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

export default Saved;