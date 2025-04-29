document.addEventListener("DOMContentLoaded", () => {
    const bubblesContainer = document.getElementById("bubbles-container")
    let bubbleCount = 0
    const MAX_BUBBLES = 8
    let pageVisible = true
  
    function createBubbles(count) {
      bubblesContainer.innerHTML = ""
      bubbleCount = 0
      for (let i = 0; i < count; i++) {
        createBubble()
      }
    }
  
    function createBubble() {
      if (bubbleCount >= MAX_BUBBLES || !pageVisible) {
        return
      }
      bubbleCount++
      const bubble = document.createElement("div")
      bubble.classList.add("bubble")
      const size = Math.random() * 60 + 20
      bubble.style.width = `${size}px`
      bubble.style.height = `${size}px`
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight
      bubble.style.left = `${x}px`
      bubble.style.top = `${y}px`
  
      const colors = [
        "rgba(255, 0, 149, 0.3)", 
        "rgba(28, 28, 122, 0.3)", 
        "rgba(244, 203, 203, 0.5)", 
        "rgba(253, 221, 183, 0.4)", 
        "rgba(184, 184, 203, 0.3)", 
      ]
      const color = colors[Math.floor(Math.random() * colors.length)]
      bubble.style.backgroundColor = color
  
      const tx1 = Math.random() * 100 - 50 + "px"
      const ty1 = Math.random() * 100 - 50 + "px"
      const tx2 = Math.random() * 100 - 50 + "px"
      const ty2 = Math.random() * 100 - 50 + "px"
      const tx3 = Math.random() * 100 - 50 + "px"
      const ty3 = Math.random() * 100 - 50 + "px"
      const tx4 = Math.random() * 100 - 50 + "px"
      const ty4 = Math.random() * 100 - 50 + "px"
  
      bubble.style.setProperty("--tx1", tx1)
      bubble.style.setProperty("--ty1", ty1)
      bubble.style.setProperty("--tx2", tx2)
      bubble.style.setProperty("--ty2", ty2)
      bubble.style.setProperty("--tx3", tx3)
      bubble.style.setProperty("--ty3", ty3)
      bubble.style.setProperty("--tx4", tx4)
      bubble.style.setProperty("--ty4", ty4)
  
      const duration = 5 + Math.random() * 10
      bubble.style.animationDuration = `${duration}s`
      const delay = Math.random() * 5
      bubble.style.animationDelay = `${delay}s`
      bubblesContainer.appendChild(bubble)
  
      const timeoutId = setTimeout(
        () => {
          if (bubble.parentNode) {
            bubble.remove()
            bubbleCount--
            if (pageVisible) {
              createBubble()
            }
          }
        },
        (duration + delay) * 1000,
      )
      bubble.dataset.timeoutId = timeoutId.toString()
    }
  
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        pageVisible = false
      } else {
        pageVisible = true
        createBubbles(MAX_BUBBLES)
      }
    })
    createBubbles(MAX_BUBBLES)
    window.addEventListener("resize", () => {
      createBubbles(MAX_BUBBLES)
    })

    setInterval(() => {
      const currentBubbles = bubblesContainer.querySelectorAll(".bubble").length
      if (currentBubbles > MAX_BUBBLES * 2) {
        console.log(`Too many bubbles detected (${currentBubbles}), resetting...`)
        createBubbles(MAX_BUBBLES)
      }
    }, 10000)
  })
  