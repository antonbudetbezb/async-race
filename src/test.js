fetch('/garage', {
  method: 'GET',
  params: {
      _page: [integer],
      _limit: [integer]
  }
}).then(res => {
  let header = res.headers.get('X-Total-Count');
  let totalCount = header ? header : 0;
  return res.json();
}).then(data => {
  console.log(data)
});