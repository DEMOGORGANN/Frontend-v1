import React from "react";
import AddItems from "./AddItems";


import styles from './../Styles/BlogPageST/BlogPage.module.css'

function BlogPage({ items }) {


    return (
        <div className={styles.wrapBlogPage}>
            <AddItems items={items} />
            {items.map((it, i) => {
                return (
                    <div key={it.id} className={styles.wrapOneMes}>
                        <h1>{i + 1}){it.Theme}</h1>
                        <h2>{it.Message}</h2>
                    </div>)
            })}
        </div>
    )
}

export default BlogPage;

