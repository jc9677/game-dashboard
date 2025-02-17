import React from 'react';
import './GameCard.css';

interface GameCardProps {
  title: string;
  url: string;
  description?: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, url, description }) => {
  return (
    <a href={url} className="game-card" target="_blank" rel="noopener noreferrer">
      <div className="game-card-content">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </a>
  );
};

export default GameCard;
