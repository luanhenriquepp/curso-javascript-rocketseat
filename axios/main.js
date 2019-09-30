axios.get('https://api.github.com/users/luanhenriquepp')
    .then(response => {
    console.log(response)
})
    .catch(onerror => {
    console.log(onerror);
});