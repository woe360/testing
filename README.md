# Quiz App

A modern, interactive quiz application built with Next.js, React, and TypeScript. Features a clean UI inspired by modern design principles with smooth navigation and comprehensive result feedback.

## Features

### ✅ Functional Requirements

1. **Quiz Navigation**
   - Display one question at a time
   - Previous/Next/Submit buttons with proper state management
   - Disable "Previous" on first question and "Next" on last question

2. **Answer Handling**
   - Store user selections for each question
   - Allow review of previously answered questions
   - Maintain answer state throughout the quiz

3. **Scoring & Feedback**
   - Calculate and display total score as percentage
   - Show detailed feedback with correct/incorrect indicators
   - Display user's answer vs correct answer for each question
   - Provide explanations for each question
   - "Try Again" button to reset the quiz

### 🎨 Design Features

- Modern, clean UI with rounded corners and smooth transitions
- Responsive design that works on all devices
- Visual progress indicators
- Color-coded feedback (green for correct, red for incorrect)
- Professional typography and spacing

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or download the project files
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Quiz.tsx            # Main quiz orchestrator
│   ├── QuizQuestion.tsx    # Individual question display
│   ├── QuizNavigation.tsx  # Navigation controls
│   └── QuizResults.tsx     # Results and feedback display
├── data/
│   └── sampleQuestions.ts  # Sample quiz data
└── types/
    └── quiz.ts             # TypeScript type definitions
```

## Customizing Questions

To add your own questions, edit the `src/data/sampleQuestions.ts` file. Each question should follow this structure:

```typescript
{
  id: 'unique-id',
  question: 'Your question text?',
  options: [
    'Option A',
    'Option B', 
    'Option C',
    'Option D'
  ],
  correctAnswer: 0, // Index of correct option (0-based)
  explanation: 'Explanation of why this answer is correct'
}
```

## Technology Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library with hooks
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License. 