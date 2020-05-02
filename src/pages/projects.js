import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import projects from "../data/projects.yml"

//page query project info, image, tech used

function ProjectsPage() {
  console.dir(projects)
  return (
    <Layout>
      <SEO title="Projects" />
      Projects Page
    </Layout>
  )
}

export default ProjectsPage
