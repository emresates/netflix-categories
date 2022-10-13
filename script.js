// Movies/Series Posters Info
const posters = [
    {
        title: "Dark",
        category: ["Crime", "Drama", "Mystery"],
        img: "https://i.hizliresim.com/kl5ikc6.png",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `A family saga with a supernatural twist, set in a German town where the disappearance of two young,
        children exposes the relationships among four families.`
    },
    {
        title: "Fantastic Beasts",
        category: ["Adventure", "Family", "Fantasy"],
        img: "https://i.hizliresim.com/dkt1jur.jpg",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `The adventures of writer Newt Scamander in New York's secret community 
        of witches and wizards seventy years before Harry Potter reads his book in school.`
    },
    {
        title: "Bird Box",
        category: ["Horror", "Mystery", "Sci-Fi"],
        img: "https://i.hizliresim.com/id9fbxy.jpg",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `Five years after an ominous unseen presence drives most of society to suicide, 
        a mother and her two children make a desperate bid to reach safety.`
    },
    {
        title: "Blonde",
        category: ["Biography", "Drama", "Romance"],
        img: "https://i.hizliresim.com/hjsf680.jpg",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `A fictionalized chronicle of the inner life of Marilyn Monroe.`
    },

    {
        title: "Arcane",
        category: ["Animation", "Action", "Adventure"],
        img: "https://i.hizliresim.com/ipsqu87.jpg",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `Set in utopian Piltover and the oppressed underground of Zaun, the story follows the 
        origins of two iconic League champions-and the power that will tear them apart.`
    },
    {
        title: "Inglorious Basterds",
        category: ["Adventure", "Drama", "War"],
        img: "https://i.hizliresim.com/91behhd.png",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish 
        U.S. soldiers coincides with a theatre owner's vengeful plans for the same.`
    },
    {
        title: "Breaking Bad",
        category: ["Crime", "Drama", "Thriller"],
        img: "https://i.hizliresim.com/qs36m9e.jpg",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `A high school chemistry teacher diagnosed with inoperable lung cancer turns to 
        manufacturing and selling methamphetamine in order to secure his family's future.`
    },
    {
        title: "Inception",
        category: ["Action", "Adventure", "Sci-Fi"],
        img: "https://i.hizliresim.com/3a1ja13.jpg",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an 
        idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.`
    },

    {
        title: "Blade Runner 2049",
        category: ["Action", "Drama", "Mystery"],
        img: "https://i.hizliresim.com/8h5tnfu.jpg",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `Young Blade Runner K's discovery of a long-buried secret leads him to track down former 
        Blade Runner Rick Deckard, who's been missing for thirty years.`
    },
    {
        title: "Altered Carbon",
        category: ["Action", "Drama", "Sci-Fi"],
        img: "https://i.hizliresim.com/hehdbt1.jpg",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `Set in a future where consciousness is digitized and stored, a prisoner returns to life in a 
        new body and must solve a mind-bending murder to win his freedom.`
    },
    {
        title: "Constantine",
        category: ["Horror", "Action", "Fantasy"],
        img: "https://i.hizliresim.com/x3pme8j.jpg",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `Supernatural exorcist and demonologist John 
        Constantine helps a policewoman prove her sister's death was not a suicide, but something more.`
    },
    {
        title: "The Godfather",
        category: ["Crime", "Drama", "Mafia"],
        img: "https://i.hizliresim.com/3dzxhye.jpg",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `A fictionalized chronicle of the inner life of Marilyn Monroe.`
    },

    {
        title: "The Hateful Eight",
        category: ["Crime", "Drama", "Mystery"],
        img: "https://i.hizliresim.com/h86j6g2.jpg",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a 
        cabin currently inhabited by a collection of nefarious characters.`
    },
    {
        title: "The Incredible Hulk",
        category: ["Action", "Adventure", "Sci-Fi", "Super-Hero"],
        img: "https://i.hizliresim.com/9e92nrj.png",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `Bruce Banner, a scientist on the run from the U.S. Government, must find a 
        cure for the monster he turns into whenever he loses his temper.`
    },
    {
        title: "Prison Break",
        category: ["Crime", "Action", "Drama"],
        img: "https://i.hizliresim.com/nn72f1k.jpg",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, 
        who makes it his mission to deliberately get himself sent to the same prison in order 
        to break the both of them out, from the inside.`
    },
    {
        title: "Rick and Morty",
        category: ["Animation", "Adventure", "Comedy"],
        img: "https://i.hizliresim.com/gdz2qux.png",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `An animated series that follows the exploits of a super scientist and his not-so-bright grandson.`
    },

    {
        title: "Shutter Island",
        category: ["Mystery", "Thriller", "Psychological"],
        img: "https://i.hizliresim.com/6wbbqdc.jpg",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `In 1954, a U.S. Marshal investigates the disappearance of a
         murderer who escaped from a hospital for the criminally insane.`
    },
    {
        title: "Sweet Tooth",
        category: ["Adventure", "Drama", "Fantasy"],
        img: "https://i.hizliresim.com/7qi0hch.jpg",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `A boy who is half human and half deer survives in a post-apocalyptic world with other hybrids.`
    },
    {
        title: "Suits",
        category: ["Comedy", "Drama"],
        img: "https://i.hizliresim.com/nqd3bj6.png",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `Five years after an ominous unseen presence drives most of society to suicide, 
        a mother and her two children make a desperate bid to reach safety.`
    },
    {
        title: "The Dark Knight",
        category: ["Action", "Crime", "Super-Hero"],
        img: "https://i.hizliresim.com/rf09qzi.jpg",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one 
        of the greatest psychological and physical tests of his ability to fight injustice.`
    },

    {
        title: "Tenet",
        category: ["Thriller", "Action", "Sci-Fi"],
        img: "https://i.hizliresim.com/320io4b.jpg",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys
         through a twilight world of international espionage on a mission that will unfold in something beyond real time.`
    },
    {
        title: "The Truman Show",
        category: ["Comedy", "Drama"],
        img: "https://i.hizliresim.com/2ihvazh.png",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `An insurance salesman discovers his whole life is actually a reality TV show.`
    },
    {
        title: "The Umbrella Academy",
        category: ["Action", "Comedy", "Adventure"],
        img: "https://i.hizliresim.com/1eulfu2.jpg",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `A family of former child heroes, now grown apart, must reunite to continue to protect the world.`
    },
    {
        title: "Vikings",
        category: ["Action", "Drama", "Historical"],
        img: "https://i.hizliresim.com/rfkjfxr.jpg",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior 
        and farmer who yearns to explore--and raid--the distant shores across the ocean.`
    },

    {
        title: "John Wick",
        category: ["Thriller", "Crime", "Action"],
        img: "https://i.hizliresim.com/hoo78lw.jpg",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took his car.`
    },
    {
        title: "Joker",
        category: ["Psychological", "Crime", "Thriller"],
        img: "https://i.hizliresim.com/eia0f0m.png",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.`
    },
    {
        title: "I am Legend",
        category: ["Sci-Fi", "Drama", "Action"],
        img: "https://i.hizliresim.com/a8rt1wx.jpg",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `Years after a plague kills most of humanity and transforms the rest into monsters, 
        the sole survivor in New York City struggles valiantly to find a cure.`
    },
    {
        title: "Lucifer",
        category: ["Crime", "Drama", "Fantasy"],
        img: "https://i.hizliresim.com/m64fdcf.jpg",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on 
        Earth to better understand humanity. He settles in Los Angeles - the City of Angels.`
    },

    {
        title: "Mad Max",
        category: ["Sci-Fi", "Adventure", "Violent"],
        img: "https://i.hizliresim.com/o2j20xz.jpg",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with 
        the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.`
    },
    {
        title: "The Matrix",
        category: ["Sci-Fi", "Action", "Cyberpunk"],
        img: "https://i.hizliresim.com/tmiqvnu.jpg",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking 
        truth--the life he knows is the elaborate deception of an evil cyber-intelligence.`
    },
    {
        title: "The Magnificent Seven",
        category: ["Western", "Action", "Adventure"],
        img: "https://i.hizliresim.com/cj2qufx.jpg",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `Seven gunmen from a variety of backgrounds are brought together by a vengeful young widow to 
        protect her town from the private army of a destructive industrialist.`
    },
    {
        title: "Narcos",
        category: ["Biography", "Drama", "Mafia", "Historical"],
        img: "https://i.hizliresim.com/o092bcc.jpg",
        imgPlay: "https://i.hizliresim.com/e2purtn.png",
        desc: `A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well 
        as the many other drug kingpins who plagued the country through the years.`
    }
]


// DOMS and button list
const btnContainerDOM = document.querySelector(".categorie-cont")
const moviesContainerDOM = document.querySelector(".movies")
const btnList = ["A-Z", "All", "Drama", "Adventure",
    "Action", "Cyberpunk", "Violent", "Mafia", "Sci-Fi",
    "Super-Hero", "Fantasy", "Thriller", "Psychological",
    "Historical", "Family", "Horror", "Romance", "Biography",
    "Animation", "War", "Mystery","Crime"
]

// Convert button list to button
btnList.forEach((value) => {
    let button = document.createElement("button")
    button.innerHTML = value
    button.className = "cButton"
    button.setAttribute("data-id", value)
    button.addEventListener("click", buttonClick)
    btnContainerDOM.append(button)
})


// The process of choosing categories
function buttonClick() {
    const dataID = this.getAttribute("data-id");

    // Another way to show all posters. You can't sort on this one
    // const result = dataID === "All" ? posters : posters.filter((item) => {
    //     return item.category.includes(dataID);
    // });

    var x;
    if(dataID ==="All"){
         x = posters
    } else if ( dataID ==="A-Z"){
         x=  posters.sort(function(a,b) { return a.title.localeCompare(b.title)})
    } else {
         x= posters.filter((item)=>{return item.category.includes(dataID)})
    }

    addMovie(x)
}

// Showing Movies
function addMovie(showMovie) {
    moviesContainerDOM.innerHTML = "";
    for (let item in showMovie) {
        let movieItem = document.createElement("div")
        movieItem.classList.add("movie")
        movieItem.innerHTML = `       
        <div class="title">
            <h3>${showMovie[item].title}</h3>
        </div>
        <div class="movie-img">
            <img class="poster" src="${showMovie[item].img}" alt="">
        </div>
        <img class="play" src="${showMovie[item].imgPlay}" alt="">
        <div class="overview">
            <p>
                ${showMovie[item].desc}
            </p>
        </div>
    `
        moviesContainerDOM.append(movieItem)
    }
}

addMovie(posters)