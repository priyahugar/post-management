// main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// 10 initial posts
const initialPosts = [
  {
    id: "1",
    title: "A Sunny Day in the Park",
    author: "Ammulu",
    content: "Today I went to the park and enjoyed the sunshine. The flowers were blooming and the birds were singing. It felt peaceful to just sit on the grass and watch the world go by.",
    tags: ["life", "nature", "peaceful"],
    createdAt: "2025-09-01T09:00:00Z",
    updatedAt: "2025-09-01T09:00:00Z"
  },
  {
    id: "2",
    title: "My Favorite Coffee Spot",
    author: "Piyush",
    content: "I discovered a small coffee shop downtown. The aroma of freshly brewed coffee filled the air, and the cozy atmosphere made it the perfect place to read a book.",
    tags: ["coffee", "cozy", "daily-life"],
    createdAt: "2025-09-02T10:15:00Z",
    updatedAt: "2025-09-02T10:15:00Z"
  },
  {
    id: "3",
    title: "Evening Walk Reflections",
    author: "Neha",
    content: "Walking in the evening has become my favorite time of the day. The sky turns golden, and I feel relaxed while thinking about the small joys of life.",
    tags: ["walking", "reflection", "peace"],
    createdAt: "2025-09-03T11:30:00Z",
    updatedAt: "2025-09-03T11:30:00Z"
  },
  {
    id: "4",
    title: "Cooking Something New",
    author: "Rahul",
    content: "I tried cooking a new pasta recipe today. The smell of garlic and herbs filled the kitchen, and it was delicious! Cooking can really be a creative and fun experience.",
    tags: ["cooking", "food", "hobby"],
    createdAt: "2025-09-04T12:45:00Z",
    updatedAt: "2025-09-04T12:45:00Z"
  },
  {
    id: "5",
    title: "A Quiet Morning",
    author: "Sanya",
    content: "The morning was calm and quiet, with the soft sound of birds outside my window. I enjoyed a cup of tea and planned my day slowly without any rush.",
    tags: ["morning", "calm", "tea"],
    createdAt: "2025-09-05T14:00:00Z",
    updatedAt: "2025-09-05T14:00:00Z"
  },
  {
    id: "6",
    title: "Rainy Day Thoughts",
    author: "Ammulu",
    content: "It rained all afternoon today. I sat by the window, listening to the raindrops and sipping hot chocolate. Rainy days always make me feel cozy and thoughtful.",
    tags: ["rain", "cozy", "reflection"],
    createdAt: "2025-09-06T15:20:00Z",
    updatedAt: "2025-09-06T15:20:00Z"
  },
  {
    id: "7",
    title: "A Walk on the Beach",
    author: "Ankit",
    content: "I spent the evening walking along the beach. The sound of waves and the cool breeze were refreshing. I love how the ocean can instantly calm your mind.",
    tags: ["beach", "nature", "relaxing"],
    createdAt: "2025-09-07T16:40:00Z",
    updatedAt: "2025-09-07T16:40:00Z"
  },
  {
    id: "8",
    title: "Gardening Fun",
    author: "Priya",
    content: "I planted some flowers in my small garden today. Watching them grow and taking care of them feels really rewarding. Gardening is such a peaceful hobby.",
    tags: ["gardening", "nature", "hobby"],
    createdAt: "2025-09-08T17:10:00Z",
    updatedAt: "2025-09-08T17:10:00Z"
  },
  {
    id: "9",
    title: "A Good Book Afternoon",
    author: "Ravi",
    content: "I spent the afternoon reading a novel I’ve been meaning to start. Getting lost in a story and forgetting about time is one of the best feelings.",
    tags: ["reading", "books", "relax"],
    createdAt: "2025-09-09T18:25:00Z",
    updatedAt: "2025-09-09T18:25:00Z"
  },
  {
    id: "10",
    title: "Baking Cookies",
    author: "Meera",
    content: "Baking cookies today filled the kitchen with a sweet aroma. Sharing them with friends and family made it even more enjoyable. Little things like this make life sweeter.",
    tags: ["baking", "food", "hobby"],
    createdAt: "2025-09-10T19:50:00Z",
    updatedAt: "2025-09-10T19:50:00Z"
  }
];

// Set initial posts only if localStorage is empty
if (!localStorage.getItem("posts")) {
  localStorage.setItem("posts", JSON.stringify(initialPosts));
}

// Render App
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);