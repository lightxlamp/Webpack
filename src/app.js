import Post from './post';
import './styles/styles.css' // webpack does not "understand" css. This leads to error. We need to apply loaders to WP

const post = new Post('My Test Title from App.js file');

console.log('Post to string', post.toString());
console.log('Post to string', post.getTitleInUpperCase());