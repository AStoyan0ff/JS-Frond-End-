function extractWords(text) {
   
    const words = text.match(/\w+/g); // за всички думи 
    
    if (!words) {
        
        console.log('');
        return;
    }
    
    const upperWords = words.map(w => w.toUpperCase()); // преобразуване
    console.log(upperWords.join(', '));
}

extractWords('Hi, how are you?');
extractWords('hello');
