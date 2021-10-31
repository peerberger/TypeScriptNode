import express from 'express';

const app = express();


const add = (a: number, b?: number) => {
    return a + (b as number);
}

app.get('/', (req: any) => {
    req.name = "bob";
});

app.listen(3000, () => {
    console.log("started");
});