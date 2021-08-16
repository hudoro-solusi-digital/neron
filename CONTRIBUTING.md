# Contributing

First of all, we want to say thank you for taking the time to contribute. You are awesome! 👍

## What to do first?

When contributing to this repository, please discuss the change you wish to make via [issues](https://github.com/hudoro-solusi-digital/neron/issues) before making changes.

## General Guidelines

- If adding a new feature, write the corresponding storybook and test for the new feature
- Ensure that nothing is broken. You can use the storybook to see if everything is fine.
- Use prettier before commiting.
- Yarn is preferred

## Setup

### Pre-requisites

- Node: `^9.0.0`
- Yarn

### Install

1. Fork the repository and create your own branch
2. Install the dependencies

```sh
yarn install
```

### Developing

```sh
# Launch the storybook
yarn storybook

# Run tests
yarn test

# Prettify all the things
yarn prettier
```

### Project structure

#### components

Is where the components should be written

#### stories

Where you should write your storybook

#### utils

All the utilities like interfaces, types, etc.
