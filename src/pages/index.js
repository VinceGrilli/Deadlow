import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import LatestBlogs from "../components/latestBlog"
import { graphql } from "gatsby"

const IndexPost = ({ data }) => {
  return (
    <>
      <div className="row product-main">
        {data.data.allContentfulProduct.edges.map(items => (
          <div
            className="Catalogue__item col-sm-12 col-md-6 col-lg-4"
            key={items.node.id}
          >
            <div className="details_List">
              {items.node.image === null ? (
                <div className="no-image">No Image</div>
              ) : (
                <Img sizes={items.node.image.fluid} />
              )}

              <div className="details_inner">
                <h2>
                  <Link to={`/${items.node.slug}`}>{items.node.name}</Link>
                </h2>

                <p>{items.node.details.childMarkdownRemark.excerpt}</p>
                <div className="row justify-content-between">
                  <div className="col-sm-5 align-self-center">
                    <span className="price">${items.node.price}</span>
                  </div>
                  <div className="col-sm-7 text-right align-self-right">
                    <a
                      href="#"
                      className="Product snipcart-add-item"
                      data-item-id={items.node.slug}
                      data-item-price={items.node.price}
                      data-item-image={
                        items.node.image === null
                          ? ""
                          : items.node.image.fluid.src
                      }
                      data-item-name={items.node.name}
                      data-item-url={`/`}
                    >
                      <i className="fas fa-shopping-bag" />
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

const IndexPage = data => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`deadlow`, `cape cod`, `react`, `band`, `punk`]}
    />
    <Banner BannerData={data.data.allContentfulHeaderBanner.edges} />
    <LatestBlogs data={data.data.allContentfulBlogs} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query AboutQuery {
    allContentfulProduct(limit: 6, sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          id
          name
          slug
          rating
          image {
            fluid(maxWidth: 1000) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          price
          details {
            childMarkdownRemark {
              excerpt(pruneLength: 140)
            }
          }
        }
      }
    }
    allContentfulHeaderBanner {
      edges {
        node {
          title
          subHeading
          image {
            fluid(maxWidth: 1800) {
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
    allContentfulBlogs(limit: 3, sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          id
          title
          slug
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
