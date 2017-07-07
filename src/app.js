require('./styles/styles.scss');
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/src/jquery.js';

const mainTemplate = require('./js/partials/main.hbs');
const dataURL = 'https://jsonplaceholder.typicode.com';

export default class App {

	constructor(){
		
		$.ajax({
			url: dataURL + '/photos',
			method: 'GET'
		}).then((data) => {
			this.formatData(data);
		});
	}

	// registerHelper("addExcitement", function(excitement){
	// 	var moreExcitement = " !!!";
	// 	return excitement + moreExcitement;
	// });

	formatData(data){
		const blah = 'no';
		const first20 = data.slice(0, 20);
		this.createHTML(first20);
	};

	createHTML(photosData){
		console.log(photosData);
		const newHTML = mainTemplate(photosData);
		$('#app').append(newHTML);
	};
}