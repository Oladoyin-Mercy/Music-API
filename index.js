const express = require ('express')
const app = express();


const port = 9875

app.listen (port, () => {
    console.log('Artists and their list of songs');
    
})

const tracklist = [
    {
        Song: "Emi n'Iyi",
        Artist: "Yomi Olabisi",
        Duration: "5:12",
        Genre: "Apala Fusion / Gospel",
        image: "./Images/Yomi-olabisi.jpg",
    },

    {
        Song: "Olodumare",
        Artist: "Yomi Olabisi",
        Duration: "4:45",
        Genre: "Contemporary Gospel",
        image: "https://images.example.com/yomi-olabisi.jpg",
    },

    {
        Song: "Adaba",
        Artist: "Asa",
        Duration: "3:51",
        Genre: "Soul/Indie",
        image: "https://images.example.com/asa.jpg",
    },

    {
        Song: "Goodness of God",
        Artist: "Cece Winans",
        Duration: "4:56",
        Genre: "Gospel",
        image: "https://images.example.com/cece-winans.jpg",
    },


    {
        Song: "Olowogbogboro",
     	Artist: "Nathaniel Bassey",
        Genre: "Gospel",
        Duration: "5:18",
        image: "https://images.example.com/nathaniel-bassey.jpg",
    },
];


app.get('/songs', (req, res) => {
    res.send (tracklist)
})