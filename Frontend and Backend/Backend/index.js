import express from "express";

const app = express();

// app.get("/",(req,res)=>{
//     res.send("Server is ready");
// });

app.get('/jokes',(req,res)=>{
    const jokes=[
        {
            id : 1,
            title : 'A joke',
            contant : "This is a joke"
        },
        {
            id : 2,
            title : 'Another joke',
            contant : "This is another joke"
        },
        {
            id : 3,
            title : 'Third joke',
            contant : "This is third joke"
        },
        {
            id : 4,
            title : 'Fourth joke',
            contant : "This is fourth joke"
        },
        {
            id : 3,
            title : 'Fifth joke',
            contant : "This is fifth joke"
        },
        {
            id : 3,
            title : 'Sixth joke',
            contant : "This is sixth joke"
        }
    ];
    res.send(jokes);
});

const port =  process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`); 
})