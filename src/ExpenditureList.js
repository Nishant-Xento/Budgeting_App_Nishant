import React from "react";
import AddBudget from "./AddBudget";
import BudgetBar from "./BudgetBar";

class ExpenditureList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styleDiv = {
      display: "flex",
      flexWrap: "wrap",
      padding: "16px 24px"
    };
    return (
      <section style={{ width: "75%" }}>
        <AddBudget add={this.props.add} />
        {this.props.budgets.length === 0 && (
          <div style={styleDiv}>
            <p style={{ color: "rgb(153, 153, 153)", fontSize: "1.5rem" }}>
              Add a budget to get started.
            </p>
          </div>
        )}
        <div style={styleDiv}>
          {this.props.budgets.map(i => (
            <BudgetBar
              {...i}
              key={i.id}
              remove={this.props.handleCloseBudgetBarProp}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default ExpenditureList;
