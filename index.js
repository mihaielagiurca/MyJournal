const post = document.getElementById('btn');

post.addEventListener('click', function(){
    document.getElementById('morePosts').innerHTML = renderPosts();
})

function renderPosts(){
    let posts = '';
    posts = `   <div class="blog">
                            <img src="images/coding1.avif" alt="Image with computer on a desk">
                            <p>MAY 16, 2023</p>
                            <h2>Blog Four</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur sunt cum placeat molestias suscipit. 
                                At quaerat reiciendis provident veritatis nihil aliquam ullam fugit ipsam est consequatur earum laborum, animi ab.</p>
                        </div>
                        <div class="blog">
                            <img src="images/computer.avif" alt="Image with computer on a desk">
                            <p>MAY 16, 2023</p>
                            <h2>Blog Five</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione neque incidunt vitae quas odio consectetur repellat adipisci ducimus optio, 
                                error, fugit quisquam, ab ipsum iure ex asperiores impedit corporis provident.</p>
                        </div>
                        <div class="blog">
                            <img src="images/article-image-03.png" alt="Image with computer on a desk">
                            <p>MAY 16, 2023</p>
                            <h2>Blog Six</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem repellendus quam temporibus ut, perferendis molestias velit, 
                                perspiciatis similique adipisci a officia qui nisi aliquid aut quod omnis sint, sed tempore!!</p>
                        </div>
                        `
    return posts;
}
