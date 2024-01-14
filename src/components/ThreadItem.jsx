import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardFooter,
  Text,
  IconButton,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import { LiaCommentSolid } from 'react-icons/lia';
import VoteButton from './VoteButton';
import timeSince from '../utils/timeSince';

export default function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  upVote,
  downVote,
  neturalizeVote,
  threadOwner,
  authUser,
}) {
  const navigate = useNavigate();

  const onThreadClick = () => {
    navigate(`/thread/${id}`);
  };

  const textColor = useColorModeValue('gray.700', 'white');

  return (
    <Card mt={4} p={4} shadow="md">
      <CardBody onClick={onThreadClick} cursor="pointer">
        <Text fontSize="md" fontWeight="bold" color={textColor}>
          {category}
        </Text>
        <Text fontSize="xl" fontWeight="bold" mb={2} color={textColor}>
          {title}
        </Text>
        <Text fontSize="md" color={textColor}>
          {body}
        </Text>
      </CardBody>
      <CardFooter flex justify="space-between">
        <VoteButton
          id={id}
          authUser={authUser}
          upVote={upVote}
          downVote={downVote}
          neturalizeVote={neturalizeVote}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
        <IconButton icon={<LiaCommentSolid />} aria-label="Comments" />
        <Text fontSize="sm" color={textColor}>
          {totalComments}
        </Text>
        <Text fontSize="sm" color="gray.400" ml={4}>
          {timeSince(new Date(createdAt))}
        </Text>
        <Text fontSize="sm" color="gray.400" ml={4}>
          Dibuat Oleh
          { threadOwner.name }
        </Text>

        <Avatar src={threadOwner.avatar} />
      </CardFooter>
    </Card>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  threadOwner: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  authUser: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
};

export { threadItemShape, userShape };
