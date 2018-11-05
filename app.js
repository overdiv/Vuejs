
// global component 등록
Vue.component('my-component', {
	template : '<div>global component!</div>'
});

// local component 등록
var localCmp = {
	data : function(){
		return {
			// ...
		}
	},
	template : '<p>local component</p>',
	method : {}
}

// vm 은 ViewModel 을 뜻함. (관행적인 코딩 컨벤션)
var vm =	new Vue({	// instance
	// option - template, data, el, methods, created, mounted, updated, destoryed, life cycle callback 등...
	el : '#app',
	data : {
		message : 'Hello Vue.js!'
	},
	beforeCreate : function(){
		console.log('beforeCreate');
	},
	created : function(){
		console.log('created');
	},
	mounted : function(){
		console.log('mounted');
		this.message = 'Hello App component';
	},
	updated : function(){
		console.log('updated');
	},
	components : {
		// 태그명 : 컴포넌트의 내용
		'my-cmp' : localCmp
	}
});

var vm = new Vue({
	el : '#app2',
	data : {
		message : 'hello app2 component!'
	}
})