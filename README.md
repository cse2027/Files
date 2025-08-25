

# CSE Resources Hub – File Upload System

This project provides a simple and professional way to upload files into specific Google Drive folders through a web interface. Users can select a folder, upload files, and track the process with a progress indicator.

## Features

* Upload files directly to Google Drive
* Folder selection before upload
* Progress indicator during upload
* Validation to prevent empty or wrong uploads

## Requirements

* A Google Account with Google Drive access
* Google Apps Script backend (for handling uploads)
* A modern browser such as Chrome, Edge, or Firefox

## Setup Instructions

### Step 1: Clone or Download

Clone this repository or download it as a ZIP and extract it.

```bash
git clone https://github.com/your-username/cse-resources-hub.git
```

### Step 2: Configure Google Apps Script

1. Open [Google Apps Script](https://script.google.com/).
2. Create a new project and paste the contents of `Code.gs`.
3. Save and deploy as a Web App.

   * Select **Deploy → New deployment**
   * Choose **Web App**
   * Execute as: **Me**
   * Access: **Anyone with the link**
   * Deploy and copy the Web App URL

### Step 3: Connect the Frontend

1. Open `index.html`.
2. In the JavaScript section, find:

   ```javascript
   const UPLOAD_URL = "PASTE_YOUR_WEB_APP_URL_HERE";
   ```
3. Replace with your Web App URL from Step 2.

### Step 4: Run the Application

1. Open `index.html` in a browser.
2. Select a folder.
3. Choose a file and upload.
4. Monitor the progress bar until upload completes.
5. The file will appear in your selected Google Drive folder.

## Example Workflow

* Select the folder **CSE Notes**
* Upload a file `os-basics.pdf`
* Wait for confirmation message
* File becomes available in Google Drive inside the chosen folder

## Tech Stack

* Frontend: HTML, CSS, JavaScript
* Backend: Google Apps Script
* Storage: Google Drive

## Contribution

Feedback and improvements are welcome. Please open an issue or suggest enhancements for future updates.

any issues feel free to contact us :cseab2027@gmail.com
