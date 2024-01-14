import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  FormControl,
  Textarea,
  Button,
} from '@chakra-ui/react';
import useInput from '../hooks/useInput';

export default function CommentInput({ addComment }) {
  const [comment, onCommentChange, setComment] = useInput('');
  const onCommentSubmit = () => {
    addComment(comment);
    setComment('');
  };
  return (
    <>
      <Text
        fontWeight="bold"
        fontSize="14px"
        ml="2"
      >
        Comment...
      </Text>
      <FormControl ml="2" mt="1" mb="5">
        <Textarea
          id="outlined-multiline-flexible"
          resize="vertical"
          rows={4}
          width="1120px"
          value={comment}
          onChange={onCommentChange}
        />
        <Button variant="solid" mt="1" onClick={onCommentSubmit}>
          Send
        </Button>
      </FormControl>
    </>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};
