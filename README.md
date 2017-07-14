# projector-jest

> Run [Jest](http://facebook.github.io/jest/) with ease

## Installation

```sh
yarn add --dev projector-jest
```

## Usage

```js
import * as jest from 'projector-jest';

export async function test() {
  await jest.test();
}

export async function testWithConfig() {
  await jest.test({
    testPathIgnorePatterns: ["/node_modules/", "/fixtures/"],
    watch: true,
  });
}
```
