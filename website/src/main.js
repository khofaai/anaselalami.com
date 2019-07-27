import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

import Element from 'element-ui';
import './plugins/element.js';
// import './element-variables.scss'

import VueTranslater from 'vue-translater';


Vue.use(Element);
Vue.use(VueTranslater,{
	name: 'translate',
	translate: {
		en: {
			'hello':'hello',
			'developer':'developer',
			'bio':'Im Anas El Alami, 27 years old from Morocco, a passionate Web developer experienced more specifically in the JavaScript ecosystem, I strongly wish to use my skills and knowledge to create web solutions that are spread internationally'
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
