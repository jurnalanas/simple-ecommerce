# Simple Ecommerce

A simple mobile web ecommerce built in pure react.

Live version: [https://simple-ecommerce.netlify.com](https://simple-ecommerce.netlify.com/)

## Setup

### Prerequisites

- [Node >= 11.x.x](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)

### Development Setup

Make sure you're aleready install [NodeJS](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/en/). After that run this several command.

- Add project

```bash
$ git clone https://github.com/jurnalanas/simple-ecommerce.git
$ cd simple-ecommerce
$ cp env.sample .env # adjust the value in it as needed
$ yarn # install all dependencies
```

### Available commands

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.


## Screenshots

![login](/screenshots/login.png)
![products](/screenshots/products.png)
![product detail](/screenshots/product-detail.png)
![profile](/screenshots/profile.png)
![side drawer](/screenshots/search-drawer.png)


## Author
- Muhammad Nasrurrohman - [@jurnalanas](https://github.com/jurnalanas)

## License
This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details

## TODO

- [ ] Consider redux (?) (currently using React Context for the state management)
- [ ] e2e tests
- [ ] unit tests
