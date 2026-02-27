import { createSlice } from '@reduxjs/toolkit'

const getAnnouncementDates = () => {
  const today = new Date()
  const valid = new Date()
  valid.setDate(today.getDate() + 7)
  return {
    announcementDate: today.toISOString().split('T')[0],
    validDate: valid.toISOString().split('T')[0],
  }
}

const initialState = {
  value: [
    // ─── JOB ───────────────────────────────────────────────
    {
      toShow: false,
      title: "React Frontend Developer",
      position: "Job",
      announcementDate: null,
      validDate: null,
      discription: "We are looking for an experienced React Frontend Developer to build and maintain high-performance web applications. You should have strong knowledge of React.js, Redux, REST APIs, and modern UI/UX practices with at least 2 years of professional experience."
    },
    {
      toShow: false,
      title: ".NET Backend Developer",
      position: "Job",
      announcementDate: null,
      validDate: null,
      discription: "We are seeking a skilled .NET Backend Developer to design and develop scalable server-side applications. The ideal candidate has hands-on experience with C#, ASP.NET Core, Entity Framework, and SQL Server with a strong understanding of RESTful API design."
    },
    {
      toShow: false,
      title: "Database Administrator",
      position: "Job",
      announcementDate: null,
      validDate: null,
      discription: "We are hiring a Database Administrator to manage, optimize, and secure our database systems. You should have solid experience with SQL Server, PostgreSQL, or MySQL, including database design, query optimization, backup strategies, and performance tuning."
    },
    {
      toShow: false,
      title: "QA Engineer",
      position: "Job",
      announcementDate: null,
      validDate: null,
      discription: "We are looking for a detail-oriented QA Engineer to ensure the quality and reliability of our software products. You will be responsible for writing and executing test cases, identifying bugs, and working closely with developers to deliver bug-free releases."
    },

    // ─── INTERN ────────────────────────────────────────────
    {
      toShow: false,
      title: "React Frontend Developer",
      position: "Intern",
      announcementDate: null,
      validDate: null,
      discription: "We are offering an internship for aspiring React Frontend Developers. You will work alongside our development team to build real-world UI components, learn best practices in React.js, and gain hands-on experience with modern frontend tools and workflows."
    },
    {
      toShow: false,
      title: ".NET Backend Developer",
      position: "Intern",
      announcementDate: null,
      validDate: null,
      discription: "Join our team as a .NET Backend Intern and get hands-on experience building backend services using C# and ASP.NET Core. You will assist in developing APIs, working with databases, and learning industry-standard software development practices."
    },
    {
      toShow: false,
      title: "Database Administrator",
      position: "Intern",
      announcementDate: null,
      validDate: null,
      discription: "We are offering a Database Internship for students eager to learn database management and administration. You will assist in managing SQL databases, writing queries, supporting data migration tasks, and learning database optimization techniques."
    },
    {
      toShow: false,
      title: "QA Engineer",
      position: "Intern",
      announcementDate: null,
      validDate: null,
      discription: "We are looking for a QA Intern to support our quality assurance team. You will learn to write test cases, perform manual testing, log bugs, and gain practical exposure to software testing methodologies in a professional environment."
    }
  ]
}

export const announcementSlice = createSlice({
  name: "announcement",
  initialState,
  reducers: {
    statusUpdate: (state, action) => {
      const index = action.payload
      const job = state.value[index]
      job.toShow = !job.toShow

      if (job.toShow) {
        const { announcementDate, validDate } = getAnnouncementDates()
        job.announcementDate = announcementDate
        job.validDate = validDate
      } else {
        job.announcementDate = null
        job.validDate = null
      }
    },
  },
})

export const { statusUpdate } = announcementSlice.actions
export default announcementSlice.reducer