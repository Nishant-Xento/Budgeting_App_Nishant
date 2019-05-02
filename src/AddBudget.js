import React from "react";

class AddBudget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  addBudgetBar = e => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ amount: "", name: "" });
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const styleAddBudgetForm = {
      background: "white",
      display: "flex",
      alignItems: "flex-end",
      padding: "16px"
    };
    const StyleInputWrapper = {
      flex: 1,
      paddingLeft: "8px",
      paddingRight: "8px"
    };
    const StyleInput = {
      width: "100%",
      fontSize: "1rem"
    };
    const styleAddBtn = {
      background: "rgb(88, 214, 141)",
      border: "none",
      color: "white",
      fontSize: "14px",
      padding: "8px",
      cursor: "pointer",
      outline: "none"
    };

    return (
      <div>
        <form
          style={styleAddBudgetForm}
          onSubmit={this.addBudgetBar}
          ref={addForm => (this.form = addForm)}
        >
          <div className="line-field" style={StyleInputWrapper}>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Name"
              style={StyleInput}
            />
          </div>
          <div className="line-field" style={StyleInputWrapper}>
            <input
              type="number"
              name="amount"
              value={this.state.amount}
              min="0"
              max="100000"
              onChange={this.handleChange}
              placeholder="$ Amount"
              style={StyleInput}
            />
          </div>
          <button type="submit" style={styleAddBtn}>
            + Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddBudget;
