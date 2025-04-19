const express = require('express');
const router = express.Router();

// Hardcoded project details (this would typically come from a database or file)
const projects = {
  AgeCalculator: {
      title: "Age Calculator",
      description: "A tool to calculate age from a given date of birth.",
      detailedDescription: "The Age Calculator is a precise and interactive tool designed to compute a user's exact age based on their date of birth. It calculates the age in years, months, and days, providing a detailed breakdown. Additionally, it displays the time remaining until the user's next birthday, making it useful for personal milestones and official documentation. The tool supports various date formats and updates results in real-time as inputs change, ensuring a seamless user experience.",
      features: [
          "Calculates age in years, months, and days",
          "Supports multiple date formats",
          "Displays time left until the next birthday",
          "Real-time updates without page refresh",
          "Simple and easy-to-use interface"
      ],
      demo: "https://agecalculator-topaz.vercel.app/",
      github: "https://github.com/sheix-khizar/JavaScript-Projects/tree/main/JS-Projects/Age-Calculator",
      image: "/images/ageCalculator.png",
      target: "blank"
  },
  ColorChanger: {
      title: "Color Changer",
      description: "A dynamic tool to change background colors instantly.",
      detailedDescription: "The Color Changer is a dynamic utility that allows users to alter the background color of a webpage instantly. Users can select from predefined colors, input custom color codes, or generate random colors with a single click. The tool features smooth transition effects and includes a light/dark mode toggle, enhancing the visual appeal and user interaction.",
      features: [
          "Click-to-change background color",
          "Random color generator feature",
          "Custom color input option",
          "Smooth transition effects",
          "Light and dark mode toggle"
      ],
      demo: "https://color-changer-ashy.vercel.app/",
      github: "https://github.com/sheix-khizar/JavaScript-Projects/tree/main/JS-Projects/Color-Changer",
      image: "/images/colorChanger.png",
      target: "_blank"
  },
  Counter: {
      title: "Counter",
      description: "A simple tool to count numbers up and down.",
      detailedDescription: "The Counter is a straightforward tool that enables users to increment or decrement a numerical value with ease. It includes a reset function to return the count to zero. The application updates in real-time without delays, offering a minimalistic and intuitive design. It's ideal for counting items, tracking scores, or tallying numbers in various scenarios.",
      features: [
          "Increment and decrement functionality",
          "Reset button to start over",
          "Real-time updates without delay",
          "Minimalistic and intuitive design",
          "Works offline without dependencies"
      ],
      demo: "https://counter-eight-teal.vercel.app/",
      github: "https://github.com/sheix-khizar/JavaScript-Projects/tree/main/JS-Projects/Counter",
      image: "/images/counter.png",
      target: "_blank"
  },
  DigitalClock: {
      title: "Digital Clock",
      description: "A real-time digital clock display.",
      detailedDescription: "The Digital Clock displays the current time in a digital format, updating every second to reflect real-time changes. It supports both 12-hour and 24-hour formats, showing hours, minutes, and seconds. The clock features a minimalistic and modern design, operating smoothly without requiring page reloads, making it a functional addition to any webpage.",
      features: [
          "Real-time updates with smooth transitions",
          "Supports 12-hour and 24-hour formats",
          "Displays hours, minutes, and seconds",
          "Minimal and modern design",
          "Works without requiring page reloads"
      ],
      demo: "https://digital-clock-iota-ivory.vercel.app/",
      github: "https://github.com/sheix-khizar/JavaScript-Projects/tree/main/JS-Projects/Digital-Clock",
      image: "/images/digitalClock.png",
      target: "_blank"
  },
  PixelArtCanvas: {
      title: "Pixel Art Canvas",
      description: "Create pixel art on a customizable grid.",
      detailedDescription: "The Pixel Art Canvas is an engaging tool that allows users to create pixel-based artwork on a customizable grid. Users can select grid sizes, choose colors from a palette, and utilize erase and clear functions. The canvas supports saving artwork as an image, providing a user-friendly and interactive platform for digital creativity.",
      features: [
          "Custom grid sizes",
          "Color palette selection",
          "Erase and clear canvas options",
          "Save artwork as an image",
          "User-friendly and interactive design"
      ],
      demo: "https://pixer-art-canvas.vercel.app/",
      github: "https://github.com/sheix-khizar/JavaScript-Projects/tree/main/JS-Projects/Pixel-Art-Canvas",
      image: "/images/pixelArtCanvas.png",
      target: "_blank"
  },
  QRCodeGenerator: {
      title: "QR Code Generator",
      description: "Generate QR codes for any text or URL.",
      detailedDescription: "The QR Code Generator enables users to create QR codes from any text or URL input. It offers customizable QR code sizes and supports different color themes. Users can download the generated QR codes as images, and the tool provides instant generation with a real-time preview, facilitating easy sharing and accessibility.",
      features: [
          "Generates QR codes for text and URLs",
          "Downloadable QR code images",
          "Customizable QR code size",
          "Supports different color themes",
          "Instant generation with real-time preview"
      ],
      demo: "https://qr-code-generator-gold-zeta.vercel.app/",
      github: "https://github.com/sheix-khizar/JavaScript-Projects/tree/main/JS-Projects/QR-Code-Generator",
      image: "/images/qrCodeGenerator.png",
      target: "_blank"
  },
  RandomEmojiGenerator: {
      title: "Random Emoji Generator",
      description: "Generate random emojis with each click.",
      detailedDescription: "The Random Emoji Generator is a fun application that displays a new random emoji each time the user clicks a button. With a simple and user-friendly design, it's perfect for entertainment, inspiration, or adding a touch of humor to any session.",
      features: [
          "Generates a new random emoji on each click",
          "Simple and user-friendly design",
          "Great for entertainment and inspiration"
      ],
      demo: "https://random-emoji-generator-psi.vercel.app/",
      github: "https://github.com/sheix-khizar/JavaScript-Projects/tree/main/JS-Projects/Random-Emoji-Generator",
      image: "/images/randomEmojiGenerator.png",
      target: "_blank"
  },
  TodoList: {
      title: "Todo List",
      description: "A simple task management tool.",
      detailedDescription: "The Todo List is a practical task management tool that allows users to add, edit, and remove tasks. Users can mark tasks as completed or pending, and the application supports local storage to preserve tasks between sessions. Its minimal and distraction-free interface helps users stay organized and focused.",
      features: [
          "Add, edit, and remove tasks",
          "Mark tasks as completed or pending",
          "Local storage support",
          "Minimal and distraction-free interface"
      ],
      demo: "https://todo-list-amber-phi-46.vercel.app/",
      github: "https://github.com/sheix-khizar/JavaScript-Projects/tree/main/JS-Projects/Todo-List",
      image: "/images/todoList.png",
      target: "_blank"
  },
  ColorPicker: {
    title: "Color Picker",
    description: "A tool to pick and copy color codes.",
    detailedDescription: "The Color Picker is a handy tool for designers and developers, enabling users to select colors using a spectrum interface. It displays the selected color's HEX, RGB, and HSL values, and includes a one-click copy feature for convenience. A live color preview enhances the user experience, making precise color selection effortless.",
    features: [
      "Select colors using a color spectrum",
      "Displays color values in HEX, RGB, and HSL",
      "One-click color code copying",
      "Live color preview",
      "User-friendly interface"
    ],
    demo: "https://color-picker-two-puce.vercel.app/",
    github: "https://github.com/sheix-khizar/JavaScript-Projects/tree/main/JS-Projects/Color-Picker",
    image: "/images/colorPicker.png"
  },
  CountdownTimer: {
    title: "Countdown Timer",
    description: "A timer that counts down from a set time.",
    detailedDescription: "The Countdown Timer allows users to set a specific duration and counts down to zero, providing visual and sound alerts when time is up. It includes pause and reset functionalities, displaying the remaining time in real-time. With a simple and modern UI, it's useful for event reminders, productivity tracking, and time management.",
    features: [
      "Customizable countdown duration",
      "Visual and sound alerts when time is up",
      "Pause and reset functionality",
      "Real-time display of remaining time",
      "Simple and modern UI"
    ],
    demo: "https://countdown-timer-sigma-beige.vercel.app/",
    github: "https://github.com/sheix-khizar/JavaScript-Projects/tree/main/JS-Projects/Countdown-Timer",
    image: "/images/countdownTimer.png"
  },

  RandomJokeGenerator: {
    title: "Random Joke Generator",
    description: "A fun tool that shows random jokes.",
    detailedDescription: "The Random Joke Generator brings humor to users by displaying a new joke each time a button is clicked. It fetches jokes from an API or a local collection, including both programming and general jokes. The application features fast loading, smooth transitions, and a responsive, clean UI design, making it perfect for light-hearted entertainment.",
    features: [
      "Displays a new joke on each click",
      "Includes both programming and general jokes",
      "Fast loading with smooth transitions",
      "Responsive and clean UI design",
      "Works with both local and API-based jokes"
    ],
    demo: "https://joke-generator-plum.vercel.app",
    github: "https://github.com/sheix-khizar/JavaScript-Projects-2/tree/main/JS-Projects/Random-Joke-Generator",
    image: "/images/randomJokeGenerator.png"
  },
  
  TextHider: {
    title: "Text Hider",
    description: "A utility to hide and show text on demand.",
    detailedDescription: "The Text Hider is a utility that allows users to hide or reveal selected text on a webpage with a single click. It's useful for protecting sensitive information temporarily, creating guessing games, or toggling visibility for various purposes. The tool features smooth hiding and revealing animations within a responsive layout and minimal design.",
    features: [
      "Toggle visibility of any text",
      "One-click show/hide button",
      "Works with custom user input",
      "Smooth hiding and revealing animation",
      "Responsive layout and minimal design"
    ],
    demo: "https://text-hider.vercel.app/",
    github: "https://github.com/sheix-khizar/JavaScript-Projects-2/tree/main/JS-Projects/Text-Hider",
    image: "/images/textHider.png"
  },
  
  RandomQuoteGenerator: {
    title: "Random Quote Generator",
    description: "A tool that displays random inspirational quotes.",
    detailedDescription: "The Random Quote Generator fetches and displays a random inspirational or motivational quote each time a button is clicked. It includes the author's name and features smooth fade-in displays of quotes. With a minimal and elegant UI, it supports offline use with local quotes, providing daily motivation or insights from famous thinkers and leaders.",
    features: [
      "Fetches random quotes on button click",
      "Smooth fade-in display of quotes",
      "Includes author names for quotes",
      "Minimal and elegant UI",
      "Offline support with local quotes"
    ],
    demo: "https://quote-generator-tawny-psi.vercel.app/",
    github: "https://github.com/sheix-khizar/JavaScript-Projects-2/tree/main/JS-Projects/Random-Quote-Generator",
    image: "/images/randomQuoteGenerator.png"
  },
  
  RandomNumberGenerator: {
    title: "Random Number Generator",
    description: "Generate random numbers within a custom range.",
    detailedDescription: "The Random Number Generator allows users to generate a random number within a user-defined range. It provides instant output, includes a copy-to-clipboard feature, and offers a clean interface with error handling. The application operates without requiring page reloads, making it ideal for games, decision-making, or testing tasks.",
    features: [
      "User-defined min and max values",
      "Instant random number output",
      "Copy result to clipboard",
      "Clean interface with error handling",
      "No page reload required"
    ],
    demo: "https://random-number-generator-silk.vercel.app/",
    github: "https://github.com/sheix-khizar/JavaScript-Projects-2/tree/main/JS-Projects/RandomNumber-Generator",
    image: "/images/randomNumberGenerator.png"
  },
  
  TipCalculator: {
    title: "Tip Calculator",
    description: "Quickly calculate tip and split bills.",
    detailedDescription: "The Tip Calculator simplifies the process of calculating tips based on a bill amount. Users can input the bill total, select a tip percentage, and divide the total among several people. The application performs real-time calculations, features a clean and responsive design, and includes error handling for empty or invalid inputs, making it perfect for dining out scenarios.",
    features: [
      "Calculate tip based on percentage",
      "Split bill between people",
      "Real-time calculation with inputs",
      "Clean layout and responsive design",
      "Error handling for empty or invalid inputs"
    ],
    demo: "https://tip-calculator-mu-eight.vercel.app/",
    github: "https://github.com/sheix-khizar/JavaScript-Projects-2/tree/main/JS-Projects/Tip-Calculator",
    image: "/images/tipCalculator.png"
  },
  
  WordCounter: {
    title: "Word Counter",
    description: "A basic word counter.",
    detailedDescription: "The Word Counter is a basic tool that counts the number of words in a given text. It supports multi-line input and provides counts for characters, sentences, and paragraphs. The application updates results in real-time and features a mobile-friendly, responsive design, aiding in writing and editing tasks.​",
    features: [
      "Word, character, and sentence count",
      "Supports multi-line input",
      "Paragraph and whitespace detection",
      "Real-time updating of results",
      "Mobile-friendly responsive design"
    ],
    demo: "https://word-counter-sand-six.vercel.app/",
    github: "https://github.com/sheix-khizar/JavaScript-Projects-2/tree/main/JS-Projects/Word-Counter",
    image: "/images/wordCounter.png"
  },
  
  PasswordGenerator: {
    title: "Password Generator",
    description: "Generate secure random passwords.",
    detailedDescription: "The Password Generator creates strong, random passwords for users to ensure security in their accounts. Users can specify the length and types of characters to include, such as uppercase letters, numbers, and special characters.",
    features: [
      "Customizable password length",
      "Option to include/exclude character types",
      "Easy copy-to-clipboard feature",
      "Generates secure passwords with high randomness",
      "Simple and user-friendly interface"
    ],
    demo: "https://password-generator-liart-alpha.vercel.app/",
    github: "https://github.com/sheix-khizar/JavaScript-Projects-2/tree/main/JS-Projects/Password%20Generator",
    image: "/images/passwordGenerator.png"
  },
  
  LoanCalculator: {
    title: "Loan Calculator",
    description: "Calculate monthly payments for loans.",
    detailedDescription: "The Loan Calculator helps users calculate monthly payments for loans based on the principal amount, interest rate, and loan term. This tool is ideal for those planning to take out a loan or simply wanting to estimate future payments.",
    features: [
      "Calculate monthly loan payments",
      "Supports different loan terms and interest rates",
      "Real-time results with user input",
      "Responsive layout for mobile and desktop",
      "Easy-to-understand design with clear results"
    ],
    demo: "https://loan-calculator-delta-gray.vercel.app/",
    github: "https://github.com/sheix-khizar/JavaScript-Projects-2/tree/main/JS-Projects/Loan-Calculator",
    image: "/images/loanCalculator.png"
  },
  
  BMICalculator: {
    title: "BMI Calculator",
    description: "Calculate Body Mass Index (BMI) for health assessment.",
    detailedDescription: "The BMI Calculator allows users to calculate their Body Mass Index based on weight and height. It provides a quick health assessment by classifying the result into different categories, such as underweight, normal, overweight, and obese.",
    features: [
      "Calculate BMI based on weight and height",
      "Shows BMI category (underweight, normal, overweight, etc.)",
      "Provides helpful tips based on the result",
      "Simple and clean design",
      "Mobile-friendly and responsive"
    ],
    demo: "https://bmi-calculator-orpin-xi.vercel.app/",
    github: "https://github.com/sheix-khizar/JavaScript-Projects-2/tree/main/JS-Projects/BMI-Calculator",
    image: "/images/bmiCalculator.png"
  },
  
  SoundBoard: {
    title: "Sound Board",
    description: "Play various sound effects.",
    detailedDescription: "The Sound Board allows users to play various sound effects with just a click. It includes a range of fun sounds, from animal noises to buttons, beeps, and even more, making it a fun tool to have around.",
    features: [
      "Collection of sound effects to play",
      "Easy-to-use interface with buttons",
      "Supports multiple sound categories",
      "Mobile-friendly layout"
    ],
    demo: "https://sound-board-swart.vercel.app/",
    github: "https://github.com/sheix-khizar/JavaScript-Projects-3/tree/main/JS-Projects/Sound-Board",
    image: "/images/soundBoard.png"
  },
  
  RockPaperScissors: {
    title: "Rock Paper Scissors",
    description: "A simple rock-paper-scissors game with improved functionality.",
    detailedDescription: "This is an upgraded version of the classic Rock Paper Scissors game. It features a smooth user interface, improved game logic, and the option to track wins and losses, making it a fun game to pass the time.",
    features: [
      "Classic rock-paper-scissors gameplay",
      "Smooth animations for moves",
      "Tracks number of wins and losses",
      "Simple and responsive layout",
      "Works well on both desktop and mobile"
    ],
    demo: "https://rock-paper-scissors-beryl-one-85.vercel.app/",
    github: "https://github.com/sheix-khizar/JavaScript-Projects-3/tree/main/JS-Projects/Rock-Paper-Scissors",
    image: "/images/rockPaperScissors.png"
  },
  
  RecipeFinder: {
    title: "Recipe Finder",
    description: "Find recipes based on ingredients.",
    detailedDescription: "The Recipe Finder helps users discover recipes based on the ingredients they have. Users can enter one or more ingredients, and the app will suggest possible recipes, along with detailed instructions and ingredients.",
    features: [
      "Search recipes by ingredients",
      "Displays full recipe details including instructions",
      "Responsive design for easy access on any device",
      "Favorite and save favorite recipes",
      "Filter recipes by cuisine or meal type"
    ],
    demo: "https://recipe-finder-two-coral.vercel.app/",
    github: "https://github.com/sheix-khizar/JavaScript-Projects-3/tree/main/JS-Projects/Recipe%20Finder",
    image: "/images/recipeFinder.png"
  },
  
  FormValidator: {
    title: "Form Validator",
    description: "Validate form input in real-time.",
    detailedDescription: "The Form Validator checks the validity of user input in forms. It validates email addresses, passwords, phone numbers, and other fields, giving instant feedback to ensure proper submission.",
    features: [
      "Real-time validation of input fields",
      "Checks for valid email, password, and phone number formats",
      "Instant error messages for invalid input",
      "Works with multiple form fields",
      "Simple and effective UI design"
    ],
    demo: "https://form-validator-ashen.vercel.app/",
    github: "https://github.com/sheix-khizar/JavaScript-Projects-3/tree/main/JS-Projects/Form-Validator",
    image: "/images/formValidator.png"
  },
  
  FlipCardMemoryGame: {
    title: "Flip Card Memory Game",
    description: "Test your memory with a flip card game.",
    detailedDescription: "The Flip Card Memory Game challenges users to match pairs of cards by flipping them over. It’s a fun and engaging game that helps improve memory and cognitive skills.",
    features: [
      "Flip cards to find matching pairs",
      "Track the number of moves taken",
      "Time-based challenge for extra difficulty",
      "Responsive and user-friendly design",
      "Simple animations for flipping cards"
    ],
    demo: "https://flip-card-memory-game-sigma.vercel.app/",
    github: "https://github.com/sheix-khizar/JavaScript-Projects-3/tree/main/JS-Projects/Flip-Card-Memory-Game",
    image: "/images/filpCardGame.png"
  },
  
  ExpenseTrackerV2: {
    title: "Expense Tracker",
    description: "Track your expenses and manage your budget.",
    detailedDescription: "The Expense Tracker helps users keep track of their expenses. It allows users to add, delete, and categorize their spending, helping them manage their budget effectively.",
    features: [
      "Add, edit, and delete expenses",
      "Categorize expenses (food, transport, etc.)",
      "Real-time budget tracking",
      "Pie chart for visualizing expenses",
      "Responsive layout for easy access"
    ],
    demo: "https://expense-tracker-tau-woad.vercel.app/",
    github: "https://github.com/sheix-khizar/JavaScript-Projects-3/tree/main/JS-Projects/Expense-Tracker",
    image: "/images/expenseTracker.png"
  },
  
  DiceRoller: {
    title: "Dice Roller",
    description: "Roll one or more dice for random results.",
    detailedDescription: "The Dice Roller generates random dice rolls when users click a button. Users can roll one or more dice and see the results displayed instantly. This is perfect for board games, decision-making, or random number generation.",
    features: [
      "Roll one or more dice at a time",
      "Displays rolled values clearly",
      "Supports multiple dice types (e.g., d6, d20)",
      "Easy-to-use interface",
      "Responsive and mobile-friendly design"
    ],
    demo: "https://dice-roller-green-tau.vercel.app/",
    github: "https://github.com/sheix-khizar/JavaScript-Projects-3/tree/main/JS-Projects/Dice-roller",
    image: "/images/diceRoller.png"
  },
  
  CurrencyConverter: {
    title: "Currency Converter",
    description: "Convert between different currencies.",
    detailedDescription: "The Currency Converter helps users convert one currency to another based on the latest exchange rates. It supports multiple currencies and is useful for travelers, business transactions, and online shoppers.",
    features: [
      "Supports multiple currencies",
      "Real-time conversion rates",
      "Shows currency symbols alongside amounts",
      "Easy-to-use interface",
      "Mobile-friendly layout"
    ],
    demo: "https://currency-converter-xi-orcin.vercel.app/",
    github: "https://github.com/sheix-khizar/JavaScript-Projects-3/tree/main/JS-Projects/Currency-Converter",
    image: "/images/currencyConvertor.png"
  },
  
  CalendarApp: {
    title: "Calendar App",
    description: "A simple calendar app with event tracking.",
    detailedDescription: "The Calendar App displays a calendar for users to track dates, add events, and manage their schedule. It allows users to create, view, and delete events, making it a helpful tool for time management.",
    features: [
      "View monthly, weekly, and daily calendar views",
      "Add, edit, and delete events",
      "Color-coded events for easy identification",
      "Responsive design for mobile and desktop",
      "Simple and intuitive user interface"
    ],
    demo: "https://calendar-app-indol-gamma.vercel.app/",
    github: "https://github.com/sheix-khizar/JavaScript-Projects-3/tree/main/JS-Projects/Calendar-App",
    image: "/images/calendarApp.png"
  }
  

};


// Route for individual project page
router.get('/:projectName', (req, res) => {
    const projectName = req.params.projectName;
    const project = projects[projectName];

    if (project) {
        // Render the 'project' page with the single project's data
        res.render('pages/project', { title: `Project - ${project.title}`, project });
    } else {
        res.status(404).send('Project not found');
    }
});

// Route for the main Projects page that displays all projects
router.get('/', (req, res) => {
    res.render('pages/projects', { title: 'All Projects', projects });
});

module.exports = router;

