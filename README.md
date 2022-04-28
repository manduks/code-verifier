# react-code-verifier

multiplatform react code verifier

## Installation

```sh
npm install react-code-verifier
```

## Usage

```js
import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import CodeVerifier from 'react-code-verifier';

export default function App() {
  return (
    <View style={styles.container}>
      <CodeVerifier onChange={(value) => console.log(value)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
