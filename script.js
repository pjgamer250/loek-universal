// =====================================
// LOEK UNIVERSAL
// SCRIPT.JS PART 1
// =====================================


// LOADING

window.onload = () => {

    setTimeout(()=>{

        document.getElementById("loader").style.display="none";
        document.getElementById("app").style.display="block";

    },2000);

};




// MENU

function openMenu(){

    document
    .getElementById("menuBox")
    .classList.toggle("hidden");

}



// PAGE CONTROL

function hideAll(){

document.getElementById("home").classList.add("hidden");
document.getElementById("movieIntro").classList.add("hidden");
document.getElementById("folders").classList.add("hidden");
document.getElementById("support").classList.add("hidden");

}



function moviePage(){

hideAll();

document
.getElementById("movieIntro")
.classList.remove("hidden");

}




function supportPage(){

hideAll();

document
.getElementById("support")
.classList.remove("hidden");

}





function showFolders(){

hideAll();

document
.getElementById("folders")
.classList.remove("hidden");

}





// =====================================
// MOVIE DATABASE
// =====================================


const movies = [



// =================
// VIJAY MOVIES
// =================



{
folder:"vijay",

name:"Naalaiya Theerpu",

year:"1992",

actors:"Vijay, Keerthana",

cuts:[]

},


{
folder:"vijay",

name:"Sendhoorapandi",

year:"1993",

actors:"Vijay, Vijayakanth",

cuts:[]

},


{
folder:"vijay",

name:"Rasigan",

year:"1994",

actors:"Vijay, Sanghavi",

cuts:[]

},


{
folder:"vijay",

name:"Deva",

year:"1995",

actors:"Vijay, Swathi",

cuts:[]

},


{
folder:"vijay",

name:"Coimbatore Mappillai",

year:"1996",

actors:"Vijay, Sanghavi",

cuts:[]

},


{
folder:"vijay",

name:"Poove Unakkaga",

year:"1996",

actors:"Vijay, Sanghavi",

cuts:[]

},


{
folder:"vijay",

name:"Love Today",

year:"1997",

actors:"Vijay, Suvaluxmi",

cuts:[]

},


{
folder:"vijay",

name:"Ninaithen Vandhai",

year:"1998",

actors:"Vijay, Rambha",

cuts:[]

},


{
folder:"vijay",

name:"Kadhalukku Mariyadhai",

year:"1997",

actors:"Vijay, Shalini",

cuts:[]

},


{
folder:"vijay",

name:"Thulladha Manamum Thullum",

year:"1999",

actors:"Vijay, Simran",

cuts:[]

},




// 2000s


{
folder:"vijay",

name:"Kushi",

year:"2000",

actors:"Vijay, Jyothika",

cuts:[]

},


{
folder:"vijay",

name:"Friends",

year:"2001",

actors:"Vijay, Suriya, Devayani",

cuts:[]

},


{
folder:"vijay",

name:"Badri",

year:"2001",

actors:"Vijay, Bhoomika",

cuts:[]

},


{
folder:"vijay",

name:"Thamizhan",

year:"2002",

actors:"Vijay, Priyanka Chopra",

cuts:[]

},


{
folder:"vijay",

name:"Youth",

year:"2002",

actors:"Vijay, Shaheen",

cuts:[]

},


{
folder:"vijay",

name:"Thirumalai",

year:"2003",

actors:"Vijay, Jyothika",

cuts:[]

},


{
folder:"vijay",

name:"Ghilli",

year:"2004",

actors:"Vijay, Trisha, Prakash Raj",

cuts:[

{
name:"Love Cutz",
link:"https://drive.google.com/drive/folders/1D4iAedaetVU-YD1r04MeHcxyVIcEi35E"
},

{
name:"Mass Cutz",
link:"https://drive.google.com/drive/folders/1Tj7kvP2i04Fka_R-fOEty_kiKe7GIp8R"
}

]

},


{
folder:"vijay",

name:"Theri",

year:"2016",

actors:"Vijay, Samantha, Amy Jackson",

cuts:[

{
name:"Father & Daughter Love",
link:"https://drive.google.com/drive/folders/1PQ3g_tOIiT916hz60GD1A8wG6QaVUa9A"
}

]

},



// =====================================
// LOEK UNIVERSAL
// SCRIPT.JS PART 2
// CONTINUE MOVIE DATA
// =====================================


// VIJAY MOVIES CONTINUE


{
folder:"vijay",
name:"Sivakasi",
year:"2005",
actors:"Vijay, Asin",
cuts:[]
},


{
folder:"vijay",
name:"Pokkiri",
year:"2007",
actors:"Vijay, Asin, Prakash Raj",
cuts:[]
},


{
folder:"vijay",
name:"Azhagiya Tamil Magan",
year:"2007",
actors:"Vijay, Shriya Saran",
cuts:[]
},


{
folder:"vijay",
name:"Kuruvi",
year:"2008",
actors:"Vijay, Trisha",
cuts:[]
},


{
folder:"vijay",
name:"Villu",
year:"2009",
actors:"Vijay, Nayanthara",
cuts:[]
},


{
folder:"vijay",
name:"Vettaikaaran",
year:"2009",
actors:"Vijay, Anushka Shetty",
cuts:[]
},


{
folder:"vijay",
name:"Sura",
year:"2010",
actors:"Vijay, Tamannaah",
cuts:[]
},


{
folder:"vijay",
name:"Kaavalan",
year:"2011",
actors:"Vijay, Asin",
cuts:[]
},


{
folder:"vijay",
name:"Velayudham",
year:"2011",
actors:"Vijay, Genelia",
cuts:[]
},


{
folder:"vijay",
name:"Nanban",
year:"2012",
actors:"Vijay, Ileana",
cuts:[]
},


{
folder:"vijay",
name:"Thuppakki",
year:"2012",
actors:"Vijay, Kajal Aggarwal",
cuts:[]
},


{
folder:"vijay",
name:"Thalaivaa",
year:"2013",
actors:"Vijay, Amala Paul",
cuts:[]
},


{
folder:"vijay",
name:"Jilla",
year:"2014",
actors:"Vijay, Mohanlal",
cuts:[]
},


{
folder:"vijay",
name:"Kaththi",
year:"2014",
actors:"Vijay, Samantha",
cuts:[]
},


{
folder:"vijay",
name:"Puli",
year:"2015",
actors:"Vijay, Shruti Haasan",
cuts:[]
},


{
folder:"vijay",
name:"Theri",
year:"2016",
actors:"Vijay, Samantha, Amy Jackson",

cuts:[
{
name:"Father & Daughter Love",
link:"https://drive.google.com/drive/folders/1PQ3g_tOIiT916hz60GD1A8wG6QaVUa9A"
}
]

},


{
folder:"vijay",
name:"Mersal",
year:"2017",
actors:"Vijay, Samantha, Kajal Aggarwal",
cuts:[]
},


{
folder:"vijay",
name:"Sarkar",
year:"2018",
actors:"Vijay, Keerthy Suresh",
cuts:[]
},


{
folder:"vijay",
name:"Bigil",
year:"2019",
actors:"Vijay, Nayanthara",

cuts:[
{
name:"Rayappan Mass Cutz",
link:"https://drive.google.com/drive/folders/1v7WVEJSnwVTtQionl0YxeJg2GcpbNZp8"
},

{
name:"Love",
link:"https://drive.google.com/drive/folders/1k8cLgHVfvKWSIxIBKDbLs7Aby5vWV9lY"
},

{
name:"Michael Cutz",
link:"https://drive.google.com/drive/folders/1hGGni4m_3JTiLZh1dXHIwgoQa3dlWBuj"
},

{
name:"Motivation",
link:"https://drive.google.com/drive/folders/1j3Xo83FuDvYej0ijvzKHlFFiAowl4XRI"
}

]

},


{
folder:"vijay",
name:"Master",
year:"2021",
actors:"Vijay, Vijay Sethupathi",

cuts:[
{
name:"JD Mass Cutz",
link:"https://drive.google.com/drive/folders/1F3FrvAyQKzDPTGsG5CUwnLdJDXL4FgeC"
},

{
name:"JD Slomo",
link:"https://drive.google.com/drive/folders/1yzosfMvCbjbr177zo_Rw1Yk0wkTE6XvS"
}

]

},


{
folder:"vijay",
name:"Beast",
year:"2022",
actors:"Vijay, Pooja Hegde",

cuts:[
{
name:"Beast Vijay Cutz",
link:"https://drive.google.com/drive/folders/1sySgIcnagDgeUFZpNRR1Ysq92WuYXbya"
}
]

},


{
folder:"vijay",
name:"Varisu",
year:"2023",
actors:"Vijay, Rashmika Mandanna",
cuts:[]
},


{
folder:"vijay",
name:"Leo",
year:"2023",
actors:"Vijay, Trisha, Sanjay Dutt",
cuts:[]
},



// =====================================
// PART 3
// SURYA + VIJAY SETHUPATHI
// =====================================



// =================
// SURYA MOVIES
// =================


{
folder:"surya",
name:"Nerukku Ner",
year:"1997",
actors:"Surya, Vijay, Simran",
cuts:[]
},


{
folder:"surya",
name:"Kaaka Kaaka",
year:"2003",
actors:"Surya, Jyothika",
cuts:[]
},


{
folder:"surya",
name:"Pithamagan",
year:"2003",
actors:"Surya, Vikram",
cuts:[]
},


{
folder:"surya",
name:"Perazhagan",
year:"2004",
actors:"Surya, Jyothika",
cuts:[]
},


{
folder:"surya",
name:"Ghajini",
year:"2005",
actors:"Surya, Asin",
cuts:[]
},


{
folder:"surya",
name:"Aaru",
year:"2005",
actors:"Surya, Trisha",
cuts:[]
},


{
folder:"surya",
name:"Vel",
year:"2007",
actors:"Surya, Asin",
cuts:[]
},


{
folder:"surya",
name:"Vaaranam Aayiram",
year:"2008",
actors:"Surya, Sameera Reddy",
cuts:[]
},


{
folder:"surya",
name:"Ayan",
year:"2009",
actors:"Surya, Tamannaah",
cuts:[]
},


{
folder:"surya",
name:"Singam",
year:"2010",
actors:"Surya, Anushka Shetty",
cuts:[]
},


{
folder:"surya",
name:"7aum Arivu",
year:"2011",
actors:"Surya, Shruti Haasan",
cuts:[]
},


{
folder:"surya",
name:"Maattrraan",
year:"2012",
actors:"Surya, Kajal Aggarwal",
cuts:[]
},


{
folder:"surya",
name:"Singam 2",
year:"2013",
actors:"Surya, Anushka Shetty",
cuts:[]
},


{
folder:"surya",
name:"24",
year:"2016",
actors:"Surya, Samantha",
cuts:[]
},


{
folder:"surya",
name:"Thaana Serndha Kootam",
year:"2018",
actors:"Surya, Keerthy Suresh",
cuts:[]
},


{
folder:"surya",
name:"Soorarai Pottru",
year:"2020",
actors:"Surya, Aparna Balamurali",
cuts:[]
},


{
folder:"surya",
name:"Jai Bhim",
year:"2021",
actors:"Surya, Lijomol Jose",
cuts:[]
},


{
folder:"surya",
name:"Etharkkum Thunindhavan",
year:"2022",
actors:"Surya, Priyanka Arul Mohan",
cuts:[]
},




// =================
// VIJAY SETHUPATHI
// =================



{
folder:"vjs",
name:"Pizza",
year:"2012",
actors:"Vijay Sethupathi, Remya Nambeesan",
cuts:[]
},


{
folder:"vjs",
name:"Naduvula Konjam Pakkatha Kaanom",
year:"2012",
actors:"Vijay Sethupathi, Gayathrie",
cuts:[]
},


{
folder:"vjs",
name:"Soodhu Kavvum",
year:"2013",
actors:"Vijay Sethupathi, Sanchita Shetty",
cuts:[]
},


{
folder:"vjs",
name:"Dharma Durai",
year:"2016",
actors:"Vijay Sethupathi, Tamannaah",
cuts:[]
},


{
folder:"vjs",
name:"Vikram Vedha",
year:"2017",
actors:"Vijay Sethupathi, Madhavan",
cuts:[]
},


{
folder:"vjs",
name:"96",
year:"2018",
actors:"Vijay Sethupathi, Trisha",
cuts:[]
},


{
folder:"vjs",
name:"Super Deluxe",
year:"2019",
actors:"Vijay Sethupathi, Samantha",
cuts:[]
},


{
folder:"vjs",
name:"Master",
year:"2021",
actors:"Vijay Sethupathi, Vijay",
cuts:[
{
name:"Bhavani Cutz",
link:"https://drive.google.com/drive/folders/1wyArpoL3Am5sakJ2KGtvqKhPQVr7F5Lp"
}
]
},


{
folder:"vjs",
name:"Vikram",
year:"2022",
actors:"Vijay Sethupathi, Kamal Hassan",
cuts:[]
},


{
folder:"vjs",
name:"Jawan",
year:"2023",
actors:"Vijay Sethupathi, Shah Rukh Khan",
cuts:[]
},




// =====================================
// PART 4
// KAMAL HASSAN + LOKESH + FINAL SYSTEM
// =====================================



// =================
// KAMAL HASSAN
// =================


{
folder:"kamal",
name:"Apoorva Sagodharargal",
year:"1989",
actors:"Kamal Hassan, Gouthami",
cuts:[]
},


{
folder:"kamal",
name:"Michael Madana Kama Rajan",
year:"1990",
actors:"Kamal Hassan, Urvashi",
cuts:[]
},


{
folder:"kamal",
name:"Indian",
year:"1996",
actors:"Kamal Hassan, Manisha Koirala",
cuts:[]
},


{
folder:"kamal",
name:"Avvai Shanmughi",
year:"1996",
actors:"Kamal Hassan, Meena",
cuts:[]
},


{
folder:"kamal",
name:"Hey Ram",
year:"2000",
actors:"Kamal Hassan, Shah Rukh Khan",
cuts:[]
},


{
folder:"kamal",
name:"Virumaandi",
year:"2004",
actors:"Kamal Hassan, Abhirami",
cuts:[]
},


{
folder:"kamal",
name:"Dasavathaaram",
year:"2008",
actors:"Kamal Hassan, Asin",
cuts:[]
},


{
folder:"kamal",
name:"Vishwaroopam",
year:"2013",
actors:"Kamal Hassan, Pooja Kumar",
cuts:[]
},


{
folder:"kamal",
name:"Vikram",
year:"2022",
actors:"Kamal Hassan, Vijay Sethupathi",
cuts:[]
},




// =================
// LOKESH KANAKARAJ
// =================


{
folder:"lokesh",
name:"Maanagaram",
year:"2017",
actors:"Sundeep Kishan, Sri",
cuts:[]
},


{
folder:"lokesh",
name:"Kaithi",
year:"2019",
actors:"Karthi, Narain",
cuts:[]
},


{
folder:"lokesh",
name:"Master",
year:"2021",
actors:"Vijay, Vijay Sethupathi",
cuts:[]
},


{
folder:"lokesh",
name:"Vikram",
year:"2022",
actors:"Kamal Hassan, Vijay Sethupathi",
cuts:[]
},


{
folder:"lokesh",
name:"Leo",
year:"2023",
actors:"Vijay, Trisha",
cuts:[]
},



// CLOSE DATABASE

];





// =========================
// OPEN FOLDER MOVIES
// =========================


function openFolder(type){


let area=document.getElementById("movies");

area.innerHTML="";


movies
.filter(movie=>movie.folder==type)
.forEach(movie=>{


area.innerHTML += `

<div class="movie"
onclick="showMovie('${movie.name}')">

<h2>🎬 ${movie.name}</h2>

</div>

`;


});


}






// =========================
// MOVIE DETAILS
// =========================


function showMovie(name){


let movie =
movies.find(x=>x.name==name);



if(!movie) return;



let cutHTML="";



if(movie.cuts.length>0){


movie.cuts.forEach(c=>{


cutHTML += `

<div class="category"
onclick="openLink('${c.link}')">

${c.name}

</div>

`;

});


}else{


cutHTML =

`<h3>Updating Soon 🔜</h3>`;

}




let area=document.getElementById("movies");



area.innerHTML = `


<div class="movie">


<h1>🎬 ${movie.name}</h1>


<p>📅 ${movie.year}</p>


<p>👤 ${movie.actors}</p>


<h3>🏷 Movie Cutz</h3>


${cutHTML}


</div>

`;



}






// DRIVE OPEN


function openLink(link){


if(link){

window.open(link,"_blank");


}else{


alert("Updating Soon 🔜");


}


}






// SEARCH


function searchMovie(){


let value =
document
.getElementById("search")
.value
.toLowerCase();



let result =
movies.filter(m=>

m.name
.toLowerCase()
.includes(value)

);



console.log(result);


}
