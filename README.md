# Shopping Cart Assignment

## 📌 Overview
This project implements a basic shopping cart that interacts with an external Price API to fetch product prices, add items to the cart, and calculate totals including tax.

## 🚀 How to Run the Project

### 1️⃣ Clone the Repository
```sh
git clone <repository-url>
cd <repository-folder>
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Price API Server
The project requires a local price API to fetch product prices. Start the API using:
```sh
npm run serve-products
```
Verify the API is running:
```sh
curl http://localhost:3001/products
```

### 4️⃣ Run the Shopping Cart Script
```sh
node index.js
```

## 📡 Example API Requests and Responses

### ✅ Fetch Product Price
#### Request:
```sh
curl http://localhost:3001/products/cornflakes
```
#### Response:
```json
{
  "id": "cornflakes",
  "price": 2.52
}
```

## 🛒 Example Usage
Adding items to the cart and displaying totals:
```sh
node index.js
```
#### Expected Output:
```
2 x cornflakes added to cart.
1 x weetabix added to cart.

Shopping Cart:
2 x cornflakes @ $2.52 each
1 x weetabix @ $9.98 each

Subtotal: $15.02
Tax (12.5%): $1.88
Total: $16.90
```

## 🔍 Assumptions Made
- Prices are fetched dynamically from the Price API.
- Tax is calculated at a flat rate of **12.5%**.
- Totals are rounded up where necessary.
- No persistent storage is used (cart data is in-memory only).
- The project should not be a full application (e.g., no front-end UI).

## 🧪 Running Unit Tests
To run tests, install Jest and execute:
```sh
npm install --save-dev jest
npm test
```

## 📩 Submission
- Push your code to a **public GitHub repository**.
- Send the repository link via email for review.

