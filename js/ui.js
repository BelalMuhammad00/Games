


export class Games{
constructor(){
    
    this.home = document.getElementById("home");


this.cards=document.getElementById('cards-content');

this.links = document.querySelectorAll('.nav-link');
this.Id=document.querySelectorAll('.card-item .card');



for (let i = 0; i < this.links.length; i++) {
this.links[i].addEventListener('click',(e)=>{
  
    const linkCatagory =e.target.getAttribute('data');
    
this.displayGames(linkCatagory);
})
    
}


// this.cardId.addEventListener('click',(e)=>{
//     console.log(e.target);
//        });
// for (let i = 0; i < this.cardId.length; i++) {

// }

}





async api(catagory='3d.mmorpg.fantasy.pvp'){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b33bca198emsh133899ca377be6fp152faajsn1a30de59ef45',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
    const api =await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=${catagory}&platform=pc`,options);
    const response = await api.json();
return response;
    }


async displayGames(linkCatagory){
const result = await this.api(linkCatagory);

let cartona =``;
for (const game of result) {
    cartona+=`
    <div class=" col-sm-12 col-md-4 col-lg-3" class="card-item" dataID="${game.id}" >
    <div class="card h-100" >
 
        <img src="${game.thumbnail}" class="card-img-top" dataID="${game.id}" alt="...">
        <div class="card-body" dataID="${game.id}" >
            <div class="d-flex justify-content-between align-items-center">
                <h5 class="card-title" dataID="${game.id}">${game.title}</h5> 
                <span class="free">free</span>
            </div>
 
          <p class="card-text" dataID="${game.id}">${game.short_description}</p>
        </div>
 
        <div class="card-footer d-flex justify-content-between ">
          <span>${game.genre}</span>
          <span>${game.platform}</span>
        </div>
      </div>
      </div>
      `;

      this.cards.innerHTML=cartona;
}


 this.showGames();

}

async apiDetails(data=8){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b33bca198emsh133899ca377be6fp152faajsn1a30de59ef45',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
 const apiD= await  fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${data}`, options)
const responseD = await apiD.json();
return responseD;
}








async displayGameDrtails(data){
    const gameD = await this.apiDetails(data);
    const cartonaa=`
    <div class="container">

 
    <div class="row py-5">
    <div class="col-9">
        <span class=" h1">Details Game</span>
    </div>
    <div class="col-1 ms-auto">
    <i class="fa-solid fa-circle-xmark h1" id="out"></i>
    </div>
</div>


    <div class="row">
    
    <div class="col-sm-12 col-md-4" >
    <img src="${gameD.thumbnail}" class="w-100" alt="game-img">
    </div>
    <div class="col-sm-12 col-md-8">
    <h3>Title : ${gameD.title}</h3>
    <p> Category : <span class="free">${gameD.genre}</span></p>
    <p> Platform : <span class="free">${gameD.platform}</span></p>
    <p> Status : <span class="free">Live</span></p>
    <p>${gameD.description}</p>
    <button class="btn btn-outline-warning" target="_blank"><a href="${gameD.game_url}" target="_blank"  class="text-light">SHOW GAME</a></button>
    </div>
    
    </div>
    
    </div>
    `;
    document.getElementById('game-details').innerHTML=cartonaa;
    this.home.classList.add('d-none');
    document.getElementById('game-details').classList.remove('d-none')

    document.getElementById('out').addEventListener('click',()=>{
        this.home.classList.remove('d-none');
        document.getElementById('game-details').classList.add('d-none')
    })
    }

 showGames(){

    this.cards.addEventListener('click',(e)=>{
        const datID=e.target.getAttribute('dataID');
        console.log(datID);
       this.displayGameDrtails(datID)
    },true)



}


}