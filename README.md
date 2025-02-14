# **📖 Recipe App Documentation**  

## **📌 Project Overview**  
The **Recipe App** allows users to **search for recipes**, view **detailed information**, and **save their favorite recipes**. It fetches data from the **Edamam API** and uses **ReactJS and Redux** for state management.  

---

## **📋 Features**  
✔️ **Search Recipes** by entering keywords.  
✔️ **Display Recipe List** with images, titles, and descriptions.  
✔️ **View Recipe Details** including ingredients and preparation steps.  
✔️ **Mark Recipes as Favorites** and store them in a separate list.  
✔️ **Filter Recipes** by dietary restrictions (vegetarian, gluten-free, etc.).  
✔️ **Error Handling** for API request limits.  
✔️ **Debounced Search** to prevent excessive API calls.  
✔️ **Local Caching** to reduce API requests.  

---

## **⚙️ Technologies Used**  
- **Frontend:** ReactJS, React Router  
- **State Management:** Redux Toolkit  
- **API Handling:** Axios  
- **Styling:** CSS  
- **Data Storage:** Local Storage  

---

## **🛠 Installation & Setup**  

### **📌 1. Clone the Repository**  
```sh
git clone https://github.com/GKrizz/recipe-app.git
cd recipe-app
```

### **📌 2. Install Dependencies**  
```sh
npm install
```

### **📌 3. Set Up API Key**  
- Get a **free API key** from [Edamam API](https://developer.edamam.com/).  
- Replace in `recipesSlice.js`:  
```js
const API_ID = "your_api_id";
const API_KEY = "your_api_key";
```

### **📌 4. Start the Application**  
```sh
npm start
```

---

## **📂 Project Structure**  
```
📦 recipe-app
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 SearchBar.js
 ┃ ┃ ┣ 📜 RecipeList.js
 ┃ ┃ ┣ 📜 RecipeCard.js
 ┃ ┃ ┗ 📜 FavoritesList.js
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📜 Home.js
 ┃ ┃ ┗ 📜 Favorites.js
 ┃ ┣ 📂 redux
 ┃ ┃ ┣ 📂 slices
 ┃ ┃ ┃ ┣ 📜 recipesSlice.js
 ┃ ┃ ┃ ┗ 📜 favoritesSlice.js
 ┃ ┃ ┗ 📜 store.js
 ┃ ┣ 📜 App.js
 ┃ ┣ 📜 index.js
 ┃ ┗ 📜 styles.css
 ┣ 📜 package.json
 ┗ 📜 README.md
```

---


## **📝 API Reference (Edamam API)**  
- **Base URL:**  
  ```
  https://api.edamam.com/search
  ```
- **Query Parameters:**  
  | Parameter | Description | Example |
  |-----------|-------------|----------|
  | `q` | Search keyword | `pizza` |
  | `app_id` | API ID | `your_api_id` |
  | `app_key` | API Key | `your_api_key` |
  | `from` | Start index | `0` |
  | `to` | Number of results | `10` |

- **Example API Request:**  
  ```sh
  https://api.edamam.com/search?q=pizza&app_id=your_api_id&app_key=your_api_key&from=0&to=10
  ```

---

## **🔧 Future Improvements**
🔹 Add **user authentication** to save favorites.  
🔹 Implement **pagination** for more search results.  
🔹 Improve **UI/UX** with better design.  

---

## **🛠 Troubleshooting**
| **Issue** | **Solution** |
|-----------|-------------|
| `429 Error: Too Many Requests` | Use **your own API key**, **add delay between requests**, or **cache responses**. |
| `Recipes not displaying` | Check if the API is **returning valid data**. Use **console.log(response.data)** to debug. |
| `Redux state not updating` | Ensure **reducers** are correctly set up in `store.js`. |

---

## **📜 License**  
This project is open-source and available under the **MIT License**.  

---

## **📬 Contact**  
For any questions or improvements, feel free to **open an issue** or **contribute** to the project! 😊🚀
