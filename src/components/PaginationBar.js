import React, { Component } from "react";
import { Toolbar, Button, Typography, Tabs, Tab } from "@material-ui/core";

const styles = {
  root: {
    marginTop: '1em'
  },
  tab: {
    minWidth: 0
  },
  info: {
    whiteSpace: 'nowrap'
  },
  tool: {
    margin: 'auto'
  }
}

class PaginationBar extends Component {
  constructor(props) {
    super(props);

    const { totalUsers, usersPerPage } = props;

    this.state = {
      currentPage: 0,
      totalPages: Math.ceil(totalUsers / usersPerPage)
    };
  }

  isFirstPage = () => this.state.currentPage === 0;
  isLastPage = () => this.state.currentPage === (this.state.totalPages || 1) - 1;

  getRangeFromPageIndex = pageIndex => {
    const { usersPerPage, totalUsers } = this.props;

    let from = pageIndex * usersPerPage;
    let to = from + usersPerPage - 1;

    if (to > totalUsers)
      to = totalUsers - 1;

    if (from > to)
      from = to;

    return { from, to };
  };

  changePage = pageIndex => {
    this.props.onRangeChange(this.getRangeFromPageIndex(pageIndex));

    this.setState({
      currentPage: pageIndex
    });
  };

  goToPrevious = () => {
    const currentPage = this.state.currentPage;
    if (this.isFirstPage()) return;

    const changedPage = currentPage - 1;
    this.changePage(changedPage);
  };

  goToNext = () => {
    const { currentPage, totalPages } = this.state;
    if (this.isLastPage()) return;

    const changedPage = currentPage + 1;
    this.changePage(changedPage);
  };

  goToFirst = () => {
    if (this.isFirstPage()) return;
    this.changePage(0);
  };

  goToLast = () => {
    if (this.isLastPage()) return;
    this.changePage(this.state.totalPages - 1);
  };

  handleTotalUsersUpdate = () => {
    const { totalUsers, usersPerPage, onRangeChange } = this.props;
    const totalPages = Math.ceil(totalUsers / usersPerPage);

    let currentPage = this.state.currentPage;
    if (currentPage > totalPages)
      currentPage = totalPages - 1;

    this.setState({
      totalPages,
      currentPage
    });

    onRangeChange(this.getRangeFromPageIndex(currentPage));
  };

  componentDidUpdate(prevProps) {
    if (prevProps.totalUsers !== this.props.totalUsers)
      this.handleTotalUsersUpdate();
  }

  render() {
    const { totalUsers, usersPerPage } = this.props;
    const { currentPage, totalPages } = this.state;
    const range = this.getRangeFromPageIndex(this.state.currentPage);

    return (
      <Toolbar style={styles.root}>
        <Button style={styles.tool} disabled={this.isFirstPage()} onClick={this.goToFirst}>First</Button>
        <Button style={styles.tool} disabled={this.isFirstPage()} onClick={this.goToPrevious}>Prev</Button>

        <Typography style={styles.tool} style={styles.info}>
          {range.from + 1}-{range.to + 1} of {totalUsers}
        </Typography>

        <Button style={styles.tool} disabled={this.isLastPage()} onClick={this.goToNext}>Next</Button>
        <Button style={styles.tool} disabled={this.isLastPage()} onClick={this.goToLast}>Last</Button>
      </Toolbar>
    );
  }
}

export default PaginationBar;