// Define the post1 object with the given details.
let post1 = {
  id: 1,
  author: "John",
  content: "My first Post!",
  likes: 10,
  comments: ["Great post!", "Nice photo!"],
  image: "https://files.codingninjas.in/image2-28694.jpg",
};

const { author, content, likes, comments, image } = post1;

const posts = document.querySelector("#posts");
const post = document.createElement("div");
const userName = document.createElement("h3");
const postImg = document.createElement("img");
const postCaption = document.createElement("p");
const likeButton = document.createElement("button");
const commentInput = document.createElement("input");
const commentButton = document.createElement("button");
const postFooter = document.createElement("div");
const commentContainer = document.createElement("div");

let isLiked = false;

userName.textContent = author;
post.className = "post";
postImg.setAttribute("src", image);
postCaption.textContent = content;
likeButton.textContent = "Like";
commentInput.className = 'comment-input'
commentInput.setAttribute("type", "text");
commentInput.setAttribute("placeholder", "write a comment...");
commentButton.textContent = "Comment";
postFooter.className = "post-footer";

let likeCount = parseInt(likes);
let commentsCount = parseInt(comments.length);
postFooter.append(`Likes: ${likeCount}`, ` Comments: ${commentsCount}`);

let isCommentOpen = false;
commentContainer.className = "comments-container";
commentContainer.style.display = 'none'
const showComments = ()=>{
    comments.forEach((comment) =>{
        const cmnt = document.createElement('p');
        cmnt.textContent = comment
        commentContainer.append(cmnt)
    })
}

showComments()

function renderPosts() {
  post.append(
    userName,
    postImg,
    postCaption,
    likeButton,
    commentInput,
    commentButton,
    postFooter,
    commentContainer
  );
  posts.append(post);
  likeButton.addEventListener("click", () => {
    if(isLiked === false){
      likeCount += 1;
      postFooter.innerHTML = "";
      postFooter.append(`Likes: ${likeCount}`, ` Comments: ${commentsCount}`);
    }
    isLiked = true;
  });

  postFooter.addEventListener('click' , () =>{
    isCommentOpen = !isCommentOpen
    if(isCommentOpen){
        commentContainer.style.display = 'block'
    }else{
        commentContainer.style.display = 'none'

    }
  })

  commentButton.addEventListener('click' , () =>{
    const newComment = document.querySelector('.comment-input').value

    comments.push(newComment)

    commentsCount += 1;
    postFooter.innerHTML = "";
    postFooter.append(`Likes: ${likeCount}`, ` Comments: ${commentsCount}`);

    commentContainer.innerHTML = ""
    showComments()

    commentInput.value = ""
  })

  
}

renderPosts();
