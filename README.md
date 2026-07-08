# codemo-practice

> A hands-on automation testing practice repository using Playwright and [Codemo Playground](https://codemo.dev/playground/getting-started)

## 📚 About

This repository contains Playwright automation tests for practicing test automation skills on [Codemo Playground](https://codemo.dev/playground/getting-started) — a real-world sandbox environment designed for learning and mastering automation testing.

**Codemo** is a personal website built to provide a guided learning space where you can practice:
- Testing real-world UI components (buttons, inputs, selects, dialogs, file actions, etc.)
- Identifying elements reliably
- Validating application states
- Building maintainable automation scripts
- Exploring browser interactions and dynamic UI behaviors

## 🎯 What is Codemo Playground?

Codemo Playground is a collection of hands-on testing exercises and challenges covering:
- **Getting Started** - Introduction to the playground and practice methodology
- **General UI** - Testing standard web components
- **Dynamic UI** - Handling interactive and dynamic element behaviors
- **Browser Interactions** - Working with browser APIs and events
- **Storage & State** - Managing application state and persistence
- **API** - Testing API integrations
- **Beehive** - A realistic e-commerce application for end-to-end testing

Visit: [https://codemo.dev/playground/getting-started](https://codemo.dev/playground/getting-started)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd codemo-practice
```

2. Install dependencies:
```bash
npm install
```

### Running Tests

Run all tests:
```bash
npm test
```

Run a specific test file:
```bash
npx playwright test tests/login.spec.ts
```

Run tests in headed mode (see browser):
```bash
npx playwright test --headed
```

Run tests with UI mode:
```bash
npx playwright test --ui
```

View test report:
```bash
npx playwright show-report
```

## 📁 Repository Structure

```
tests/playground/ # Contains all Playwright test files organized by feature or scenario
  ├── general-ui/ # Tests for general UI components
  ├── dynamic-ui/ # Tests for dynamic and interactive elements
  ├── browser-interactions/ # Tests for browser API interactions
  ├── storage-state/ # Tests for application state and storage
  ├── api/ # Tests for API integrations
  └── beehive/ # End-to-end tests for the Beehive e-commerce application
```

## 📝 Test Practices

These tests demonstrate best practices for automation testing:
- Clear, descriptive test names
- Proper use of selectors
- Waiting for elements intelligently
- Testing realistic user flows
- Validating expected outcomes

## 🔗 Links

- **Codemo Website**: https://codemo.dev
- **Playground**: https://codemo.dev/playground/getting-started
- **Blog**: https://codemo.dev/blog
- **Contact**: contact@codemo.dev

## 💡 How to Use This Repository for Learning

1. Visit [Codemo Playground](https://codemo.dev/playground/getting-started) and pick a scenario to practice
2. Interact with the example and observe the expected behavior
3. Write test cases in this repository to automate the flow
4. Run and refine your tests
5. Explore different testing patterns and techniques

## 🐛 Reporting Issues

If you find issues with the tests or have suggestions, please report them through:
- [Codemo Playground issue form](https://codemo.dev/playground/getting-started)
- Email: contact@codemo.dev
Or create a GitHub issue in this repository.

## 📄 License

This repository is public and created for educational and practice purposes.

---

Built with ❤️ for automation testing practitioners. Practice. Share. Quiet Moments.
