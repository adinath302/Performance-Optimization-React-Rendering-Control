import React, { memo, useCallback, useMemo } from 'react'

const Other = memo(({ setothercount, othercount }) => {
  // console.log("Other rendered")

  const Handleclick = useCallback(() => {
    setothercount(othercount + 1)
    // console.log("update othercount");
  }, [othercount, setothercount])

  return (
    <div>
      <div
        className='select-none cursor-pointer'
        onClick={Handleclick}>
        OTHERCOUNT - {othercount}
      </div>
      <div>
      </div>
    </div>
  )
})

export default Other;