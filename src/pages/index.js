import React from "react"
import { graphql } from "gatsby"
import OrgChart from "../components/Chart"
import "../App.css"

export default function Home({ data }) {
  // const columns = data.allSmartSheetColumn.edges
  const rows = data.allSmartSheetRow.edges
  const columns = data.allSmartSheetColumn.edges

  // find column with "specific name" name
  const getColumnIDByName = wordToCompare => {
    return function (element) {
      return element.node.title === wordToCompare
    }
  }

  // grap "Page Title" column ID
  let pageTitleID = columns
    .filter(getColumnIDByName("Page Title"))
    .map(column => {
      // console.log("grabbing pageTitleID", column.node.id)
      return parseInt(column.node.id)
    })
  pageTitleID = pageTitleID[0]
  console.log("-------actual pageTitleID", pageTitleID)

  // grap "Page Title" column ID
  let pageTypeID = columns
    .filter(getColumnIDByName("Page Type"))
    .map(column => {
      // console.log("grabbing pageTypeID", column.node.id)
      return parseInt(column.node.id)
    })
  pageTypeID = pageTypeID[0]
  console.log("-------actual pageTypeID", pageTypeID)

  // grab only columns that have the page title
  const filterByPageTitle = item => {
    return item.columnId === pageTitleID
  }

  // grab only columns that have the page type
  const filterByPageType = item => {
    return item.columnId === pageTypeID
  }

  // map over rows and grab contents
  const filteredRows = rows.map(item => {
    const container = {}
    container.id = item.node.id
    container.pid = item.node.parentId

    item.node.cells.filter(filterByPageType).map(cell => {
      // console.log("filterByPageType: ", cell.displayValue)
      return (container.tags = [cell.displayValue])
    })

    item.node.cells.filter(filterByPageTitle).map(cell => {
      // console.log("filterByPageTitle: ", cell.displayValue)
      return (container.name = cell.displayValue)
    })

    return container
  })

  // console.log("-------filteredRows", filteredRows)

  return (
    <div style={{ height: "100vh" }}>
      <h1>{data.smartSheetNode.name}</h1>
      <p className="ss-link">
        <a
          href={data.smartSheetNode.permalink}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Open SmartSheet
        </a>
      </p>
      <OrgChart nodes={filteredRows} />
    </div>
  )
}

export const query = graphql`
  query getColumns {
    allSmartSheetRow {
      edges {
        node {
          parentId
          rowNumber
          id
          cells {
            displayValue
            columnId
          }
        }
      }
    }
    smartSheetNode {
      name
      permalink
    }
    allSmartSheetColumn {
      edges {
        node {
          title
          id
        }
      }
    }
  }
`
