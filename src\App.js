import React, { useState, useEffect } from 'react';
import Snake from './Snake';
import Food from './Food';
import './App.css';

function App() {
  const [snake, setSnake] = useState([[10, 10]]);
  const [food, setFood] = useState([20, 20]);
  const [direction, setDirection] = useState('RIGHT');
  const [score, setScore] = useState(0);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowUp':
        setDirection('UP');
        break;
      case 'ArrowDown':
        setDirection('DOWN');
        break;
      case 'ArrowLeft':
        setDirection('LEFT');
        break;
      case 'ArrowRight':
        setDirection('RIGHT');
        break;
      default:
        break;
    }
  };

  const moveSnake = () => {
    let newHead;
    switch (direction) {
      case 'UP':
        newHead = [snake[0][0], snake[0][1] - 1];
        break;
      case 'DOWN':
        newHead = [snake[0][0], snake[0][1] + 1];
        break;
      case 'LEFT':
        newHead = [snake[0][0] - 1, snake[0][1]];
        break;
      case 'RIGHT':
        newHead = [snake[0][0] + 1, snake[0][1]];
        break;
      default:
        break;
    }
    setSnake([newHead, ...snake.slice(0, -1)]);
  };

  const checkCollision = () => {
    if (
      snake[0][0] < 0 ||
      snake[0][0] > 40 ||
      snake[0][1] < 0 ||
      snake[0][1] > 40
    ) {
      alert('Game Over!');
      setSnake([[10, 10]]);
      setScore(0);
    }
    for (let i = 1; i < snake.length; i++) {
      if (snake[i][0] === snake[0][0] && snake[i][1] === snake[0][1]) {
        alert('Game Over!');
        setSnake([[10, 10]]);
        setScore(0);
      }
    }
  };

  const checkFood = () => {
    if (snake[0][0] === food[0] && snake[0][1] === food[1]) {
      setScore(score + 1);
      setFood([Math.floor(Math.random() * 40), Math.floor(Math.random() * 40)]);
      setSnake([...snake, snake[snake.length - 1]]);
    }
  };

  useEffect(() => {
    moveSnake();
    checkCollision();
    checkFood();
  }, [snake, direction]);

  return (
    <div className="game-container">
      <Snake snake={snake} />
      <Food food={food} />
      <p>Score: {score}</p>
    </div>
  );
}

export default App;