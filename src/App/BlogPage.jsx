import React from "react";
import AddItems from "./AddItems";


import styles from './../Styles/BlogPageST/BlogPage.module.css'

function BlogPage({ items }) {


    return (
        <div className={styles.wrapBlogPage}>
            <AddItems items={items} />
            {items.map(it => {
                return (
                    <div key={it.id}>
                        <h1>{it.Theme}</h1>
                    </div>)
            })}
        </div>
    )
}

export default BlogPage;

