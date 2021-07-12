
var tweets = [
    {
        tweet :"WhatsApp cofounder: It's time to delete Facebook",
        username :"John",
        created_at : "01-01-2018",
        age : 25
    },

    {
        tweet :"Shockingly awful work conditions",
        username :"Mark",
        created_at : "02-31-2021",
        age : 17
    },

    {
        tweet :"No one is born hating another person because of the color of his skin or his background or his religion...",
        username :"Bilge",
        created_at : "08-08-2019",
        age : 12
    },

    {
        tweet :"Can't lose the 2020 election if there is no 2020.",
        username :"Peter",
        created_at : "01-07-2018",
        age : 32
    },

    {
        tweet :"That didn't take long.",
        username :"Namio",
        created_at : "05-29-2020",
        age : 23
    },

    {
        tweet :"What'll they think of next?",
        username :"Paul",
        created_at : "19-02-2016",
        age : 28
    },

    {
        tweet :"That troll you haven't blocked yet is probably evil. ",
        username :"Hannah",
        created_at : "01-09-2018",
        age : 16
    },

    {
        tweet :"First they came for...",
        username :"Wong",
        created_at : "10-24-2011",
        age : 25
    },

    {
        tweet :"What happens when u wear a green tie on TV",
        username :"Jessie",
        created_at : "07-16-2019",
        age : 10
    },
    

    {
        tweet :"Elephant family save drowning calf by pushing it to shallow end of the pool. Wonderful.",
        username :"Rita",
        created_at : "11-19-2016",
        age : 18
    },

];



// First Attempt

function ageFinder (tweets) {
        // var tweet = tweets[i];
        var userAge = tweets.age;
        if (userAge >= 18) {
            return true;
        }else{
            return false;
        }
    }

for (i=0; i < tweets.length; i++){ 

    console.log(ageFinder(tweets[i]));
}

    // let newArray = tweets.filter(function(e){
    // return e.age >= 18;
    // })

let newArray = tweets.filter(ageFinder);
console.log(newArray);


// Second Attempt

function filterByAge(object) {
    if (Number.isFinite(object.age) && object.age >= 18){
        return true;
    }else{
        return false;}
    }
for (i=0; i<tweets.length; i++){

    var result = filterByAge(tweets[i]);
    console.log(result);
}

let arrByAge = tweets.filter(filterByAge);
console.log(arrByAge);





