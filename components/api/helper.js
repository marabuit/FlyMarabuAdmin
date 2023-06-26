// Example POST method implementation:
export const postData = async (url = '', data = {}) => {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: new Headers({
      //'content-type': 'application/json',
      'Authorization': ' Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJhcGk6Ly9kMzk5ZjRiOS1kZDhlLTQ1MDAtYmFiNy04MWVmZDViMmIyOGMiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zNjRmNmViOS00MGY1LTRlOGMtYjk4OC0wZjQ0NmM2MWVhZjcvIiwiaWF0IjoxNjg2NjYwMjM1LCJuYmYiOjE2ODY2NjAyMzUsImV4cCI6MTY4NjY2NDEzNSwiYWlvIjoiRTJaZ1lOZ29ZWDdoNDVuTXF6KzJXbnVwL3R0MEZ3QT0iLCJhcHBpZCI6ImQzOTlmNGI5LWRkOGUtNDUwMC1iYWI3LTgxZWZkNWIyYjI4YyIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzM2NGY2ZWI5LTQwZjUtNGU4Yy1iOTg4LTBmNDQ2YzYxZWFmNy8iLCJvaWQiOiIyN2U2NTE2MS01MzM0LTQwNTktYWZkZS1iNTY5ZDMzMDE2YjUiLCJyaCI6IjAuQVFVQXVXNVBOdlZBakU2NWlBOUViR0hxOTduMG1kT08zUUJGdXJlQjc5V3lzb3dGQUFBLiIsInN1YiI6IjI3ZTY1MTYxLTUzMzQtNDA1OS1hZmRlLWI1NjlkMzMwMTZiNSIsInRpZCI6IjM2NGY2ZWI5LTQwZjUtNGU4Yy1iOTg4LTBmNDQ2YzYxZWFmNyIsInV0aSI6InROdUlKTl9zemt5bzN4LXVBQmNzQUEiLCJ2ZXIiOiIxLjAifQ.VxnUP6J13hw9qmqr_YQbUaMLHQZ0yHMbNREprIDt_t0ivX4c_ptgHKLNxtKfXRg3qhsd2BfVNexNwUOkbmtBnayC1jM2n6s8yxwVjhUpoGcQq1Rot7X57KwNf9c5dSIKi5Os7cjWfUuG__Yu7bcWM7dUEwmfbHaBFNeG6zlu3VMrHTUfHTbvcA9Ak7z4ywP_glF5tqfAO3dalQdiPAG5J6S287CKYCwGn3HfOEnEnFqc6B5eoU4TY_LFlB898OthPPfx4Tw9QX89OeiH_tTQPi8IywRP5Qs6J9cbzhSi1m-QfFam3p_s_Y0hwBB07eg4eabAH2H2Ll4N13KavD-r5A'
    //   // 'Content-Type': 'application/x-www-form-urlencoded',
    }),
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  // return response.json(); // parses JSON response into native JavaScript objects
  return response; // parses JSON response into native JavaScript objects
};

export const getData = async (url = '') => {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: new Headers({
      //'content-type': 'application/json',
      //'Authorization': ' Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJhcGk6Ly9kMzk5ZjRiOS1kZDhlLTQ1MDAtYmFiNy04MWVmZDViMmIyOGMiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zNjRmNmViOS00MGY1LTRlOGMtYjk4OC0wZjQ0NmM2MWVhZjcvIiwiaWF0IjoxNjg2NjYwMjM1LCJuYmYiOjE2ODY2NjAyMzUsImV4cCI6MTY4NjY2NDEzNSwiYWlvIjoiRTJaZ1lOZ29ZWDdoNDVuTXF6KzJXbnVwL3R0MEZ3QT0iLCJhcHBpZCI6ImQzOTlmNGI5LWRkOGUtNDUwMC1iYWI3LTgxZWZkNWIyYjI4YyIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzM2NGY2ZWI5LTQwZjUtNGU4Yy1iOTg4LTBmNDQ2YzYxZWFmNy8iLCJvaWQiOiIyN2U2NTE2MS01MzM0LTQwNTktYWZkZS1iNTY5ZDMzMDE2YjUiLCJyaCI6IjAuQVFVQXVXNVBOdlZBakU2NWlBOUViR0hxOTduMG1kT08zUUJGdXJlQjc5V3lzb3dGQUFBLiIsInN1YiI6IjI3ZTY1MTYxLTUzMzQtNDA1OS1hZmRlLWI1NjlkMzMwMTZiNSIsInRpZCI6IjM2NGY2ZWI5LTQwZjUtNGU4Yy1iOTg4LTBmNDQ2YzYxZWFmNyIsInV0aSI6InROdUlKTl9zemt5bzN4LXVBQmNzQUEiLCJ2ZXIiOiIxLjAifQ.VxnUP6J13hw9qmqr_YQbUaMLHQZ0yHMbNREprIDt_t0ivX4c_ptgHKLNxtKfXRg3qhsd2BfVNexNwUOkbmtBnayC1jM2n6s8yxwVjhUpoGcQq1Rot7X57KwNf9c5dSIKi5Os7cjWfUuG__Yu7bcWM7dUEwmfbHaBFNeG6zlu3VMrHTUfHTbvcA9Ak7z4ywP_glF5tqfAO3dalQdiPAG5J6S287CKYCwGn3HfOEnEnFqc6B5eoU4TY_LFlB898OthPPfx4Tw9QX89OeiH_tTQPi8IywRP5Qs6J9cbzhSi1m-QfFam3p_s_Y0hwBB07eg4eabAH2H2Ll4N13KavD-r5A'
    //   // 'Content-Type': 'application/x-www-form-urlencoded',
    }),
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  
  });
  // return response.json(); // parses JSON response into native JavaScript objects
  return response; // parses JSON response into native JavaScript objects
};