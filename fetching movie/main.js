const fetchData = async (searchTerm)=>{
    const response = await axios.get( "http://www.omdbapi.com/", {
        params:{
            apikey: "6cf1ee53",
            s:searchTerm 
        }
    });

    if(response.data.Error){
        return [];
    }else{
        return response.data.Search;
    }
   
};
const root = document.querySelector(".autocomplete");
root.innerHTML = `
    <label><b>Search for a Movie<b></label>
    <input></input>
    <div class="dropdown"
    >
        <div class="dropdown-menu>
            <div class="drowdown-content results"></div>
        <div>
    </div>
`;

// const root = document.querySelector('.autocomplete');
// root.innerHTML = `
//   <label><b>Search For a Movie</b></label>
//   <input class="input" />
//   <div class="dropdown ">
//     <div class="dropdown-menu">
//       <div class="dropdown-content results"></div>
//     </div>
//   </div>
// `;
const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector(".results");
const onInput = async (event) =>{

     const movies = await fetchData(event.target.value);   
     //console.log(movies)
     dropdown.classList.add('is-active');
     for(let movie of movies){
         const option = document.createElement('a');
         option.classList.add('dropdown-item')
         option.innerHTML= `
         <img src='${movie.Poster}'/>
         ${movie.Title}
         `;
        resultsWrapper.appendChild(option);
         
     }

}

input.addEventListener('input', debounce(onInput), 500); 
document.addEventListener('click', event=>{
    //console.log(event.target)
    if(!root.contains(event.target)){
        dropdown.classList.remove('is-active');
    }
})