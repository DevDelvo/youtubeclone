export const recommendedVideos = [
    {
        title: 'Jonathan Davis (KORN) - What\'s in My Bag?',
        author: 'Amoeba',
        views: '204,000',
        verified: true,
        uploadDate: new Date(2018, 9, 7)
    },
    {
        title: 'D E S P L A S T I C O 3 0 0 0',
        author: 'guilhox',
        views: '139,000',
        verified: false,
        uploadDate: new Date(2018, 6, 14)
    },
    {
        title: 'Navy SEAL on real martial arts .',
        author: 'subhan bluesy',
        views: '3,500,000',
        verified: false,
        uploadDate: new Date(2016, 9, 15)
    },
    {
        title: 'Shrek\s Bizarre Adventure: Crazy Swampy Bizarre Star',
        author: 'Tsunscreen',
        views: '107,000',
        verified: false,
        uploadDate: new Date(2017, 11, 14)
    },
    {
        title: 'Bill Burr MMP One-Shot - One-Punch Man',
        author: 'Bill Burr',
        views: '204,000',
        verified: true,
        uploadDate: new Date(2017, 9, 17)
    },
    {
        title: 'Something About Plastic Love (Takeuchi x Daft Punk)',
        author: 'Vandal',
        views: '84,000',
        verified: false,
        uploadDate: new Date(2018, 7, 7)
    },
    {
        title: 'Why I keep drawing "Art"',
        author: 'Shadbase',
        views: '651,000',
        verified: false,
        uploadDate: new Date(2017, 9, 2)
    },
    {
        title: 'you\'re gonna carry that weight',
        author: 'kujira',
        views: '450,000',
        verified: false,
        uploadDate: new Date(2017, 9, 2)
    },
    {
        title: 'Art Cafe #86 - Ilya Kuvshinov',
        author: 'Art Cafe',
        views: '46,000',
        verified: false,
        uploadDate: new Date(2018, 8, 21)
    },
    {
        title: 'Berserk | I\'m Still Here',
        author: 'MickeyBeast',
        views: '181,000',
        verified: false,
        uploadDate: new Date(2018, 2, 14)
    },
    {
        title: 'Josuke calling himself',
        author: 'jojokezadusto',
        views: '25,000',
        verified: false,
        uploadDate: new Date(2017, 9, 14)
    },
    {
        title: 'Joe Rogan - Elon Musk confirms Alex Jones theories',
        author: 'Wake up Media',
        views: '474,000',
        verified: false,
        uploadDate: new Date(2018, 7, 7)
    },
    {
        title: 'Neil deGrasse Tyson Defends Elon Musk Smoking Weed...',
        author: 'TMX',
        views: '1,200,000',
        verified: true,
        uploadDate: new Date(2018, 9, 12)
    },
    {
        title: 'Post Malone being bullied for two minutes straight',
        author: 'Noodle',
        views: '749,000',
        verified: false,
        uploadDate: new Date(2018, 6, 14)
    },
    {
        title: 'Elon Musk on What Keeps Him Up at Night',
        author: 'Joe Rogan University - Fan Channel', //note that it ends with University - Fan Ch...
        views: '644,000',
        verified: false,
        uploadDate: new Date(2018, 9, 7)
    },
    {
        title: 'Celebs & Fans React to Eminem KillShot (Machine Fun Kelly Diss) ft. 50 Cent, Iggy Azalea & More', //ends with Machine...
        author: 'Reactverse', 
        views: '225,000',
        verified: false,
        uploadDate: new Date(2018, 9, 14)
    },
    {
        title: 'Golden Wind Promo and Voice Actors Announced!',
        author: 'xForts', 
        views: '127,000',
        verified: false,
        uploadDate: new Date(2018, 7, 14)
    },
]


export const upLoadedVideosBy = (author) => {
    return ([
        {
            title: 'Shrek\s Bizarre Adventure: Crazy Swampy Bizarre Star',
            author,
            views: '107,000',
            verified: false,
            uploadDate: new Date(2017, 11, 14)
        },
        {
            title: 'Bill Burr MMP One-Shot - One-Punch Man',
            author,
            views: '204,000',
            verified: true,
            uploadDate: new Date(2017, 9, 17)
        },
        {
            title: 'you\'re gonna carry that weight',
            author,
            views: '450,000',
            verified: false,
            uploadDate: new Date(2017, 9, 2)
        },
        {
            title: 'Berserk | I\'m Still Here',
            author,
            views: '181,000',
            verified: false,
            uploadDate: new Date(2018, 2, 14)
        },
        {
            title: 'Josuke calling himself',
            author,
            views: '25,000',
            verified: false,
            uploadDate: new Date(2017, 9, 14)
        },
        {
            title: 'Golden Wind Promo and Voice Actors Announced!',
            author, 
            views: '127,000',
            verified: false,
            uploadDate: new Date(2018, 7, 14)
        },
    ])
}