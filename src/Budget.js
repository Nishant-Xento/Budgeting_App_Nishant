import React from "react";
import Header from "./Header";
import MonthlyIncome from "./MonthlyIncome";
import ExpenditureList from "./ExpenditureList";

class Budget extends React.Component {
  constructor() {
    super();
    this.state = {
      income: "",
      budgets: []
    };
    this.handlemIncomeChange = this.handlemIncomeChange.bind(this);
  }

  addBudget = budgetBar => {
    this.setState(({ budgets }) => ({
      budgets: [...budgets, { ...budgetBar, id: this.generateId() }]
    }));
    console.log(this.state);
  };

  removeBudget = id => {
    this.setState(({ budgets }) => ({
      budgets: budgets.filter(i => i.id !== id)
    }));
  };

  generateId = () => {
    var length = this.state.budgets.length
      ? this.state.budgets.map(({ id }) => id)
      : [0];
    return Math.max(...length) + 1;
  };

  updateIncome = ({ target }) => {
    this.setState({ income: target.value });
  };

  totalBudgeted = () => {
    return this.state.budgets.reduce((total, { amount }) => total + +amount, 0);
  };

  handlemIncomeChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <Header />
        <section style={{ display: "flex", background: "rgb(230, 230, 230)" }}>
          <MonthlyIncome
            income={this.state.income}
            incomeChange={this.handlemIncomeChange}
            totalBudgeted={this.totalBudgeted()}
            updateIncome={this.updateIncome}
          />
          <ExpenditureList
            budgets={this.state.budgets}
            add={this.addBudget}
            handleCloseBudgetBarProp={this.removeBudget}
          />
        </section>
      </div>
    );
  }
}

export default Budget;
