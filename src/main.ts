/* eslint-disable no-new */
// Import './style.scss';
import { Footer } from './components/footer/footer';
import { Form } from './components/form/form';
import { Header } from './components/header/header';
import { List } from './components/list/list';
new Header('#app', 'Welcome');
new Form('#app');
new List('#app');
new Footer('#app');
