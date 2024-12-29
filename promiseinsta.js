async function commentCode(){
    return new Promise((CommentPosted)=>{
        CommentPosted("Comment Posted Successfully")
    })
}

async function likeCode(){
    return new Promise((likePosted)=>{
        likePosted("Like Posted Successfully")
    })
}

async function createPost(){
    var post=new Promise((cPost) => {
        cPost("Post created successfully ")
    })
    var [post,comment,like]= await Promise.all([post,commentCode(),likeCode()])
        console.log(post);
        console.log(comment);
        console.log(like);
}

createPost()