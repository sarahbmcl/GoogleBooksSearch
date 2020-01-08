import React from "react";

const SearchForm = props => {
  return (
    <form>
      <div className="form-group">
      <div class="input-group">
        <input
          onChange={props.handleInputChange}
          onClick={props.handleFormSubmit}
          value={props.query}
          name="query"
          type="text"
          className="form-control"
          placeholder="Search for a Book, Author, or Topic..."
          id="query"
        />
        <div class="input-group-append">
        <button style={{ float: "right", marginBottom: 10 }} disabled={!(props.query)} onClick={props.handleFormSubmit} className="btn btn-primary mt-2 btn-sm">
          Search
        </button>
        </div>
      </div>
      </div>
    </form>
  );
}

export default SearchForm;

// export function Input(props) {
//   return (
//     <div>
//     <div className="form-group">
//       <input className="form-control" {...props} />
//     </div>

// <button {...props} type="submit" style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
// Search
// </button>
// </div>
    
//   );
// }

// export function FormBtn(props) {
//   return (
//     <button {...props} type="submit" style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
//       {props.children}
//     </button>
//   );
// }
