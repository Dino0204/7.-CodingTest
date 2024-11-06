function solution() {
  const num_list = [5, 7, 8, 3];

  let sum = 0;
  let sumX = 1;

  num_list.map((numList) => {
    sum += numList;
    sumX *= numList;
  });

  sum *= sum;

  const anwser = sum >= sumX ? 1 : 0;

  console.log(anwser);
  console.log(sum, sumX);
}
