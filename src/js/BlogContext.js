// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development Company, L.P.
import React, { Component, PropTypes } from 'react';
import { Router } from 'react-router';

import store from './store';

export default class BlogContext extends Component {
  getChildContext () {
    return { asyncData: this.props.asyncData };
  }

  componentDidMount () {
    store.setUseContext(false);
  }

  render () {
    const {tag, renderProps} = this.props;

    let Tag = tag || Router;
    return (
      <Tag {...renderProps} />
    );
  }
};

BlogContext.propTypes = {
  asyncData: PropTypes.any,
  renderProps: PropTypes.any.isRequired
};

BlogContext.childContextTypes = {
  asyncData: PropTypes.any
};
