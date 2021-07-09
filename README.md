## How to start

Using npm:

```bash
$ npm install
```

Using yarn:

```bash
$ yarn 
```

After install dependencies, `node_modules` in root project will be generated. After that you can start to create another component inside components folder.

## How to run your component

Neron also provide `example` folder inside `src` folder. Example folder is dummy project that created using `create react app` and you can use that as a common react project to run your component inside `App.tsx`.

Before you can use the example project, don't forget to install all dependencies.

1. Go to root project, and build your component design system
```bash
yarn build
```

2. Go to example folder inside src folder and run:
```bash
yarn && yarn start
```
example project will run at `localhost:3000` (by default)

3. Import and use your component inside `App.tsx` on example folder
sample on `App.tsx`
```js
import { Hello } from 'neron';

export default function App() {
  return (
    <Hello />
  );
}
```