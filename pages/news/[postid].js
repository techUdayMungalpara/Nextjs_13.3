import { useRouter } from "next/router";

export default function Iwise({ data }) {
  const router = useRouter();
  console.log(router.asPath);
  if (router.isFallback) {
    return <h1>Loading....</h1>;
  }

  return (
    <h2 className=" text-center m-24 text-4xl " key={data.id}>
      {" "}
      {data.title}
    </h2>
  );
}

export async function getStaticPaths() {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  // const data = await res.json();
  // const paths = data.map((a) => {
  //   return {
  //     params: {
  //       postid: `${a.id}`,
  //     },
  //   };
  // });

  return {
    paths: [
      { params: { postid: "1" } },
      { params: { postid: "2" } },
      { params: { postid: "3" } },
      { params: { postid: "4" } },
    ],
    fallback: true, // can also be true or 'blocking'
  };
  // return {
  //   paths,
  //   fallback: true,
  // };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postid}`
  );
  const data = await res.json();
  console.log(data);

  return {
    props: { data: data },
  };
}
