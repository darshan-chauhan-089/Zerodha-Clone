const wrapAsync = (fn) => {
    return function(req, res, next){
        fn(req, res, next)?.catch((err) => next(err));
    }
}

class ExpressError extends Error{
    constructor(status, message){
        super();
        this.status = status;
        this.message = message; 
    }
}

function getCurrentFormattedTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Pad single-digit values with a leading zero
  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}

module.exports = {ExpressError, wrapAsync, getCurrentFormattedTime};