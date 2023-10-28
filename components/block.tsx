function BlockUI({block, setBlock}) {
  return (
    block ? 
    <div className="fixed top-0 bottom-0 left-0 right-0 z-[0] w-full h-full bg-[rgba(0,0,0,0.25)] overflow-hidden flex items-center justify-center pointer-events-auto">
  </div>
  :
  <></>
  )
}

export default BlockUI