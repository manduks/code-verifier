import React, { useState, createRef, useEffect } from 'react';
import { View } from 'react-native';

import type { CodeVerifierProp } from './CodeVerifier.types';
import CodeInput from '../CodeInput';

import styles from './CodeVerifier.styles';

const CODE_LENGTH = 4;

export default function CodeVerifier(props: CodeVerifierProp) {
  const codeInputs = new Array(4).fill(null);
  const [codes, setCodes] = useState({});
  const mapRef: any[] = [];
  const { value, onChange } = props;

  useEffect(() => {
    const verificationCode = Object.values(codes).join('');
    if (verificationCode.length === CODE_LENGTH && onChange) {
      onChange(verificationCode);
    }
  }, [codes, onChange]);

  return (
    <View style={styles.content}>
      {codeInputs.map((_v, index) => {
        const newRef = createRef();
        mapRef.push(newRef);

        return (
          <CodeInput
            key={index}
            idx={index}
            onChangeText={(text: string) => {
              setCodes({ ...codes, [index]: text });
              if (text === '') {
                index > 0 && mapRef[index - 1].current.focus();
                return;
              }

              if (index < codeInputs.length - 1) {
                mapRef[index + 1].current.focus();
              } else {
                mapRef[index].current.focus();
              }
            }}
            value={value}
            reference={newRef}
            autoFocus={index === 0}
          />
        );
      })}
    </View>
  );
}
