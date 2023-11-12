const serverURL = "http://localhost:3002/";

const fetchGreeting = async () => {
  try {
    const res = await fetch(serverURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: "query { greeting }",
      }),
    });
    const { data } = await res.json();
    return data?.greeting;
  } catch (err) {
    console.log("err :>> ", err);
    return "Error: " + err?.message;
  }
};

fetchGreeting().then((result) => {
  console.log("result :>> ", result, document.getElementById("greeting"));
  document.getElementById("greeting").innerHTML = result;
});
