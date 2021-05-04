import React from 'react'

export function Blog(props) {
    const content = props.posts.map((post) =>
      <div key={post.id}>
        <h1>{post.title}</h1>
        <h4>{post.Author}</h4>
        <p>{post.content}</p>
        
      </div>
    );
    return (
        <div>  
            
            {content}
        </div>

    );
  }

  export const posts = [
    {id: 1, title: 'React Learning', content: 'Welcome to learning React!',Author:'Stephen Biz'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.',Author:'Schewzdenier'}
  ];
