import React from "react"
import { graphql } from "gatsby"
import OrgChart from "../components/Chart"
import "../App.css"

export default function Home({ data }) {
  // const columns = data.allSmartSheetColumn.edges
  const rows = data.allSmartSheetRow.edges
  const columns = data.allSmartSheetColumn.edges

  // find column with "Page Title" name
  const pageTitleIDFilter = item => {
    if (item.node.title === "Page Title") {
      return true
    }
  }

  // grap "Page Title" column ID
  const pageTitleID = columns.filter(pageTitleIDFilter).map(column => {
    return parseInt(column.node.id)
  })

  // grab only columns that have the page title
  const filterByPageTitle = item => {
    if (item.columnId === pageTitleID) {
      return true
    }
  }

  // map over rows and grab contents
  const filteredRows = rows.map(item => {
    const container = {}
    container.id = item.node.id
    container.pid = item.node.parentId
    // console.log("item.node.cells", item.node.cells)
    item.node.cells.filter(filterByPageTitle).map(cell => {
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
