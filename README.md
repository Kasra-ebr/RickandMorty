
# ⚛️ Rick and Morty Character Explorer

A sleek and interactive React + TypeScript application that displays characters from the Rick and Morty universe. Users can:

- 🔍 Search for characters
- 👁️ View detailed character info
- 💖 Add/remove favourites
- 📺 Sort episodes by creation date

---

## 📸 Preview

![Rick and Morty App Screenshot](https://i.postimg.cc/dtWgSfm4/Screenshot-275.png)

---

## 📒 Badges & Technologies

[![React](https://img.shields.io/badge/React-Hooks-blue?style=flat-square&logo=react)](https://reactjs.org)
[![Vite](https://img.shields.io/badge/Vite-Fast-purple?style=flat-square&logo=vite)](https://vitejs.dev)
[![React Context](https://img.shields.io/badge/Context_API-State_Management-green?style=flat-square)](https://reactjs.org/docs/context.html)
[![Heroicons](https://img.shields.io/badge/Heroicons-Icons-blue?style=flat-square)](https://heroicons.com)
[![React Icons](https://img.shields.io/badge/React_Icons-Icons-blue?style=flat-square)](https://react-icons.github.io/react-icons)

---

## 🛠️ Features

- ✅ Character List with images, status, and species
- ✅ Detailed view on character selection
- ✅ Episode list sorted by creation date
- ✅ Add to Favourites modal with remove support
- ✅ Live search with dynamic filtering
- ✅ Persistent favourites with localStorage

---

## ⚙️ Tech Stack

| Technology     | Description                                  |
|----------------|----------------------------------------------|
| **React.js**       | Front-end UI library                         |                   |
| **Vite**           | Blazing fast React tooling                   |
| **React Context**  | Global state management                      |
| **Heroicons**      | Beautiful icon set for React                 |
| **React Icons**    | FontAwesome, Feather icons and more         |
| **CSS Modules**    | Scoped and maintainable styles               |
| **LocalStorage**   | Persistent client-side storage               |

---

## 📁 Project Structure

```bash
src/
├── App.tsx
├── Component/
│   ├── CharacterList.tsx
│   ├── CharacterDetails.tsx
│   ├── Navbar/
│   │   ├── Navbar.tsx
│   │   └── Favourites.tsx
│   ├── Modal/
│   │   └── Modal.tsx
│   ├── Layout/
│   │   └── Layout.tsx
│   └── Button/
│       └── Button.tsx
├── Hook/
│   ├── CharacterContext.tsx
│   └── useLocalStorage.ts
├── Server/
│   └── server.ts
├── index.css
└── main.tsx
```

---

## ✅ Functional Components using React Hooks

- **Why it's separate**: This emphasizes that the project follows the modern React approach of using functional components instead of class-based components. **React Hooks** (like `useState`, `useEffect`, etc.) are used to handle state and side effects in functional components, which is a more declarative and concise way of writing React components.

---

## ✅ DRY Principles and Reusable UI

- **Why it's separate**: This section highlights the importance of keeping the code **clean, maintainable**, and **efficient**. **DRY** stands for "Don't Repeat Yourself," a principle that encourages avoiding code duplication. Instead of repeating logic, reusable UI components are created, making the code more modular and easier to update or scale.

---

## ✅ Context API for Global State

- **Why it's separate**: The **Context API** is a powerful tool for managing and sharing state across multiple components in a React application. Instead of passing props down through multiple layers of components (which can become cumbersome), the **Context API** is used to maintain a **global state** that can be accessed anywhere in the app. This is especially helpful for data like user authentication, app settings, or, in this case, **characters**, **episodes**, and **favourites**.

---

## ✅ Separation of UI and Logic

- **Why it's separate**: This describes the **architectural** approach taken in the app. Keeping **UI** (view-related code) and **business logic** (data-fetching, state management) in separate parts of the app helps with **modularity**, **reusability**, and **testability**. For example:
  - UI components only care about displaying data.
  - Logic (e.g., fetching characters from an API, managing state) is abstracted away in custom hooks or context, making the codebase cleaner and more maintainable.

---

## ✅ Reusable Button, Modal, and Character Components

- **Why it's separate**: This points to the **UI components** that have been made **reusable** to avoid redundancy in the code. For example:
  - **Button** component: A reusable button that can be customized for any use case.
  - **Modal** component: A general-purpose modal dialog that can display different content.
  - **Character** component: A component designed to display character details.

These components are **not hardcoded** for a specific part of the app instead, they can be used in various parts of the application by passing in different props.

---

## 🚀 Getting Started

```bash
# Clone the repository
$ git clone https://github.com/yourusername/rick-and-morty-character-explorer.git

# Navigate to the project
$ cd rick-and-morty-character-explorer

# Install dependencies
$ npm install

# Run the development server
$ npm run dev
```

---

## 🧪 Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🤝 Contributing

Contributions are welcome! Please fork the repo and create a pull request.

---

## 🛡️ License

MIT License. Feel free to use and remix for your own projects.

---

> Made with ❤️ using React + Vite + TypeScript
