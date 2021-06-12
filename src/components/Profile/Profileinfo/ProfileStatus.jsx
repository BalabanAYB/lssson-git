import React, {useState, useEffect} from "react";


const ProfileStatus = (props) => {

  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect ( () => {
     setStatus(props.status)
  }, [props.status])

const activeEditMode = () => {
   setEditMode(true)
}

const deActiveEditMode = () => {
   setEditMode(false)
   props.updateStatusThunk(status)
}

const onStatusChange = (e) => {
   setStatus(e.currentTarget.value)
}

   if (!editMode) {
      return <div>
         <span onDoubleClick={activeEditMode}>{props.status || 'Место для статуса'}</span>
      </div>
   }

   else {
      return <div>
         <input autoFocus onChange={onStatusChange} onBlur={deActiveEditMode} type="text" value={status} />
      </div>
   }
}

export default ProfileStatus;