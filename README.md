# 🎬 EscanorHub - Movie Explorer

A modern, responsive React application for discovering and exploring movies using The Movie Database (TMDB) API. Built with React, Vite, and Bootstrap for a smooth user experience.

![EscanorHub Preview](https://via.placeholder.com/800x400/212529/ffffff?text=EscanorHub+Movie+Explorer)

## ✨ Features

### 🎯 Core Functionality
- **Movie Discovery**: Browse popular, top-rated, now playing, and upcoming movies
- **Advanced Search**: Search movies by title, actor, or director
- **Detailed Views**: Complete movie information including cast, crew, reviews, and trailers
- **Personal Lists**: Save favorites and create watch-later lists
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 🎨 User Experience
- **Modern UI**: Clean, intuitive interface with Bootstrap 5 styling
- **Dark/Light Theme**: Toggle between themes for comfortable viewing
- **Loading States**: Professional loading indicators and error handling
- **Smooth Navigation**: Fast client-side routing with React Router
- **Real-time Search**: Instant search results as you type

### 🔧 Technical Features
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **API Integration**: Comprehensive TMDB API integration with error handling
- **State Management**: Local storage for user preferences and lists
- **Code Quality**: ESLint configuration for clean, maintainable code

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager
- TMDB API key (free at [TMDB Developer Portal](https://developer.themoviedb.org/))

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd escanorhub
   ```

2. **Install dependencies**
   ```bash
   cd vite
   npm install
   ```

3. **Configure API Key**
   - Get your free API key from [TMDB Developer Portal](https://developer.themoviedb.org/)
   - Open `src/services/tmdbApi.js`
   - Replace `'your_tmdb_api_key_here'` with your actual API key:
   ```javascript
   const API_KEY = 'your_actual_api_key_here';
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready application |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 📁 Project Structure

```
vite/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header.jsx     # Navigation header
│   │   ├── MovieCard.jsx  # Movie card component
│   │   ├── MovieDetail.jsx # Detailed movie view
│   │   ├── MovieList.jsx  # Movie grid/list
│   │   ├── SearchPage.jsx # Search functionality
│   │   └── ...           # Other components
│   ├── pages/             # Page components
│   │   ├── HomePage.jsx   # Landing page
│   │   ├── PopularMoviesPage.jsx
│   │   ├── TopRatedMoviesPage.jsx
│   │   ├── NowPlayingMoviesPage.jsx
│   │   ├── UpcomingMoviesPage.jsx
│   │   ├── FavoritesPage.jsx
│   │   └── WatchLaterPage.jsx
│   ├── services/          # API services
│   │   └── tmdbApi.js     # TMDB API integration
│   ├── App.jsx           # Main application component
│   ├── App.css           # Application styles
│   ├── index.css         # Global styles
│   └── main.jsx          # Application entry point
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint configuration
└── postcss.config.js     # PostCSS configuration
```

## 🎯 API Integration

### TMDB API Endpoints Used
- `/movie/popular` - Popular movies
- `/movie/top_rated` - Top rated movies
- `/movie/now_playing` - Currently playing movies
- `/movie/upcoming` - Upcoming releases
- `/search/movie` - Movie search
- `/movie/{id}` - Movie details
- `/movie/{id}/credits` - Cast and crew
- `/movie/{id}/reviews` - User reviews
- `/movie/{id}/videos` - Trailers and videos
- `/movie/{id}/similar` - Similar movies
- `/genre/movie/list` - Available genres

### Rate Limits
- **Free Tier**: 1,000 requests per day
- **Paid Tiers**: Available for higher usage

## 🎨 Customization

### Adding New Features
1. **New Movie Categories**: Add endpoints in `tmdbApi.js`
2. **Custom Filters**: Use the `/discover/movie` endpoint
3. **TV Shows**: TMDB also supports TV series
4. **People Search**: Search for actors, directors, etc.

### Styling
- Global styles in `src/index.css`
- Component-specific styles in `src/App.css`
- Bootstrap 5 classes for responsive design
- CSS custom properties for theming

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel/Netlify
1. Push your code to GitHub
2. Connect to Vercel or Netlify
3. Deploy with default settings
4. Add your TMDB API key as an environment variable

### Environment Variables
For production deployment, set:
```
VITE_TMDB_API_KEY=your_api_key_here
```

## 🧪 Testing

### Manual Testing
1. **API Integration**: Verify all movie categories load correctly
2. **Search Functionality**: Test search with various queries
3. **Responsive Design**: Check on different screen sizes
4. **User Features**: Test favorites and watch-later functionality

### Sample Movies to Test
- "The Dark Knight"
- "Inception"
- "Pulp Fiction"
- "The Shawshank Redemption"
- "The Godfather"

## 🐛 Troubleshooting

### Common Issues
1. **API Key Not Working**: Double-check your key in `tmdbApi.js`
2. **No Results**: Check your internet connection
3. **Rate Limit Exceeded**: You've exceeded 1,000 requests/day
4. **CORS Issues**: TMDB supports CORS, check your setup

### Getting Help
- [TMDB API Documentation](https://developer.themoviedb.org/reference/intro/getting-started)
- [TMDB Community](https://www.themoviedb.org/talk)
- Check browser console for error messages

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - UI library
- **React Router 7.8.2** - Client-side routing
- **Vite 7.1.2** - Build tool and dev server
- **Bootstrap 5.3.8** - CSS framework
- **React Bootstrap 2.10.10** - React components

### HTTP & APIs
- **Axios 1.12.0** - HTTP client
- **TMDB API** - Movie database

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the comprehensive movie API
- [React](https://reactjs.org/) team for the amazing framework
- [Vite](https://vitejs.dev/) team for the fast build tool
- [Bootstrap](https://getbootstrap.com/) team for the UI framework

## 📞 Contact

Your Name - [@yourusername](https://github.com/yourusername) - your.email@example.com

Project Link: [https://github.com/yourusername/escanorhub](https://github.com/yourusername/escanorhub)

---

⭐ Star this repository if you found it helpful!

🍿 Happy movie browsing!
