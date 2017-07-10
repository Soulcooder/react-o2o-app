export default {
	setItem: (key, value) =>{
		try{
			localstorage.setItem(key, value);
		}catch(e){
			if(__DEV__){
				console.log(e.message);
			}
		}
	},

	getItem: (key) => {
		let value;
		try{
			value = localstorage.getItem(key);
		}catch(e){
			if(__DEV__){
				console.log(e.message);
			}
		}finally{
			return value;
		}
	}
}