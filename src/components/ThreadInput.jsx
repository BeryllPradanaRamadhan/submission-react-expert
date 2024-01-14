import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';
import useInput from '../hooks/useInput';

export default function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  return (
    <FormControl ml={2} mt={1} mb={5}>
      <Input
        label="Judul"
        mb={2}
        size="sm"
        value={title}
        onChange={onTitleChange}
      />
      <Input
        label="Kategori"
        mb={2}
        size="sm"
        value={category}
        onChange={onCategoryChange}
      />
      <Textarea
        resize="none"
        size="sm"
        sx={{ width: 1120 }}
        label="Masukkan Ide Kamu"
        value={body}
        onChange={onBodyChange}
      />
      <Button
        variant="solid"
        mt={1}
        onClick={() => addThread({ title, body, category })}
      >
        Kirim
      </Button>
    </FormControl>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};
