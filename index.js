const express = require ('express')
const cors = require ('cors')
const app = express();


const port = 9875

app.listen (port, () => {
    console.log('Artists and their list of songs');
    
})

app.use(cors());
app.use(express.static('public'));

const tracklist = [
    {
        Song: "Emi n'Iyi",
        Artist: "Yomi Olabisi",
        Duration: "5:12",
        Genre: "Apala Fusion / Gospel",
        image: "/Images/yomi.jpg",
    },

    {
        Song: "Olodumare",
        Artist: "Yomi Olabisi",
        Duration: "4:45",
        Genre: "Contemporary Gospel",
        image: "/Images/yomi.jpg",
    },

    {
        Song: "Adaba",
        Artist: "Asa",
        Duration: "3:51",
        Genre: "Soul/Indie",
        image: "/Images/asa.jpg",
    },

    {
        Song: "Goodness of God",
        Artist: "Cece Winans",
        Duration: "4:56",
        Genre: "Gospel",
        image: "/Images/cece winans.jpg",
    },


    {
        Song: "Olowogbogboro",
     	Artist: "Nathaniel Bassey",
        Genre: "Gospel",
        Duration: "5:18",
        image: "/Images/nathanielbassey.jpg",
        
    },
];


app.get('/songs', (req, res) => {
    res.send (tracklist)
})