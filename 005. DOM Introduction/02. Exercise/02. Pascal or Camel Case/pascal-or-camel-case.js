function solve() {

  let text = document.getElementById("text").value.toLowerCase();
  let convention = document.getElementById("naming-convention").value;
  let words = text.split(' ').filter(x => x !== ''); // допълнителни интервали
  let result = '';

  if (convention === 'Camel Case') {
      result = words[0];

    for (let pos = 1; pos < words.length; pos++) {
      result += words[pos][0].toUpperCase() + words[pos].slice(1);
    }

  } else if (convention === 'Pascal Case') {

    for (let w of words) {
      result += w[0].toUpperCase() + w.slice(1);
    }

  } else {
      result = 'Error!';
  }

  document.getElementById('result').textContent = result;
}