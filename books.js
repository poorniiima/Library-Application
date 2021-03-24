var book = [{
        title: 'Tom and Jerry',
        author: 'Joseph Barbera',
        genre: 'Cartoon',
        desc: 'Tom and Jerry is an American animated franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera. Best known for its 161 theatrical short films by Metro-Goldwyn-Mayer, the series centers on a friendship/rivalry (a love-hate relationship) between the title characters Tom, a cat, and Jerry, a mouse. Many shorts also feature several recurring characters.',
        img: 'tom.jpg'
    },
    {
        title: 'Harry Portter',
        author: 'J K Rowling ',
        genre: 'Fantacy',
        desc: 'Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry\'s struggle against Lord Voldemort\, a dark wizard who intends to become immortal\, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles(non - magical people)\. ',
        img: 'harry.jpg'
    }, {
        title: 'Paathumayude Aadu',
        author: 'Basheer',
        genre: 'Drama',
        desc: 'Pathummayude Aadu is a humorous novel by Vaikom Muhammad Basheer. The characters of the novel are members of his family and the action takes place at his home in Thalayolaparambu. The goat in the story belongs to his sister Pathumma. Basheer begins the novel with an alternative title for the book, Pennungalude Buddhi.',
        img: 'basheer.jpg'
    }
]



exports.list = function(req, res) {
    res.render("books/books", {
        nav: [{ link: '/', name: 'Home' }, { link: '/books', name: 'Books' }, { link: '/authors', name: 'Authors' }, { link: '/sign-in', name: 'Sign In' }, { link: '/sign-up', name: 'Sign Up' }],
        title: 'Library App',
        book
    });
};

exports.view = function(req, res) {
    const id = req.params.id;
    res.render('books/book', {
        nav: [{ link: '/', name: 'Home' }, { link: '/books', name: 'Books' }, { link: '/authors', name: 'Authors' }, { link: '/sign-in', name: 'Sign In' }, { link: '/sign-up', name: 'Sign Up' }],
        title: 'Library App',
        book: book[id]
    });

};
exports.new = function(req, res) {
    res.render("books/add-book", {
        nav: [{ link: '/', name: 'Home' }, { link: '/books', name: 'Books' }, { link: '/authors', name: 'Authors' }, { link: '/sign-in', name: 'Sign In' }, { link: '/sign-up', name: 'Sign Up' }],
        title: 'Library App'

    });
};