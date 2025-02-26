import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    // const res= await fetch('https://jsonplaceholder.typicode.com/posts',{
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()  //comes from next js navigation 
  }

  return res.json();
}


export async function generateMetadata({ params }) {

  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            {data.desc}
          </p>
          <div className={styles.author}>
            <Image
              src={data.img}
            // src="https://images.pexels.com/photos/30238168/pexels-photo-30238168/free-photo-of-aerial-view-of-dubrovnik-s-historic-harbor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            // src={data.img}
            src="https://images.pexels.com/photos/30238168/pexels-photo-30238168/free-photo-of-aerial-view-of-dubrovnik-s-historic-harbor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         {data.content}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;