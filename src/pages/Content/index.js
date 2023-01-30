const politicsWords = ['פוליטיקה', 'בחירות', 'מפלגה', 'רש״ם', 'נשיא', 'כנסת', 'ממשלה', 'חקיקה', 'מדינתי', 'כנסת', 'דמוקרטי', 'חקיקת', 'ממשלתי', 'פוליטיקאי', 'דמוקרטי', 'חקיקה', 'ממשלה', 'כנסת', 'נשיא', 'רש״ם', 'מפלגה', 'ימין', 'שמאל', 'מרכז', 'ביבי', 'פוליטיקה', 'פוליטיקאית', 'פוליטיקאים', 'ביבי נתניהו', 'נתניהו', 'בנימין נתניהו', 'נתניהו בנימין', 'נתניהו בנימין יצחק', 'יאיר לפיד', 'לפיד', 'ליברמן', 'בן גביר'];

const removeAnnoingElements = () => {
    const elements = document.querySelectorAll('[data-id*="urn:li:activity"]');
    elements.forEach((element) => {
        const text = element.textContent;
        politicsWords.forEach((word) => {
            if (text.includes(word)) {
                element.remove();
                console.log(`Removed post because it contains the word ${word}`);
            }
        });
    });
};

try {
    const observer = new MutationObserver(removeAnnoingElements);
    observer.observe(document.getElementById('main'), { childList: true, subtree: true });
} catch (e) {
    console.error(e);
}