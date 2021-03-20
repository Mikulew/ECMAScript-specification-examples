// eventLoop is an array that acts as a queue (first-in, first-out)
let eventLoop = [];
let event;

// keep going "forever"
while (true) {
  // perform a "tick"
  if (eventLoop.length > 0) {
    // get the next event in the queue
    event = eventLoop.shift();
    // now execute the next event
    try {
      event();
    } catch (err) {
      reportError(err);
    }
  }
}

/*
  author: Kyle Simpson – You don't know JS – Async & Performance
  source: http://cdn.lxqnsys.com/05_You_Don't%20_Know_JS_Async_&_Performance.pdf
  page: 11
*/
