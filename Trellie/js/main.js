

const toBeClonedSection = document.getElementById("js--toBeCloned");


// // Json ophalen
fetch("/data/trellies.json").then(
    function (response) {
        return response.json();
    }
).then(
    function (data) {
        //get main
        const main = document.querySelector('main');

        // make section and add section
        let toBeAddedsection = document.createElement("section");
        toBeAddedsection.classList.add("tasks");
        main.appendChild(toBeAddedsection)

        let toBeAddedheader = document.createElement("header");
        toBeAddedheader.classList.add("tasks__header");
        toBeAddedsection.appendChild(toBeAddedheader);

        let toBeAddedh2= document.createElement("h2");
        toBeAddedh2.classList.add("tasks__h2");
        toBeAddedh2.innerText = data.title
        toBeAddedheader.appendChild(toBeAddedh2);

        let toBeAddedheaderwrapper = document.createElement("div");
        toBeAddedheaderwrapper.classList.add("tasks__header__wrapper");
        toBeAddedheader.appendChild(toBeAddedheaderwrapper);

        let toBeAddednumber = document.createElement("div");
        toBeAddednumber.classList.add("tasks__number");
        toBeAddednumber.innerText = data.activities.length
        toBeAddedheaderwrapper.appendChild(toBeAddednumber);

        let toBeAddededit = document.createElement("button");
        toBeAddededit.classList.add("tasks__edit");
        toBeAddededit.innerText = "...";
        toBeAddedheaderwrapper.appendChild(toBeAddededit);


        //eerst ul aanmaken dan de ul hangen aan de clone en dan de li aan de ul hangen
        //hier maken we de ul aan
        let toBeAddedUl = document.createElement("ul");
        // die geef ik de classe tasks__list
        toBeAddedUl.classList.add("tasks__list");
         // en vervolgens knallen we die ul aan onze clone
        toBeAddedsection.appendChild(toBeAddedUl);

        // hij loopt door de activities array heen en elke keer pakt hij 1 van die objecten
        for (let i = 0; i < data.activities.length; i++){
            // de li die we gaan toevoegen maak elke keer een li aaan
            let toBeAddedLi = document.createElement("li");
             // en voeg vervolgens de klasse tasks__listItem toe
            toBeAddedLi.classList.add("tasks__listItem");
            //voeg aan die ul die we net hebben gemaakt append daar als kind 
            toBeAddedUl.appendChild(toBeAddedLi)

            //label maken
            let toBeAddedlabel = document.createElement("label");
            // klasse toevoegen
            toBeAddedlabel.classList.add("tasks__label");
            if (data.activities[i].extraClass !== "") {
                toBeAddedlabel.classList.add("tasks__label--" + data.activities[i].extraClass)
            }
            
            // de label zijn tekst uit data activities 
            toBeAddedlabel.innerText = data.activities[i].label
            // label zetten we in de li
            toBeAddedLi.appendChild(toBeAddedlabel)

            //parahgraaf toevoegen
            let toBeAddedP = document.createElement("p");
            toBeAddedP.innerText = data.activities[i].description
            toBeAddedLi.appendChild(toBeAddedP)

            let toBeAddedBlock = document.createElement("div")
            toBeAddedBlock.classList.add("tasks__listItem__Block");
            toBeAddedLi.appendChild(toBeAddedBlock)

            //author
            let toBeAddedAuthor = document.createElement("p")
            toBeAddedAuthor.classList.add("tasks__listItem__Block__author");
            toBeAddedAuthor.innerText = data.activities[i].author
            toBeAddedBlock.appendChild(toBeAddedAuthor)
        }
    }
)

/* // activity ophalen
// eerst naar de "ul" dus 1
// daarna nog een keer children namelijk de "li" dus 0
// de li heeft twee kinderen  label en paragraaf 
// label heeft 0 children 
// dus de hele data activities de nulste zijn label 
clone.children[1].children[0].children[0].innerText = data.activities[0].label;
// description ophalen
// label was de nulste kind vandaar dat we bij de description een 1 zetten omdat deze children 1 is 
// en deze moet naar description
clone.children[1].children[0].children[1].innerText = data.activities[0].description; */
