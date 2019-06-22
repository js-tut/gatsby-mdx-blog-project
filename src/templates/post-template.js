import React from "react"
import styles from "../css/postTemplate.module.css"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-mdx"
const postTemplate = ({ pageContext }) => {
  console.log(pageContext)

  return <div>this is a post template</div>
}

export default postTemplate
