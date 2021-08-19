/**
 * @util    getCategoriesFromResults
 * @description Reset state
 **/
exports.getCategoriesFromResults = (data) => {
    let categories = {};
    let categoriesArr = [];
    for (let result of data) {
        let catArr = result.categories;
        for (let cat of catArr) {
            if (categories[cat.title]) {
                categories[cat.title].count = categories[cat.title].count + 1;
            } else {
                categories[cat.title] = { 
                    alias: cat.alias,
                    title: cat.title,
                    count: 1
                }
            }
        }
    }
    for (let catObj in categories) {
        categoriesArr.push(categories[catObj]);
    }
    return categoriesArr;
}