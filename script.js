document.addEventListener('DOMContentLoaded', function () {
    const checkVowelBtn = document.getElementById('checkVowelBtn');
    const countVowelBtn = document.getElementById('countVowelBtn');
    const textInput = document.getElementById('textInput');
    const resultContainer = document.getElementById('resultContainer');

    checkVowelBtn.addEventListener('click', function () {
        const text = textInput.value.toLowerCase();
        const vowels = text.match(/[aeiou]/g);
        displayResult(vowels ? `Vowels found: ${vowels.join(', ')}` : 'No vowels found.');
    });

    countVowelBtn.addEventListener('click', function () {
        const text = textInput.value.toLowerCase();
        const vowelCount = (text.match(/[aeiou]/g) || []).length;
        displayResult(`Number of vowels: ${vowelCount}`);
    });

    function displayResult(message) {
        resultContainer.textContent = message;
    }
});
