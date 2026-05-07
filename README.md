# SpotRanker - AI Customer Feedback Platform ⭐

SpotRanker is a modern, mobile-first React web application that simplifies the customer feedback process. It leverages Google's powerful Gemini AI to instantly generate high-quality, SEO-optimized reviews based on a simple star rating. 

Customers can easily generate a professional review and copy it directly to their clipboard with a single tap, making it effortless to post positive feedback on platforms like Google Maps.

## 🚀 Key Features

- **One-Tap Rating:** Simple, intuitive star rating interface for customers.
- **AI-Powered Content:** Integrates with `@google/genai` (Gemini 2.5 Flash) to instantly draft positive, SEO-friendly reviews tailored to the rating.
- **1-Click Copy:** Seamless "Copy to Clipboard" functionality so users can paste reviews directly onto review sites.
- **Modern Glassmorphism UI:** Features a sleek, neo-brutalism/glassmorphism design with smooth CSS micro-animations.
- **Responsive Design:** Completely mobile-optimized for users scanning QR codes at physical locations (e.g., restaurants, cafes).

## 🛠️ Technology Stack

- **Frontend:** React (Vite)
- **Styling:** Vanilla CSS (Flexbox, CSS Animations, Glassmorphism)
- **AI Integration:** Google Gemini AI API (`@google/genai`)
- **State Management:** React Hooks (`useState`)

## 💻 Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

Ensure you have Node.js and npm installed on your machine.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/Ankush-Jha/rankmybiz.git
   ```
2. **Navigate to the project directory**
   ```sh
   cd rankmybiz
   ```
3. **Install NPM packages**
   ```sh
   npm install
   ```
4. **Setup your API Key**
   - Go to [Google AI Studio](https://aistudio.google.com/) and generate an API key.
   - Open `src/App.jsx` and insert your API key where prompted. *(Note: Never commit your active API key to a public repository).*
5. **Run the development server**
   ```sh
   npm run dev
   ```

## 🤝 Contribution Guidelines

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Contribution Best Practices
- Ensure your code follows the existing style and conventions.
- Test your changes thoroughly before submitting a PR.
- Do not commit API keys or sensitive `.env` data.

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---
*Developed with ❤️ for better business feedback.*
