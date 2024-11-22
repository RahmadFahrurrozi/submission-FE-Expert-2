import 'regenerator-runtime';
import 'remixicon/fonts/remixicon.css';
import '../styles/reset.css';
import '../styles/navbar.css';
import '../styles/heroSection.css';
import '../styles/menu-section.css';
import '../styles/footer.css';
import '../styles/about.css';
import '../styles/gallerySection.css';
import '../styles/detail-restaurant.css';
import '../styles/like.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navMenu'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
