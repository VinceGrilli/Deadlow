import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const BlogsPost = ({ data }) => {
  const [useNoOfPosts, setNoOfPosts] = useState(6)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const handleScroll = () => {
    let lastScrollY = window.pageYOffset + 1100

    if (lastScrollY > window.outerHeight) {
      setNoOfPosts(useNoOfPosts + 3)
    }
  }

  return (
    <>
      <ul className="blog-list" onScroll={handleScroll}>
        {data.data.allContentfulBlogs.edges
          .slice(0, useNoOfPosts)
          .map(items => (
            <li>
              <div className="post-item template-square columned">
                <div className="post-thumbnail">
                  <Img sizes={items.node.featureImage.fluid} />
                  <div className="post-date">
                    <i className="fas fa-calendar-alt"></i>
                    {items.node.publicData}
                  </div>
                </div>
                <div className="post-details">
                  <h2 className="post-title">
                    <Link to={`/${items.node.slug}`}>{items.node.title}</Link>
                  </h2>
                  <div className="author">
                    <Img sizes={items.node.author.photo.fluid} />
                    <strong className="name">{items.node.author.name}</strong>
                  </div>
                  <p>{items.node.description.childMarkdownRemark.excerpt}</p>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </>
  )
}

const Blogs = data => (
  <Layout>
    <SEO title="Blogs" keywords={[`gatsby`, `blogs`, `react`]} />
    <div className="container blog-page">
      <BlogsPost data={data}></BlogsPost>
    </div>
  </Layout>
)

export default Blogs

export const query = graphql`
  query BlogsQuery {
    allContentfulBlogs {
      edges {
        node {
          id
          title
          slug
          publicData(formatString: "MMMM D, YYYY")
          author {
            name
            photo {
              fluid(maxWidth: 350) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
          description {
            childMarkdownRemark {
              excerpt(pruneLength: 250)
            }
          }
          featureImage {
            fluid(maxWidth: 1120) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
  }
`
