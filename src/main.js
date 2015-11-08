import Vue from 'vue'
import Router from 'vue-router'
import App from './app.vue'
import About from './components/about.vue'

Vue.use(Router);
var router = new Router();

router.map({
    '/': {
        component: {
            template: 'Home Page'
        }
    },
    '/about': {
        component: About
    }
});

router.start(App, '#app');
