function extract(id) {

    const text = document.getElementById(id).textContent;

    return (text.match(/\((.+?)\)/g) || [])
        .map(x => x.slice(1, -1))
        .join('; ');
}

//  let text = extract("content");