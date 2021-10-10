import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { deletePost } from '../../../actions/chat';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <div>
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt={post.name} src={post.name} />
        </ListItemAvatar>
        <ListItemText primary={post.name} secondary={post.chat} />
        {(user?.result?._id === post?.creator) && (user?.result?._id) ? (
        <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        ) : <div></div>}
      </ListItem>
      <br />
    </div>
  );
};

export default Post;
