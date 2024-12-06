function repeat(operation, num) {
  if (num <= 0) return

  operation()

  // https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop
  // https://dev.to/itsshaikhaj/event-loop-in-javascript-how-it-works-and-why-it-matters-29k8
  
  // release control every 10 or so iterations.
  // 10 is arbitrary.
  if (num % 10 === 0) {
    setTimeout(function() {
      repeat(operation, --num)
    })
  } else {
    repeat(operation, --num)
  }
}

module.exports = repeat
