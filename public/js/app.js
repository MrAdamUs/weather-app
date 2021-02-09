console.log('Client Side JS is Loading');
fetch('http://localhost:3000/weather?address=houston').then((res) => {
  res
    .json()
    .then((data) => {
      console.log(data.forecast);
    })
    .catch((err) => console.log(err));
});
