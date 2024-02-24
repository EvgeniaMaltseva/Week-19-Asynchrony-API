async function givePost() {
    
    const result = document.querySelector('.container');
    const rawPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonPosts = await rawPosts.json();
    jsonPosts.forEach(element => {
        const p = document.createElement("p");
        console.log(element);
        p.innerHTML = "Title: " + element.title + "<br>"+
        "Post: " + element.body;
        result.append(p)
    });
	
}
document.querySelector('.b-1').addEventListener('click', givePost);