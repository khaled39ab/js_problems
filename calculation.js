function pageRequirements(book1, book2, book3){
    return (book1 * 100) + (book2 * 200) + (book3 * 300);
}

const totalPages = pageRequirements (5, 6, 3);
console.log("Need Total " + totalPages +" pages");