import inficare from "../assets/inficare.png"  // default import, no curly braces

const Parent = () => {  // component name should be capitalized
  return (
    <div className="flex items-center gap-3 p-2">
      <img src={inficare} alt="Inficare Logo" className="w-20 h-20 object-contain" />
      <div className="flex flex-col">
        <h2 className="text-lg font-bold leading-tight">Inficare</h2>
        <h3 className="text-sm text-gray-500 leading-tight">Parent Company</h3>
      </div>
    </div>
  )
}

export default Parent