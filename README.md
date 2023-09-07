# Battleships Game

Welcome to the Battleships Game project! This is a simple implementation of the classic Battleships game using React. The game involves positioning five ships on a 10x10 board and taking turns to fire at the ships until all of them are sunk.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm (Node Package Manager) installed on your machine.

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/MelqonHovhannisyan/battleships-game.git
```

2. Navigate to the project directory:
```bash
cd battleships-game
```

#### Install the project dependencies:

```bash
npm install
```

Usage
Start the development server:

```bash
npm start
```

Open your web browser and visit http://localhost:3000 to play the Battleships game.

If you have any questions, feedback, or suggestions, please feel free to reach out to us. We hope you enjoy playing Battleships!


## Acknowledgments

This project was made possible with the help of resources and inspiration from the following:

- [Vite](https://vitejs.dev/): A fast build tool for your React projects, making development and bundling efficient.

- [React](https://reactjs.org/): The popular JavaScript library for building user interfaces, which was used to create the interactive components in this project.

- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework used to style and design the user interface of this project.

We express our gratitude to these resources for their valuable insights and tools that helped us in the development of this project. 

---


### React + TypeScript + Vite

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


**Contributors:** Melkon Hovhannisyan (@MelqonHovhannisyan)

**Contact:** melkon.hovhannisian@gmail.com

