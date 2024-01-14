import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  IconButton,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  MdThumbUp,
  MdOutlineThumbUpOffAlt,
  MdThumbDown,
  MdOutlineThumbDownOffAlt,
} from 'react-icons/md';

export default function VoteButton({
  id,
  upVote,
  downVote,
  neturalizeVote,
  upVotesBy,
  downVotesBy,
  authUser,
}) {
  const isUpVoted = upVotesBy.includes(authUser);
  const isDownVoted = downVotesBy.includes(authUser);
  console.log(`authUser: ${authUser} id: ${id}`);

  const onUpVoteClick = () => {
    upVote(id);
  };

  const onDownVoteClick = () => {
    downVote(id);
  };

  const onNeutralizeVoteClick = () => {
    neturalizeVote(id);
  };

  const iconColor = useColorModeValue('green.500', 'green.400');

  return (
    <Box display="flex" alignItems="center" spacing={2}>
      <IconButton
        icon={isUpVoted ? <Icon as={MdThumbUp} /> : <Icon as={MdOutlineThumbUpOffAlt} />}
        onClick={isUpVoted ? onNeutralizeVoteClick : onUpVoteClick}
        _hover={{ color: 'green.300' }}
        _active={{ color: 'green.200' }}
        _focus={{ color: 'green.200' }}
        color={iconColor}
      />
      <Text fontSize="sm" fontWeight="medium" color="gray.700">
        {upVotesBy.length}
      </Text>
      <IconButton
        icon={isDownVoted ? <Icon as={MdThumbDown} /> : <Icon as={MdOutlineThumbDownOffAlt} />}
        onClick={isDownVoted ? onNeutralizeVoteClick : onDownVoteClick}
        _hover={{ color: 'red.300' }}
        _active={{ color: 'red.200' }}
        _focus={{ color: 'red.200' }}
        color="red.500"
      />
      <Text fontSize="sm" fontWeight="medium" color="gray.700" ml={2}>
        {downVotesBy.length}
      </Text>
    </Box>
  );
}

VoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
};
