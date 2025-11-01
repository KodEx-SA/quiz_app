# Quiz.jsx Component Documentation

## Overview

The `Quiz.jsx` component is the core of the Quiz App, implementing all the interactive quiz logic, state management, and user interface rendering. It handles question progression, answer validation, scoring, and visual feedback.

## Component Structure

### Imports
```javascript
import { useState } from 'react';
import { data } from '../../assets/data';
import './Quiz.css';
```
- `useState`: React hook for managing component state
- `data`: Quiz questions imported from assets
- `./Quiz.css`: Component-specific styles

### State Variables

The component uses five state variables managed with `useState`:

```javascript
const [index, setIndex] = useState(0);           // Current question index
const [question, setQuestion] = useState(data[index]); // Current question object
const [lock, setLock] = useState(false);         // Prevents changing answer after selection
const [score, setScore] = useState(0);           // Number of correct answers
const [result, setResult] = useState(false);     // Shows final score screen
```

### Functions

#### `checkAns(e, ans)`
Handles option selection when user clicks an answer.

**Parameters:**
- `e`: Click event object
- `ans`: Selected answer text

**Logic:**
1. Checks if selection is not locked (`lock === false`)
2. Compares selected answer with correct answer (`question.answer`)
3. Adds CSS class:
   - `"correct"` for right answers (green highlight)
   - `"wrong"` for wrong answers (red highlight)
4. Increments score if correct (`setScore(prev => prev + 1)`)
5. Locks selection (`setLock(true)`)

#### `next()`
Handles progression to next question or showing results.

**Logic:**
1. Only executes if answer is selected (`lock === true`)
2. Checks if current question is the last one (`index === data.length - 1`)
3. If last question: Sets `result` to `true` (shows score screen)
4. If not last question:
   - Removes all `"correct"` and `"wrong"` classes from options
   - Increments question index (`setIndex(prev => prev + 1)`)
   - Updates current question (`setQuestion(data[index + 1])`)
   - Unlocks selection (`setLock(false)`)

#### `reset()`
Resets the quiz to initial state for replay.

**Logic:**
- Resets all state variables to their initial values
- Allows starting the quiz again from question 1

### Render Logic

The component uses conditional rendering based on the `result` state:

#### Quiz Mode (`result === false`)
Renders the active quiz interface:
- Quiz title ("Quiz App")
- Current question number and text (`{index + 1}. {question.question}`)
- Options list: Maps `question.options` array to clickable `<li>` elements
- Next button
- Question counter (`{index + 1} of {data.length} questions`)

#### Results Mode (`result === true`)
Renders the final score screen:
- Score display (`You Scored {score} out of {data.length}`)
- Reset button

### Event Handlers

#### Option Click
```javascript
onClick={(e) => { checkAns(e, option) }}
```
- Attached to each option `<li>`
- Passes click event and option text to `checkAns`

#### Next Button Click
```javascript
onClick={next}
```
- Advances to next question or shows results

#### Reset Button Click
```javascript
onClick={reset}
```
- Restarts the entire quiz

### CSS Integration

The component relies on CSS classes for visual feedback:
- `.correct`: Applied to correct answers (green styling)
- `.wrong`: Applied to incorrect answers (red styling)
- Classes are added/removed dynamically using `e.target.classList.add()` and `document.querySelectorAll()`

### Data Flow

1. **Initialization**: Loads first question from `data[0]`
2. **User Interaction**: Click option → validate → highlight → lock
3. **Progression**: Click Next → clear highlights → load next question → unlock
4. **Completion**: After last question → show results
5. **Reset**: Clear all state → restart from beginning

### Key Features

- **State Management**: Uses React hooks for clean state handling
- **Answer Validation**: Immediate feedback with visual indicators
- **Progress Tracking**: Maintains question index and score
- **User Experience**: Prevents multiple selections, shows progress
- **Reset Functionality**: Allows multiple quiz attempts
- **Dynamic Rendering**: Conditional UI based on quiz state

### Dependencies

- **External**: `data` array from `../../assets/data.js`
- **Internal**: `./Quiz.css` for styling
- **React**: `useState` hook for state management

This component encapsulates all quiz logic in a self-contained, reusable React component with clear separation of concerns between state management, event handling, and rendering.
