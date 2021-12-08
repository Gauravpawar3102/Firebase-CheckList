fetch('https://corto-url-shortner.p.rapidapi.com/api/links', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-host': 'corto-url-shortner.p.rapidapi.com',
    'x-rapidapi-key': '75bc0c04d9mshad42a5402de3ceap123ca2jsn0eba70fbcded',
  },
  body: {
    link: {
      url: 'https://developers.googleblog.com/2018/03/transitioning-google-url-shortener.html',
    },
  },
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });
