let flipCoin = () => {
    return new Promise((resolve, reject) => {
      let result = Math.random();
      if (result > 0.5) {
        resolve("You win");
      } else {
        reject("You lose");
      }
    });
  };
  
  flipCoin()
    .then((message) => {
      console.log(message); 
      fetchAdvice();
    })
    .catch((error) => {
      console.log("Error: " + error); 
    });
  
  const fetchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const advice = data.slip.advice;
        console.log(`Advice: ${advice}`);
      })
      .catch((error) => {
        console.error("Error fetching advice:", error);
      });
  };
  