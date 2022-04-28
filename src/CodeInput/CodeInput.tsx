import React from 'react';
import { TextInput } from 'react-native';

import styles from './CodeInput.styles';
import type { CodeInputProps } from './CodeInput.types';

function CodeInput(props: CodeInputProps) {
  const { idx, placeholder, value, reference, autoFocus, onChangeText } = props;
  return (
    <TextInput
      key={idx}
      style={styles.input}
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
      maxLength={1}
      keyboardType="phone-pad"
      ref={reference}
      autoFocus={autoFocus}
    />
  );
}

export default React.memo(CodeInput);
