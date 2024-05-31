// const DocsIdPage = ({ params }: { params: any }) => {
//     return (
//       <div>
//         <h1>Documentation {params.id}</h1>
//       </div>
//     )
//   }
//   export default DocsIdPage
  
const DocsIdPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">🚧 Under Construction 🚧</h1>
        <p className="text-xl text-gray-600">Our website is currently under construction. We'll be here soon with our shiny new site, featuring:</p>
        <ul className="list-disc text-gray-600 pl-5">
          <li>Awesome new features</li>
          <li>Improved performance</li>
          <li>Better usability</li>
        </ul>
        <p className="text-xl text-gray-600">Stay tuned 👍</p>
      </div>
    </div>
  )
}

export default DocsIdPage