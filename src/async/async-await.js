function getResource(url) {
  return new Promise(function (resolve, reject) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

async function getData() {
  try {
    const post1 = await getResource(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log(post1);
  } catch (error) {
    console.log("error", error);
  }
}

getData();
