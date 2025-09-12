# 🎬 TMDB API Setup Guide

## Overview
Your EscanorHub project is now configured to use The Movie Database (TMDB) API, which is one of the most comprehensive and reliable movie databases available.

## 🚀 Quick Setup

### Step 1: Get Your Free API Key
1. Go to [TMDB Developer Portal](https://developer.themoviedb.org/reference/intro/getting-started)
2. Click "Get API Key" 
3. Create a free account
4. Copy your API key

### Step 2: Configure Your API Key
1. Open `src/services/tmdbApi.js`
2. Replace `'your_tmdb_api_key_here'` with your actual API key:
   ```javascript
   const API_KEY = 'your_actual_api_key_here';
   ```

### Step 3: Run Your Project
```bash
npm run dev
```

## 🎯 Features Available

### Movie Categories
- **Popular Movies** - Most popular movies currently
- **Top Rated Movies** - Highest rated movies of all time
- **Now Playing** - Movies currently in theaters
- **Upcoming Movies** - Movies coming soon

### Search & Discovery
- **Movie Search** - Search by title, actor, director
- **Movie Details** - Complete movie information
- **Cast & Crew** - Full cast and crew details
- **Reviews** - User and critic reviews
- **Trailers** - Official movie trailers
- **Similar Movies** - Recommendations

### Advanced Features
- **Genre Filtering** - Browse by movie genres
- **Trending Movies** - What's trending this week
- **Movie Recommendations** - Personalized suggestions
- **High-Quality Images** - Posters, backdrops, and stills

## 📊 API Endpoints Used

Based on the [TMDB API Reference](https://developer.themoviedb.org/reference/intro/getting-started):

- `/movie/popular` - Popular movies
- `/movie/top_rated` - Top rated movies  
- `/movie/now_playing` - Currently playing
- `/movie/upcoming` - Upcoming releases
- `/search/movie` - Movie search
- `/movie/{id}` - Movie details
- `/movie/{id}/credits` - Cast and crew
- `/movie/{id}/reviews` - Reviews
- `/movie/{id}/videos` - Trailers and videos
- `/movie/{id}/similar` - Similar movies
- `/genre/movie/list` - Available genres
- `/discover/movie` - Advanced movie discovery
- `/trending/movie/week` - Trending movies

## 🔧 Customization Options

### Adding New Features
1. **New Movie Categories**: Add endpoints in `tmdbApi.js`
2. **Custom Filters**: Use the `/discover/movie` endpoint
3. **TV Shows**: TMDB also supports TV series
4. **People**: Search for actors, directors, etc.

### Example: Adding Trending Movies
```javascript
// In tmdbApi.js
getTrendingMovies: async (timeWindow = 'week', page = 1) => {
  const response = await api.get(`/trending/movie/${timeWindow}`, {
    params: { page }
  });
  return response.data;
}
```

## 🌟 Why TMDB API?

### Advantages
- **Free** - No cost for basic usage
- **Comprehensive** - Over 1 million movies and TV shows
- **High Quality** - Professional-grade data
- **Real-time** - Updated daily with new releases
- **Multilingual** - Supports multiple languages
- **Rich Media** - High-quality images and videos

### Rate Limits
- **Free Tier**: 1,000 requests per day
- **Paid Tiers**: Available for higher usage

## 🎨 UI Features

Your EscanorHub includes:
- **Responsive Design** - Works on all devices
- **Modern UI** - Bootstrap 5 styling
- **Smooth Animations** - Hover effects and transitions
- **Loading States** - Professional loading indicators
- **Error Handling** - Graceful error management
- **Search Functionality** - Real-time search
- **Pagination** - Efficient data loading

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel/Netlify
1. Push your code to GitHub
2. Connect to Vercel or Netlify
3. Deploy with default settings

## 🔍 Testing Your Setup

1. **Check API Key**: Make sure your key is correctly set
2. **Test Search**: Try searching for popular movies
3. **Browse Categories**: Check different movie categories
4. **View Details**: Click on any movie to see full details

## 📱 Mobile Support

The app is fully responsive and works great on:
- 📱 Mobile phones
- 📱 Tablets  
- 💻 Desktop computers
- 🖥️ Large screens

## 🎬 Sample Movies to Test

Try searching for these popular movies:
- "The Dark Knight"
- "Inception"
- "Pulp Fiction"
- "The Shawshank Redemption"
- "The Godfather"

## 🆘 Troubleshooting

### Common Issues
1. **API Key Not Working**: Double-check your key in `tmdbApi.js`
2. **No Results**: Check your internet connection
3. **Rate Limit**: You've exceeded 1,000 requests/day
4. **CORS Issues**: TMDB supports CORS, check your setup

### Getting Help
- [TMDB API Documentation](https://developer.themoviedb.org/reference/intro/getting-started)
- [TMDB Community](https://www.themoviedb.org/talk)
- Check browser console for error messages

## 🎉 You're All Set!

Your EscanorHub is now powered by TMDB's professional movie database. Enjoy exploring thousands of movies with rich details, high-quality images, and comprehensive information!

Happy movie browsing! 🍿✨
