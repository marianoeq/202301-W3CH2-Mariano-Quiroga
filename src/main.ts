/* eslint-disable no-new */
// Import './style.scss';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { List } from './components/list/list';
import { Add } from './components/addItem/addItem';
new Header('#app', 'Welcome');
new List('#app');
new Add('#app');
new Footer('#app');
