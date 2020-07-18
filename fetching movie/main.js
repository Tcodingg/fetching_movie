const fetchData = async (searchTerm)=>{
    const response = await axios.get( "http://www.omdbapi.com/", {
        params:{
            apikey: "6cf1ee53",
            s:searchTerm 
        }
    });

    console.log(response.data);
};
let timeOutId;
const input = document.querySelector('input');
const onInput = (event) =>{
    if(timeOutId){
        clearTimeout(timeOutId);
    }
    timeOutId=setTimeout(() => {
     fetchData(event.target.value);   
    }, 1000);
    
}
input.addEventListener('input', onInput);