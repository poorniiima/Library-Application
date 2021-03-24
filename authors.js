var author = [{
        name: 'J. K. Rowling',
        genre: 'Fantasy',
        desc: 'J. K. Rowling, or originally known as Joanne Rowling, has one of the most fascinating struggle stories to recount. From living on welfare to becoming the best selling author, the author has faced many ups and downs throughout. She was born to James and Anne Rowling in Yate, Gloucestershire, England. Due to her passion for writing fiction stories, she began writing at the tender age of 5. Ever since then, Rowling has penned down numerous tales. She graduated from the University of Exeter in BA in French and Classics in 1986. During her job as a researcher and bilingual secretary for Amnesty International, her short essay – “what was the name of that nymph again?” was published in the University of Exeter’s journal Pegasus.',
        img: 'Rowling.jpg'
    },
    {
        name: 'Joseph Barbera',
        genre: 'Cartoon',
        desc: 'Joseph Roland Barbera (/bɑːrˈbɛərə, ˈbɑːrbərə/ bar-BAIR-ə, BAR-bər-ə,[1] Italian: [barˈbɛːra]; March 24, 1911 – December 18, 2006) was an American animator, director, producer, storyboard artist, and cartoon artist, whose film and television cartoon characters entertained millions of fans worldwide for much of the 20th century.',
        img: 'JBarbera.jpg'
    }, {
        name: 'Vaikom Muhammad Basheer',
        genre: 'Novel, short story, essays, memoirs',
        desc: 'Vaikom Muhammad Basheer (21 January 1908 – 5 July 1994), fondly known as Beypore Sultan, was an Indian independence activist and writer of Malayalam literature . ... He was also a recipient of the Sahitya Akademi Fellowship, Kerala Sahitya Akademi Fellowship, and the Kerala State Film Award for Best Story.',
        img: 'vaikam.jpg'
    }, {
        name: 'Doris Lessing',
        genre: 'Novel, short story, biography, drama',
        desc: 'Doris Lessing, in full Doris May Lessing, original name Doris May Tayler, (born October 22, 1919, Kermānshāh, Persia [now Iran]—died November 17, 2013, London, England), British writer whose novels and short stories are largely concerned with people involved in the social and political upheavals of the 20th century.',
        img: 'dorris.jpg'
    }

]



exports.list = function(req, res) {
    res.render("authors/authors", {
        nav: [{ link: '/', name: 'Home' }, { link: '/books', name: 'Books' }, { link: '/authors', name: 'Authors' }, { link: '/sign-in', name: 'Sign In' }, { link: '/sign-up', name: 'Sign Up' }],
        title: 'Library App',
        author
    });
};
exports.view = function(req, res) {
    const id = req.params.id;
    res.render('authors/author', {
        nav: [{ link: '/', name: 'Home' }, { link: '/books', name: 'Books' }, { link: '/authors', name: 'Authors' }, { link: '/sign-in', name: 'Sign In' }, { link: '/sign-up', name: 'Sign Up' }],
        title: 'Library App',
        author: author[id]
    });

};