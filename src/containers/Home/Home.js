import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Timeline from '../../components/Timeline';
import TweetInput from '../../components/TweetInput';
import Tweet from '../../components/Tweet';
export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        {
          id: 1,
          text: 'test-1',
        },
        {
          id: 2,
          text: 'test-1',
        },
        {
          id: 3,
          text: 'test-1',
        },
        {
          id: 4,
          text: 'test-1',
        },
        {
          id: 5,
          text: 'test-1',
        },
      ],
    };
  }

  onSubmit = text => {
    const { createTweet } = this.props;
    createTweet({
      text,
    });
  };

  render() {
    const { tweets } = this.state;

    return (
      <React.Fragment>
        <TweetInput onSubmit={this.onSubmit} />
        <Timeline>
          {tweets.map(tweet => (
            <Tweet {...tweet} key={tweet.id} />
          ))}
        </Timeline>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
