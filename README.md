# Privacy Guard - Generate Privacy-Enhancing Scripts

## Overview

Privacy Guard is a web application designed to help users enhance their digital privacy by generating custom scripts for various operating systems and browsers. It provides a categorized collection of privacy-focused scripts, allowing users to select specific enhancements and combine them into a single, executable file. The application also features an admin mode for easily adding new scripts and publishing updates to a GitHub repository.

## Features

*   **Categorized Scripts**: Browse privacy scripts organized by operating system (Windows, macOS, Linux) and browser.
*   **Sub-Categories**: Further drill down into specific areas like "Privacy Cleanup," "Disable OS Data Collection," "Configure Programs," and "Security Improvements."
*   **Search Functionality**: Quickly find scripts using keywords.
*   **Script Selection**: Select multiple scripts to include in a custom privacy bundle.
*   **Code Preview**: View the full code of any script before selecting it.
*   **Batch Script Generation**: Generate `.bat` files for Windows and `.sh` (shell) scripts for macOS/Linux, combining all selected privacy enhancements.
*   **Admin Mode (for authorized users)**:
    *   **Add New Scripts**: Easily add new privacy scripts to the collection via a user-friendly modal.
    *   **Publish to GitHub**: Publish the updated script data (including newly added scripts) directly to a specified GitHub repository using a Personal Access Token (PAT). This allows for dynamic updates of the script catalog.

## Technology Stack

*   **Frontend**: React, TypeScript, Tailwind CSS
*   **Build Tooling**: ES Modules
*   **API**: Designed to be extensible with the Google Gemini API (though not actively used in the current version's core script generation, it's the underlying platform for potential AI-powered recommendations or script generation in future iterations).

## Setup and Installation

To get this project up and running locally, follow these steps:

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/your-repo/privacy-guard.git
    cd privacy-guard
    ```
2.  **Install Dependencies**:
    This project uses ES Modules and `importmap` for direct browser module loading (as seen in `index.html`). There are no traditional `node_modules` to install with `npm` or `yarn` for the frontend. If you intend to develop or add new features that require server-side logic or specific build steps, you might need a `package.json` and `npm install`.

3.  **Running the Application**:
    Since this is a client-side application using ES Modules, you typically need a simple static file server to run it. Most modern IDEs (like VS Code with the Live Server extension) or command-line tools can do this.

    *   **Using `http-server` (Node.js required)**:
        If you have Node.js installed, you can install `http-server` globally:
        ```bash
        npm install -g http-server
        ```
        Then, navigate to the project root and run:
        ```bash
        http-server .
        ```
        The application will usually be accessible at `http://localhost:8080`.

    *   **Using VS Code Live Server Extension**:
        Open the project folder in VS Code, right-click `index.html`, and select "Open with Live Server".

## Usage

### Browsing and Selecting Scripts

1.  **Navigate Categories**: Use the category tabs (Windows, macOS, Linux, Browsers) at the top to filter scripts.
2.  **Search**: Use the search bar in the header to find scripts by name or description across all categories.
3.  **Select Scripts**: Click on a script item to select or deselect it. Selected scripts will have an orange border.
4.  **View Code**: Click the "Eye" icon on a script item to open a modal and view its full code.
5.  **Select/Deselect All**: Buttons are available to select all displayed scripts or deselect all displayed scripts.
6.  **Clear All**: The "Clear" button in the footer deselects all currently selected scripts.

### Generating Your Custom Script

1.  After selecting your desired scripts, click the "Generate Script" button in the footer.
2.  The application will generate one or two files:
    *   `privacy-guard-script.bat` for Windows-specific scripts.
    *   `privacy-guard-script.sh` for macOS/Linux/Browser-specific scripts.
3.  These files will automatically download to your browser's default download location.

## Admin Mode

To access admin mode and manage scripts:

1.  Append `?code=dq.adm` to the application's URL. For example: `http://localhost:8080/?code=dq.adm`
2.  In admin mode, an "ADMIN" badge will appear next to the app title.
3.  You will see an "Add Script" button in the main content area (when not searching) and a "Publish Changes" button in the header.

### Adding New Scripts

1.  Click the "Add Script" button.
2.  Fill in the script's `Name`, `Description`, `Code`, and select its `Category` and `Sub-Category`.
3.  Click "Save Script" to add it to the local collection. This change will be marked as "Unsaved Changes."

### Publishing to GitHub

1.  **Configure Settings**: The first time you publish, or if settings are missing, a "GitHub Publish Settings" modal will appear.
    *   **Repository Owner**: The GitHub username or organization owning the repository.
    *   **Repository Name**: The name of the GitHub repository.
    *   **File Path in Repo**: The full path to the file where the script data (`INITIAL_SCRIPTS`) will be saved (e.g., `src/constants/data.ts`).
    *   **Personal Access Token (PAT)**: A GitHub Personal Access Token with `repo` scope. This is stored securely in your browser's local storage.
        *   **Important**: If you're publishing to a private repository or need write access, a PAT is required. Create one in your GitHub settings (`Settings > Developer settings > Personal access tokens > Tokens (classic)`).
2.  **Initiate Publish**: Once settings are saved and there are unsaved changes, click the "Publish Changes" button.
3.  The application will attempt to fetch the existing data file, get its SHA (for updates), and then push the updated script data to the specified GitHub file.
4.  A status indicator will show "Publishing...", "Published!", or "Publish Failed".

## Contribution

Contributions are welcome! If you have suggestions for new privacy scripts, improvements to existing ones, or features for the application, please open an issue or submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).
