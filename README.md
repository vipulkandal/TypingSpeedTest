# Typing Speed Test

## 🚀 Overview
This is a **Typing Speed Test** application built with **React** and **Material-UI**. It allows users to test their typing speed using real-world paragraphs fetched from **The New York Times API**. The application dynamically selects a random article category and measures the user's **Words Per Minute (WPM)** and **accuracy** in real-time.

---

## 🎯 Features
- ✅ **Fetches meaningful text** from The New York Times API
- ✅ **Random category selection** (Technology, Science, Business, etc.)
- ✅ **Real-time typing accuracy tracking**
- ✅ **Live WPM calculation**
- ✅ **Progress bar for typing completion**
- ✅ **Auto-focus on text field when the test starts**
- ✅ **Dynamic text highlighting (green for correct, red for incorrect)**
- ✅ **Start/Stop buttons for better control**

---

---

## 🛠️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/vipulkandal/typing-speed-test.git
cd typing-speed-test
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Add Your API Key
1. Create a `.env` file in the root directory.
2. Add the following:
   ```sh
   VITE_NYT_API_KEY=your-api-key-here
   ```
3. Replace `your-api-key-here` with your **New York Times API Key**.

### 4️⃣ Start the Development Server
```sh
npm run dev
```

The application will be available at `http://localhost:5173`.

---

## 🎮 Usage
1. **Click the "Start" button** to begin the test.
2. The cursor will **automatically focus** on the text field.
3. Type the given paragraph **as accurately as possible**.
4. **Errors will be highlighted in red**; correct words in **green**.
5. **Click "Stop" to end the test**, and your **WPM & accuracy** will be displayed.

---

## 🏗️ Built With
- **React** (Vite + React)
- **Material UI** (For styling & UI components)
- **New York Times API** (For fetching text)

---

## 🤝 Contributing
1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature-name`)
3. **Commit your changes** (`git commit -m "Add new feature"`)
4. **Push to GitHub** (`git push origin feature-name`)
5. **Submit a Pull Request** 🚀

---

## 📜 License
This project is **open-source** and available under the **MIT License**.

---

## 📧 Contact
If you have any questions, feel free to reach out:
- **Email**: vipulkandal@gmail.com
- **Portfolio**: [Portfolio Website](https://www.vipulkandal.com/)

