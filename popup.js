const toggleFeed = document.querySelector('#toggleFeed')
const toggleShorts = document.querySelector('#toggleShorts')


toggleFeed.addEventListener('change',async()=>{
    const [tab] =await chrome.tabs.query({active:true,currentWindow:true})

    if(toggleFeed.checked){
        chrome.tabs.sendMessage(tab.id, {action:'deleteFeed'})
    }else{
        chrome.tabs.sendMessage(tab.id, {action:'reloadFeed'})
    }
    
})

toggleShorts.addEventListener('change',async()=>{
    const [tab] =await chrome.tabs.query({active:true,currentWindow:true})

    if(toggleShorts.checked){
        chrome.tabs.sendMessage(tab.id, {action:'deleteShorts'})
    }else{
        chrome.tabs.sendMessage(tab.id, {action:'reloadShorts'})
    }
    
})