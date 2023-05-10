import Link from "next/link";

function Home({ data }) {
  console.log(data);
  return (
    <>
      <h1>news/api</h1>
      <div>
        {data.map((a) => (
          <Link href={`news/${Number(a.id)}`}>
            <h1 className="list-item p-4 " key={a.id}>
              {a.title}
            </h1>
          </Link>
        ))}
      </div>
    </>
  );
}
export default Home;

export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
