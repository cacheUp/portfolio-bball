import React from "react";

export default class PortfolioCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", description: "", language: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name="value"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={this.state.description}
            onChange={this.handleChangeDescription}
          />
        </label>
        <label>
          Pick your favorite programming:
          <select
            name="language"
            value={this.state.language}
            onChange={this.handleChangeLanguage}
          >
            <option value="javascript">Javascript</option>
            <option value="java">Java</option>
            <option selected value="c++">
              C++
            </option>
            <option value="c#">C#</option>
          </select>
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
