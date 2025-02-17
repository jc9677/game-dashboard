# Game Collection Landing Page

A React-based landing page that showcases a collection of web-based games. This project serves as a central hub for accessing various games hosted on GitHub Pages.

## Current Games

- [W🌎RLDle](https://jc9677.github.io/worldle/) - A geography-based word guessing game

## Features

- Responsive card-based layout
- Smooth animations and transitions
- Mobile-friendly design
- Easy navigation to different games

## Development

This project uses React with TypeScript. To run the development server:

```bash
npm install
npm start
```

The development server will start on port 3000 (or another available port if 3000 is in use).

## Deployment

This project is configured for GitHub Pages deployment. To deploy:

1. Ensure the `homepage` field in `package.json` points to your GitHub Pages URL
2. Run the deployment command:
```bash
npm run deploy
```

This will build the project and push it to the `gh-pages` branch of your repository.

## Adding New Games

To add new games to the collection:

1. Open `src/App.tsx`
2. Add a new entry to the `games` array:
```typescript
{
  title: "Game Name",
  url: "https://your-game-url.com",
  description: "Brief description of the game"
}
```

## Contributing

Feel free to contribute by:
- Adding new games to the collection
- Improving the UI/UX
- Fixing bugs or issues
- Suggesting new features

## License

MIT License - feel free to use this project as a template for your own game collection.
