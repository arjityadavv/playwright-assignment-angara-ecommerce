# playwright-assignment-angara-ecommerce
Automation Assignment / Angara / Arjit

# Playwright Screenshot Comparison Tests

This repository contains Playwright tests designed to capture and compare screenshots of the Angara homepage across different scenarios. The tests save screenshots for both passed and failed cases in separate folders for easy debugging and analysis.

## Features

- **Positive Flow Test**: Captures and compares the screenshot of the Angara homepage (`https://www.angara.com`) to ensure it matches the reference image.
- **Negative Flow Test**: Captures and compares the screenshot of an alternate Angara homepage (`https://www.angara.com/in-en`) against the reference image.
- **Failed Screenshots**: Stores failed screenshots in a `failed_screenshots` folder for manual review.
- **Passed Screenshots**: Stores passed screenshots in a `passed_screenshots` folder for future reference.

---

## Prerequisites

Before running the tests, ensure you have the following installed:

1. **Node.js** (v16 or higher): Download and install from [Node.js official website](https://nodejs.org/).
2. **Playwright**: Install via npm (instructions below).

---

## Setup Instructions

### Clone the Repository

git clone https://github.com/arjityadavv/playwright-assignment-angara-ecommerce.git
cd playwright-assignment-angara-ecommerce

### Install Dependencies

Run the following command to install Playwright and its dependencies:

npm install

To verify installation use this command > npm -version

### Create Necessary Folders

Ensure the following folders exist in your project directory:

- `passed_screenshots`: Stores passed test screenshots.
- `failed_screenshots`: Stores failed test screenshots.

You can create these folders manually or run the following script:

mkdir passed_screenshots failed_screenshots

---

## Running Tests (On the first run it will fail and store reference screenshot)

Note - run positive flow first and let it store the reference screenshot and then run both positive and negative.
In config file I've updated workers to 1 for sequence run, you can change and run parallely as well.

### Positive Flow Test

The Positive Flow Test captures and compares the screenshot of `https://www.angara.com`. Run this test using:

npx playwright test --grep "PositiveFlow"


### Negative Flow Test

The Negative Flow Test captures and compares the screenshot of `https://www.angara.com/in-en`. Run this test using:

npx playwright test --grep "NegativeFlow"




