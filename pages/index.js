export default function Home({posts}) {

  console.log(posts)
  return (
    <div>
      <h1>Welcome My Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div> 
  )
}

// export const getServerSideProps = async() => {
//   const res = await fetch('http://localhost:8080/api/posts');
//   // const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10');
//   const posts = await res.json();

//   return {
//     props : {
//       posts : posts
//     }
//   }
// }

export const getStaticProps = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10');
  const posts = await res.json();

  return {
    props : {
      posts : posts
    },
    revalidate : 20
  }
}