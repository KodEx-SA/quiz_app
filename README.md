# Quiz App

A simple, interactive quiz application built with React and Vite. Test your knowledge with multiple-choice questions and get instant feedback on your answers.

## Features

- **Interactive Quiz**: Click on options to select answers
- **Instant Feedback**: Correct answers highlight in green, incorrect in red
- **Score Tracking**: Keeps track of your correct answers
- **Progress Indicator**: Shows current question number out of total
- **Reset Functionality**: Restart the quiz anytime
- **Responsive Design**: Clean, centered layout that works on different screen sizes

## Technologies Used

- **React 19**: Modern React with hooks for state management
- **Vite**: Fast build tool and development server
- **CSS**: Custom styling for interactive UI elements
- **ESLint**: Code linting for better code quality

## Project Structure

```
quiz_app/
├── src/
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # React app entry point
│   ├── index.css            # Global styles
│   ├── assets/
│   │   └── data.js          # Quiz questions and answers
│   └── components/
│       └── quiz/
│           ├── Quiz.jsx     # Core quiz component with logic
│           └── Quiz.css     # Quiz-specific styles
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd quiz_app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## How to Use

1. The quiz loads with the first question displayed
2. Click on one of the four answer options
3. The selected answer will highlight:
   - Green for correct answers
   - Red for incorrect answers
4. Click the "Next" button to proceed to the next question
5. After the last question, your final score will be displayed
6. Click "Reset" to start the quiz again

## Customization

### Adding New Questions

Edit `src/assets/data.js` to add more questions. Each question object should have:
- `question`: The question text
- `options`: Array of 4 possible answers
- `answer`: The correct answer (must match one of the options exactly)

### Styling

Modify `src/components/quiz/Quiz.css` to change colors, fonts, or layout. The app uses CSS classes:
- `.correct`: Green styling for right answers
- `.wrong`: Red styling for wrong answers

## Scripts

- `npm run dev`: Start development server with hot reload
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview production build locally

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
