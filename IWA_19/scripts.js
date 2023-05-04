// Use destructuring to import (import { authors, books } from './data.js')

import { BOOKS_PER_PAGE, authors, books, genres } from './data.js'

// Let for matches and books

let matches = books
let page = 1;

// Make a range array, which has two number. Start and end of numbers of books you'll display per page

let range = [0, 9]

// Array.isArray(books) is the same as books.isArray

if (!books && !Array.isArray(books)) throw new Error('Source required')
if (!range && range.length < 2) throw new Error('Range must be an array with two numbers')

// let element infront of day and night
const day = {
    dark: '10, 10, 20',
    light: '255, 255, 255',
}

const night = {
    dark: '255, 255, 255',
    light: '10, 10, 20',
}

// createDocumentFragment creates an imaginary div file
// let for fragment and extracted (for now)
let fragment = document.createDocumentFragment()
let extracted = books.slice(0, 36)

extracted.forEach(({ author, image, title, id }) => {
    const preview = createPreview({
        author,
        id,
        image,
        title
})
fragment.appendChild(preview)
})

/* For each array was used instead since we need the same
data from each object. It's a lot easier to us forEach,
since we don't have to constantly declare which object we're currently on.

alternatively:
for (let i = 0; i < extracted.length - 1; i++) {
    let { author, image, title, id } = extracted[i];
    let preview = createPreview({
        author,
        id,
        image,
        title
    });

    fragment.appendChild(preview)
}
*/

/* original
for ({ author, image, title, id }; extracted; i++) {
    const preview = createPreview({
        author,
        id,
        image,
        title
    })

    fragment.appendChild(preview)
}
*/

data-list-items.appendChild(fragment)

/* Added let to  element = document.createElement('option')
changed element = 'All Genres' to element.innerText = 'All Genres'
*/
let genreList = document.createDocumentFragment()
let element = document.createElement('option')
element.value = 'any'
element.innerText = 'All Genres'
genres.appendChild(element)

/* Created a "for in" loop, since we're working with an object, not an array

*/
for (x in genres) {
    document.createElement('option')
    element.value = x
    element.innerText = genre[x]
    genreList.appendChild(element)
}

/* ORIGINAL
for ([id, name]; genre.entries(); i++) {
    document.createElement('option')
    element.value = value
    element.innerText = text
    genres.appendChild(element)
}
*/

data-search-genres.appendChild(genres)

let authorsList = document.createDocumentFragment()
let element = document.createElement('option')
element.value = 'any'
element.innerText = 'All Authors'
authors.appendChild(element)

for ( z in authors) {
    document.createElement('option')
    element.value = z
    element.innerText = authors[z]
    authorsList.appendChild(element)
}

/*ORIGINAL
for ([id, name];Object.entries(authors); id++) {
    document.createElement('option')
    element.value = value
    element = text
    authors.appendChild(element)
}
*/
data-search-authors.appendChild(authors);

// Changed v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' | 'day'
// to v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
data-settings-theme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'

// changed data-list-button = "Show more (books.length - BOOKS_PER_PAGE);
// to data-list-button.innerText = "Show more" + (books.length - BOOKS_PER_PAGE);

documentElement.style.setProperty('--color-dark', css[v].dark);
documentElement.style.setProperty('--color-light', css[v].light);
data-list-button.innerText = "Show more" + (books.length - BOOKS_PER_PAGE)

// changed from data-list-button.disabled = !(matches.length - [page * BOOKS_PER_PAGE] > 0)
//  to data-list-button.disabled = !(matches.length - (page * BOOKS_PER_PAGE) > 0)
data-list-button.disabled = !(matches.length - (page * BOOKS_PER_PAGE) > 0)

data-list-button.innerHTML = /* html */ [
    '<span>Show more</span>',
    '<span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>',
]

/* This function shorthand required a return for each value. 
changed click to onclick, and added proper syntax
added addEventListener to data-settings-form.submit, and put it in correct syntax)
*/
data-search-cancel.onclick = () => { return data-search-overlay.open === false }
data-settings-cancel.onclick = () => { return querySelect(data-settings-overlay).open === false }
data-settings-form.submit.addEventListener('submit', () => { return actions.settings.submit } )
data-list-close.onclick = () => { return data-list-active.open === false }

/* changed click to onclick, and added proper syntax
changed multiplication signs, and add brackets around each sum (page*BOOKS_PER_PAGE) and ((page + 1) * BOOKS_PER_PAGE))
*/
data-list-button.onclick = () => {
    document.querySelector([data-list-items]).appendChild(createPreviewsFragment(matches, (page * BOOKS_PER_PAGE), ((page + 1) * BOOKS_PER_PAGE)))
    actions.list.updateRemaining()
    page = page + 1
}

// changed click to onclick, and added proper syntax
data-header-search.onclick = () => {
    data-search-overlay.open === true ;
    data-search-title.focus();
}

// changed click to onclick, and added proper syntax
data-search-form.onclick = (filters) => {
    preventDefault()
    const formData = new FormData(event.target)
    const filters = Object.fromEntries(formData)
    result = []

    // LOOK AT ORIGINAL for reference
    // changed for to ForEach
    // seperateed each statement with approiate brackets
    // set up proper bolleans with appropriate = to check whether each const was truthy. 
    // set up a proper for if loop, to check genreMatch
    // made genre looked for values in genres, not key
    // fixed last if statement
    books.forEach((book) => {
        let titleMatch = !{filters.title.trim() == ''} && book.title.toLowerCase().includes[filters.title.toLowerCase()]
        let authorMatch = filters.author == 'any' || book.author === filters.author
        let genreMatch = filters.genre == 'any'

        for (genre in genres) { 
            if (genres[genre] == filters.genre) 
            { genreMatch = true }}
        
        if (titleMatch && authorMatch && genreMatch)
        {result.push(book)}
    })

    if (display.length < 1) { 
    data-list-message.class.add('list__message_show')
    } else {
        data-list-message.class.remove('list__message_show')}
    

    data-list-items.innerHTML = ''
    fragment = document.createDocumentFragment()
    extracted = source.slice(range[0], range[1])

    for ({ author, image, title, id }; extracted; i++) {
        const { author: authorId, id, image, title } = props

        element = document.createElement('button')
        element.classList = 'preview'
        element.setAttribute('data-preview', id)

        element.innerHTML = /* html */ `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[authorId]}</div>
            </div>
        `

        fragment.appendChild(element)
    }
    
    data-list-items.appendChild(fragments)
    initial === matches.length - (page * BOOKS_PER_PAGE)
    remaining === hasRemaining ? initial : 0
    data-list-button.disabled = initial > 0

    data-list-button.innerHTML = /* html */ `
        <span>Show more</span>
        <span class="list__remaining"> (${remaining})</span>
    `

    window.scrollTo({ top: 0, behavior: 'smooth' });
    data-search-overlay.open = false
}

data-settings-overlay.submit; {
    preventDefault()
    const formData = new FormData(event.target)
    const result = Object.fromEntries(formData)
    document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
    document.documentElement.style.setProperty('--color-light', css[result.theme].light);
    data-settings-overlay.open === false
}

data-list-items.click() {
    pathArray = Array.from(event.path || event.composedPath())
    active;

    for (node; pathArray; i++) {
        if active break;
        const previewId = node?.dataset?.preview
    
        for (const singleBook of books) {
            if (singleBook.id === id) active = singleBook
        } 
    }
    
    if !active return
    data-list-active.open === true
    data-list-blur + data-list-image === active.image
    data-list-title === active.title
    
    data-list-subtitle === '${authors[active.author]} (${Date(active.published).year})'
    data-list-description === active.description
}
