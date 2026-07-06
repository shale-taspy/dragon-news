**Dragoon News** is a responsive front-end web application built with React that delivers real-time news articles on a variety of topics, complete with user authentication for personalized access. Built with modern web technologies, the app ensures a seamless user experience across devices and secure login functionality using Firebase authentication. Let's build the project together. 😎

---

## 📡 API Reference

The app consumes the **Programming Hero News API**. Below are the available endpoints.

| Endpoint                                   | Method | Description                              |
| ------------------------------------------ | ------ | ---------------------------------------- |
| `/news/categories`                         | GET    | Get all available news categories        |
| `/news/category/{category_id}`             | GET    | Get all news in a specific category      |
| `/news/{news_id}`                          | GET    | Get detailed info of a specific news article |

**Base URL:** `https://openapi.programming-hero.com/api`

### Example Requests

```bash
# Get all categories
GET https://openapi.programming-hero.com/api/news/categories

# Get news in category "01" (Business)
GET https://openapi.programming-hero.com/api/news/category/01

# Get news details by ID
GET https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a