import React from "react"
import { graphql } from "gatsby"
import OrgChart from "../components/Chart"
import "../App.css"

export default function Home({ data }) {
  // const columns = data.allSmartSheetColumn.edges
  const rows = data.allSmartSheetRow.edges
  const columns = data.allSmartSheetColumn.edges

  let theColumns = [
    { title: "Page Title" },
    { title: "Page Type" },
    { title: "Source URL" },
    { title: "Main Nav" },
    { title: "Notes" },
    { title: "Batch" },
    { title: "New Page?" },
    { title: "Prototype" },
  ]

  // find column with "specific name" name
  const filterColumnByName = wordToCompare => {
    return function (element) {
      return element.node.title === wordToCompare
    }
  }
  const grabColumnID = item => {
    item = item.node.id
    return parseInt(item)
  }

  const filterNameFromGraphqlAndReturnColumnID = title => {
    let id = columns
      .filter(filterColumnByName(title))
      .map(item => grabColumnID(item))
      .shift()
    return id
  }

  theColumns = theColumns.map(obj => ({
    ...obj,
    id: filterNameFromGraphqlAndReturnColumnID(obj.title),
    columnIDName: obj.title.replace(/\s/g, ""),
  }))
  // console.log("theColumns....--------", theColumns)

  // theColumns.map(obj => {
  //   console.log("Column Title: ", obj.title)
  //   console.log("Column ID: ", obj.id)
  //   console.log("columnIDName: ", obj.columnIDName)
  //   console.log("------------")
  // })

  // grab "Page Title" column ID
  const pageTitleID = columns
    .filter(filterColumnByName("Page Title"))
    .map(item => grabColumnID(item))
    .shift()

  const pageTypeID = columns
    .filter(filterColumnByName("Page Type"))
    .map(item => grabColumnID(item))
    .shift()

  const sourceURLID = columns
    .filter(filterColumnByName("Source URL"))
    .map(item => grabColumnID(item))
    .shift()

  const figmaUrlID = columns
    .filter(filterColumnByName("Prototype"))
    .map(item => grabColumnID(item))
    .shift()

  const noteID = columns
    .filter(filterColumnByName("Notes"))
    .map(item => grabColumnID(item))
    .shift()
  const batchID = columns
    .filter(filterColumnByName("Batch"))
    .map(item => grabColumnID(item))
    .shift()
  const newPageID = columns
    .filter(filterColumnByName("New Page?"))
    .map(item => grabColumnID(item))
    .shift()

  console.log(
    // "pageTitleID, pageTypeID, sourceURLID, figmaUrlID, noteID, batchID, newPageID",
    pageTitleID,
    pageTypeID,
    sourceURLID,
    figmaUrlID,
    noteID,
    batchID,
    newPageID
  )

  // map over rows and grab contents
  const filteredRows = rows.map(function (row, index, array) {
    row = row.node
    let container = {}
    container.id = row.id
    container.pid = row.parentId

    // will grab all of the columns and map the cell entry, except tags and newPage. those are below
    theColumns.map(column => {
      return row.cells
        .filter(item => item.columnId === column.id)
        .filter(function (cell) {
          return cell.displayValue !== null
        })
        .map(cell => {
          return (container[column.columnIDName] = [cell.displayValue])
        })
    })

    // specialized filtering
    row.cells
      .filter(item => item.columnId === pageTypeID)
      .map(cell => (container.tags = [cell.displayValue]))

    row.cells
      .filter(item => item.columnId === newPageID)
      .map(cell =>
        cell.displayValue === "YES"
          ? (container.NewPage = cell.displayValue)
          : ""
      )
    // console.log("the container being sent:", container)
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
