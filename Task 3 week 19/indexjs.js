function allPost() {
    const addNewPost = document.getElementById("postsList");
    let postElement = document.createElement('li'); // создание нового элемента для ввода поста
    postElement.classList.add('post'); //присваивание ему класса
    let postTitel = document.getElementById('titeltext').value;// значение ввода из input
    let postBody = document.getElementById('posttext').value;// значение ввода из input
    if(isEmpty()){
        alert ("Введите текст");
    } else {
        addNewPost.append(postElement);// добавление его к блоку 
        postElement.innerHTML  = postTitel + "<br>" + postBody; // вывод поста в лист
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: postTitel ,
                body: postBody,
                userID: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json));
        cleanInput();
    }
};
    document.querySelector('.b-1').addEventListener('click', allPost);

    function isEmpty() {
        const postTitelInput = document.querySelector('.titeltext');
        const postTextInput = document.querySelector('.posttext');
        if (postTitelInput.value ==="" || postTextInput.value === "") {
            return true;
        } else {
            return false;
        }
    };
    function cleanInput() {
        const inputTitelField = document.getElementById("titeltext");
        inputTitelField.value = "";    
        const inputPostField = document.getElementById("posttext");
        inputPostField.value = "";                    
    };
    
