console.log('content.js working')

function deleteFeed(){
    const feed = document.querySelector('#contents')
    if(feed){
        feed.style.display = 'none'

    }

}

function reloadFeed(){
    const feed = document.querySelector('#contents')

    if(feed){
        feed.style.display = 'flex'

    }
}

const shortsFeedDeleted = []
function deleteShorts(){
    const shorts = document.querySelectorAll('#endpoint')
    const shortsCarousel = document.querySelectorAll('ytd-reel-shelf-renderer')
    const shortsCarouselFeed = document.querySelectorAll('ytd-rich-shelf-renderer')
    for(let i =0;i<shortsCarouselFeed.length;i++){
        if(shortsCarouselFeed[i].hasAttribute('is-shorts')){
            shortsCarouselFeed[i].style.display = 'none'
            shortsFeedDeleted.push(i)
        }
    }
 
    for(let i =0;i<shortsCarousel.length;i++){
        shortsCarousel[i].style.display = 'none'
    }

    if(shorts){ 
        shorts[1].style.display='none'
    }
}



function reloadShorts(){
    const shorts= document.querySelectorAll('#endpoint')
    const shortsCarousel = document.querySelectorAll('ytd-reel-shelf-renderer')
    const shortsCarouselFeed = document.querySelectorAll('ytd-rich-shelf-renderer')
    for(let i =0;i<shortsFeedDeleted.length;i++){
        shortsCarouselFeed[shortsFeedDeleted[i]].style.display = 'flex'
    }
    for(let i =0;i<shortsCarousel.length;i++){
        shortsCarousel[i].style.display = 'none'
    }

    if(shorts){
        shorts[1].style.display='flex'
    }

}


window.addEventListener('load',function verifyIfItsShorts(){
    if(window.location.href.includes('shorts')){
        window.history.back()
    }else{
        console.log('nn')
    }
})


function focusMode(){
    deleteFeed()
    deleteShorts()
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === 'deleteFeed') {
        deleteFeed()
    }else if(msg.action === 'reloadFeed'){
        reloadFeed()
    }else if(msg.action === 'deleteShorts'){
        deleteShorts()
    }else if(msg.action === 'reloadShorts'){
        reloadShorts()
    }


});


