const express = require("express");
const router = express.Router();

let quotes = [
    { id: 1, text: "The only limit to our realization of tomorrow is our doubts of today." },
    { id: 2, text: "The future belongs to those who believe in the beauty of their dreams." },
    { id: 3, text: "Do not wait to strike till the iron is hot; but make it hot by striking." }
];

router.get('/quotes', (req, res) => {
    res.json(quotes);
});

// POST /quotes: Add a new quote to the list
router.post('/quotes', (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ 
            success:false,
            message:"some internal error to fetch",
            error: "Quote text is required" 

        });
    }
    const newQuote = {
        id: quotes.length > 0 ? quotes[quotes.length - 1].id + 1 : 1,
        text
    };
    quotes.push(newQuote);
    res.status(201).json(newQuote);
});

// DELETE /quotes/:id: Delete a quote by ID
router.delete('/quotes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = quotes.findIndex(quote => quote.id === id);
    if (index === -1) {
        return res.status(404).json({ 
            success:false,
            message:"qoutes not find for deletion purposes, due to some internalerror",
            error: "Quote not found" 
        });
    }
    const deletedQuote = quotes.splice(index, 1);
    res.json(deletedQuote[0]);
});


module.exports = router;