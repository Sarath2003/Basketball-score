const homeScoreEl = document.getElementById("home-score")
const incrHomeScoreBy1El = document.getElementById("incrHomeScoreBy1")
const incrHomeScoreBy2El = document.getElementById("incrHomeScoreBy2")
const incrHomeScoreBy3El = document.getElementById("incrHomeScoreBy3")

const guestScoreEl = document.getElementById("guest-score")
const incrGuestScoreBy1El = document.getElementById("incrGuestScoreBy1")
const incrGuestScoreBy2El = document.getElementById("incrGuestScoreBy2")
const incrGuestScoreBy3El = document.getElementById("incrGuestScoreBy3")

let homeScore = Number(homeScoreEl.innerHTML)
let guestScore = Number(guestScoreEl.innerHTML)

incrHomeScoreBy1El.addEventListener("click", function(){
    homeScore++;
    homeScoreEl.innerHTML = homeScore
})

incrHomeScoreBy2El.addEventListener("click", function(){
    homeScore += 2;
    homeScoreEl.innerHTML = homeScore
})
incrHomeScoreBy3El.addEventListener("click", function(){
    homeScore += 3;
    homeScoreEl.innerHTML = homeScore
})



incrGuestScoreBy1El.addEventListener("click", function(){
    guestScore++;
    guestScoreEl.innerHTML = guestScore
})

incrGuestScoreBy2El.addEventListener("click", function(){
    guestScore += 2;
    guestScoreEl.innerHTML = guestScore
})

incrGuestScoreBy3El.addEventListener("click", function(){
    guestScore += 3;
    guestScoreEl.innerHTML = guestScore
})

