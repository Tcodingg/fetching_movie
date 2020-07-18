const fetchData = async (searchTerm)=>{
    const response = await axios.get( "http://www.omdbapi.com/", {
        params:{
            apikey: "6cf1ee53",
            s:searchTerm 
        }
    });

    console.log(response.data);
};
const debounce = (func)=>{
    let timeOutId;    
        return (...args) =>{
            if(timeOutId){
                clearTimeout(timeOutId);
            }
            timeOutId = setTimeout(() => {
                func.apply(null, args);
            }, 1000);
         }
}
const input = document.querySelector('input');
const onInput = (event) =>{
     fetchData(event.target.value);     
}
input.addEventListener('input', debounce(onInput));