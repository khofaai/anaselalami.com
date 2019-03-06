import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

import Element from 'element-ui';
import './plugins/element.js';
// import './element-variables.scss'

import VueTranslater from 'vue-translater';


Vue.use(Element);
Vue.use(VueTranslater,{
	name:'translate',
	translate:{
		en: {
			'hello':'hello',
			'developer':'developer',
			'bio':'A passionate Web Developer Experienced with history of working in the information technology and services industry. Skilled in Php, Node.js, Javascript. since 2016'
		},
		fr: {
			'hello':'bonjour',
			'developer':'développeur',
			'bio':`Développeur Web expérimenté plus spécifiquement dans l’écosystème JavaScript, Je souhaite vivement mettre en oeuvre mes compétences pour implémenter des solutions web qui s’étalent à l’échelle internationale`
		}
	}
});


new Vue({
  render: h => h(App),
}).$mount('#app')
