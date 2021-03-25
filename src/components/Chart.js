import React, { Component } from "react"
import OrgChart from "../orgchart"
import nodeMenuButton from "./svg/nodeMenuButton"
/* eslint-disable no-unused-vars */
import GenericInterior from "./svg/GenericInterior"
import LandingPage from "./svg/LandingPage"
import HomePage from "./svg/HomePage"
import Form from "./svg/Form"
import Sidebar from "./svg/Sidebar"
import Directory from "./svg/Directory"
import Testimonials from "./svg/Testimonials"
import FAQ from "./svg/FAQ"
import Login from "./svg/Login"
import Search from "./svg/Search"
import Calendar from "./svg/Calendar"
import AuthorPage from "./svg/AuthorPage"
import Gallery from "./svg/Gallery"
import InteriorLanding from "./svg/InteriorLanding"
import ProgramDetail from "./svg/ProgramDetail"
import ProgramDirectory from "./svg/ProgramDirectory"
import NewsBlogDirectory from "./svg/NewsBlogDirectory"
import NewsBlogPost from "./svg/NewsBlogPost"
/* eslint-enable no-unused-vars */

OrgChart.templates.GenericInterior = Object.assign({}, OrgChart.templates.rony)
OrgChart.templates.GenericInterior.size = [120, 240]
OrgChart.templates.GenericInterior.node = GenericInterior
OrgChart.templates.GenericInterior.field_0 = `<foreignObject x="0" y="150" width="120" height="70"><p xmlns="http://www.w3.org/1999/xhtml">{val}</p></foreignObject>`

// '<text style="font-size: 14px;" fill="#454D58" x="60" y="170" text-anchor="middle">{val}</text>'
OrgChart.templates.GenericInterior.nodeMenuButton = nodeMenuButton

OrgChart.templates.GenericInterior.sourceUrl =
  '<g transform="matrix(0.075,0,0,0.075,90,-8)"><a target="_blank" xlink:href="{val}"><rect x="0" y="0" width="420" height="420" fill-opacity="0"></rect><g transform="matrix(1,0,0,1,40,40)"><path fill="#F6F8F9" d="M118.5,229.156c4.042,4.044,9.415,6.271,15.132,6.271c5.715,0,11.089-2.227,15.133-6.269l29.664-29.662 c4.09-4.093,6.162-9.442,6.24-14.816c5.601-0.078,10.857-2.283,14.829-6.253l29.66-29.662c4.042-4.043,6.269-9.417,6.269-15.133 c0-5.716-2.227-11.09-6.269-15.13l-9.806-9.806c-4.041-4.043-9.415-6.27-15.132-6.27c-5.716,0-11.09,2.227-15.132,6.269 l-29.663,29.662c-4.092,4.092-6.164,9.443-6.242,14.817c-5.601,0.078-10.857,2.283-14.828,6.252l-29.661,29.662 c-4.042,4.043-6.269,9.418-6.268,15.136c0,5.716,2.227,11.089,6.269,15.129L118.5,229.156z M168.618,147.548l29.662-29.661 c1.587-1.587,3.696-2.461,5.94-2.461c2.243,0,4.353,0.874,5.938,2.461l9.808,9.808c1.586,1.586,2.46,3.694,2.46,5.937 c0,2.244-0.874,4.354-2.462,5.941l-29.658,29.661c-1.588,1.587-3.697,2.46-5.941,2.46c-2.243,0-4.353-0.874-5.938-2.46 l-0.309-0.309l19.598-19.598c2.539-2.539,2.539-6.654,0-9.192c-2.537-2.538-6.654-2.538-9.191,0l-19.599,19.598l-0.308-0.308 C165.344,156.152,165.345,150.823,168.618,147.548z M117.888,198.28l29.66-29.661c1.587-1.586,3.695-2.46,5.939-2.46 c2.242,0,4.349,0.872,5.934,2.455c0.002,0.001,0.004,0.003,0.005,0.005l0.309,0.309l-19.598,19.598 c-2.539,2.538-2.539,6.653,0,9.191c1.269,1.27,2.933,1.904,4.596,1.904s3.327-0.635,4.596-1.904l19.599-19.598l0.309,0.309 c3.273,3.273,3.273,8.603,0,11.877l-29.662,29.66c-1.588,1.588-3.698,2.462-5.941,2.462c-2.243,0-4.352-0.874-5.938-2.462 l-9.807-9.806c-1.586-1.586-2.46-3.694-2.46-5.938C115.426,201.978,116.3,199.868,117.888,198.28z"/></g></a></g>'

OrgChart.templates.GenericInterior.figmaUrl =
  '<g transform="matrix(0.015,0,0,0.015,100,130)"><a target="_blank" xlink:href="{val}"><path d="M137.7,826.4A137.8,137.8,0,0,0,275.5,688.7V550.9H137.7a137.8,137.8,0,0,0,0,275.5Z" style="fill:#0acf83"/><path d="M0,413.2A137.8,137.8,0,0,1,137.7,275.5H275.5V550.9H137.7A137.8,137.8,0,0,1,0,413.2Z" style="fill:#a259ff"/><path d="M0,137.7A137.8,137.8,0,0,1,137.7,0H275.5V275.5H137.7A137.8,137.8,0,0,1,0,137.7Z" style="fill:#f24e1e"/><path d="M275.5,0H413.2a137.8,137.8,0,0,1,0,275.5H275.5Z" style="fill:#ff7262"/><path d="M550.9,413.2A137.7,137.7,0,1,1,413.2,275.5,137.8,137.8,0,0,1,550.9,413.2Z" style="fill:#1abcfe"/></a></g>'

const pages = {
  // GenericInterior is already defined above
  LandingPage: {},
  HomePage: {},
  Form: {},
  Sidebar: {},
  Directory: {},
  Testimonials: {},
  FAQ: {},
  Login: {},
  Search: {},
  Calendar: {},
  AuthorPage: {},
  Gallery: {},
  InteriorLanding: {},
  ProgramDetail: {},
  ProgramDirectory: {},
  NewsBlogDirectory: {},
  NewsBlogPost: {},
}
// source = Object.assign({}, OrgChart.templates.GenericInterior)
for (var obj in pages) {
  OrgChart.templates[obj] = Object.assign(
    {},
    OrgChart.templates.GenericInterior
  )
  // OrgChart.templates[obj] = obj
}

OrgChart.templates.LandingPage.node = LandingPage
OrgChart.templates.HomePage.node = HomePage
OrgChart.templates.Form.node = Form
OrgChart.templates.Sidebar.node = Sidebar
OrgChart.templates.Directory.node = Directory
OrgChart.templates.Testimonials.node = Testimonials
OrgChart.templates.FAQ.node = FAQ
OrgChart.templates.Login.node = Login
OrgChart.templates.Search.node = Search
OrgChart.templates.Calendar.node = Calendar
OrgChart.templates.AuthorPage.node = AuthorPage
OrgChart.templates.Gallery.node = Gallery
OrgChart.templates.InteriorLanding.node = InteriorLanding
OrgChart.templates.ProgramDetail.node = ProgramDetail
OrgChart.templates.ProgramDirectory.node = ProgramDirectory
OrgChart.templates.NewsBlogDirectory.node = NewsBlogDirectory
OrgChart.templates.NewsBlogPost.node = NewsBlogPost

export default class MyChart extends Component {
  constructor(props) {
    super(props)
    this.divRef = React.createRef()
  }

  shouldComponentUpdate() {
    return false
  }

  componentDidMount() {
    console.log("this.propsssssssssss", this.props.nodes)
    console.log("OrgChart.templates---------", OrgChart.templates)
    this.chart = new OrgChart(this.divRef.current, {
      nodes: this.props.nodes,
      mouseScrool: OrgChart.action.scroll,
      showYScroll: OrgChart.scroll.visible,
      showXScroll: OrgChart.scroll.visible,
      levelSeparation: 50,
      siblingSeparation: 50,
      subtreeSeparation: 50,
      layout: OrgChart.tree,
      toolbar: {
        layout: true,
        zoom: true,
        fit: true,
        expandAll: false,
        fullScreen: true,
      },

      //   scaleInitial: 0.5,
      template: "GenericInterior",

      tags: {
        "Generic Interior": {
          template: "GenericInterior",
        },
        "Landing Page": {
          template: "LandingPage",
        },
        "Interior Landing": {
          template: "InteriorLanding",
        },
        "Program Detail": {
          template: "ProgramDetail",
        },
        "Program Directory": {
          template: "ProgramDirectory",
        },
        "News or Blog Post": {
          template: "NewsBlogPost",
        },
        "News or Blog Directory": {
          template: "NewsBlogDirectory",
        },
        "Author or Spotlight Page": {
          template: "AuthorPage",
        },
        Homepage: {
          template: "HomePage",
        },
        Form: {
          template: "Form",
        },
        Sidebar: {
          template: "Sidebar",
        },
        Directory: {
          template: "Directory",
        },
        Testimonials: {
          template: "Testimonials",
        },
        FAQ: {
          template: "FAQ",
        },
        Login: {
          template: "Login",
        },
        Search: {
          template: "Search",
        },
        Calendar: {
          template: "Calendar",
        },
        Gallery: {
          template: "Gallery",
        },
      },

      enableDragDrop: true,
      nodeMenu: {
        details: { text: "Details" },
        edit: { text: "Edit" },
        add: { text: "Add" },
        remove: { text: "Remove" },
      },

      menu: {
        pdf: { text: "Export PDF" },
        png: { text: "Export PNG" },
        svg: { text: "Export SVG" },
        csv: { text: "Export CSV" },
      },

      nodeBinding: {
        field_0: "Page Name",
        sourceUrl: "sourceUrl",
        figmaUrl: "Prototype",
      },
    })
  }

  render() {
    return <div id="tree" ref={this.divRef}></div>
  }
}
