import React from "react";
import "./style.css";
import Button from 'react-bootstrap/Button';

const CardList = props => (
	<div className="cards">
	
		{props.books.map((book) => (
			<div className="card" key={book.googleId}>
			<div className="cardContainer">
				<div className="row">
					<div className="col-sm-12 col-md-8 col-lg-10">
						<h3 className="bookTitle">{book.title}</h3>
					</div>
					<div className="cols col-md-4 col-lg-2">
						<Button
							variant="secondary"
							href={book.link}
							target="_blank"
							rel="noopener noreferrer"
							className="view">
							View
                		</Button>
						{props.action === 'save' && (
							<Button
								onClick={() => props.handleSaveBook(book)}
								variant="primary"
								className="save">
								Save
                  			</Button>
						)}
						{props.action === 'delete' && (
							<Button
								onClick={() => props.handleDeleteBook(book._id)}
								variant="danger"
								className="delete">
								Delete
				  			</Button>
						)}
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<p className="bookAuthors">
							Written by {book.authors
                      ? book.authors.join(", ")
                      : "N/A"}
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-2 col-md-4 col-sm-5">
						<img
							src={book.link 
								? book.image
								: "https://cdn3.iconfinder.com/data/icons/education-and-school-8/48/Book-512.png"}
							alt={book.title}
							className="bookImage img-fluid w-100" />
					</div>
					<div className="col-lg-10 col-md-8 col-sm-7">
						<p className="bookDescription">{book.description}</p>
					</div>
				</div>
				</div>
			</div>
		))}
		</div>
);

export default CardList;

// col-sm-6 col-md-6 col-lg-3