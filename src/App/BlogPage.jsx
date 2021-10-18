import React from "react";

// import styles from './../Styles/NavBarST/NavBar.module.css'

function BlogPage({ items }) {


    return (
        <div>
            {items.map(it => {
                return (
                    <div key={it.id}>
                        <h1>{it.name}</h1>
                    </div>)
            })}
        </div>
    )
}

export default BlogPage;

