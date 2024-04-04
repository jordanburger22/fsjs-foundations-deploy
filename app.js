const header = document.getElementById('header')
const themeButton = document.getElementById('theme-btn')
const blogBtn = document.getElementById('blog-btn')
const bookmark = document.getElementById('bookmark')
const moon = document.getElementById('moon')

header.textContent = 'SED ALIQUAM'

themeButton.addEventListener('click', function(){
    if(document.body.style.backgroundColor === 'white'){
        document.body.style.backgroundColor = '#393545'
        document.body.style.color = '#FFFFFF'
        blogBtn.style.color = '#0F0E12'
        blogBtn.style.backgroundColor = '#FFFFFF'
        bookmark.src = '/images/bookmark-black.jpg'
        themeButton.style.backgroundColor = '#D8D6E1'
        moon.src = '/images/moon-purple.png'

    } else {
        document.body.style.backgroundColor = 'white'
        document.body.style.color = '#0F0E12'
        blogBtn.style.color = '#FFFFFF'
        blogBtn.style.backgroundColor = '#0F0E12'
        bookmark.src = '/images/bookmark-white.png'
        themeButton.style.backgroundColor = '#FFFFFF'
        moon.src = '/images/moon-black.jpg'
    }
})

const blogPosts = [
    {
        title: 'Title 1',
        textContent: "This is the first blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "2024-03-15"
    },
    {
        title: 'Title 2',
        textContent: "This is the second blog post. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "2024-03-14"
    },
    {
        title: 'Title 3',
        textContent: "This is the third blog post. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: "2024-03-13"
    }
];

blogBtn.addEventListener('click', function(){
    for(let i = 0; i < blogPosts.length; i++){
        alert(`Title: ${blogPosts[i].title} \nPost: ${blogPosts[i].textContent} \nDate: ${blogPosts[i].date}`)
    }
})
