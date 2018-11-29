import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  withStyles,
} from '@material-ui/core';
import Markdown from 'react-markdown';

const Tweet = ({ classes, id, text, createdAt, highlighted }) => {
  return (
    <Card key={id} className={classes.card}>
      <CardHeader
        avatar={
          <Avatar
            style={{
              backgroundColor: 'green',
            }}
          >
            KT
          </Avatar>
        }
        subheader={
          <div className={classes.link}>{moment(createdAt).fromNow()}</div>
        }
      />
      <CardContent className={classes.content}>
        <Typography variant={highlighted ? 'display1' : 'subheading'}>
          <Markdown
            source={text}
            allowedTypes={[
              'root',
              'paragraph',
              'break',
              'emphasis',
              'strong',
              'delete',
              'link',
              'linkReference',
              'inlineCode',
              'code',
            ]}
          />{' '}
        </Typography>
      </CardContent>
    </Card>
  );
};

const styles = theme => ({
  card: {
    marginBottom: theme.spacing.unit * 2,
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  content: {
    wordWrap: 'break-word',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.dark,
  },
});
Tweet.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  // createdAt: PropTypes.string.isRequired,
};

export default withStyles(styles)(Tweet);
