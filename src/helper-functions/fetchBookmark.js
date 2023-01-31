const fetchBookmark = async (body, reqMethod = "GET") => {
  const res =
    reqMethod !== "GET"
      ? await fetch("http://127.0.0.1:5000/api/bookmark", {
          method: reqMethod,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
      : await fetch("http://127.0.0.1:5000/api/bookmark", {
          method: reqMethod,
          headers: { "Content-Type": "application/json", ...body },
        });
  const data = await res.json();
  if (res.ok) {
    return data;
  }
};

export default fetchBookmark;
